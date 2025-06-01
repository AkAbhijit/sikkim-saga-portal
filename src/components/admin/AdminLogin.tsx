
import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import { LogIn, Shield } from 'lucide-react';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const { theme } = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const success = await login(username, password);
      if (!success) {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`min-h-screen bg-${theme.backgroundColor} flex items-center justify-center px-4`}>
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Shield className={`mx-auto h-16 w-16 text-${theme.primaryColor}`} />
          <h2 className={`mt-6 text-3xl ${theme.headingFont} text-${theme.textColor}`}>
            Admin Login
          </h2>
          <p className={`mt-2 text-sm text-${theme.textColor} opacity-70 ${theme.bodyFont}`}>
            Sign in to access the admin panel
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className={`block text-sm ${theme.headingFont} text-${theme.textColor} mb-2`}>
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter username"
              />
            </div>
            
            <div>
              <label htmlFor="password" className={`block text-sm ${theme.headingFont} text-${theme.textColor} mb-2`}>
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter password"
              />
            </div>
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center">
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-${theme.primaryColor} hover:bg-${theme.secondaryColor} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${theme.primaryColor} disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${theme.bodyFont}`}
            >
              <LogIn className="w-5 h-5 mr-2" />
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
          
          <div className="text-center">
            <p className={`text-xs text-${theme.textColor} opacity-60 ${theme.bodyFont}`}>
              Default credentials: admin / admin123
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
