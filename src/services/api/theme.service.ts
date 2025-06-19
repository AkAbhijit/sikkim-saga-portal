
import { BaseApiService } from './base.service';
import { IThemeSettings } from '../../types/models';

export class ThemeService extends BaseApiService {
  async getThemeSettings(): Promise<IThemeSettings> {
    return this.handleRequest<IThemeSettings>(
      this.axios.get('/theme')
    );
  }

  async updateThemeSettings(settings: Partial<Omit<IThemeSettings, '_id' | 'createdAt' | 'updatedAt' | '__v' | 'singleton'>>): Promise<IThemeSettings> {
    return this.handleRequest<IThemeSettings>(
      this.axios.put('/theme', settings)
    );
  }
}

export const themeService = new ThemeService();
