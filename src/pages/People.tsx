
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useContent } from '../contexts/ContentContext';
import { Users, MapPin, Briefcase } from 'lucide-react';

const People = () => {
  const { theme } = useTheme();
  const { content } = useContent();

  const spacingClass = theme.spacing === 'compact' ? 'py-2' : theme.spacing === 'relaxed' ? 'py-8' : 'py-4';

  return (
    <div className={`min-h-screen bg-${theme.backgroundColor}`}>
      {/* Header */}
      <div className={`bg-gradient-to-r from-red-600 to-pink-600 text-white ${spacingClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={`text-4xl md:text-5xl ${theme.headingFont} mb-4`}>
            People & Livelihoods
          </h1>
          <p className={`text-xl ${theme.bodyFont} opacity-90 max-w-3xl`}>
            Meet the diverse communities of Sikkim and learn about their traditional 
            occupations, modern livelihoods, and the rich cultural tapestry they weave.
          </p>
        </div>
      </div>

      {/* Demographics */}
      <div className={`bg-white ${spacingClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl ${theme.headingFont} text-${theme.textColor} mb-8 text-center`}>
            Community Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className={`w-24 h-24 bg-gradient-to-r from-${theme.primaryColor} to-${theme.secondaryColor} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                <span className="text-2xl text-white font-bold">20%</span>
              </div>
              <h3 className={`text-xl ${theme.headingFont} text-${theme.textColor} mb-3`}>Bhutia</h3>
              <p className={`text-${theme.textColor} opacity-70 ${theme.bodyFont}`}>
                Tibetan-origin community practicing Buddhism, known for monastery traditions 
                and high-altitude farming.
              </p>
            </div>
            <div className="text-center">
              <div className={`w-24 h-24 bg-gradient-to-r from-${theme.primaryColor} to-${theme.secondaryColor} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                <span className="text-2xl text-white font-bold">13%</span>
              </div>
              <h3 className={`text-xl ${theme.headingFont} text-${theme.textColor} mb-3`}>Lepcha</h3>
              <p className={`text-${theme.textColor} opacity-70 ${theme.bodyFont}`}>
                Indigenous "Children of Rong" with deep ecological knowledge and 
                traditional forest-based livelihoods.
              </p>
            </div>
            <div className="text-center">
              <div className={`w-24 h-24 bg-gradient-to-r from-${theme.primaryColor} to-${theme.secondaryColor} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                <span className="text-2xl text-white font-bold">67%</span>
              </div>
              <h3 className={`text-xl ${theme.headingFont} text-${theme.textColor} mb-3`}>Nepali</h3>
              <p className={`text-${theme.textColor} opacity-70 ${theme.bodyFont}`}>
                Majority community practicing Hinduism, contributing significantly to 
                agriculture, trade, and administration.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* People Profiles */}
      <div className={`${spacingClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl ${theme.headingFont} text-${theme.textColor} mb-8 text-center`}>
            Stories from Our Community
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.peopleProfiles.map((person) => (
              <div key={person.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={person.image} 
                  alt={person.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className={`text-xl ${theme.headingFont} text-${theme.textColor} mb-2`}>
                    {person.name}
                  </h3>
                  <div className="flex items-center space-x-4 mb-3 text-sm">
                    <div className="flex items-center space-x-1">
                      <Briefcase className={`w-4 h-4 text-${theme.secondaryColor}`} />
                      <span className={`text-${theme.textColor} ${theme.bodyFont}`}>
                        {person.occupation}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className={`w-4 h-4 text-${theme.secondaryColor}`} />
                      <span className={`text-${theme.textColor} ${theme.bodyFont}`}>
                        {person.community}
                      </span>
                    </div>
                  </div>
                  <p className={`text-${theme.textColor} opacity-70 ${theme.bodyFont} text-sm`}>
                    {person.story.substring(0, 150)}...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Traditional Occupations */}
      <div className={`bg-gray-50 ${spacingClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl ${theme.headingFont} text-${theme.textColor} mb-8 text-center`}>
            Traditional Livelihoods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🌾</div>
              <h3 className={`text-lg ${theme.headingFont} text-${theme.textColor} mb-2`}>
                Agriculture
              </h3>
              <p className={`text-${theme.textColor} opacity-70 ${theme.bodyFont} text-sm`}>
                Terraced farming of rice, maize, millet, and organic vegetables using traditional methods.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🧶</div>
              <h3 className={`text-lg ${theme.headingFont} text-${theme.textColor} mb-2`}>
                Weaving
              </h3>
              <p className={`text-${theme.textColor} opacity-70 ${theme.bodyFont} text-sm`}>
                Hand-woven textiles, carpets, and traditional garments using yak wool and cotton.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🐄</div>
              <h3 className={`text-lg ${theme.headingFont} text-${theme.textColor} mb-2`}>
                Animal Husbandry
              </h3>
              <p className={`text-${theme.textColor} opacity-70 ${theme.bodyFont} text-sm`}>
                Raising yaks, cattle, and goats for dairy products, meat, and wool in high altitudes.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🏔️</div>
              <h3 className={`text-lg ${theme.headingFont} text-${theme.textColor} mb-2`}>
                Tourism Services
              </h3>
              <p className={`text-${theme.textColor} opacity-70 ${theme.bodyFont} text-sm`}>
                Guiding, homestays, and cultural tourism showcasing local traditions and natural beauty.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Economy */}
      <div className={`${spacingClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl ${theme.headingFont} text-${theme.textColor} mb-8 text-center`}>
            Modern Economy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className={`text-xl ${theme.headingFont} text-${theme.textColor} mb-4`}>
                Sustainable Development
              </h3>
              <p className={`text-${theme.textColor} ${theme.bodyFont} mb-4`}>
                Sikkim has embraced sustainable development with focus on organic farming, 
                eco-tourism, and renewable energy, creating new employment opportunities 
                while preserving traditional ways of life.
              </p>
              <ul className={`text-${theme.textColor} ${theme.bodyFont} text-sm space-y-2`}>
                <li>• 100% organic agriculture certification</li>
                <li>• Hydroelectric power generation</li>
                <li>• Eco-friendly tourism initiatives</li>
                <li>• Traditional craft promotion</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className={`text-xl ${theme.headingFont} text-${theme.textColor} mb-4`}>
                Education & Healthcare
              </h3>
              <p className={`text-${theme.textColor} ${theme.bodyFont} mb-4`}>
                Investment in education and healthcare has created opportunities for 
                young Sikkimese while maintaining cultural values and traditional knowledge systems.
              </p>
              <ul className={`text-${theme.textColor} ${theme.bodyFont} text-sm space-y-2`}>
                <li>• High literacy rates (82%)</li>
                <li>• Free healthcare services</li>
                <li>• Preservation of traditional medicine</li>
                <li>• Modern technical education</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
