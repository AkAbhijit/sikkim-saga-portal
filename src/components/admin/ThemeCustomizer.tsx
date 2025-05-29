
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { RefreshCw, Palette, Type, Layout } from 'lucide-react';

const ThemeCustomizer = () => {
  const { theme, updateTheme, resetTheme } = useTheme();

  const colorOptions = [
    { name: 'Emerald', value: 'emerald-600', bg: 'bg-emerald-600' },
    { name: 'Blue', value: 'blue-600', bg: 'bg-blue-600' },
    { name: 'Purple', value: 'purple-600', bg: 'bg-purple-600' },
    { name: 'Red', value: 'red-600', bg: 'bg-red-600' },
    { name: 'Orange', value: 'orange-600', bg: 'bg-orange-600' },
    { name: 'Teal', value: 'teal-600', bg: 'bg-teal-600' },
  ];

  const secondaryColors = [
    { name: 'Orange', value: 'orange-500', bg: 'bg-orange-500' },
    { name: 'Pink', value: 'pink-500', bg: 'bg-pink-500' },
    { name: 'Yellow', value: 'yellow-500', bg: 'bg-yellow-500' },
    { name: 'Green', value: 'green-500', bg: 'bg-green-500' },
    { name: 'Indigo', value: 'indigo-500', bg: 'bg-indigo-500' },
    { name: 'Red', value: 'red-500', bg: 'bg-red-500' },
  ];

  const backgroundOptions = [
    { name: 'White', value: 'white', bg: 'bg-white border' },
    { name: 'Gray 50', value: 'gray-50', bg: 'bg-gray-50' },
    { name: 'Gray 100', value: 'gray-100', bg: 'bg-gray-100' },
    { name: 'Blue 50', value: 'blue-50', bg: 'bg-blue-50' },
    { name: 'Green 50', value: 'green-50', bg: 'bg-green-50' },
  ];

  const textColors = [
    { name: 'Gray 900', value: 'gray-900', bg: 'bg-gray-900' },
    { name: 'Gray 800', value: 'gray-800', bg: 'bg-gray-800' },
    { name: 'Black', value: 'black', bg: 'bg-black' },
    { name: 'Blue 900', value: 'blue-900', bg: 'bg-blue-900' },
  ];

  const fontOptions = [
    { name: 'Normal', value: 'font-normal' },
    { name: 'Medium', value: 'font-medium' },
    { name: 'Semibold', value: 'font-semibold' },
    { name: 'Bold', value: 'font-bold' },
  ];

  const spacingOptions = [
    { name: 'Compact', value: 'compact' },
    { name: 'Normal', value: 'normal' },
    { name: 'Relaxed', value: 'relaxed' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className={`text-2xl ${theme.headingFont} text-${theme.textColor}`}>
            Theme Customization
          </h2>
          <p className={`text-${theme.textColor} opacity-70 ${theme.bodyFont} mt-1`}>
            Customize the look and feel of your website
          </p>
        </div>
        <button
          onClick={resetTheme}
          className={`flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-${theme.textColor} rounded-lg transition-colors ${theme.bodyFont}`}
        >
          <RefreshCw className="w-4 h-4" />
          <span>Reset to Default</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Colors Section */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Palette className="w-5 h-5 text-gray-600" />
              <h3 className={`text-lg ${theme.headingFont} text-${theme.textColor}`}>Colors</h3>
            </div>

            {/* Primary Color */}
            <div className="mb-6">
              <label className={`block text-sm ${theme.headingFont} text-${theme.textColor} mb-3`}>
                Primary Color
              </label>
              <div className="grid grid-cols-3 gap-2">
                {colorOptions.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => updateTheme({ primaryColor: color.value })}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      theme.primaryColor === color.value
                        ? 'border-gray-900 scale-105'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className={`w-full h-8 ${color.bg} rounded mb-2`}></div>
                    <span className={`text-xs ${theme.bodyFont} text-${theme.textColor}`}>
                      {color.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Secondary Color */}
            <div className="mb-6">
              <label className={`block text-sm ${theme.headingFont} text-${theme.textColor} mb-3`}>
                Secondary Color
              </label>
              <div className="grid grid-cols-3 gap-2">
                {secondaryColors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => updateTheme({ secondaryColor: color.value })}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      theme.secondaryColor === color.value
                        ? 'border-gray-900 scale-105'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className={`w-full h-8 ${color.bg} rounded mb-2`}></div>
                    <span className={`text-xs ${theme.bodyFont} text-${theme.textColor}`}>
                      {color.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Background Color */}
            <div className="mb-6">
              <label className={`block text-sm ${theme.headingFont} text-${theme.textColor} mb-3`}>
                Background Color
              </label>
              <div className="grid grid-cols-3 gap-2">
                {backgroundOptions.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => updateTheme({ backgroundColor: color.value })}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      theme.backgroundColor === color.value
                        ? 'border-gray-900 scale-105'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className={`w-full h-8 ${color.bg} rounded mb-2`}></div>
                    <span className={`text-xs ${theme.bodyFont} text-${theme.textColor}`}>
                      {color.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Text Color */}
            <div>
              <label className={`block text-sm ${theme.headingFont} text-${theme.textColor} mb-3`}>
                Text Color
              </label>
              <div className="grid grid-cols-2 gap-2">
                {textColors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => updateTheme({ textColor: color.value })}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      theme.textColor === color.value
                        ? 'border-gray-900 scale-105'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className={`w-full h-8 ${color.bg} rounded mb-2`}></div>
                    <span className={`text-xs ${theme.bodyFont} text-${theme.textColor}`}>
                      {color.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Typography & Layout Section */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Type className="w-5 h-5 text-gray-600" />
              <h3 className={`text-lg ${theme.headingFont} text-${theme.textColor}`}>Typography</h3>
            </div>

            {/* Heading Font */}
            <div className="mb-6">
              <label className={`block text-sm ${theme.headingFont} text-${theme.textColor} mb-3`}>
                Heading Font Weight
              </label>
              <div className="grid grid-cols-2 gap-2">
                {fontOptions.map((font) => (
                  <button
                    key={font.value}
                    onClick={() => updateTheme({ headingFont: font.value })}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      theme.headingFont === font.value
                        ? 'border-gray-900 bg-gray-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <span className={`${font.value} text-${theme.textColor}`}>
                      {font.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Body Font */}
            <div className="mb-6">
              <label className={`block text-sm ${theme.headingFont} text-${theme.textColor} mb-3`}>
                Body Font Weight
              </label>
              <div className="grid grid-cols-2 gap-2">
                {fontOptions.slice(0, 3).map((font) => (
                  <button
                    key={font.value}
                    onClick={() => updateTheme({ bodyFont: font.value })}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      theme.bodyFont === font.value
                        ? 'border-gray-900 bg-gray-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <span className={`${font.value} text-${theme.textColor}`}>
                      {font.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Layout className="w-5 h-5 text-gray-600" />
              <h3 className={`text-lg ${theme.headingFont} text-${theme.textColor}`}>Layout</h3>
            </div>

            {/* Spacing */}
            <div>
              <label className={`block text-sm ${theme.headingFont} text-${theme.textColor} mb-3`}>
                Section Spacing
              </label>
              <div className="grid grid-cols-3 gap-2">
                {spacingOptions.map((spacing) => (
                  <button
                    key={spacing.value}
                    onClick={() => updateTheme({ spacing: spacing.value as any })}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      theme.spacing === spacing.value
                        ? 'border-gray-900 bg-gray-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <span className={`${theme.bodyFont} text-${theme.textColor}`}>
                      {spacing.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Preview */}
      <div className="border-t border-gray-200 pt-8">
        <h3 className={`text-lg ${theme.headingFont} text-${theme.textColor} mb-4`}>
          Theme Preview
        </h3>
        <div className={`bg-${theme.backgroundColor} border border-gray-200 rounded-lg p-6`}>
          <div className={`bg-${theme.primaryColor} text-white p-4 rounded-lg mb-4`}>
            <h4 className={`text-xl ${theme.headingFont}`}>Sample Header</h4>
            <p className={`${theme.bodyFont} opacity-90`}>This is how your primary color looks</p>
          </div>
          <h4 className={`text-lg ${theme.headingFont} text-${theme.textColor} mb-2`}>
            Sample Heading
          </h4>
          <p className={`text-${theme.textColor} ${theme.bodyFont} mb-4`}>
            This is sample body text using your selected typography and color settings.
          </p>
          <button className={`bg-${theme.secondaryColor} text-white px-4 py-2 rounded ${theme.bodyFont}`}>
            Sample Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeCustomizer;
