
import { BaseApiService } from './base.service';
import { IBlogPost, IPaginatedResponse } from '../../types/models';

export class BlogService extends BaseApiService {
  async getAllBlogs(page = 1, limit = 10, published?: boolean): Promise<{ data: IBlogPost[]; total: number; page: number; limit: number; totalPages: number }> {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...(published !== undefined && { published: published.toString() }),
    });

    return this.handlePaginatedRequest<IBlogPost>(
      this.axios.get(`/blogs?${params}`)
    );
  }

  async getBlogById(id: string): Promise<IBlogPost> {
    return this.handleRequest<IBlogPost>(
      this.axios.get(`/blogs/${id}`)
    );
  }

  async getBlogBySlug(slug: string): Promise<IBlogPost> {
    return this.handleRequest<IBlogPost>(
      this.axios.get(`/blogs/slug/${slug}`)
    );
  }

  async createBlog(blogData: Omit<IBlogPost, '_id' | 'createdAt' | 'updatedAt' | '__v' | 'slug'>): Promise<IBlogPost> {
    return this.handleRequest<IBlogPost>(
      this.axios.post('/blogs', blogData)
    );
  }

  async updateBlog(id: string, blogData: Partial<Omit<IBlogPost, '_id' | 'createdAt' | 'updatedAt' | '__v'>>): Promise<IBlogPost> {
    return this.handleRequest<IBlogPost>(
      this.axios.put(`/blogs/${id}`, blogData)
    );
  }

  async deleteBlog(id: string): Promise<void> {
    return this.handleRequest<void>(
      this.axios.delete(`/blogs/${id}`)
    );
  }

  async publishBlog(id: string): Promise<IBlogPost> {
    return this.handleRequest<IBlogPost>(
      this.axios.patch(`/blogs/${id}/publish`)
    );
  }

  async unpublishBlog(id: string): Promise<IBlogPost> {
    return this.handleRequest<IBlogPost>(
      this.axios.patch(`/blogs/${id}/unpublish`)
    );
  }
}

export const blogService = new BlogService();
