
import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useContent } from '../../contexts/ContentContext';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';

const ContentManager = () => {
  const { theme } = useTheme();
  const { content, addItem, updateItem, deleteItem } = useContent();
  const [activeSection, setActiveSection] = useState<string>('blogPosts');
  const [editingItem, setEditingItem] = useState<any>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const sections = [
    { key: 'blogPosts', label: 'Blog Posts', icon: '📝' },
    { key: 'cultureItems', label: 'Culture Items', icon: '🎭' },
    { key: 'historyEvents', label: 'History Events', icon: '📜' },
    { key: 'natureItems', label: 'Nature Items', icon: '🌿' },
    { key: 'peopleProfiles', label: 'People Profiles', icon: '👥' },
    { key: 'experiences', label: 'Experiences', icon: '🎯' },
    { key: 'transportRoutes', label: 'Transport Routes', icon: '🚌' },
  ];

  const handleSave = (item: any) => {
    if (editingItem) {
      updateItem(activeSection as any, editingItem.id, item);
    } else {
      addItem(activeSection as any, item);
    }
    setEditingItem(null);
    setShowAddForm(false);
  };

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setShowAddForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this item?')) {
      deleteItem(activeSection as any, id);
    }
  };

  const renderForm = () => {
    const formData = editingItem || {};

    switch (activeSection) {
      case 'blogPosts':
        return (
          <BlogPostForm 
            data={formData} 
            onSave={handleSave} 
            onCancel={() => { setEditingItem(null); setShowAddForm(false); }}
          />
        );
      case 'cultureItems':
        return (
          <CultureItemForm 
            data={formData} 
            onSave={handleSave} 
            onCancel={() => { setEditingItem(null); setShowAddForm(false); }}
          />
        );
      case 'historyEvents':
        return (
          <HistoryEventForm 
            data={formData} 
            onSave={handleSave} 
            onCancel={() => { setEditingItem(null); setShowAddForm(false); }}
          />
        );
      case 'natureItems':
        return (
          <NatureItemForm 
            data={formData} 
            onSave={handleSave} 
            onCancel={() => { setEditingItem(null); setShowAddForm(false); }}
          />
        );
      case 'peopleProfiles':
        return (
          <PeopleProfileForm 
            data={formData} 
            onSave={handleSave} 
            onCancel={() => { setEditingItem(null); setShowAddForm(false); }}
          />
        );
      case 'experiences':
        return (
          <ExperienceForm 
            data={formData} 
            onSave={handleSave} 
            onCancel={() => { setEditingItem(null); setShowAddForm(false); }}
          />
        );
      case 'transportRoutes':
        return (
          <TransportRouteForm 
            data={formData} 
            onSave={handleSave} 
            onCancel={() => { setEditingItem(null); setShowAddForm(false); }}
          />
        );
      default:
        return null;
    }
  };

  const renderList = () => {
    const items = content[activeSection as keyof typeof content] as any[];
    
    return (
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h4 className={`text-lg ${theme.headingFont} text-${theme.textColor} mb-2`}>
                  {item.title || item.name || `${item.from} to ${item.to}` || item.year}
                </h4>
                <p className={`text-${theme.textColor} opacity-70 ${theme.bodyFont} text-sm`}>
                  {item.excerpt || item.description || item.story?.substring(0, 100) + '...' || item.notes}
                </p>
                {item.published !== undefined && (
                  <span className={`inline-block mt-2 px-2 py-1 text-xs rounded ${
                    item.published 
                      ? `bg-green-100 text-green-800` 
                      : `bg-red-100 text-red-800`
                  }`}>
                    {item.published ? 'Published' : 'Draft'}
                  </span>
                )}
              </div>
              <div className="flex space-x-2 ml-4">
                <button
                  onClick={() => handleEdit(item)}
                  className={`p-2 text-${theme.primaryColor} hover:bg-${theme.primaryColor} hover:text-white rounded transition-colors`}
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="p-2 text-red-500 hover:bg-red-500 hover:text-white rounded transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className={`text-2xl ${theme.headingFont} text-${theme.textColor}`}>
            Content Management
          </h2>
          <p className={`text-${theme.textColor} opacity-70 ${theme.bodyFont} mt-1`}>
            Manage all your website content from one place
          </p>
        </div>
        {!showAddForm && (
          <button
            onClick={() => setShowAddForm(true)}
            className={`flex items-center space-x-2 bg-${theme.primaryColor} hover:bg-${theme.secondaryColor} text-white px-4 py-2 rounded-lg transition-colors ${theme.bodyFont}`}
          >
            <Plus className="w-4 h-4" />
            <span>Add New</span>
          </button>
        )}
      </div>

      {/* Section Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8 overflow-x-auto">
          {sections.map((section) => (
            <button
              key={section.key}
              onClick={() => setActiveSection(section.key)}
              className={`flex items-center space-x-2 py-3 px-1 border-b-2 whitespace-nowrap ${theme.bodyFont} text-sm transition-colors ${
                activeSection === section.key
                  ? `border-${theme.primaryColor} text-${theme.primaryColor}`
                  : `border-transparent text-${theme.textColor} hover:text-${theme.primaryColor} hover:border-gray-300`
              }`}
            >
              <span>{section.icon}</span>
              <span>{section.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      {showAddForm ? (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className={`text-lg ${theme.headingFont} text-${theme.textColor} mb-4`}>
            {editingItem ? 'Edit' : 'Add New'} {sections.find(s => s.key === activeSection)?.label.slice(0, -1)}
          </h3>
          {renderForm()}
        </div>
      ) : (
        renderList()
      )}
    </div>
  );
};

// Form Components
const BlogPostForm: React.FC<{ data: any; onSave: (data: any) => void; onCancel: () => void }> = ({ data, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: data.title || '',
    content: data.content || '',
    excerpt: data.excerpt || '',
    author: data.author || '',
    publishDate: data.publishDate || new Date().toISOString().split('T')[0],
    tags: data.tags?.join(', ') || '',
    category: data.category || '',
    published: data.published || false,
    featuredImage: data.featuredImage || '/api/placeholder/600/400',
  });

  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Post Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
          required
        />
      </div>
      <textarea
        placeholder="Post Excerpt"
        value={formData.excerpt}
        onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
        rows={2}
        required
      />
      <textarea
        placeholder="Post Content"
        value={formData.content}
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
        rows={6}
        required
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Tags (comma separated)"
          value={formData.tags}
          onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
        />
        <input
          type="text"
          placeholder="Category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
        />
        <input
          type="date"
          value={formData.publishDate}
          onChange={(e) => setFormData({ ...formData, publishDate: e.target.value })}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
        />
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="published"
          checked={formData.published}
          onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
          className={`focus:ring-${theme.primaryColor}`}
        />
        <label htmlFor="published" className={`${theme.bodyFont} text-${theme.textColor}`}>
          Published
        </label>
      </div>
      <div className="flex space-x-4">
        <button
          type="submit"
          className={`flex items-center space-x-2 bg-${theme.primaryColor} hover:bg-${theme.secondaryColor} text-white px-4 py-2 rounded-lg transition-colors ${theme.bodyFont}`}
        >
          <Save className="w-4 h-4" />
          <span>Save</span>
        </button>
        <button
          type="button"
          onClick={onCancel}
          className={`flex items-center space-x-2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors ${theme.bodyFont}`}
        >
          <X className="w-4 h-4" />
          <span>Cancel</span>
        </button>
      </div>
    </form>
  );
};

const CultureItemForm: React.FC<{ data: any; onSave: (data: any) => void; onCancel: () => void }> = ({ data, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: data.title || '',
    description: data.description || '',
    ethnicGroup: data.ethnicGroup || '',
    type: data.type || 'tradition',
    images: data.images?.[0] || '/api/placeholder/400/300',
  });

  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      images: [formData.images],
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
          required
        />
        <select
          value={formData.ethnicGroup}
          onChange={(e) => setFormData({ ...formData, ethnicGroup: e.target.value })}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
          required
        >
          <option value="">Select Community</option>
          <option value="Bhutia">Bhutia</option>
          <option value="Lepcha">Lepcha</option>
          <option value="Nepali">Nepali</option>
          <option value="All Communities">All Communities</option>
        </select>
      </div>
      <select
        value={formData.type}
        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
        required
      >
        <option value="tradition">Tradition</option>
        <option value="festival">Festival</option>
        <option value="art">Art</option>
        <option value="cuisine">Cuisine</option>
      </select>
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
        rows={4}
        required
      />
      <div className="flex space-x-4">
        <button
          type="submit"
          className={`flex items-center space-x-2 bg-${theme.primaryColor} hover:bg-${theme.secondaryColor} text-white px-4 py-2 rounded-lg transition-colors ${theme.bodyFont}`}
        >
          <Save className="w-4 h-4" />
          <span>Save</span>
        </button>
        <button
          type="button"
          onClick={onCancel}
          className={`flex items-center space-x-2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors ${theme.bodyFont}`}
        >
          <X className="w-4 h-4" />
          <span>Cancel</span>
        </button>
      </div>
    </form>
  );
};

// ... Continue with other form components (HistoryEventForm, NatureItemForm, etc.)
const HistoryEventForm: React.FC<{ data: any; onSave: (data: any) => void; onCancel: () => void }> = ({ data, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    year: data.year || '',
    title: data.title || '',
    description: data.description || '',
    significance: data.significance || '',
  });

  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Year"
          value={formData.year}
          onChange={(e) => setFormData({ ...formData, year: e.target.value })}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
          required
        />
        <input
          type="text"
          placeholder="Event Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
          required
        />
      </div>
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
        rows={3}
        required
      />
      <textarea
        placeholder="Historical Significance"
        value={formData.significance}
        onChange={(e) => setFormData({ ...formData, significance: e.target.value })}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
        rows={3}
        required
      />
      <div className="flex space-x-4">
        <button
          type="submit"
          className={`flex items-center space-x-2 bg-${theme.primaryColor} hover:bg-${theme.secondaryColor} text-white px-4 py-2 rounded-lg transition-colors ${theme.bodyFont}`}
        >
          <Save className="w-4 h-4" />
          <span>Save</span>
        </button>
        <button
          type="button"
          onClick={onCancel}
          className={`flex items-center space-x-2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors ${theme.bodyFont}`}
        >
          <X className="w-4 h-4" />
          <span>Cancel</span>
        </button>
      </div>
    </form>
  );
};

const NatureItemForm: React.FC<{ data: any; onSave: (data: any) => void; onCancel: () => void }> = ({ data, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: data.title || '',
    description: data.description || '',
    type: data.type || 'wildlife',
    location: data.location || '',
    images: data.images?.[0] || '/api/placeholder/500/400',
  });

  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      images: [formData.images],
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
          required
        />
      </div>
      <select
        value={formData.type}
        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
        required
      >
        <option value="wildlife">Wildlife</option>
        <option value="peak">Peak</option>
        <option value="conservation">Conservation</option>
        <option value="biodiversity">Biodiversity</option>
      </select>
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
        rows={4}
        required
      />
      <div className="flex space-x-4">
        <button
          type="submit"
          className={`flex items-center space-x-2 bg-${theme.primaryColor} hover:bg-${theme.secondaryColor} text-white px-4 py-2 rounded-lg transition-colors ${theme.bodyFont}`}
        >
          <Save className="w-4 h-4" />
          <span>Save</span>
        </button>
        <button
          type="button"
          onClick={onCancel}
          className={`flex items-center space-x-2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors ${theme.bodyFont}`}
        >
          <X className="w-4 h-4" />
          <span>Cancel</span>
        </button>
      </div>
    </form>
  );
};

const PeopleProfileForm: React.FC<{ data: any; onSave: (data: any) => void; onCancel: () => void }> = ({ data, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: data.name || '',
    occupation: data.occupation || '',
    community: data.community || '',
    story: data.story || '',
    image: data.image || '/api/placeholder/300/300',
  });

  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
          required
        />
        <input
          type="text"
          placeholder="Occupation"
          value={formData.occupation}
          onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
          required
        />
        <select
          value={formData.community}
          onChange={(e) => setFormData({ ...formData, community: e.target.value })}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
          required
        >
          <option value="">Select Community</option>
          <option value="Bhutia">Bhutia</option>
          <option value="Lepcha">Lepcha</option>
          <option value="Nepali">Nepali</option>
          <option value="Sherpa">Sherpa</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <textarea
        placeholder="Personal Story"
        value={formData.story}
        onChange={(e) => setFormData({ ...formData, story: e.target.value })}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
        rows={5}
        required
      />
      <div className="flex space-x-4">
        <button
          type="submit"
          className={`flex items-center space-x-2 bg-${theme.primaryColor} hover:bg-${theme.secondaryColor} text-white px-4 py-2 rounded-lg transition-colors ${theme.bodyFont}`}
        >
          <Save className="w-4 h-4" />
          <span>Save</span>
        </button>
        <button
          type="button"
          onClick={onCancel}
          className={`flex items-center space-x-2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors ${theme.bodyFont}`}
        >
          <X className="w-4 h-4" />
          <span>Cancel</span>
        </button>
      </div>
    </form>
  );
};

const ExperienceForm: React.FC<{ data: any; onSave: (data: any) => void; onCancel: () => void }> = ({ data, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: data.title || '',
    description: data.description || '',
    type: data.type || 'homestay',
    cost: data.cost || '',
    duration: data.duration || '',
    location: data.location || '',
    image: data.image || '/api/placeholder/400/300',
  });

  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Experience Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
          required
        >
          <option value="homestay">Homestay</option>
          <option value="festival">Festival</option>
          <option value="trekking">Trekking</option>
          <option value="cultural">Cultural</option>
        </select>
        <input
          type="text"
          placeholder="Cost (e.g., ₹2000-3000)"
          value={formData.cost}
          onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
          required
        />
        <input
          type="text"
          placeholder="Duration (e.g., 1-3 days)"
          value={formData.duration}
          onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
          required
        />
      </div>
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
        rows={4}
        required
      />
      <div className="flex space-x-4">
        <button
          type="submit"
          className={`flex items-center space-x-2 bg-${theme.primaryColor} hover:bg-${theme.secondaryColor} text-white px-4 py-2 rounded-lg transition-colors ${theme.bodyFont}`}
        >
          <Save className="w-4 h-4" />
          <span>Save</span>
        </button>
        <button
          type="button"
          onClick={onCancel}
          className={`flex items-center space-x-2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors ${theme.bodyFont}`}
        >
          <X className="w-4 h-4" />
          <span>Cancel</span>
        </button>
      </div>
    </form>
  );
};

const TransportRouteForm: React.FC<{ data: any; onSave: (data: any) => void; onCancel: () => void }> = ({ data, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    from: data.from || '',
    to: data.to || '',
    mode: data.mode || '',
    cost: data.cost || '',
    duration: data.duration || '',
    notes: data.notes || '',
  });

  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="From"
          value={formData.from}
          onChange={(e) => setFormData({ ...formData, from: e.target.value })}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
          required
        />
        <input
          type="text"
          placeholder="To"
          value={formData.to}
          onChange={(e) => setFormData({ ...formData, to: e.target.value })}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Transport Mode"
          value={formData.mode}
          onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
          required
        />
        <input
          type="text"
          placeholder="Cost"
          value={formData.cost}
          onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
          required
        />
        <input
          type="text"
          placeholder="Duration"
          value={formData.duration}
          onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
          required
        />
      </div>
      <textarea
        placeholder="Additional Notes"
        value={formData.notes}
        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md ${theme.bodyFont} focus:outline-none focus:ring-2 focus:ring-${theme.primaryColor}`}
        rows={3}
      />
      <div className="flex space-x-4">
        <button
          type="submit"
          className={`flex items-center space-x-2 bg-${theme.primaryColor} hover:bg-${theme.secondaryColor} text-white px-4 py-2 rounded-lg transition-colors ${theme.bodyFont}`}
        >
          <Save className="w-4 h-4" />
          <span>Save</span>
        </button>
        <button
          type="button"
          onClick={onCancel}
          className={`flex items-center space-x-2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors ${theme.bodyFont}`}
        >
          <X className="w-4 h-4" />
          <span>Cancel</span>
        </button>
      </div>
    </form>
  );
};

export default ContentManager;
