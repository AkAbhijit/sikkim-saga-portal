
import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import ThemeCustomizer from '../components/admin/ThemeCustomizer';
import ContentManager from '../components/admin/ContentManager';
import HomepageManager from '../components/admin/HomepageManager';
import AdminLogin from '../components/admin/AdminLogin';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  Settings, 
  FileText, 
  Eye, 
  Home, 
  LogOut, 
  BarChart3, 
  Users, 
  Globe, 
  Palette,
  Activity,
  Calendar,
  TrendingUp,
  Clock
} from 'lucide-react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'homepage' | 'theme' | 'content' | 'preview'>('dashboard');
  const { theme } = useTheme();
  const { isAuthenticated, logout } = useAuth();

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  const stats = [
    { label: 'Total Pages', value: '8', icon: Globe, color: 'text-blue-600' },
    { label: 'Active Users', value: '1,234', icon: Users, color: 'text-green-600' },
    { label: 'Page Views', value: '12.5K', icon: Eye, color: 'text-purple-600' },
    { label: 'Bounce Rate', value: '24%', icon: TrendingUp, color: 'text-orange-600' },
  ];

  const recentActivities = [
    { action: 'Homepage updated', time: '2 minutes ago', type: 'update' },
    { action: 'New blog post published', time: '1 hour ago', type: 'create' },
    { action: 'Theme colors changed', time: '3 hours ago', type: 'edit' },
    { action: 'Content section modified', time: '1 day ago', type: 'update' },
  ];

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3, description: 'Overview and analytics' },
    { id: 'homepage', label: 'Homepage', icon: Home, description: 'Manage hero and featured content' },
    { id: 'theme', label: 'Theme', icon: Palette, description: 'Customize appearance' },
    { id: 'content', label: 'Content', icon: FileText, description: 'Manage site content' },
    { id: 'preview', label: 'Preview', icon: Eye, description: 'View live site' },
  ];

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl text-white p-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Welcome back!</h2>
            <p className="text-emerald-100 text-lg">
              Here's what's happening with your Sikkim Culture Portal
            </p>
          </div>
          <div className="hidden md:block">
            <Activity className="w-16 h-16 text-emerald-200" />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>Latest updates and changes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'create' ? 'bg-green-500' :
                    activity.type === 'update' ? 'bg-blue-500' : 'bg-yellow-500'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common management tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button 
                variant="outline" 
                className="h-20 flex-col gap-2"
                onClick={() => setActiveTab('homepage')}
              >
                <Home className="w-6 h-6" />
                <span className="text-sm">Edit Homepage</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-20 flex-col gap-2"
                onClick={() => setActiveTab('theme')}
              >
                <Palette className="w-6 h-6" />
                <span className="text-sm">Change Theme</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-20 flex-col gap-2"
                onClick={() => setActiveTab('content')}
              >
                <FileText className="w-6 h-6" />
                <span className="text-sm">Manage Content</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-20 flex-col gap-2"
              >
                <Eye className="w-6 h-6" />
                <a href="/" target="_blank" rel="noopener noreferrer" className="text-sm">
                  View Site
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Site Health */}
      <Card>
        <CardHeader>
          <CardTitle>Site Health</CardTitle>
          <CardDescription>Current status and performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Activity className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-green-600">Excellent</h3>
              <p className="text-sm text-muted-foreground">Site Performance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-blue-600">Online</h3>
              <p className="text-sm text-muted-foreground">Site Status</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-purple-600">Up to Date</h3>
              <p className="text-sm text-muted-foreground">Last Updated</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800">
                  Admin Portal
                </h1>
                <p className="text-sm text-slate-600">
                  Sikkim Culture Management System
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                Online
              </Badge>
              <Button
                variant="outline"
                size="sm"
                onClick={logout}
                className="flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-emerald-500 text-emerald-600'
                    : 'border-transparent text-slate-600 hover:text-slate-800 hover:border-slate-300'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <div className="text-left">
                  <div className="font-medium">{tab.label}</div>
                  <div className="text-xs text-slate-500">{tab.description}</div>
                </div>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'homepage' && <HomepageManager />}
        {activeTab === 'theme' && <ThemeCustomizer />}
        {activeTab === 'content' && <ContentManager />}
        {activeTab === 'preview' && (
          <Card className="p-8 text-center">
            <div className="max-w-md mx-auto">
              <Eye className="w-16 h-16 mx-auto text-slate-400 mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Live Preview
              </h3>
              <p className="text-slate-600 mb-6">
                Open your site in a new tab to see live changes as you make them
              </p>
              <Button asChild className="w-full">
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Open Live Preview
                </a>
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Admin;
