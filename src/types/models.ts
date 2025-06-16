
// Base interface for all models with common fields
export interface BaseModel {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  __v?: number;
}

// User related interfaces
export interface IUser extends BaseModel {
  username: string;
  email: string;
  password: string;
  role: 'superadmin' | 'editor';
}

// Blog related interfaces
export interface IBlogPost extends BaseModel {
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  thumbnailUrl?: string;
  tags: string[];
  author: string;
  published: boolean;
  publishedAt?: Date;
}

// Contact related interfaces
export interface IContactMessage extends BaseModel {
  name: string;
  email: string;
  message: string;
}

// Content Section related interfaces
export interface IContentEntry {
  _id: string;
  title: string;
  content: string;
  imageUrl?: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ContentSectionType = 'culture' | 'history' | 'people' | 'nature';

export interface IContentSection extends BaseModel {
  sectionType: ContentSectionType;
  entries: IContentEntry[];
}

// Event related interfaces
export interface IEvent extends BaseModel {
  title: string;
  description: string;
  date: Date;
  location: string;
  imageUrl: string;
  tags?: string[];
}

// Experience related interfaces
export interface IExperience extends BaseModel {
  title: string;
  description: string;
  location?: string;
  price?: string;
  imageUrl?: string;
  category: string;
  tips?: string;
}

// Gallery related interfaces
export interface IGalleryImage extends BaseModel {
  title: string;
  description?: string;
  imageUrl: string;
  category: string;
  tags: string[];
}

// Homepage related interfaces
export interface IHomepageBanner {
  imageUrl: string;
  caption?: string;
  link?: string;
}

export interface IHomepageHero {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface IHomepageSettings extends BaseModel {
  hero: IHomepageHero;
  featuredBlogs: string[] | IBlogPost[]; // Can be array of IDs or populated BlogPosts
  banners: IHomepageBanner[];
  isPublished: boolean;
}

// SEO related interfaces
export interface ISEOMeta extends BaseModel {
  page: string;
  title: string;
  description?: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

// Testimonial related interfaces
export interface ITestimonial extends BaseModel {
  name: string;
  message: string;
  approved: boolean;
}

// Theme related interfaces
export type ThemeSpacing = 'compact' | 'normal' | 'relaxed';

export interface IThemeSettings extends BaseModel {
  singleton: boolean;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  headingFont: string;
  bodyFont: string;
  spacing: ThemeSpacing;
}

// Transport related interfaces
export interface ITransportInfo extends BaseModel {
  type: string;
  description: string;
  costRange?: string;
  availability?: string;
  tips?: string;
  imageUrl?: string;
}

// Response interfaces
export interface IApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}

export interface IPaginatedResponse<T> extends IApiResponse<T[]> {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Authentication related interfaces
export interface IAuthResponse {
  user: Omit<IUser, 'password'>;
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface ILoginCredentials {
  username: string;
  password: string;
}

// Legacy interfaces for backward compatibility (to be removed after migration)
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  publishDate: string;
  category: string;
  tags: string[];
  featuredImage: string;
  published: boolean;
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  type: string;
  location: string;
  duration: string;
  cost: string;
  image: string;
}

export interface CultureItem {
  id: string;
  title: string;
  description: string;
  type: string;
  ethnicGroup: string;
  images: string[];
}
