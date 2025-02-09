import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './FluidBackground.css';

const fragmentShader = `
  uniform float time;
  uniform vec2 resolution;
  uniform vec2 mouse;
  uniform float mouseSpeed;
  
  #define LAYERS 4.0
  #define PI 3.14159265359
  
  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }
  
  float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  float fbm(vec2 st) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 0.0;
    
    for(float i = 0.0; i < 6.0; i++) {
      value += amplitude * noise(st);
      st *= 2.0;
      amplitude *= 0.5;
    }
    return value;
  }

  vec2 rotate(vec2 v, float a) {
    float s = sin(a);
    float c = cos(a);
    mat2 m = mat2(c, -s, s, c);
    return m * v;
  }
  
  void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec2 mouse_uv = mouse.xy / resolution.xy;
    vec2 center = mouse_uv;
    
    vec3 finalColor = vec3(0.0);
    float finalAlpha = 0.0;
    
    for(float i = 0.0; i < LAYERS; i++) {
      vec2 pos = uv - center;
      float angle = atan(pos.y, pos.x);
      float radius = length(pos);
      
      // Create flame shape
      float flameShape = 1.0 - smoothstep(0.0, 0.5 + i * 0.1, radius);
      
      // Add turbulence
      vec2 turbPos = pos * (2.0 + i);
      turbPos = rotate(turbPos, time * (0.5 + i * 0.2));
      float turb = fbm(turbPos * 4.0 + time * 0.5);
      
      // Create flame tips
      float tips = pow(1.0 - radius, 1.0 + i) * (1.0 + sin(angle * 8.0 + time) * 0.2);
      
      // Combine effects
      float flame = flameShape * tips * (1.0 + turb * 0.5);
      flame *= smoothstep(1.0, 0.0, radius * (1.5 + mouseSpeed));
      
      // Layer colors
      vec3 layerColor;
      if(i == 0.0) layerColor = vec3(1.0, 0.2, 0.1); // Red
      else if(i == 1.0) layerColor = vec3(1.0, 0.5, 0.1); // Orange
      else if(i == 2.0) layerColor = vec3(1.0, 0.7, 0.2); // Yellow
      else layerColor = vec3(0.7, 0.2, 1.0); // Purple
      
      finalColor += layerColor * flame * (1.0 - i / LAYERS);
      finalAlpha += flame * (1.0 - i / LAYERS);
    }
    
    // Add glow
    vec2 pos = uv - center;
    float glow = exp(-length(pos) * 4.0) * mouseSpeed;
    finalColor += vec3(0.8, 0.4, 1.0) * glow;
    
    gl_FragColor = vec4(finalColor, finalAlpha * 0.7);
  }
`;

const vertexShader = `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

const FluidBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const lastMousePos = useRef({ x: 0, y: 0 });
  const mouseSpeed = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    const uniforms = {
      time: { value: 0 },
      resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      mouse: { value: new THREE.Vector2(0.5, 0.5) },
      mouseSpeed: { value: 0 }
    };

    const material = new THREE.ShaderMaterial({
      fragmentShader,
      vertexShader,
      uniforms,
      transparent: true
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const handleMouseMove = (e: MouseEvent) => {
      lastMousePos.current = { ...mousePos.current };
      mousePos.current = { x: e.clientX, y: window.innerHeight - e.clientY };
      
      // Calculate mouse speed
      const dx = mousePos.current.x - lastMousePos.current.x;
      const dy = mousePos.current.y - lastMousePos.current.y;
      mouseSpeed.current = Math.min(Math.sqrt(dx * dx + dy * dy) * 0.01, 1.0);
    };

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    let lastTime = 0;
    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;
      
      uniforms.time.value += delta * 0.001;
      uniforms.mouse.value.set(
        mousePos.current.x,
        mousePos.current.y
      );
      uniforms.mouseSpeed.value = mouseSpeed.current;
      
      // Decay mouse speed
      mouseSpeed.current *= 0.95;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fluid-background" />;
};

export default FluidBackground;
