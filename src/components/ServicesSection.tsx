import React from 'react';
import './ServicesSection.css';

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Web Development',
      description: 'Modern web applications built with cutting-edge technologies',
      icon: '🌐',
      features: [
        'Responsive design',
        'Progressive Web Apps',
        'SEO optimization',
        'Performance optimization'
      ]
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications',
      icon: '📱',
      features: [
        'iOS development',
        'Android development',
        'Cross-platform solutions',
        'App store optimization'
      ]
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that delivers exceptional experiences',
      icon: '🎨',
      features: [
        'User research',
        'Wireframing',
        'Prototyping',
        'Visual design'
      ]
    },
    {
      title: 'Digital Strategy',
      description: 'Strategic planning for digital transformation',
      icon: '📊',
      features: [
        'Market analysis',
        'Technology consulting',
        'Digital roadmap',
        'ROI optimization'
      ]
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-content">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive digital solutions for your business needs</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <div className="service-info">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <span className="feature-bullet">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="services-cta">
          <h3>Need a custom solution?</h3>
          <p>Contact us to discuss your specific requirements</p>
          <button className="cta-button">Get in Touch</button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
