import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useContent } from '../contexts/ContentContext';
import { Clock, MapPin, X, Calendar, Users, Crown } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { Button } from '../components/ui/button';

const History = () => {
  const { theme } = useTheme();
  const { content } = useContent();
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const spacingClass = theme.spacing === 'compact' ? 'py-2' : theme.spacing === 'relaxed' ? 'py-8' : 'py-4';

  const handleReadMore = (event: any) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  // Extended content for each historical event
  const getExtendedContent = (eventId: string) => {
    const extendedContent: { [key: string]: any } = {
      '1': {
        fullDescription: `In 1642, Phuntsog Namgyal was consecrated as the first Chogyal (king) of Sikkim at Yuksom by three Tibetan monks who came from Tibet. This historic event marked the beginning of the Namgyal dynasty that would rule Sikkim for over 333 years.

The establishment of the kingdom was not just a political event but also a spiritual one. The three monks - Lhatsun Namkha Jigme, Kathog Kuntu Zangpo, and Ngadak Sempa Chembo - recognized Phuntsog Namgyal as the rightful king through divine prophecy. They performed elaborate coronation ceremonies at Norbugang (now in Yuksom), which included the construction of the first monastery.

The new kingdom was strategically positioned between Tibet and the plains of Bengal, making it an important trade route. Phuntsog Namgyal established the capital at Yuksom and began the process of unifying the various tribal groups under one rule.`,
        keyFigures: ['Phuntsog Namgyal', 'Lhatsun Namkha Jigme', 'Kathog Kuntu Zangpo', 'Ngadak Sempa Chembo'],
        culturalImpact: 'Introduction of Tibetan Buddhism as state religion, establishment of monastery system',
        politicalImpact: 'Creation of centralized monarchy, unification of tribal territories',
        economicImpact: 'Establishment of trade routes between Tibet and Bengal plains',
        locations: ['Yuksom', 'Norbugang', 'Tashiding'],
        artifacts: ['Crown of Phuntsog Namgyal', 'Sacred texts from Tibet', 'Monastery bells']
      },
      '2': {
        fullDescription: `The merger of Sikkim with India in 1975 marked the end of the longest-ruling monarchy in the Himalayas and the beginning of Sikkim's journey as India's 22nd state. This transformation came after years of political upheaval, democratic movements, and changing geopolitical dynamics in the region.

The process began in the 1960s when democratic movements gained momentum among the Sikkimese people. The Sikkim National Congress, led by Kazi Lhendup Dorji, advocated for democratic reforms and closer ties with India. Political tensions escalated between the monarchy and pro-democracy forces.

In 1973, anti-monarchy demonstrations reached their peak, leading to the signing of the May 8th Agreement between India, Sikkim, and the Chogyal. This agreement effectively made Sikkim an associate state of India. The final referendum in 1975 saw an overwhelming 97.5% of votes in favor of merger with India.

The integration was remarkably peaceful and brought significant changes: democratic governance replaced monarchy, modern infrastructure development accelerated, and Sikkim gained representation in the Indian Parliament while preserving its unique cultural identity.`,
        keyFigures: ['Kazi Lhendup Dorji', 'Chogyal Palden Thondup Namgyal', 'Hope Cooke', 'Indira Gandhi'],
        culturalImpact: 'Preservation of Buddhist culture within Indian framework, cultural protection laws',
        politicalImpact: 'Transition from monarchy to democracy, integration into Indian federal system',
        economicImpact: 'Access to Indian markets, infrastructure development, tourism growth',
        locations: ['Gangtok', 'New Delhi', 'Yuksom', 'Pelling'],
        artifacts: ['Merger documents', 'Royal seal of last Chogyal', 'Referendum ballot papers']
      }
    };

    return extendedContent[eventId] || {
      fullDescription: 'Detailed information about this historical event is being compiled. This event played a crucial role in shaping modern Sikkim.',
      keyFigures: ['Historical figures involved'],
      culturalImpact: 'Significant cultural changes and influences',
      politicalImpact: 'Political developments and consequences',
      economicImpact: 'Economic transformations and effects',
      locations: ['Key locations involved'],
      artifacts: ['Important historical artifacts']
    };
  };

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
                <div className="ml-8 bg-white rounded-lg shadow-md p-6 flex-1 hover:shadow-lg transition-shadow">
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
                  
                  <div className={`bg-${theme.primaryColor} bg-opacity-10 p-4 rounded-lg mb-4`}>
                    <h4 className={`text-sm ${theme.headingFont} text-${theme.textColor} mb-2`}>
                      Historical Significance
                    </h4>
                    <p className={`text-${theme.textColor} opacity-80 ${theme.bodyFont} text-sm`}>
                      {event.significance}
                    </p>
                  </div>

                  <Button 
                    onClick={() => handleReadMore(event)}
                    className="w-full mt-4"
                    variant="outline"
                  >
                    Read More
                  </Button>
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

      {/* Detailed Content Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedEvent && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedEvent.title} ({selectedEvent.year})
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                {(() => {
                  const extended = getExtendedContent(selectedEvent.id);
                  return (
                    <>
                      {/* Full Description */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <Calendar className="w-5 h-5" />
                          Detailed Account
                        </h3>
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {extended.fullDescription}
                        </p>
                      </div>

                      {/* Key Figures */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <Users className="w-5 h-5" />
                          Key Figures
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {extended.keyFigures.map((figure: string, index: number) => (
                            <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                              {figure}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Impact Sections */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-800 mb-2">Cultural Impact</h4>
                          <p className="text-green-700 text-sm">{extended.culturalImpact}</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-800 mb-2">Political Impact</h4>
                          <p className="text-blue-700 text-sm">{extended.politicalImpact}</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-800 mb-2">Economic Impact</h4>
                          <p className="text-purple-700 text-sm">{extended.economicImpact}</p>
                        </div>
                      </div>

                      {/* Locations */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <MapPin className="w-5 h-5" />
                          Key Locations
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {extended.locations.map((location: string, index: number) => (
                            <span key={index} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                              {location}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Artifacts */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <Crown className="w-5 h-5" />
                          Historical Artifacts
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {extended.artifacts.map((artifact: string, index: number) => (
                            <span key={index} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                              {artifact}
                            </span>
                          ))}
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>

              <div className="flex justify-end mt-6">
                <Button onClick={closeModal} variant="outline">
                  Close
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default History;
