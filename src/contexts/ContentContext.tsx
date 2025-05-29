
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  publishDate: string;
  tags: string[];
  category: string;
  published: boolean;
  featuredImage: string;
}

export interface CultureItem {
  id: string;
  title: string;
  description: string;
  ethnicGroup: string;
  images: string[];
  type: 'festival' | 'tradition' | 'art' | 'cuisine';
}

export interface HistoryEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  significance: string;
}

export interface NatureItem {
  id: string;
  title: string;
  description: string;
  type: 'wildlife' | 'peak' | 'conservation' | 'biodiversity';
  images: string[];
  location: string;
}

export interface PeopleProfile {
  id: string;
  name: string;
  occupation: string;
  community: string;
  story: string;
  image: string;
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  type: 'homestay' | 'festival' | 'trekking' | 'cultural';
  cost: string;
  duration: string;
  location: string;
  image: string;
}

export interface TransportRoute {
  id: string;
  from: string;
  to: string;
  mode: string;
  cost: string;
  duration: string;
  notes: string;
}

export interface ContentData {
  blogPosts: BlogPost[];
  cultureItems: CultureItem[];
  historyEvents: HistoryEvent[];
  natureItems: NatureItem[];
  peopleProfiles: PeopleProfile[];
  experiences: Experience[];
  transportRoutes: TransportRoute[];
}

const initialContent: ContentData = {
  blogPosts: [
    {
      id: '1',
      title: 'Discovering the Monasteries of Sikkim',
      content: 'Sikkim is home to numerous Buddhist monasteries, each with its own unique history and spiritual significance...',
      excerpt: 'Explore the ancient monasteries that dot the landscape of Sikkim',
      author: 'Cultural Team',
      publishDate: '2024-01-15',
      tags: ['Buddhism', 'Monasteries', 'Spirituality'],
      category: 'Culture',
      published: true,
      featuredImage: '/api/placeholder/600/400'
    },
    {
      id: '2',
      title: 'Losar: The Tibetan New Year in Sikkim',
      content: 'Losar is the most important festival for the Tibetan community in Sikkim, marking the beginning of the lunar new year...',
      excerpt: 'Experience the vibrant celebrations of Losar festival',
      author: 'Festival Guide',
      publishDate: '2024-02-10',
      tags: ['Losar', 'Festival', 'Tibetan Culture'],
      category: 'Festivals',
      published: true,
      featuredImage: '/api/placeholder/600/400'
    }
  ],
  cultureItems: [
    {
      id: '1',
      title: 'Cham Dance',
      description: 'Traditional Buddhist mask dance performed during monastery festivals',
      ethnicGroup: 'Bhutia',
      images: ['/api/placeholder/400/300'],
      type: 'art'
    },
    {
      id: '2',
      title: 'Momos',
      description: 'Traditional steamed dumplings, a beloved food of Sikkim',
      ethnicGroup: 'All Communities',
      images: ['/api/placeholder/400/300'],
      type: 'cuisine'
    }
  ],
  historyEvents: [
    {
      id: '1',
      year: '1642',
      title: 'Establishment of Sikkim Kingdom',
      description: 'Phuntsog Namgyal becomes the first Chogyal (king) of Sikkim',
      significance: 'Beginning of unified Sikkimese state'
    },
    {
      id: '2',
      year: '1975',
      title: 'Merger with India',
      description: 'Sikkim becomes the 22nd state of India',
      significance: 'Integration into Indian union while preserving cultural identity'
    }
  ],
  natureItems: [
    {
      id: '1',
      title: 'Kanchenjunga',
      description: 'The third highest mountain in the world, sacred to the people of Sikkim',
      type: 'peak',
      images: ['/api/placeholder/500/400'],
      location: 'North Sikkim'
    },
    {
      id: '2',
      title: 'Red Panda',
      description: 'State animal of Sikkim, found in the alpine forests',
      type: 'wildlife',
      images: ['/api/placeholder/500/400'],
      location: 'Throughout Sikkim'
    }
  ],
  peopleProfiles: [
    {
      id: '1',
      name: 'Pema Sherpa',
      occupation: 'Traditional Weaver',
      community: 'Sherpa',
      story: 'Pema has been weaving traditional carpets and textiles for over 30 years...',
      image: '/api/placeholder/300/300'
    }
  ],
  experiences: [
    {
      id: '1',
      title: 'Homestay in Yuksom',
      description: 'Experience traditional Sikkimese hospitality in the historic town',
      type: 'homestay',
      cost: '₹2000-3000 per night',
      duration: '1-7 days',
      location: 'Yuksom, West Sikkim',
      image: '/api/placeholder/400/300'
    }
  ],
  transportRoutes: [
    {
      id: '1',
      from: 'Gangtok',
      to: 'Pelling',
      mode: 'Shared Taxi',
      cost: '₹150-200',
      duration: '3-4 hours',
      notes: 'Scenic route through mountains'
    }
  ]
};

export interface ContentContextType {
  content: ContentData;
  updateContent: (section: keyof ContentData, data: any[]) => void;
  addItem: (section: keyof ContentData, item: any) => void;
  updateItem: (section: keyof ContentData, id: string, item: any) => void;
  deleteItem: (section: keyof ContentData, id: string) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<ContentData>(() => {
    const saved = localStorage.getItem('sikkim-content');
    return saved ? JSON.parse(saved) : initialContent;
  });

  useEffect(() => {
    localStorage.setItem('sikkim-content', JSON.stringify(content));
  }, [content]);

  const updateContent = (section: keyof ContentData, data: any[]) => {
    setContent(prev => ({ ...prev, [section]: data }));
  };

  const addItem = (section: keyof ContentData, item: any) => {
    setContent(prev => ({
      ...prev,
      [section]: [...prev[section], { ...item, id: Date.now().toString() }]
    }));
  };

  const updateItem = (section: keyof ContentData, id: string, item: any) => {
    setContent(prev => ({
      ...prev,
      [section]: prev[section].map((existing: any) => 
        existing.id === id ? { ...existing, ...item } : existing
      )
    }));
  };

  const deleteItem = (section: keyof ContentData, id: string) => {
    setContent(prev => ({
      ...prev,
      [section]: prev[section].filter((item: any) => item.id !== id)
    }));
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, addItem, updateItem, deleteItem }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within ContentProvider');
  }
  return context;
};
