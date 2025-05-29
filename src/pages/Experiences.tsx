
import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useContent } from '../contexts/ContentContext';
import { Clock, DollarSign, MapPin, Calendar } from 'lucide-react';

const Experiences = () => {
  const { theme } = useTheme();
  const { content } = useContent();
  const [selectedType, setSelectedType] = useState<string>('all');

  const types = ['all', 'homestay', 'festival', 'trekking', 'cultural'];

  const filteredExperiences = content.experiences.filter(experience => {
    return selectedType === 'all' || experience.type === selectedType;
  });

  const spacingClass = theme.spacing === 'compact' ? 'py-2' : theme.spacing === 'relaxed' ? 'py-8' : 'py-4';

  return (
    <div className={`min-h-screen bg-${theme.backgroundColor}`}>
      {/* Header */}
      <div className={`bg-gradient-to-r from-indigo-600 to-purple-600 text-white ${spacingClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={`text-4xl md:text-5xl ${theme.headingFont} mb-4`}>
            Experiences in Sikkim
          </h1>
          <p className={`text-xl ${theme.bodyFont} opacity-90 max-w-3xl`}>
            Immerse yourself in authentic Sikkimese culture through homestays, festivals, 
            trekking adventures, and cultural experiences that connect you with local communities.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className={`bg-white shadow-sm ${spacingClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {types.map(type => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-6 py-2 rounded-full transition-colors ${theme.bodyFont} ${
                  selectedType === type
                    ? `bg-${theme.primaryColor} text-white`
                    : `bg-gray-100 hover:bg-${theme.primaryColor} hover:text-white text-${theme.textColor}`
                }`}
              >
                {type === 'all' ? 'All Experiences' : type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Experiences Grid */}
      <div className={`${spacingClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredExperiences.map((experience) => (
              <div key={experience.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={experience.image} 
                  alt={experience.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`px-3 py-1 bg-${theme.primaryColor} text-white text-sm rounded-full ${theme.bodyFont}`}>
                      {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
                    </span>
                  </div>
                  
                  <h3 className={`text-xl ${theme.headingFont} text-${theme.textColor} mb-3`}>
                    {experience.title}
                  </h3>
                  
                  <p className={`text-${theme.textColor} opacity-70 ${theme.bodyFont} text-sm mb-4`}>
                    {experience.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className={`w-4 h-4 text-${theme.secondaryColor}`} />
                      <span className={`text-${theme.textColor} ${theme.bodyFont}`}>
                        {experience.location}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className={`w-4 h-4 text-${theme.secondaryColor}`} />
                      <span className={`text-${theme.textColor} ${theme.bodyFont}`}>
                        {experience.duration}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <DollarSign className={`w-4 h-4 text-${theme.secondaryColor}`} />
                      <span className={`text-${theme.textColor} ${theme.bodyFont}`}>
                        {experience.cost}
                      </span>
                    </div>
                  </div>
                  
                  <button className={`w-full bg-${theme.primaryColor} hover:bg-${theme.secondaryColor} text-white py-2 px-4 rounded-lg transition-colors ${theme.bodyFont}`}>
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Planning Tips */}
      <div className={`bg-gray-50 ${spacingClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl ${theme.headingFont} text-${theme.textColor} mb-8 text-center`}>
            Planning Your Visit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <Calendar className={`w-8 h-8 text-${theme.primaryColor} mx-auto mb-4`} />
              <h3 className={`text-lg ${theme.headingFont} text-${theme.textColor} mb-2`}>
                Best Time to Visit
              </h3>
              <p className={`text-${theme.textColor} opacity-70 ${theme.bodyFont} text-sm`}>
                March-May and October-December offer the best weather for most activities.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <MapPin className={`w-8 h-8 text-${theme.primaryColor} mx-auto mb-4`} />
              <h3 className={`text-lg ${theme.headingFont} text-${theme.textColor} mb-2`}>
                Permits Required
              </h3>
              <p className={`text-${theme.textColor} opacity-70 ${theme.bodyFont} text-sm`}>
                Inner Line Permit needed for non-Sikkimese visitors to most areas.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <DollarSign className={`w-8 h-8 text-${theme.primaryColor} mx-auto mb-4`} />
              <h3 className={`text-lg ${theme.headingFont} text-${theme.textColor} mb-2`}>
                Budget Planning
              </h3>
              <p className={`text-${theme.textColor} opacity-70 ${theme.bodyFont} text-sm`}>
                ₹1500-3000 per day for comfortable travel including accommodation and meals.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <Clock className={`w-8 h-8 text-${theme.primaryColor} mx-auto mb-4`} />
              <h3 className={`text-lg ${theme.headingFont} text-${theme.textColor} mb-2`}>
                Duration
              </h3>
              <p className={`text-${theme.textColor} opacity-70 ${theme.bodyFont} text-sm`}>
                Minimum 5-7 days recommended to experience different regions and cultures.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Seasonal Highlights */}
      <div className={`${spacingClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl ${theme.headingFont} text-${theme.textColor} mb-8 text-center`}>
            Seasonal Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className={`text-xl ${theme.headingFont} text-${theme.textColor} mb-4`}>
                Spring & Summer (March - June)
              </h3>
              <ul className={`text-${theme.textColor} ${theme.bodyFont} space-y-2`}>
                <li>• Rhododendron blooms create colorful landscapes</li>
                <li>• Perfect weather for trekking and outdoor activities</li>
                <li>• Buddha Purnima and Saga Dawa festivals</li>
                <li>• Clear mountain views and pleasant temperatures</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className={`text-xl ${theme.headingFont} text-${theme.textColor} mb-4`}>
                Autumn & Winter (October - February)
              </h3>
              <ul className={`text-${theme.textColor} ${theme.bodyFont} space-y-2`}>
                <li>• Crystal clear mountain views</li>
                <li>• Dashain and Tihar festivals</li>
                <li>• Losar (Tibetan New Year) celebrations</li>
                <li>• Snow activities in higher elevations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
