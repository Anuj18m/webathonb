import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Trophy, Camera } from 'lucide-react';
import { TimelineItem } from '../types';
import { useInView } from '../hooks/useInView';
import RippleButton from './RippleButton';

const Timeline: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView(0.1);

  const timelineItems: TimelineItem[] = [
    {
      id: '1',
      year: '2019',
      title: 'FrameCraft Studio Founded',
      description: 'Started with a passion for capturing life\'s most beautiful moments and a commitment to artistic excellence.',
      category: 'milestone'
    },
    {
      id: '2',
      year: '2020',
      title: 'First Wedding Season',
      description: 'Successfully photographed 25 weddings in our first full season, establishing our reputation for quality.',
      category: 'achievement'
    },
    {
      id: '3',
      year: '2021',
      title: 'Studio Expansion',
      description: 'Opened our first professional portrait studio, expanding services to include commercial and fashion photography.',
      category: 'launch'
    },
    {
      id: '4',
      year: '2022',
      title: 'Award Recognition',
      description: 'Won "Best Wedding Photographer" at the Regional Photography Awards and featured in Wedding Magazine.',
      category: 'achievement'
    },
    {
      id: '5',
      year: '2023',
      title: 'Team Growth',
      description: 'Expanded to a team of 4 professional photographers, allowing us to serve more clients with specialized expertise.',
      category: 'milestone'
    },
    {
      id: '6',
      year: '2024',
      title: 'Digital Innovation',
      description: 'Launched online gallery platform and virtual consultation services, enhancing the client experience.',
      category: 'launch'
    }
  ];

  const getIcon = (category: TimelineItem['category']) => {
    switch (category) {
      case 'milestone': return Calendar;
      case 'achievement': return Trophy;
      case 'launch': return Camera;
      default: return Calendar;
    }
  };

  const getColorClass = (category: TimelineItem['category']) => {
    switch (category) {
      case 'milestone': return 'bg-amber-500';
      case 'achievement': return 'bg-green-500';
      case 'launch': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % timelineItems.length);
  };

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + timelineItems.length) % timelineItems.length);
  };

  return (
    <section id="timeline" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Story
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From humble beginnings to becoming a trusted name in photography
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 dark:bg-gray-600 h-full"></div>
          
          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const Icon = getIcon(item.category);
              const isLeft = index % 2 === 0;
              
              return (
                <div key={item.id} className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${isLeft ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className={`bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg transition-all duration-500 ${
                      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`} style={{ transitionDelay: `${index * 200}ms` }}>
                      <div className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-full ${getColorClass(item.category)} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline Slider */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {timelineItems.map((item) => {
                  const Icon = getIcon(item.category);
                  
                  return (
                    <div key={item.id} className="w-full flex-shrink-0 px-4">
                      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${getColorClass(item.category)} mb-6`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-3">
                          {item.year}
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <RippleButton
                onClick={prevItem}
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                aria-label="Previous item"
              >
                <ChevronLeft className="w-6 h-6" />
              </RippleButton>

              <div className="flex space-x-2">
                {timelineItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentIndex ? 'bg-amber-600' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                    aria-label={`Go to item ${index + 1}`}
                  />
                ))}
              </div>

              <RippleButton
                onClick={nextItem}
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                aria-label="Next item"
              >
                <ChevronRight className="w-6 h-6" />
              </RippleButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;