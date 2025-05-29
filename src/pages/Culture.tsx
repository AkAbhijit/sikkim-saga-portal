
import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useContent } from '../contexts/ContentContext';

const Culture = () => {
  const { theme } = useTheme();
  const { content } = useContent();
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');

  const types = ['all', 'festival', 'tradition', 'art', 'cuisine'];
  const ethnicGroups = ['all', 'Bhutia', 'Lepcha', 'Nepali', 'All Communities'];

  const filteredItems = content.cultureItems.filter(item => {
    return (selectedType === 'all' || item.type === selectedType) &&
           (selectedGroup === 'all' || item.ethnicGroup === selectedGroup);
  });

  const spacingClass = theme.spacing === 'compact' ? 'py-2' : theme.spacing === 'relaxed' ? 'py-8' : 'py-4';

  return (
    <div className={`min-h-screen bg-${theme.backgroundColor}`}>
      {/* Header */}
      <div className={`bg-gradient-to-r from-purple-600 to-pink-600 text-white ${spacingClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={`text-4xl md:text-5xl ${theme.headingFont} mb-4`}>
            Culture & Traditions
          </h1>
          <p className={`text-xl ${theme.bodyFont} opacity-90 max-w-3xl`}>
            Sikkim is home to diverse ethnic communities, each contributing to the rich tapestry 
            of culture through festivals, traditions, arts, and cuisine.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className={`bg-white shadow-sm ${spacingClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className={`block text-sm ${theme.headingFont} text-${theme.textColor} mb-2`}>
                Filter by Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
              >
                {types.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className={`block text-sm ${theme.headingFont} text-${theme.textColor} mb-2`}>
                Filter by Community
              </label>
              <select
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
              >
                {ethnicGroups.map(group => (
                  <option key={group} value={group}>
                    {group === 'all' ? 'All Communities' : group}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Culture Items */}
      <div className={`${spacingClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className={`text-lg text-${theme.textColor} ${theme.bodyFont}`}>
                No cultural items found matching your filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={item.images[0]} 
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 bg-${theme.primaryColor} text-white text-sm rounded-full ${theme.bodyFont}`}>
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className={`text-xl ${theme.headingFont} text-${theme.textColor}`}>
                        {item.title}
                      </h3>
                      <span className={`text-sm text-${theme.secondaryColor} ${theme.bodyFont}`}>
                        {item.ethnicGroup}
                      </span>
                    </div>
                    <p className={`text-${theme.textColor} opacity-70 ${theme.bodyFont}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Community Spotlight */}
      <div className={`bg-gray-50 ${spacingClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl ${theme.headingFont} text-${theme.textColor} mb-8 text-center`}>
            Cultural Communities of Sikkim
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className={`w-20 h-20 bg-${theme.primaryColor} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                <span className="text-2xl text-white font-bold">B</span>
              </div>
              <h3 className={`text-xl ${theme.headingFont} text-${theme.textColor} mb-3`}>Bhutia</h3>
              <p className={`text-${theme.textColor} opacity-70 ${theme.bodyFont}`}>
                The Bhutia community, originally from Tibet, brought Buddhist culture and traditions 
                to Sikkim, including monastery festivals and the Cham dance.
              </p>
            </div>
            <div className="text-center">
              <div className={`w-20 h-20 bg-${theme.secondaryColor} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                <span className="text-2xl text-white font-bold">L</span>
              </div>
              <h3 className={`text-xl ${theme.headingFont} text-${theme.textColor} mb-3`}>Lepcha</h3>
              <p className={`text-${theme.textColor} opacity-70 ${theme.bodyFont}`}>
                The indigenous Lepcha people are known as the "Children of Rong" (Sikkim), 
                with deep connections to nature and traditional ecological knowledge.
              </p>
            </div>
            <div className="text-center">
              <div className={`w-20 h-20 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center`}>
                <span className="text-2xl text-white font-bold">N</span>
              </div>
              <h3 className={`text-xl ${theme.headingFont} text-${theme.textColor} mb-3`}>Nepali</h3>
              <p className={`text-${theme.textColor} opacity-70 ${theme.bodyFont}`}>
                The Nepali community brought Hindu traditions, festivals like Dashain and Tihar, 
                and contributed significantly to Sikkim's agricultural heritage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Culture;
