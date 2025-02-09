// Common container styles
export const containerStyles = {
  section: "relative bg-transparent rounded-2xl w-full overflow-hidden",
  mainContent: "relative w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8",
  innerContainer: `relative z-10 w-full max-w-6xl mx-auto px-2 lg:px-8 py-8
    backdrop-blur-lg 
    bg-white/5
    rounded-2xl 
    border border-white/10
    shadow-xl
    transform transition-all duration-500 hover:scale-[0.99]`,
  glassCard: `backdrop-blur-md 
    bg-white/5 
    rounded-xl 
    border border-white/10 
    shadow-lg 
    p-6 
    transition-all 
    duration-300 
    hover:bg-white/10`,
};

// Common text styles
export const textStyles = {
  sectionTitle: `text-4xl lg:text-5xl 2xl:text-6xl font-black mb-4
    bg-gradient-to-r from-white via-red-200 to-red-300 
    bg-clip-text text-transparent
    tracking-tight drop-shadow-[0_2px_4px_rgba(99,102,241,0.5)]`,
  sectionSubtitle: "text-lg lg:text-xl 2xl:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed text-center",
  accentText: "block mt-1 bg-gradient-to-r from-red-400 to-red-400 bg-clip-text text-transparent",
};

// Common card styles
export const cardStyles = {
  base: `group relative bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden
    border border-white/20 shadow-lg
    transform transition-all duration-500 hover:scale-[1.02]
    hover:bg-white/20`,
  header: "text-xl font-bold text-white mb-3",
  content: "text-gray-300",
  tag: "px-3 py-1 text-sm bg-red-400/20 text-red-300 rounded-full",
};

// Common button styles
export const buttonStyles = {
  primary: `inline-flex items-center px-6 py-3 bg-red-500 text-white rounded-xl
    hover:bg-red-600 transition-colors duration-300`,
  secondary: `inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-xl
    hover:bg-white/20 transition-colors duration-300 backdrop-blur-lg`,
};

// Common background effects
export const backgroundStyles = {
  grid: `absolute inset-0 opacity-20 [mask-image:radial-gradient(#fff_30%,transparent)]
    bg-[size:60px_60px] bg-[linear-gradient(to_right,theme(colors.red.400)_1px,transparent_1px),
    linear-gradient(to_bottom,theme(colors.red.500)_1px,transparent_1px)]`,

};

// Common animation variants
export const animationVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
};

// Common transition settings
export const transitions = {
  hover: "transition-all duration-300",
  scale: "transform transition-all duration-500",
  color: "transition-colors duration-300",
};

// Common spacing
export const spacing = {
  sectionGap: "space-y-24",
  contentGap: "space-y-6",
  elementGap: "space-y-4",
  containerPadding: "px-4 sm:px-6 lg:px-8",
  sectionPadding: "py-16",
  innerPadding: "p-6 sm:p-8",
};

// Section specific spacing
export const sectionSpacing = {
  hero: "min-h-screen flex items-center justify-center",
  callToAction: "-mt-32 z-10",
  footer: "mt-24",
};

// Common effects
export const effects = {
  glassmorphism: "backdrop-blur-xl bg-white/10 border border-white/20",
  glow: "shadow-[0_0_15px_rgba(248,113,113,0.3)]",
  textGlow: "drop-shadow-[0_2px_4px_rgba(99,102,241,0.5)]",
};
