
import React, { useState } from 'react';
import { useContent } from '../../contexts/ContentContext';
import { useTheme } from '../../contexts/ThemeContext';
import { Save, Upload, Eye, EyeOff, ArrowUp, ArrowDown, Plus, Trash2 } from 'lucide-react';

const HomepageManager = () => {
  const { content, updateHomepageSettings } = useContent();
  const { theme } = useTheme();
  const [settings, setSettings] = useState(content.homepageSettings);

  const handleSave = () => {
    updateHomepageSettings(settings);
    // Show success feedback
    console.log('Homepage settings saved successfully');
  };

  const handleSectionToggle = (sectionId: string) => {
    setSettings(prev => ({
      ...prev,
      featuredSections: prev.featuredSections.map(section =>
        section.id === sectionId ? { ...section, enabled: !section.enabled } : section
      )
    }));
  };

  const handleSectionReorder = (sectionId: string, direction: 'up' | 'down') => {
    setSettings(prev => {
      const sections = [...prev.featuredSections];
      const currentIndex = sections.findIndex(s => s.id === sectionId);
      const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
      
      if (newIndex >= 0 && newIndex < sections.length) {
        [sections[currentIndex], sections[newIndex]] = [sections[newIndex], sections[currentIndex]];
        
        // Update order numbers
        sections.forEach((section, index) => {
          section.order = index + 1;
        });
      }
      
      return { ...prev, featuredSections: sections };
    });
  };

  const toggleFeaturedPost = (postId: string) => {
    setSettings(prev => {
      const isCurrentlyFeatured = prev.featuredBlogPostIds.includes(postId);
      const newFeaturedIds = isCurrentlyFeatured
        ? prev.featuredBlogPostIds.filter(id => id !== postId)
        : [...prev.featuredBlogPostIds, postId].slice(0, prev.maxFeaturedPosts);
      
      return { ...prev, featuredBlogPostIds: newFeaturedIds };
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className={`text-2xl ${theme.headingFont} text-${theme.textColor}`}>
            Homepage Management
          </h2>
          <p className={`text-${theme.textColor} opacity-70 ${theme.bodyFont} mt-1`}>
            Customize your homepage hero section and featured content
          </p>
        </div>
        <button
          onClick={handleSave}
          className={`flex items-center space-x-2 px-4 py-2 bg-${theme.primaryColor} hover:bg-${theme.secondaryColor} text-white rounded-lg transition-colors ${theme.bodyFont}`}
        >
          <Save className="w-4 h-4" />
          <span>Save Changes</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Hero Section Settings */}
        <div className="space-y-6">
          <h3 className={`text-lg ${theme.headingFont} text-${theme.textColor}`}>
            Hero Section
          </h3>
          
          {/* Hero Image */}
          <div>
            <label className={`block text-sm ${theme.headingFont} text-${theme.textColor} mb-2`}>
              Hero Background Image URL
            </label>
            <input
              type="url"
              value={settings.heroImage}
              onChange={(e) => setSettings(prev => ({ ...prev, heroImage: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://example.com/hero-image.jpg"
            />
          </div>

          {/* Hero Video (Optional) */}
          <div>
            <label className={`block text-sm ${theme.headingFont} text-${theme.textColor} mb-2`}>
              Hero Video URL (Optional)
            </label>
            <input
              type="url"
              value={settings.heroVideo || ''}
              onChange={(e) => setSettings(prev => ({ ...prev, heroVideo: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://example.com/hero-video.mp4"
            />
          </div>

          {/* Hero Title */}
          <div>
            <label className={`block text-sm ${theme.headingFont} text-${theme.textColor} mb-2`}>
              Hero Title
            </label>
            <input
              type="text"
              value={settings.heroTitle}
              onChange={(e) => setSettings(prev => ({ ...prev, heroTitle: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Hero Subtitle */}
          <div>
            <label className={`block text-sm ${theme.headingFont} text-${theme.textColor} mb-2`}>
              Hero Subtitle
            </label>
            <input
              type="text"
              value={settings.heroSubtitle}
              onChange={(e) => setSettings(prev => ({ ...prev, heroSubtitle: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Introduction Text */}
          <div>
            <label className={`block text-sm ${theme.headingFont} text-${theme.textColor} mb-2`}>
              Introduction Text
            </label>
            <textarea
              value={settings.introductionText}
              onChange={(e) => setSettings(prev => ({ ...prev, introductionText: e.target.value }))}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Featured Sections Management */}
        <div className="space-y-6">
          <h3 className={`text-lg ${theme.headingFont} text-${theme.textColor}`}>
            Featured Sections
          </h3>
          
          <div className="space-y-3">
            {settings.featuredSections.map((section, index) => (
              <div
                key={section.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
              >
                <div className="flex-1">
                  <h4 className={`${theme.headingFont} text-${theme.textColor}`}>
                    {section.title}
                  </h4>
                  <p className={`text-sm text-${theme.textColor} opacity-70 ${theme.bodyFont}`}>
                    {section.description}
                  </p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleSectionToggle(section.id)}
                    className={`p-2 rounded ${section.enabled ? 'text-green-600' : 'text-gray-400'}`}
                  >
                    {section.enabled ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </button>
                  
                  <button
                    onClick={() => handleSectionReorder(section.id, 'up')}
                    disabled={index === 0}
                    className="p-2 text-gray-600 hover:text-gray-800 disabled:opacity-30"
                  >
                    <ArrowUp className="w-4 h-4" />
                  </button>
                  
                  <button
                    onClick={() => handleSectionReorder(section.id, 'down')}
                    disabled={index === settings.featuredSections.length - 1}
                    className="p-2 text-gray-600 hover:text-gray-800 disabled:opacity-30"
                  >
                    <ArrowDown className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Blog Posts */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className={`text-lg ${theme.headingFont} text-${theme.textColor}`}>
            Featured Blog Posts
          </h3>
          <div className="flex items-center space-x-2">
            <span className={`text-sm ${theme.bodyFont} text-${theme.textColor}`}>
              Max posts:
            </span>
            <input
              type="number"
              min="1"
              max="6"
              value={settings.maxFeaturedPosts}
              onChange={(e) => setSettings(prev => ({ 
                ...prev, 
                maxFeaturedPosts: parseInt(e.target.value) || 3 
              }))}
              className="w-16 px-2 py-1 border border-gray-300 rounded text-center"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {content.blogPosts.filter(post => post.published).map((post) => (
            <div
              key={post.id}
              className={`p-4 border rounded-lg cursor-pointer transition-all ${
                settings.featuredBlogPostIds.includes(post.id)
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => toggleFeaturedPost(post.id)}
            >
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-32 object-cover rounded mb-3"
              />
              <h4 className={`${theme.headingFont} text-${theme.textColor} mb-1`}>
                {post.title}
              </h4>
              <p className={`text-sm text-${theme.textColor} opacity-70 ${theme.bodyFont}`}>
                {post.excerpt}
              </p>
              <div className="mt-2 text-xs text-gray-500">
                By {post.author} • {new Date(post.publishDate).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview */}
      <div className="border-t border-gray-200 pt-8">
        <h3 className={`text-lg ${theme.headingFont} text-${theme.textColor} mb-4`}>
          Hero Section Preview
        </h3>
        <div 
          className="relative h-64 bg-cover bg-center rounded-lg overflow-hidden"
          style={{ backgroundImage: `url(${settings.heroImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
            <div>
              <h1 className={`text-3xl md:text-4xl ${theme.headingFont} mb-3`}>
                {settings.heroTitle}
              </h1>
              <p className={`text-lg ${theme.bodyFont} opacity-90`}>
                {settings.heroSubtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageManager;
