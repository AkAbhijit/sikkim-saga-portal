
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IContentSection, IContentEntry, ContentSectionType, IBlogPost } from '../../types/models';
import { contentService, blogService } from '../../services/api';

interface ContentState {
  sections: Record<ContentSectionType, IContentSection | null>;
  blogPosts: IBlogPost[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ContentState = {
  sections: {
    culture: null,
    history: null,
    people: null,
    nature: null,
  },
  blogPosts: [],
  isLoading: false,
  error: null,
};

// Async thunks
export const fetchContentSectionAsync = createAsyncThunk(
  'content/fetchSection',
  async (sectionType: ContentSectionType, { rejectWithValue }) => {
    try {
      const section = await contentService.getContentSection(sectionType);
      return { sectionType, section };
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to fetch content section');
    }
  }
);

export const updateContentSectionAsync = createAsyncThunk(
  'content/updateSection',
  async ({ sectionType, entries }: { sectionType: ContentSectionType; entries: Omit<IContentEntry, '_id' | 'createdAt' | 'updatedAt'>[] }, { rejectWithValue }) => {
    try {
      const section = await contentService.updateContentSection(sectionType, entries);
      return { sectionType, section };
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to update content section');
    }
  }
);

export const fetchBlogPostsAsync = createAsyncThunk(
  'content/fetchBlogPosts',
  async ({ page = 1, limit = 10, published }: { page?: number; limit?: number; published?: boolean } = {}, { rejectWithValue }) => {
    try {
      const response = await blogService.getAllBlogs(page, limit, published);
      return response.data;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to fetch blog posts');
    }
  }
);

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setBlogPosts: (state, action: PayloadAction<IBlogPost[]>) => {
      state.blogPosts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch content section
      .addCase(fetchContentSectionAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContentSectionAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.sections[action.payload.sectionType] = action.payload.section;
        state.error = null;
      })
      .addCase(fetchContentSectionAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Update content section
      .addCase(updateContentSectionAsync.fulfilled, (state, action) => {
        state.sections[action.payload.sectionType] = action.payload.section;
      })
      // Fetch blog posts
      .addCase(fetchBlogPostsAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBlogPostsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogPosts = action.payload;
        state.error = null;
      })
      .addCase(fetchBlogPostsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError, setBlogPosts } = contentSlice.actions;
export default contentSlice.reducer;
