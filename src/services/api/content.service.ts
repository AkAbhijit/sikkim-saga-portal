
import { BaseApiService } from './base.service';
import { IContentSection, IContentEntry, ContentSectionType } from '../../types/models';

export class ContentService extends BaseApiService {
  async getContentSection(sectionType: ContentSectionType): Promise<IContentSection> {
    return this.handleRequest(
      this.axios.get<IContentSection>(`/content/${sectionType}`)
    );
  }

  async updateContentSection(sectionType: ContentSectionType, entries: Omit<IContentEntry, '_id' | 'createdAt' | 'updatedAt'>[]): Promise<IContentSection> {
    return this.handleRequest(
      this.axios.put<IContentSection>(`/content/${sectionType}`, { entries })
    );
  }

  async addContentEntry(sectionType: ContentSectionType, entry: Omit<IContentEntry, '_id' | 'createdAt' | 'updatedAt'>): Promise<IContentSection> {
    return this.handleRequest(
      this.axios.post<IContentSection>(`/content/${sectionType}/entries`, entry)
    );
  }

  async updateContentEntry(sectionType: ContentSectionType, entryId: string, entry: Partial<Omit<IContentEntry, '_id' | 'createdAt' | 'updatedAt'>>): Promise<IContentSection> {
    return this.handleRequest(
      this.axios.put<IContentSection>(`/content/${sectionType}/entries/${entryId}`, entry)
    );
  }

  async deleteContentEntry(sectionType: ContentSectionType, entryId: string): Promise<IContentSection> {
    return this.handleRequest(
      this.axios.delete<IContentSection>(`/content/${sectionType}/entries/${entryId}`)
    );
  }
}

export const contentService = new ContentService();
