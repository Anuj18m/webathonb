import React from 'react';
import { Camera, Heart, Users, Building, Palette, Award } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import RippleButton from './RippleButton';

const Services: React.FC = () => {
  const { ref, inView } = useInView(0.1);

  const services = [
    {
      icon: Heart,
      title: 'Wedding Photography',
      description: 'Capture your special day with romantic, timeless images that tell your unique love story.',
      features: ['Full day coverage', 'Engagement session', 'Online gallery', 'Print release'],
      price: 'Starting at 2,50000/-',
      color: 'bg-rose-500'
    },
    {
      icon: Users,
      title: 'Portrait Sessions',
      description: 'Professional portraits for individuals, families, and couples in studio or on location.',
      features: ['1-2 hour session', 'Multiple outfit changes', 'Retouched images', 'Print options'],
      price: 'Starting at 35000/-',
      color: 'bg-blue-500'
    },
    {
      icon: Building,
      title: 'Commercial Photography',
      description: 'Professional imagery for businesses, products, and corporate events.',
      features: ['Product photography', 'Corporate headshots', 'Event coverage', 'Brand imagery'],
      price: 'Starting at 50000/-',
      color: 'bg-green-500'
    },
    {
      icon: Palette,
      title: 'Fashion & Editorial',
      description: 'Creative fashion shoots and editorial work for magazines, brands, and portfolios.',
      features: ['Creative direction', 'Styling consultation', 'High-end retouching', 'Usage rights'],
      price: 'Starting at 65000/-',
      color: 'bg-purple-500'
    },
    {
      icon: Camera,
      title: 'Event Photography',
      description: 'Document your special events, parties, and celebrations with professional coverage.',
      features: ['Event coverage', 'Candid moments', 'Group photos', 'Quick turnaround'],
      price: 'Starting at 40000/-',
      color: 'bg-amber-500'
    },
    {
      icon: Award,
      title: 'Photography Workshops',
      description: 'Learn from professionals in hands-on workshops covering various photography techniques.',
      features: ['Small group sizes', 'Hands-on learning', 'Equipment provided', 'Certificate'],
      price: 'Starting at 15000/-',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional photography services tailored to capture your most important moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: {
    icon: React.ElementType;
    title: string;
    description: string;
    features: string[];
    price: string;
    color: string;
  };
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const { ref, inView } = useInView(0.1);

  return (
    <div 
      ref={ref}
      className={`group bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="text-center mb-6">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <service.icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          {service.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {service.description}
        </p>
      </div>

      <div className="space-y-3 mb-6">
        {service.features.map((feature, featureIndex) => (
          <div key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></div>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 dark:border-gray-600 pt-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">
            {service.price}
          </span>
        </div>
        <RippleButton
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full py-3 px-6 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          Book Now
        </RippleButton>
      </div>
    </div>
  );
};

export default Services;