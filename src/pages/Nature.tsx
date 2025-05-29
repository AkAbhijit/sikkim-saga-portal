
import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useContent } from '../contexts/ContentContext';
import { Mountain, TreePine, Heart, Leaf } from 'lucide-react';

const Nature = () => {
  const { theme } = useTheme();
  const { content } = useContent();
  const [selectedType, setSelectedType] = useState<string>('all');

  const types = ['all', 'wildlife', 'peak', 'conservation', 'biodiversity'];

  const filteredItems = content.natureItems.filter(item => {
    return selectedType === 'all' || item.type === selectedType;
  });

  const spacingClass = theme.spacing === 'compact' ? 'py-2' : theme.spacing === 'relaxed' ? 'py-8' : 'py-4';

  return (
    <div className={`min-h-screen bg-${theme.backgroundColor}`}>
      {/* Header */}
      <div className={`bg-gradient-to-r from-green-600 to-blue-600 text-white ${spacingClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={`text-4xl md:text-5xl ${theme.headingFont} mb-4`}>
            Nature & Biodiversity
          </h1>
          <p className={`text-xl ${theme.bodyFont} opacity-90 max-w-3xl`}>
            Discover Sikkim's incredible natural heritage, from the towering peaks 
            of the Himalayas to the rich biodiversity of its protected forests.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className={`bg-white ${spacingClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className={`text-3xl ${theme.headingFont} text-${theme.primaryColor} mb-2`}>
                28%
              </div>
              <p className={`text-${theme.textColor} ${theme.bodyFont}`}>
                Forest Coverage
              </p>
            </div>
            <div>
              <div className={`text-3xl ${theme.headingFont} text-${theme.primaryColor} mb-2`}>
                4,000+
              </div>
              <p className={`text-${theme.textColor} ${theme.bodyFont}`}>
                Flowering Plants
              </p>
            </div>
            <div>
              <div className={`text-3xl ${theme.headingFont} text-${theme.primaryColor} mb-2`}>
                550+
              </div>
              <p className={`text-${theme.textColor} ${theme.bodyFont}`}>
                Bird Species
              </p>
            </div>
            <div>
              <div className={`text-3xl ${theme.headingFont} text-${theme.primaryColor} mb-2`}>
                6
              </div>
              <p className={`text-${theme.textColor} ${theme.bodyFont}`}>
                National Parks
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className={`bg-gray-50 ${spacingClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {types.map(type => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-6 py-2 rounded-full transition-colors ${theme.bodyFont} ${
                  selectedType === type
                    ? `bg-${theme.primaryColor} text-white`
                    : `bg-white hover:bg-${theme.primaryColor} hover:text-white text-${theme.textColor} border border-gray-200`
                }`}
              >
                {type === 'all' ? 'All' : type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Nature Items */}
      <div className={`${spacingClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={item.images[0]} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`px-3 py-1 bg-${theme.primaryColor} text-white text-sm rounded-full ${theme.bodyFont}`}>
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </span>
                    <span className={`text-sm text-${theme.secondaryColor} ${theme.bodyFont}`}>
                      {item.location}
                    </span>
                  </div>
                  <h3 className={`text-xl ${theme.headingFont} text-${theme.textColor} mb-3`}>
                    {item.title}
                  </h3>
                  <p className={`text-${theme.textColor} opacity-70 ${theme.bodyFont}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Conservation Section */}
      <div className={`bg-green-50 ${spacingClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl ${theme.headingFont} text-${theme.textColor} mb-8 text-center`}>
            Conservation Efforts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Heart className={`w-12 h-12 text-${theme.primaryColor} mx-auto mb-4`} />
              <h3 className={`text-lg ${theme.headingFont} text-${theme.textColor} mb-2`}>
                Protected Areas
              </h3>
              <p className={`text-${theme.textColor} opacity-70 ${theme.bodyFont} text-sm`}>
                Over 35% of Sikkim is under protection through national parks and wildlife sanctuaries.
              </p>
            </div>
            <div className="text-center">
              <TreePine className={`w-12 h-12 text-${theme.primaryColor} mx-auto mb-4`} />
              <h3 className={`text-lg ${theme.headingFont} text-${theme.textColor} mb-2`}>
                Organic State
              </h3>
              <p className={`text-${theme.textColor} opacity-70 ${theme.bodyFont} text-sm`}>
                Sikkim is India's first fully organic state, promoting sustainable agriculture.
              </p>
            </div>
            <div className="text-center">
              <Mountain className={`w-12 h-12 text-${theme.primaryColor} mx-auto mb-4`} />
              <h3 className={`text-lg ${theme.headingFont} text-${theme.textColor} mb-2`}>
                Sacred Peaks
              </h3>
              <p className={`text-${theme.textColor} opacity-70 ${theme.bodyFont} text-sm`}>
                Mountains like Kanchenjunga are protected as sacred sites by local communities.
              </p>
            </div>
            <div className="text-center">
              <Leaf className={`w-12 h-12 text-${theme.primaryColor} mx-auto mb-4`} />
              <h3 className={`text-lg ${theme.headingFont} text-${theme.textColor} mb-2`}>
                Carbon Negative
              </h3>
              <p className={`text-${theme.textColor} opacity-70 ${theme.bodyFont} text-sm`}>
                Sikkim absorbs more carbon than it produces, contributing to climate solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nature;
