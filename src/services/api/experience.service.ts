
import { BaseApiService } from './base.service';
import { IExperience, IPaginatedResponse } from '../../types/models';

export class ExperienceService extends BaseApiService {
  async getAllExperiences(page = 1, limit = 10, category?: string): Promise<IPaginatedResponse<IExperience>['data'] & { total: number; page: number; limit: number; totalPages: number }> {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...(category && { category }),
    });

    return this.handlePaginatedRequest(
      this.axios.get<IPaginatedResponse<IExperience>>(`/experiences?${params}`)
    );
  }

  async getExperienceById(id: string): Promise<IExperience> {
    return this.handleRequest(
      this.axios.get<IExperience>(`/experiences/${id}`)
    );
  }

  async createExperience(experienceData: Omit<IExperience, '_id' | 'createdAt' | 'updatedAt' | '__v'>): Promise<IExperience> {
    return this.handleRequest(
      this.axios.post<IExperience>('/experiences', experienceData)
    );
  }

  async updateExperience(id: string, experienceData: Partial<Omit<IExperience, '_id' | 'createdAt' | 'updatedAt' | '__v'>>): Promise<IExperience> {
    return this.handleRequest(
      this.axios.put<IExperience>(`/experiences/${id}`, experienceData)
    );
  }

  async deleteExperience(id: string): Promise<void> {
    return this.handleRequest(
      this.axios.delete<void>(`/experiences/${id}`)
    );
  }
}

export const experienceService = new ExperienceService();
