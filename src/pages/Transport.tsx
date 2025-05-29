
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useContent } from '../contexts/ContentContext';
import { Car, MapPin, Clock, DollarSign, AlertTriangle, Plane, Train } from 'lucide-react';

const Transport = () => {
  const { theme } = useTheme();
  const { content } = useContent();

  const spacingClass = theme.spacing === 'compact' ? 'py-2' : theme.spacing === 'relaxed' ? 'py-8' : 'py-4';

  return (
    <div className={`min-h-screen bg-${theme.backgroundColor}`}>
      {/* Header */}
      <div className={`bg-gradient-to-r from-blue-600 to-green-600 text-white ${spacingClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={`text-4xl md:text-5xl ${theme.headingFont} mb-4`}>
            Getting Around Sikkim
          </h1>
          <p className={`text-xl ${theme.bodyFont} opacity-90 max-w-3xl`}>
            Navigate Sikkim with ease using our comprehensive guide to transportation options, 
            routes, costs, and essential travel tips for exploring the mountain state.
          </p>
        </div>
      </div>

      {/* Transport Routes */}
      <div className={`${spacingClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl ${theme.headingFont} text-${theme.textColor} mb-8 text-center`}>
            Popular Routes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.transportRoutes.map((route) => (
              <div key={route.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className={`w-5 h-5 text-${theme.primaryColor}`} />
                    <span className={`${theme.headingFont} text-${theme.textColor}`}>
                      {route.from} → {route.to}
                    </span>
                  </div>
                  <Car className={`w-5 h-5 text-${theme.secondaryColor}`} />
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className={`text-sm text-${theme.textColor} opacity-70 ${theme.bodyFont}`}>
                      Mode:
                    </span>
                    <span className={`${theme.bodyFont} text-${theme.textColor}`}>
                      {route.mode}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className={`text-sm text-${theme.textColor} opacity-70 ${theme.bodyFont}`}>
                      Cost:
                    </span>
                    <span className={`${theme.bodyFont} text-${theme.textColor} font-medium`}>
                      {route.cost}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className={`text-sm text-${theme.textColor} opacity-70 ${theme.bodyFont}`}>
                      Duration:
                    </span>
                    <span className={`${theme.bodyFont} text-${theme.textColor}`}>
                      {route.duration}
                    </span>
                  </div>
                  
                  {route.notes && (
                    <div className={`mt-3 p-3 bg-${theme.primaryColor} bg-opacity-10 rounded-lg`}>
                      <p className={`text-sm text-${theme.textColor} ${theme.bodyFont}`}>
                        {route.notes}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How to Reach Sikkim */}
      <div className={`bg-gray-50 ${spacingClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl ${theme.headingFont} text-${theme.textColor} mb-8 text-center`}>
            How to Reach Sikkim
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Plane className={`w-12 h-12 text-${theme.primaryColor} mx-auto mb-4`} />
              <h3 className={`text-xl ${theme.headingFont} text-${theme.textColor} mb-3`}>
                By Air
              </h3>
              <p className={`text-${theme.textColor} ${theme.bodyFont} mb-4`}>
                Nearest airport is Bagdogra (120 km). Direct flights from major Indian cities.
              </p>
              <ul className={`text-${theme.textColor} ${theme.bodyFont} text-sm space-y-1`}>
                <li>• Bagdogra to Gangtok: 3-4 hours</li>
                <li>• Pre-paid taxi available</li>
                <li>• Helicopter service to Gangtok</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Train className={`w-12 h-12 text-${theme.primaryColor} mx-auto mb-4`} />
              <h3 className={`text-xl ${theme.headingFont} text-${theme.textColor} mb-3`}>
                By Rail
              </h3>
              <p className={`text-${theme.textColor} ${theme.bodyFont} mb-4`}>
                Nearest railway station is New Jalpaiguri (148 km from Gangtok).
              </p>
              <ul className={`text-${theme.textColor} ${theme.bodyFont} text-sm space-y-1`}>
                <li>• Regular trains from major cities</li>
                <li>• Shared taxis available</li>
                <li>• 4-5 hours to Gangtok</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Car className={`w-12 h-12 text-${theme.primaryColor} mx-auto mb-4`} />
              <h3 className={`text-xl ${theme.headingFont} text-${theme.textColor} mb-3`}>
                By Road
              </h3>
              <p className={`text-${theme.textColor} ${theme.bodyFont} mb-4`}>
                Well-connected by road through Siliguri and Kalimpong routes.
              </p>
              <ul className={`text-${theme.textColor} ${theme.bodyFont} text-sm space-y-1`}>
                <li>• Regular bus services</li>
                <li>• Private vehicles allowed</li>
                <li>• Scenic mountain roads</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Transport Options */}
      <div className={`${spacingClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl ${theme.headingFont} text-${theme.textColor} mb-8 text-center`}>
            Local Transport Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className={`text-xl ${theme.headingFont} text-${theme.textColor} mb-3`}>
                  Shared Taxis
                </h3>
                <p className={`text-${theme.textColor} ${theme.bodyFont} mb-3`}>
                  Most popular and efficient way to travel between towns.
                </p>
                <ul className={`text-${theme.textColor} ${theme.bodyFont} text-sm space-y-1`}>
                  <li>• Fixed routes and schedules</li>
                  <li>• Affordable rates</li>
                  <li>• Wait time: 15-30 minutes</li>
                  <li>• Comfortable for short distances</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className={`text-xl ${theme.headingFont} text-${theme.textColor} mb-3`}>
                  Private Taxis
                </h3>
                <p className={`text-${theme.textColor} ${theme.bodyFont} mb-3`}>
                  Convenient for sightseeing and custom itineraries.
                </p>
                <ul className={`text-${theme.textColor} ${theme.bodyFont} text-sm space-y-1`}>
                  <li>• Door-to-door service</li>
                  <li>• Flexible timing</li>
                  <li>• Higher cost but comfortable</li>
                  <li>• Professional drivers</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className={`text-xl ${theme.headingFont} text-${theme.textColor} mb-3`}>
                  Government Bus
                </h3>
                <p className={`text-${theme.textColor} ${theme.bodyFont} mb-3`}>
                  Budget-friendly option for longer routes.
                </p>
                <ul className={`text-${theme.textColor} ${theme.bodyFont} text-sm space-y-1`}>
                  <li>• Economical fares</li>
                  <li>• Limited schedules</li>
                  <li>• Connects major towns</li>
                  <li>• Basic amenities</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className={`text-xl ${theme.headingFont} text-${theme.textColor} mb-3`}>
                  Motorcycle/Bike Rental
                </h3>
                <p className={`text-${theme.textColor} ${theme.bodyFont} mb-3`}>
                  For adventurous travelers familiar with mountain roads.
                </p>
                <ul className={`text-${theme.textColor} ${theme.bodyFont} text-sm space-y-1`}>
                  <li>• Valid license required</li>
                  <li>• Mountain driving experience needed</li>
                  <li>• Weather dependent</li>
                  <li>• Insurance essential</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Travel Safety Tips */}
      <div className={`bg-yellow-50 ${spacingClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className={`w-8 h-8 text-yellow-600 mr-3`} />
            <h2 className={`text-3xl ${theme.headingFont} text-${theme.textColor}`}>
              Safety Tips
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className={`text-lg ${theme.headingFont} text-${theme.textColor} mb-3`}>
                Mountain Roads
              </h3>
              <ul className={`text-${theme.textColor} ${theme.bodyFont} text-sm space-y-2`}>
                <li>• Roads can be narrow and winding</li>
                <li>• Weather changes rapidly</li>
                <li>• Carry warm clothing</li>
                <li>• Check road conditions</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className={`text-lg ${theme.headingFont} text-${theme.textColor} mb-3`}>
                Permits & Documents
              </h3>
              <ul className={`text-${theme.textColor} ${theme.bodyFont} text-sm space-y-2`}>
                <li>• Inner Line Permit required</li>
                <li>• Valid ID proof mandatory</li>
                <li>• Keep copies of documents</li>
                <li>• Register at checkpoints</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className={`text-lg ${theme.headingFont} text-${theme.textColor} mb-3`}>
                Health Precautions
              </h3>
              <ul className={`text-${theme.textColor} ${theme.bodyFont} text-sm space-y-2`}>
                <li>• Altitude sickness awareness</li>
                <li>• Stay hydrated</li>
                <li>• Basic first aid kit</li>
                <li>• Emergency contact numbers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transport;
