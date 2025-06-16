
import { BaseApiService } from './base.service';
import { IThemeSettings } from '../../types/models';

export class ThemeService extends BaseApiService {
  async getThemeSettings(): Promise<IThemeSettings> {
    return this.handleRequest(
      this.axios.get<IThemeSettings>('/theme')
    );
  }

  async updateThemeSettings(settings: Partial<Omit<IThemeSettings, '_id' | 'createdAt' | 'updatedAt' | '__v' | 'singleton'>>): Promise<IThemeSettings> {
    return this.handleRequest(
      this.axios.put<IThemeSettings>('/theme', settings)
    );
  }
}

export const themeService = new ThemeService();
