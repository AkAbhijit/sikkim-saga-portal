
import { BaseApiService } from './base.service';
import { IExperience, IPaginatedResponse } from '../../types/models';

export class ExperienceService extends BaseApiService {
  async getAllExperiences(page = 1, limit = 10, category?: string): Promise<{ data: IExperience[]; total: number; page: number; limit: number; totalPages: number }> {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...(category && { category }),
    });

    return this.handlePaginatedRequest<IExperience>(
      this.axios.get(`/experiences?${params}`)
    );
  }

  async getExperienceById(id: string): Promise<IExperience> {
    return this.handleRequest<IExperience>(
      this.axios.get(`/experiences/${id}`)
    );
  }

  async createExperience(experienceData: Omit<IExperience, '_id' | 'createdAt' | 'updatedAt' | '__v'>): Promise<IExperience> {
    return this.handleRequest<IExperience>(
      this.axios.post('/experiences', experienceData)
    );
  }

  async updateExperience(id: string, experienceData: Partial<Omit<IExperience, '_id' | 'createdAt' | 'updatedAt' | '__v'>>): Promise<IExperience> {
    return this.handleRequest<IExperience>(
      this.axios.put(`/experiences/${id}`, experienceData)
    );
  }

  async deleteExperience(id: string): Promise<void> {
    return this.handleRequest<void>(
      this.axios.delete(`/experiences/${id}`)
    );
  }
}

export const experienceService = new ExperienceService();
