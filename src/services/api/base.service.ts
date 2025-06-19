
import axios, { AxiosResponse, AxiosError } from 'axios';
import { IApiResponse, IPaginatedResponse } from '../../types/models';

export class BaseApiService {
  protected baseURL: string;
  protected axios;

  constructor(baseURL: string = process.env.VITE_API_URL || 'http://localhost:3000/api') {
    this.baseURL = baseURL;
    this.axios = axios.create({
      baseURL: this.baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request interceptor
    this.axios.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor
    this.axios.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        if (error.response?.status === 401) {
          // Handle token refresh or redirect to login
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          window.location.href = '/admin';
        }
        return Promise.reject(error);
      }
    );
  }

  protected async handleRequest<T>(
    request: Promise<AxiosResponse<IApiResponse<T>>>
  ): Promise<T> {
    try {
      const response = await request;
      if (response.data.success) {
        return response.data.data;
      }
      throw new Error(response.data.message || 'API request failed');
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data?.message || error.message);
      }
      throw error;
    }
  }

  protected async handlePaginatedRequest<T>(
    request: Promise<AxiosResponse<IPaginatedResponse<T>>>
  ): Promise<{ data: T[]; total: number; page: number; limit: number; totalPages: number }> {
    try {
      const response = await request;
      if (response.data.success) {
        return {
          data: response.data.data,
          total: response.data.total,
          page: response.data.page,
          limit: response.data.limit,
          totalPages: response.data.totalPages,
        };
      }
      throw new Error(response.data.message || 'API request failed');
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data?.message || error.message);
      }
      throw error;
    }
  }
}
