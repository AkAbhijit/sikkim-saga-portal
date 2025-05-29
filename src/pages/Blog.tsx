
import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useContent } from '../contexts/ContentContext';
import { Search, Calendar, User, Tag } from 'lucide-react';

const Blog = () => {
  const { theme } = useTheme();
  const { content } = useContent();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');

  const publishedPosts = content.blogPosts.filter(post => post.published);
  
  const categories = ['all', ...Array.from(new Set(publishedPosts.map(post => post.category)))];
  const allTags = Array.from(new Set(publishedPosts.flatMap(post => post.tags)));

  const filteredPosts = publishedPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  const spacingClass = theme.spacing === 'compact' ? 'py-2' : theme.spacing === 'relaxed' ? 'py-8' : 'py-4';

  return (
    <div className={`min-h-screen bg-${theme.backgroundColor}`}>
      {/* Header */}
      <div className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white ${spacingClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={`text-4xl md:text-5xl ${theme.headingFont} mb-4`}>
            Stories from Sikkim
          </h1>
          <p className={`text-xl ${theme.bodyFont} opacity-90 max-w-3xl`}>
            Discover the latest news, stories, and insights about Sikkim's culture, 
            nature, and people through our curated collection of articles.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className={`bg-white shadow-sm ${spacingClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
              />
            </div>

            {/* Category Filter */}
            <div className="lg:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Tag Filter */}
            <div className="lg:w-48">
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
              >
                <option value="all">All Tags</option>
                {allTags.map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className={`${spacingClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className={`text-lg text-${theme.textColor} ${theme.bodyFont}`}>
                No articles found matching your search criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={post.featuredImage} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    {/* Tags */}
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

                    {/* Title */}
                    <h2 className={`text-xl ${theme.headingFont} text-${theme.textColor} mb-3 hover:text-${theme.primaryColor} transition-colors`}>
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className={`text-${theme.textColor} opacity-70 ${theme.bodyFont} text-sm mb-4 line-clamp-3`}>
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span className={theme.bodyFont}>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span className={theme.bodyFont}>
                            {new Date(post.publishDate).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <span className={`px-2 py-1 bg-${theme.secondaryColor} bg-opacity-10 text-${theme.secondaryColor} text-xs rounded`}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Featured Tags */}
      <div className={`bg-gray-50 ${spacingClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-2xl ${theme.headingFont} text-${theme.textColor} mb-6 text-center`}>
            Popular Topics
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {allTags.slice(0, 10).map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 bg-white hover:bg-${theme.primaryColor} hover:text-white text-${theme.textColor} border border-gray-200 rounded-full transition-colors ${theme.bodyFont} text-sm`}
              >
                <Tag className="w-3 h-3 inline mr-1" />
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
