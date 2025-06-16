
import { IBlogPost, IExperience, IContentSection, ContentSectionType, IContentEntry, IThemeSettings, IHomepageSettings } from '../types/models';

// Mock data with new interface structure
const mockBlogPosts: IBlogPost[] = [
  {
    _id: '1',
    title: 'Traditional Festivals of Sikkim',
    slug: 'traditional-festivals-sikkim',
    content: 'Sikkim celebrates numerous traditional festivals throughout the year...',
    excerpt: 'Discover the vibrant festivals that bring communities together in Sikkim.',
    author: 'Cultural Team',
    publishedAt: new Date('2024-01-15'),
    tags: ['festivals', 'culture', 'traditions'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    published: true,
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    _id: '2',
    title: 'Mountain Trekking Adventures',
    slug: 'mountain-trekking-adventures',
    content: 'The Himalayas offer some of the world\'s most spectacular trekking routes...',
    excerpt: 'Experience breathtaking mountain adventures in the heart of the Himalayas.',
    author: 'Adventure Team',
    publishedAt: new Date('2024-02-01'),
    tags: ['trekking', 'adventure', 'mountains'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    published: true,
    createdAt: new Date('2024-01-25'),
    updatedAt: new Date('2024-02-01'),
  },
];

const mockExperiences: IExperience[] = [
  {
    _id: '1',
    title: 'Monastery Stay Experience',
    description: 'Stay in a traditional Buddhist monastery and experience monastic life.',
    location: 'Rumtek Monastery',
    price: '₹2000 per night',
    imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'cultural',
    tips: 'Respect monastery rules and participate in morning prayers.',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
  {
    _id: '2',
    title: 'Village Homestay',
    description: 'Live with local families and experience authentic village life.',
    location: 'Yuksom Village',
    price: '₹1500 per night',
    imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'homestay',
    tips: 'Learn some basic Nepali or Bhutia phrases to connect with hosts.',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
];

const mockContentSections: Record<ContentSectionType, IContentSection> = {
  culture: {
    _id: 'culture-section',
    sectionType: 'culture',
    entries: [
      {
        _id: 'culture-1',
        title: 'Losar Festival',
        content: 'The Tibetan New Year celebration is one of the most important festivals in Sikkim.',
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        updatedBy: 'admin',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
      },
    ],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
  history: {
    _id: 'history-section',
    sectionType: 'history',
    entries: [
      {
        _id: 'history-1',
        title: 'Kingdom of Sikkim',
        content: 'Sikkim was ruled by the Namgyal dynasty for over 300 years.',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        updatedBy: 'admin',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
      },
    ],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
  people: {
    _id: 'people-section',
    sectionType: 'people',
    entries: [
      {
        _id: 'people-1',
        title: 'Diverse Communities',
        content: 'Sikkim is home to Lepcha, Bhutia, and Nepali communities.',
        imageUrl: 'https://images.unsplash.com/photo-1529258283598-8d6fe60b27f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        updatedBy: 'admin',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
      },
    ],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
  nature: {
    _id: 'nature-section',
    sectionType: 'nature',
    entries: [
      {
        _id: 'nature-1',
        title: 'Himalayan Flora',
        content: 'Sikkim hosts over 4,000 species of flowering plants.',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        updatedBy: 'admin',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
      },
    ],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
};

export class MockApiService {
  // Blog methods
  async getBlogPosts(published?: boolean): Promise<IBlogPost[]> {
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
    return published !== undefined 
      ? mockBlogPosts.filter(post => post.published === published)
      : mockBlogPosts;
  }

  // Experience methods
  async getExperiences(): Promise<IExperience[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockExperiences;
  }

  // Content methods
  async getContentSection(sectionType: ContentSectionType): Promise<IContentSection> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockContentSections[sectionType];
  }

  // Theme methods
  async getThemeSettings(): Promise<IThemeSettings> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      _id: 'theme-settings',
      singleton: true,
      primaryColor: 'blue-600',
      secondaryColor: 'green-600',
      backgroundColor: 'white',
      textColor: 'gray-900',
      headingFont: 'font-bold',
      bodyFont: 'font-normal',
      spacing: 'normal',
      createdAt: new Date('2024-01-01'),
      updatedAt: new Date('2024-01-01'),
    };
  }

  async updateThemeSettings(settings: Partial<IThemeSettings>): Promise<IThemeSettings> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      _id: 'theme-settings',
      singleton: true,
      primaryColor: 'blue-600',
      secondaryColor: 'green-600',
      backgroundColor: 'white',
      textColor: 'gray-900',
      headingFont: 'font-bold',
      bodyFont: 'font-normal',
      spacing: 'normal',
      ...settings,
      createdAt: new Date('2024-01-01'),
      updatedAt: new Date(),
    };
  }

  // Homepage methods
  async getHomepageSettings(): Promise<IHomepageSettings> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      _id: 'homepage-settings',
      hero: {
        title: 'Welcome to Sikkim',
        subtitle: 'Land of Mystical Mountains, Rich Culture, and Warm Hearts',
        backgroundImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
        ctaText: 'Explore Now',
        ctaLink: '/culture',
      },
      featuredBlogs: mockBlogPosts.slice(0, 3),
      banners: [
        {
          imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          caption: 'Discover Sikkim',
          link: '/culture',
        },
      ],
      isPublished: true,
      createdAt: new Date('2024-01-01'),
      updatedAt: new Date('2024-01-01'),
    };
  }
}

export const mockApiService = new MockApiService();
