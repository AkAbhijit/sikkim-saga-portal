
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useContent } from '../contexts/ContentContext';
import { Clock, MapPin } from 'lucide-react';

const History = () => {
  const { theme } = useTheme();
  const { content } = useContent();

  const spacingClass = theme.spacing === 'compact' ? 'py-2' : theme.spacing === 'relaxed' ? 'py-8' : 'py-4';

  return (
    <div className={`min-h-screen bg-${theme.backgroundColor}`}>
      {/* Header */}
      <div className={`bg-gradient-to-r from-yellow-600 to-orange-600 text-white ${spacingClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={`text-4xl md:text-5xl ${theme.headingFont} mb-4`}>
            History of Sikkim
          </h1>
          <p className={`text-xl ${theme.bodyFont} opacity-90 max-w-3xl`}>
            Journey through the fascinating timeline of Sikkim, from ancient kingdoms 
            to modern statehood, discovering the events that shaped this Himalayan jewel.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className={`${spacingClass}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

            {content.historyEvents.map((event, index) => (
              <div key={event.id} className="relative flex items-start mb-12">
                {/* Timeline Dot */}
                <div className={`flex-shrink-0 w-16 h-16 bg-${theme.primaryColor} rounded-full flex items-center justify-center text-white ${theme.headingFont} text-sm z-10`}>
                  {event.year}
                </div>

                {/* Content */}
                <div className="ml-8 bg-white rounded-lg shadow-md p-6 flex-1">
                  <div className="flex items-center space-x-2 mb-3">
                    <Clock className={`w-5 h-5 text-${theme.secondaryColor}`} />
                    <span className={`text-${theme.secondaryColor} ${theme.bodyFont} font-medium`}>
                      {event.year}
                    </span>
                  </div>
                  
                  <h3 className={`text-xl ${theme.headingFont} text-${theme.textColor} mb-3`}>
                    {event.title}
                  </h3>
                  
                  <p className={`text-${theme.textColor} ${theme.bodyFont} mb-4`}>
                    {event.description}
                  </p>
                  
                  <div className={`bg-${theme.primaryColor} bg-opacity-10 p-4 rounded-lg`}>
                    <h4 className={`text-sm ${theme.headingFont} text-${theme.textColor} mb-2`}>
                      Historical Significance
                    </h4>
                    <p className={`text-${theme.textColor} opacity-80 ${theme.bodyFont} text-sm`}>
                      {event.significance}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Periods */}
      <div className={`bg-gray-50 ${spacingClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl ${theme.headingFont} text-${theme.textColor} mb-8 text-center`}>
            Key Historical Periods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className={`w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center`}>
                <span className="text-2xl text-white">👑</span>
              </div>
              <h3 className={`text-xl ${theme.headingFont} text-${theme.textColor} mb-3`}>
                Kingdom Era (1642-1975)
              </h3>
              <p className={`text-${theme.textColor} opacity-70 ${theme.bodyFont}`}>
                Over 300 years of monarchy under the Namgyal dynasty, establishing 
                Buddhism and creating the foundation of modern Sikkim.
              </p>
            </div>
            <div className="text-center">
              <div className={`w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center`}>
                <span className="text-2xl text-white">🏛️</span>
              </div>
              <h3 className={`text-xl ${theme.headingFont} text-${theme.textColor} mb-3`}>
                Protectorate Period (1861-1975)
              </h3>
              <p className={`text-${theme.textColor} opacity-70 ${theme.bodyFont}`}>
                British influence and later Indian protectorate, bringing modernization 
                while preserving traditional governance structures.
              </p>
            </div>
            <div className="text-center">
              <div className={`w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center`}>
                <span className="text-2xl text-white">🇮🇳</span>
              </div>
              <h3 className={`text-xl ${theme.headingFont} text-${theme.textColor} mb-3`}>
                Statehood (1975-Present)
              </h3>
              <p className={`text-${theme.textColor} opacity-70 ${theme.bodyFont}`}>
                Integration into India as the 22nd state, focusing on democracy, 
                development, and environmental conservation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Historical Figures */}
      <div className={`${spacingClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl ${theme.headingFont} text-${theme.textColor} mb-8 text-center`}>
            Notable Historical Figures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className={`text-xl ${theme.headingFont} text-${theme.textColor} mb-3`}>
                Phuntsog Namgyal (1604-1670)
              </h3>
              <p className={`text-${theme.textColor} ${theme.bodyFont} mb-3`}>
                The first Chogyal (king) of Sikkim, who unified the region and established 
                the Namgyal dynasty that ruled for over 333 years.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="w-4 h-4 mr-1" />
                <span>Ruled from Yuksom</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className={`text-xl ${theme.headingFont} text-${theme.textColor} mb-3`}>
                Tenzing Norgay (1914-1986)
              </h3>
              <p className={`text-${theme.textColor} ${theme.bodyFont} mb-3`}>
                Sherpa mountaineer who, along with Edmund Hillary, was among the first 
                to reach the summit of Mount Everest in 1953.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="w-4 h-4 mr-1" />
                <span>Born in Thangla, Tibet (Sherpa heritage)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
