
import React from 'react';
import { useContent } from '../contexts/ContentContext';
import { Camera, Leaf, Mountain, Bird, TreePine, Shield, Eye, MapPin } from 'lucide-react';

const Nature = () => {
  const { content } = useContent();

  const highlights = [
    {
      icon: Mountain,
      title: "Kanchenjunga National Park",
      description: "UNESCO World Heritage Site home to diverse flora and fauna",
      image: "/placeholder.svg"
    },
    {
      icon: Bird,
      title: "Himalayan Wildlife",
      description: "Red pandas, snow leopards, and 550+ bird species",
      image: "/placeholder.svg"
    },
    {
      icon: TreePine,
      title: "Alpine Forests",
      description: "Pristine rhododendron forests and medicinal plants",
      image: "/placeholder.svg"
    },
    {
      icon: Leaf,
      title: "Biodiversity Hotspot",
      description: "Over 4,000 flowering plants and rare orchids",
      image: "/placeholder.svg"
    }
  ];

  const conservationPrograms = [
    {
      title: "Community Forest Management",
      description: "Local communities actively participate in forest conservation and sustainable tourism practices.",
      impact: "Protected 2,500+ hectares"
    },
    {
      title: "Wildlife Corridor Protection",
      description: "Maintaining crucial wildlife corridors for animal migration and genetic diversity.",
      impact: "Connected 5 protected areas"
    },
    {
      title: "Organic Farming Initiative",
      description: "Promoting pesticide-free agriculture to protect soil and water resources.",
      impact: "100% organic state goal"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                <Leaf className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nature & Biodiversity
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Discover Sikkim's pristine ecosystems, from alpine meadows to subtropical forests, 
              home to some of the world's most endangered species.
            </p>
          </div>
        </div>
      </div>

      {/* Key Statistics */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">4,000+</div>
              <div className="text-slate-600">Flowering Plants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">550+</div>
              <div className="text-slate-600">Bird Species</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">35%</div>
              <div className="text-slate-600">Forest Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">8</div>
              <div className="text-slate-600">Protected Areas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Nature Highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Natural Treasures
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore the diverse ecosystems that make Sikkim a global biodiversity hotspot
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                <highlight.icon className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{highlight.title}</h3>
                <p className="text-slate-600">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Endemic Species</h3>
            <div className="space-y-4">
              {content.nature.wildlife.map((animal, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-emerald-500">
                  <h4 className="font-semibold text-slate-800 mb-2">{animal.name}</h4>
                  <p className="text-slate-600 mb-2">{animal.description}</p>
                  <div className="flex items-center text-sm text-emerald-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{animal.habitat}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Flora & Vegetation</h3>
            <div className="space-y-4">
              {content.nature.flora.map((plant, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500">
                  <h4 className="font-semibold text-slate-800 mb-2">{plant.name}</h4>
                  <p className="text-slate-600 mb-2">{plant.description}</p>
                  <div className="flex items-center text-sm text-teal-600">
                    <Eye className="w-4 h-4 mr-1" />
                    <span>Best seen: {plant.season}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Conservation Efforts */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <Shield className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Conservation Initiatives</h3>
            <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
              Sikkim leads India in environmental conservation with innovative programs 
              that balance development with ecological preservation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {conservationPrograms.map((program, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-3">{program.title}</h4>
                <p className="text-emerald-100 mb-4">{program.description}</p>
                <div className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium inline-block">
                  {program.impact}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Plan Your Nature Experience</h3>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Discover Sikkim's natural wonders through eco-friendly tours and sustainable tourism practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Explore Experiences
            </button>
            <button className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-lg font-medium transition-colors">
              Conservation Programs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nature;
