
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IThemeSettings, ThemeSpacing } from '../../types/models';
import { themeService } from '../../services/api';

interface ThemeState extends Omit<IThemeSettings, '_id' | 'createdAt' | 'updatedAt' | '__v' | 'singleton'> {
  isLoading: boolean;
  error: string | null;
}

const initialState: ThemeState = {
  primaryColor: 'blue-600',
  secondaryColor: 'green-600',
  backgroundColor: 'white',
  textColor: 'gray-900',
  headingFont: 'font-bold',
  bodyFont: 'font-normal',
  spacing: 'normal' as ThemeSpacing,
  isLoading: false,
  error: null,
};

// Async thunks
export const fetchThemeSettingsAsync = createAsyncThunk(
  'theme/fetchSettings',
  async (_, { rejectWithValue }) => {
    try {
      return await themeService.getThemeSettings();
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to fetch theme settings');
    }
  }
);

export const updateThemeSettingsAsync = createAsyncThunk(
  'theme/updateSettings',
  async (settings: Partial<Omit<IThemeSettings, '_id' | 'createdAt' | 'updatedAt' | '__v' | 'singleton'>>, { rejectWithValue }) => {
    try {
      return await themeService.updateThemeSettings(settings);
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to update theme settings');
    }
  }
);

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    updateTheme: (state, action: PayloadAction<Partial<Omit<ThemeState, 'isLoading' | 'error'>>>) => {
      Object.assign(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch theme settings
      .addCase(fetchThemeSettingsAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchThemeSettingsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        const { _id, createdAt, updatedAt, __v, singleton, ...themeData } = action.payload;
        Object.assign(state, themeData);
        state.error = null;
      })
      .addCase(fetchThemeSettingsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Update theme settings
      .addCase(updateThemeSettingsAsync.fulfilled, (state, action) => {
        const { _id, createdAt, updatedAt, __v, singleton, ...themeData } = action.payload;
        Object.assign(state, themeData);
      });
  },
});

export const { clearError, updateTheme } = themeSlice.actions;
export default themeSlice.reducer;
