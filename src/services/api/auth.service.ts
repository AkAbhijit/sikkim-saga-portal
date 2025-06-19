
import { BaseApiService } from './base.service';
import { IUser, IAuthResponse, ILoginCredentials } from '../../types/models';

export class AuthService extends BaseApiService {
  async login(credentials: ILoginCredentials): Promise<IAuthResponse> {
    return this.handleRequest<IAuthResponse>(
      this.axios.post('/auth/login', credentials)
    );
  }

  async register(userData: Omit<IUser, '_id' | 'createdAt' | 'updatedAt' | '__v'>): Promise<IAuthResponse> {
    return this.handleRequest<IAuthResponse>(
      this.axios.post('/auth/register', userData)
    );
  }

  async refreshToken(refreshToken: string): Promise<IAuthResponse> {
    return this.handleRequest<IAuthResponse>(
      this.axios.post('/auth/refresh', { refreshToken })
    );
  }

  async logout(): Promise<void> {
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      await this.handleRequest<void>(
        this.axios.post('/auth/logout', { refreshToken })
      );
    }
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }

  async getCurrentUser(): Promise<Omit<IUser, 'password'>> {
    return this.handleRequest<Omit<IUser, 'password'>>(
      this.axios.get('/auth/me')
    );
  }
}

export const authService = new AuthService();
