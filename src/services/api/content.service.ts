
import { BaseApiService } from './base.service';
import { IContentSection, IContentEntry, ContentSectionType } from '../../types/models';

export class ContentService extends BaseApiService {
  async getContentSection(sectionType: ContentSectionType): Promise<IContentSection> {
    return this.handleRequest<IContentSection>(
      this.axios.get(`/content/${sectionType}`)
    );
  }

  async updateContentSection(sectionType: ContentSectionType, entries: Omit<IContentEntry, '_id' | 'createdAt' | 'updatedAt'>[]): Promise<IContentSection> {
    return this.handleRequest<IContentSection>(
      this.axios.put(`/content/${sectionType}`, { entries })
    );
  }

  async addContentEntry(sectionType: ContentSectionType, entry: Omit<IContentEntry, '_id' | 'createdAt' | 'updatedAt'>): Promise<IContentSection> {
    return this.handleRequest<IContentSection>(
      this.axios.post(`/content/${sectionType}/entries`, entry)
    );
  }

  async updateContentEntry(sectionType: ContentSectionType, entryId: string, entry: Partial<Omit<IContentEntry, '_id' | 'createdAt' | 'updatedAt'>>): Promise<IContentSection> {
    return this.handleRequest<IContentSection>(
      this.axios.put(`/content/${sectionType}/entries/${entryId}`, entry)
    );
  }

  async deleteContentEntry(sectionType: ContentSectionType, entryId: string): Promise<IContentSection> {
    return this.handleRequest<IContentSection>(
      this.axios.delete(`/content/${sectionType}/entries/${entryId}`)
    );
  }
}

export const contentService = new ContentService();
