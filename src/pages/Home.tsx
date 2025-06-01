
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useContent } from '../contexts/ContentContext';
import { Calendar, Camera, Book, User, Navigation, Map, ArrowRight, Star } from 'lucide-react';

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
    culture: 'from-purple-600 to-purple-800',
    nature: 'from-emerald-600 to-emerald-800',
    history: 'from-amber-600 to-amber-800',
    people: 'from-rose-600 to-rose-800',
    experiences: 'from-blue-600 to-blue-800',
    transport: 'from-teal-600 to-teal-800'
  };

  const spacingClass = theme.spacing === 'compact' ? 'py-12' : theme.spacing === 'relaxed' ? 'py-20' : 'py-16';

  // Get featured blog posts based on admin settings with safe fallbacks
  const featuredPosts = content.blogPosts
    .filter(post => post.published && settings.featuredBlogPostIds.includes(post.id))
    .slice(0, settings.maxFeaturedPosts);

  // Get enabled and sorted featured sections with safe fallbacks
  const enabledSections = settings.featuredSections
    .filter(section => section.enabled)
    .sort((a, b) => a.order - b.order);

  return (
    <div className={`min-h-screen bg-${theme.backgroundColor}`}>
      {/* Hero Section */}
      <div 
        className="relative h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(30, 41, 59, 0.8)), url(${settings.heroImage})`
        }}
      >
        {settings.heroVideo && (
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={settings.heroVideo} type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-blue-900/60 to-slate-800/70"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-6">
              <span className={`inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm ${theme.bodyFont} text-white/90 mb-8`}>
                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                Discover the Hidden Gem of the Himalayas
              </span>
            </div>
            <h1 className={`text-5xl md:text-7xl lg:text-8xl ${theme.headingFont} mb-8 font-bold leading-tight`}>
              {settings.heroTitle}
            </h1>
            <p className={`text-xl md:text-2xl lg:text-3xl ${theme.bodyFont} mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed font-light`}>
              {settings.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/culture"
                className={`group inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-slate-900 rounded-lg text-lg ${theme.bodyFont} font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl`}
              >
                Explore Culture
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/experiences"
                className={`group inline-flex items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white rounded-lg text-lg ${theme.bodyFont} font-semibold transition-all duration-300 transform hover:scale-105`}
              >
                Plan Your Visit
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className={`${spacingClass} bg-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className={`text-4xl md:text-5xl ${theme.headingFont} text-slate-900 mb-8 font-bold`}>
              Discover the Magic of Sikkim
            </h2>
            <p className={`text-xl text-slate-600 leading-relaxed ${theme.bodyFont} font-light`}>
              {settings.introductionText}
            </p>
          </div>
        </div>
      </div>

      {/* Featured Sections */}
      {enabledSections.length > 0 && (
        <div className={`${spacingClass} bg-slate-50`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl ${theme.headingFont} text-slate-900 mb-6 font-bold`}>
                Explore Sikkim
              </h2>
              <p className={`text-xl text-slate-600 max-w-3xl mx-auto ${theme.bodyFont}`}>
                Immerse yourself in the diverse experiences that make Sikkim truly extraordinary
              </p>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${Math.min(enabledSections.length, 4)} gap-8`}>
              {enabledSections.map((section) => {
                const IconComponent = sectionIcons[section.id as keyof typeof sectionIcons] || Calendar;
                const colorClass = sectionColors[section.id as keyof typeof sectionColors] || 'from-gray-600 to-gray-800';
                
                return (
                  <Link
                    key={section.id}
                    to={section.link}
                    className="group transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100 transition-all duration-300">
                      <div className={`h-40 bg-gradient-to-br ${colorClass} flex items-center justify-center relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/10"></div>
                        <IconComponent className="w-16 h-16 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="p-8">
                        <h3 className={`text-2xl ${theme.headingFont} text-slate-900 mb-4 font-bold`}>
                          {section.title}
                        </h3>
                        <p className={`text-slate-600 ${theme.bodyFont} leading-relaxed`}>
                          {section.description}
                        </p>
                        <div className="flex items-center mt-6 text-blue-600 group-hover:text-blue-800 transition-colors">
                          <span className={`${theme.bodyFont} font-semibold`}>Learn More</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Featured Blog Posts */}
      {featuredPosts.length > 0 && (
        <div className={`${spacingClass} bg-white`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-16">
              <div>
                <h2 className={`text-4xl md:text-5xl ${theme.headingFont} text-slate-900 mb-4 font-bold`}>
                  Latest Stories
                </h2>
                <p className={`text-xl text-slate-600 ${theme.bodyFont}`}>
                  Discover authentic stories from the heart of Sikkim
                </p>
              </div>
              <Link
                to="/blog"
                className={`hidden md:inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg ${theme.bodyFont} font-semibold transition-all duration-300 transform hover:scale-105`}
              >
                View All Stories
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100 transition-all duration-300 transform hover:scale-105">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.featuredImage} 
                      alt={post.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span 
                          key={tag}
                          className={`px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full ${theme.bodyFont} font-medium`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className={`text-2xl ${theme.headingFont} text-slate-900 mb-3 font-bold group-hover:text-blue-600 transition-colors`}>
                      {post.title}
                    </h3>
                    <p className={`text-slate-600 ${theme.bodyFont} leading-relaxed mb-6`}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className={`text-sm text-slate-500 ${theme.bodyFont}`}>
                        <span className="font-semibold text-slate-700">{post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="text-center mt-12 md:hidden">
              <Link
                to="/blog"
                className={`inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg ${theme.bodyFont} font-semibold transition-all duration-300`}
              >
                View All Stories
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action Section */}
      <div className={`${spacingClass} bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="group">
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors">
                <Navigation className="w-10 h-10" />
              </div>
              <h3 className={`text-2xl ${theme.headingFont} mb-4 font-bold`}>Plan Your Journey</h3>
              <p className={`${theme.bodyFont} opacity-90 mb-6 leading-relaxed`}>
                Discover amazing experiences and plan your perfect trip to Sikkim with our comprehensive guides
              </p>
              <Link 
                to="/experiences" 
                className={`inline-flex items-center text-white hover:text-blue-300 underline decoration-2 underline-offset-4 ${theme.bodyFont} font-semibold transition-colors`}
              >
                Explore Experiences
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="group">
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors">
                <Map className="w-10 h-10" />
              </div>
              <h3 className={`text-2xl ${theme.headingFont} mb-4 font-bold`}>Getting Around</h3>
              <p className={`${theme.bodyFont} opacity-90 mb-6 leading-relaxed`}>
                Find transportation options and routes throughout Sikkim for a seamless travel experience
              </p>
              <Link 
                to="/transport" 
                className={`inline-flex items-center text-white hover:text-blue-300 underline decoration-2 underline-offset-4 ${theme.bodyFont} font-semibold transition-colors`}
              >
                View Transport Info
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="group">
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors">
                <Book className="w-10 h-10" />
              </div>
              <h3 className={`text-2xl ${theme.headingFont} mb-4 font-bold`}>Learn More</h3>
              <p className={`${theme.bodyFont} opacity-90 mb-6 leading-relaxed`}>
                Dive deeper into Sikkim's rich culture, fascinating history, and ancient traditions
              </p>
              <Link 
                to="/blog" 
                className={`inline-flex items-center text-white hover:text-blue-300 underline decoration-2 underline-offset-4 ${theme.bodyFont} font-semibold transition-colors`}
              >
                Read Our Blog
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
