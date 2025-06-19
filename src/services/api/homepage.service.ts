
import { BaseApiService } from './base.service';
import { IHomepageSettings } from '../../types/models';

export class HomepageService extends BaseApiService {
  async getHomepageSettings(): Promise<IHomepageSettings> {
    return this.handleRequest<IHomepageSettings>(
      this.axios.get('/homepage')
    );
  }

  async updateHomepageSettings(settings: Partial<Omit<IHomepageSettings, '_id' | 'createdAt' | 'updatedAt' | '__v'>>): Promise<IHomepageSettings> {
    return this.handleRequest<IHomepageSettings>(
      this.axios.put('/homepage', settings)
    );
  }

  async publishHomepage(): Promise<IHomepageSettings> {
    return this.handleRequest<IHomepageSettings>(
      this.axios.patch('/homepage/publish')
    );
  }
}

export const homepageService = new HomepageService();
