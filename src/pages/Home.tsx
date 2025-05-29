
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useContent } from '../contexts/ContentContext';
import { Calendar, Camera, Book, User, Navigation, Map } from 'lucide-react';

const Home = () => {
  const { theme } = useTheme();
  const { content } = useContent();

  const featuredSections = [
    {
      title: 'Culture & Traditions',
      description: 'Explore the rich cultural heritage of Sikkim',
      icon: Calendar,
      link: '/culture',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Natural Beauty',
      description: 'Discover the breathtaking landscapes and wildlife',
      icon: Camera,
      link: '/nature',
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'Rich History',
      description: 'Journey through Sikkim\'s fascinating past',
      icon: Book,
      link: '/history',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Local People',
      description: 'Meet the diverse communities of Sikkim',
      icon: User,
      link: '/people',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const spacingClass = theme.spacing === 'compact' ? 'py-2' : theme.spacing === 'relaxed' ? 'py-8' : 'py-4';

  return (
    <div className={`min-h-screen bg-${theme.backgroundColor}`}>
      {/* Hero Section */}
      <div className="relative h-96 md:h-screen bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className={`text-4xl md:text-6xl lg:text-7xl ${theme.headingFont} mb-6`}>
              Welcome to Sikkim
            </h1>
            <p className={`text-xl md:text-2xl ${theme.bodyFont} mb-8 opacity-90`}>
              Land of Mystical Mountains, Rich Culture, and Warm Hearts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/culture"
                className={`bg-${theme.primaryColor} hover:bg-${theme.secondaryColor} text-white px-8 py-3 rounded-lg text-lg ${theme.bodyFont} transition-colors duration-300`}
              >
                Explore Culture
              </Link>
              <Link
                to="/experiences"
                className={`bg-transparent border-2 border-white hover:bg-white hover:text-${theme.primaryColor} text-white px-8 py-3 rounded-lg text-lg ${theme.bodyFont} transition-colors duration-300`}
              >
                Plan Your Visit
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className={`${spacingClass} bg-${theme.backgroundColor}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl ${theme.headingFont} text-${theme.textColor} mb-6`}>
              Discover the Magic of Sikkim
            </h2>
            <p className={`text-lg text-${theme.textColor} opacity-80 max-w-3xl mx-auto ${theme.bodyFont}`}>
              Nestled in the Eastern Himalayas, Sikkim is a treasure trove of natural beauty, 
              ancient traditions, and diverse cultures. From the majestic Kanchenjunga to 
              colorful monasteries, every corner tells a story of harmony between nature and humanity.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Sections */}
      <div className={`${spacingClass} bg-gray-50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl ${theme.headingFont} text-center text-${theme.textColor} mb-12`}>
            Explore Sikkim
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredSections.map((section, index) => (
              <Link
                key={index}
                to={section.link}
                className="group transform hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className={`h-32 bg-gradient-to-r ${section.color} flex items-center justify-center`}>
                    <section.icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className={`text-xl ${theme.headingFont} text-${theme.textColor} mb-3`}>
                      {section.title}
                    </h3>
                    <p className={`text-${theme.textColor} opacity-70 ${theme.bodyFont}`}>
                      {section.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Blog Posts */}
      <div className={`${spacingClass} bg-${theme.backgroundColor}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className={`text-3xl ${theme.headingFont} text-${theme.textColor}`}>
              Latest Stories
            </h2>
            <Link
              to="/blog"
              className={`text-${theme.primaryColor} hover:text-${theme.secondaryColor} ${theme.bodyFont} transition-colors`}
            >
              View All Stories →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.blogPosts.filter(post => post.published).slice(0, 3).map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={post.featuredImage} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span 
                        key={tag}
                        className={`px-2 py-1 bg-${theme.primaryColor} bg-opacity-10 text-${theme.primaryColor} text-xs rounded`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className={`text-xl ${theme.headingFont} text-${theme.textColor} mb-2`}>
                    {post.title}
                  </h3>
                  <p className={`text-${theme.textColor} opacity-70 ${theme.bodyFont} text-sm mb-4`}>
                    {post.excerpt}
                  </p>
                  <div className={`text-sm text-${theme.textColor} opacity-60 ${theme.bodyFont}`}>
                    By {post.author} • {new Date(post.publishDate).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className={`${spacingClass} bg-${theme.primaryColor} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Navigation className="w-12 h-12 mx-auto mb-4" />
              <h3 className={`text-xl ${theme.headingFont} mb-2`}>Plan Your Journey</h3>
              <p className={`${theme.bodyFont} opacity-90 mb-4`}>
                Discover amazing experiences and plan your perfect trip to Sikkim
              </p>
              <Link to="/experiences" className="text-white hover:text-gray-200 underline">
                Explore Experiences
              </Link>
            </div>
            <div>
              <Map className="w-12 h-12 mx-auto mb-4" />
              <h3 className={`text-xl ${theme.headingFont} mb-2`}>Getting Around</h3>
              <p className={`${theme.bodyFont} opacity-90 mb-4`}>
                Find transportation options and routes throughout Sikkim
              </p>
              <Link to="/transport" className="text-white hover:text-gray-200 underline">
                View Transport Info
              </Link>
            </div>
            <div>
              <Book className="w-12 h-12 mx-auto mb-4" />
              <h3 className={`text-xl ${theme.headingFont} mb-2`}>Learn More</h3>
              <p className={`${theme.bodyFont} opacity-90 mb-4`}>
                Dive deeper into Sikkim's culture, history, and traditions
              </p>
              <Link to="/blog" className="text-white hover:text-gray-200 underline">
                Read Our Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
