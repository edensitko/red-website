import React from 'react';
import './DetailedFeatures.css';

interface Feature {
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

const DetailedFeatures: React.FC = () => {
  const features: Feature[] = [
    {
      title: 'Custom Development',
      description: 'Tailored solutions built specifically for your business needs',
      icon: '💻',
      benefits: [
        'Scalable architecture',
        'Modern technology stack',
        'Optimized performance',
        'Secure implementation'
      ]
    },
    {
      title: 'Mobile Solutions',
      description: 'Cross-platform mobile applications that work seamlessly',
      icon: '📱',
      benefits: [
        'Native-like experience',
        'Offline capabilities',
        'Push notifications',
        'App store optimization'
      ]
    },
    {
      title: 'Cloud Integration',
      description: 'Leverage the power of cloud computing for your business',
      icon: '☁️',
      benefits: [
        'Auto-scaling',
        'High availability',
        'Data backup',
        'Cost optimization'
      ]
    },
    {
      title: 'AI & Machine Learning',
      description: 'Smart solutions powered by artificial intelligence',
      icon: '🤖',
      benefits: [
        'Predictive analytics',
        'Natural language processing',
        'Computer vision',
        'Automated decision making'
      ]
    }
  ];

  return (
    <section id="detailed-features" className="detailed-features">
      <div className="features-content">
        <div className="section-header">
          <h2>Our Capabilities</h2>
          <p>Comprehensive solutions for modern business challenges</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <div className="feature-info">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <ul className="benefits-list">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex}>
                      <span className="check-icon">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="features-cta">
          <h3>Ready to transform your business?</h3>
          <p>Let's discuss how our solutions can help you achieve your goals</p>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default DetailedFeatures;
