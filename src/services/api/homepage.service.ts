
import { BaseApiService } from './base.service';
import { IHomepageSettings } from '../../types/models';

export class HomepageService extends BaseApiService {
  async getHomepageSettings(): Promise<IHomepageSettings> {
    return this.handleRequest(
      this.axios.get<IHomepageSettings>('/homepage')
    );
  }

  async updateHomepageSettings(settings: Partial<Omit<IHomepageSettings, '_id' | 'createdAt' | 'updatedAt' | '__v'>>): Promise<IHomepageSettings> {
    return this.handleRequest(
      this.axios.put<IHomepageSettings>('/homepage', settings)
    );
  }

  async publishHomepage(): Promise<IHomepageSettings> {
    return this.handleRequest(
      this.axios.patch<IHomepageSettings>('/homepage/publish')
    );
  }
}

export const homepageService = new HomepageService();
