
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useContent } from '../contexts/ContentContext';
import { Calendar, Camera, Book, User, Navigation, Map, ArrowRight, Star, CheckCircle, Globe, Users, Award } from 'lucide-react';

const Home = () => {
  const { theme } = useTheme();
  const { content } = useContent();
  const { homepageSettings } = content;

  // Add fallback values to prevent undefined errors
  const settings = homepageSettings || {
    heroImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    heroTitle: 'Welcome to Sikkim',
    heroSubtitle: 'Land of Mystical Mountains, Rich Culture, and Warm Hearts',
    introductionText: 'Nestled in the Eastern Himalayas, Sikkim is a treasure trove of natural beauty, ancient traditions, and diverse cultures.',
    featuredSections: [],
    featuredBlogPostIds: [],
    maxFeaturedPosts: 3
  };

  const sectionIcons = {
    culture: Calendar,
    nature: Camera,
    history: Book,
    people: User,
    experiences: Navigation,
    transport: Map
  };

  const sectionColors = {
    culture: 'from-purple-500 to-purple-700',
    nature: 'from-emerald-500 to-emerald-700',
    history: 'from-amber-500 to-amber-700',
    people: 'from-rose-500 to-rose-700',
    experiences: 'from-blue-500 to-blue-700',
    transport: 'from-teal-500 to-teal-700'
  };

  // Get featured blog posts based on admin settings with safe fallbacks
  const featuredPosts = content.blogPosts
    .filter(post => post.published && settings.featuredBlogPostIds.includes(post.id))
    .slice(0, settings.maxFeaturedPosts);

  // Get enabled and sorted featured sections with safe fallbacks
  const enabledSections = settings.featuredSections
    .filter(section => section.enabled)
    .sort((a, b) => a.order - b.order);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Professional Dark Theme */}
      <section 
        className="relative min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 overflow-hidden"
        style={{ 
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.75)), url(${settings.heroImage})`
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="max-w-6xl mx-auto text-center text-white">
            {/* Hero Badge */}
            <div className="mb-8">
              <span className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-white/90">
                <Star className="w-4 h-4 mr-2 text-emerald-400" />
                Discover the Hidden Gem of the Himalayas
              </span>
            </div>
            
            {/* Main Hero Content */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                {settings.heroTitle}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
              {settings.heroSubtitle}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                to="/culture"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/25"
              >
                Explore Culture
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/experiences"
                className="group inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Plan Your Visit
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">607,688</div>
                <div className="text-white/70">Total Population</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">7,096 km²</div>
                <div className="text-white/70">Total Area</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">4 Districts</div>
                <div className="text-white/70">Administrative Units</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Introduction Section - Clean White */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              Discover the Magic of Sikkim
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed font-light mb-12">
              {settings.introductionText}
            </p>
            
            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-slate-900">Rich Heritage</h3>
                  <p className="text-slate-600 text-sm">Ancient traditions preserved</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-slate-900">Diverse Culture</h3>
                  <p className="text-slate-600 text-sm">Multiple communities united</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-slate-900">Natural Beauty</h3>
                  <p className="text-slate-600 text-sm">Breathtaking landscapes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections - Light Gray Background */}
      {enabledSections.length > 0 && (
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Explore Sikkim
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Immerse yourself in the diverse experiences that make Sikkim truly extraordinary
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enabledSections.map((section) => {
                const IconComponent = sectionIcons[section.id as keyof typeof sectionIcons] || Calendar;
                const colorClass = sectionColors[section.id as keyof typeof sectionColors] || 'from-gray-500 to-gray-700';
                
                return (
                  <Link
                    key={section.id}
                    to={section.link}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100 transition-all duration-500 transform hover:-translate-y-2">
                      <div className={`h-48 bg-gradient-to-br ${colorClass} flex items-center justify-center relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors"></div>
                        <IconComponent className="w-16 h-16 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">
                          {section.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed mb-6">
                          {section.description}
                        </p>
                        <div className="flex items-center text-emerald-600 group-hover:text-emerald-700 transition-colors">
                          <span className="font-semibold">Learn More</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Featured Blog Posts - White Background */}
      {featuredPosts.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-20">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  Latest Stories
                </h2>
                <p className="text-xl text-slate-600">
                  Discover authentic stories from the heart of Sikkim
                </p>
              </div>
              <Link
                to="/blog"
                className="hidden md:inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View All Stories
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.featuredImage} 
                      alt={post.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-slate-500">
                        <span className="font-semibold text-slate-700">{post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action Section - Professional Dark Footer */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%,rgba(16,185,129,0.3),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Your Sikkim Journey
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Everything you need to explore, experience, and connect with the authentic spirit of Sikkim
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group text-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                <Navigation className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Plan Your Journey</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Discover amazing experiences and plan your perfect trip to Sikkim with our comprehensive guides
              </p>
              <Link 
                to="/experiences" 
                className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Explore Experiences
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            
            <div className="group text-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                <Map className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Getting Around</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Find transportation options and routes throughout Sikkim for a seamless travel experience
              </p>
              <Link 
                to="/transport" 
                className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View Transport Info
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            
            <div className="group text-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                <Book className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Learn More</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Dive deeper into Sikkim's rich culture, fascinating history, and ancient traditions
              </p>
              <Link 
                to="/blog" 
                className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Read Our Blog
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
