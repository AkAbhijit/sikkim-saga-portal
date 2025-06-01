
import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useContent } from '../contexts/ContentContext';
import { useAuth } from '../contexts/AuthContext';
import ThemeCustomizer from '../components/admin/ThemeCustomizer';
import ContentManager from '../components/admin/ContentManager';
import HomepageManager from '../components/admin/HomepageManager';
import AdminLogin from '../components/admin/AdminLogin';
import { Settings, FileText, Eye, Home, LogOut } from 'lucide-react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState<'homepage' | 'theme' | 'content' | 'preview'>('homepage');
  const { theme } = useTheme();
  const { isAuthenticated, logout } = useAuth();

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  const tabs = [
    { id: 'homepage', label: 'Homepage', icon: Home },
    { id: 'theme', label: 'Theme Settings', icon: Settings },
    { id: 'content', label: 'Content Management', icon: FileText },
    { id: 'preview', label: 'Live Preview', icon: Eye },
  ];

  return (
    <div className={`min-h-screen bg-${theme.backgroundColor}`}>
      {/* Header */}
      <div className={`bg-${theme.primaryColor} text-white py-6`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className={`text-3xl ${theme.headingFont}`}>
                Sikkim Culture Portal - Admin Panel
              </h1>
              <p className={`mt-2 ${theme.bodyFont} opacity-90`}>
                Manage your website content and customize the theme
              </p>
            </div>
            <button
              onClick={logout}
              className={`flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors ${theme.bodyFont}`}
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 ${theme.bodyFont} text-sm transition-colors ${
                  activeTab === tab.id
                    ? `border-${theme.primaryColor} text-${theme.primaryColor}`
                    : `border-transparent text-${theme.textColor} hover:text-${theme.primaryColor} hover:border-gray-300`
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'homepage' && <HomepageManager />}
        {activeTab === 'theme' && <ThemeCustomizer />}
        {activeTab === 'content' && <ContentManager />}
        {activeTab === 'preview' && (
          <div className="text-center py-12">
            <Eye className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className={`text-xl ${theme.headingFont} text-${theme.textColor} mb-2`}>
              Live Preview
            </h3>
            <p className={`text-${theme.textColor} opacity-70 ${theme.bodyFont} mb-6`}>
              Open your site in a new tab to see live changes
            </p>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-${theme.primaryColor} hover:bg-${theme.secondaryColor} text-white px-6 py-3 rounded-lg ${theme.bodyFont} transition-colors`}
            >
              Open Live Preview
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
