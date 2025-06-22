import axios from 'axios';

// Base configuration for API calls
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://sign.mt';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000, // 30 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth tokens if needed
api.interceptors.request.use(
  (config) => {
    // Add any authentication headers here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling common errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', error);
    
    if (error.response) {
      // Server responded with error status
      switch (error.response.status) {
        case 401:
          console.error('Unauthorized access');
          break;
        case 403:
          console.error('Forbidden access');
          break;
        case 404:
          console.error('Resource not found');
          break;
        case 500:
          console.error('Internal server error');
          break;
        default:
          console.error(`HTTP error ${error.response.status}`);
      }
    } else if (error.request) {
      // Request was made but no response received
      console.error('Network error - no response received');
    } else {
      // Something else happened
      console.error('Request setup error:', error.message);
    }
    
    return Promise.reject(error);
  }
);

// Translation API functions
export const translationAPI = {
  // Translate text to sign language
  translateTextToSign: async (text, sourceLanguage, targetLanguage) => {
    try {
      // Based on the sign.mt API structure, we'll make a POST request to the translate endpoint
      const response = await api.post('/api/translate', {
        text: text,
        sourceLanguage: sourceLanguage,
        targetLanguage: targetLanguage,
        type: 'text-to-sign'
      });
      return response.data;
    } catch (error) {
      // If the API call fails, we'll try a different approach
      // The sign.mt API might have a different structure
      try {
        const response = await api.post('/translate', {
          input: text,
          from: sourceLanguage,
          to: targetLanguage
        });
        return response.data;
      } catch (secondError) {
        throw new Error(`Translation failed: ${error.message}`);
      }
    }
  },

  // Translate sign language video to text
  translateSignToText: async (videoFile, sourceLanguage, targetLanguage) => {
    try {
      const formData = new FormData();
      formData.append('video', videoFile);
      formData.append('sourceLanguage', sourceLanguage);
      formData.append('targetLanguage', targetLanguage);
      formData.append('type', 'sign-to-text');

      const response = await api.post('/api/translate/video', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Sign language translation failed: ${error.message}`);
    }
  },

  // Get supported languages
  getSupportedLanguages: async () => {
    try {
      const response = await api.get('/api/languages');
      return response.data;
    } catch (error) {
      // Fallback to hardcoded languages if API fails
      return {
        spoken: ['en', 'de', 'fr', 'es', 'it', 'pt', 'ru', 'zh', 'ja', 'ko'],
        sign: ['asl', 'bsl', 'isl', 'auslan', 'lsf', 'dgs']
      };
    }
  },

  // Detect language from text
  detectLanguage: async (text) => {
    try {
      const response = await api.post('/api/detect-language', { text });
      return response.data;
    } catch (error) {
      throw new Error(`Language detection failed: ${error.message}`);
    }
  },

  // Get translation history (if user is authenticated)
  getTranslationHistory: async () => {
    try {
      const response = await api.get('/api/translation-history');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch translation history: ${error.message}`);
    }
  },

  // New method to directly call sign.mt API based on the structure we see
  translateWithSignMT: async (text, fromLang, toLang) => {
    try {
      // Based on the sign.mt API structure from the search results
      const response = await api.post('/api', {
        method: 'translate',
        params: {
          text: text,
          from: fromLang,
          to: toLang
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(`Sign.mt API call failed: ${error.message}`);
    }
  }
};

// User API functions (for future authentication features)
export const userAPI = {
  // Login user
  login: async (credentials) => {
    try {
      const response = await api.post('/api/auth/login', credentials);
      return response.data;
    } catch (error) {
      throw new Error(`Login failed: ${error.message}`);
    }
  },

  // Register user
  register: async (userData) => {
    try {
      const response = await api.post('/api/auth/register', userData);
      return response.data;
    } catch (error) {
      throw new Error(`Registration failed: ${error.message}`);
    }
  },

  // Get user profile
  getProfile: async () => {
    try {
      const response = await api.get('/api/user/profile');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch profile: ${error.message}`);
    }
  },
};

// Utility functions
export const apiUtils = {
  // Check if API is available
  checkAPIHealth: async () => {
    try {
      const response = await api.get('/api/health');
      return response.data.status === 'ok';
    } catch (error) {
      return false;
    }
  },

  // Upload file with progress tracking
  uploadFile: async (file, onProgress) => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await api.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          if (onProgress) {
            onProgress(percentCompleted);
          }
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`File upload failed: ${error.message}`);
    }
  },

  // Test connection to sign.mt
  testSignMTConnection: async () => {
    try {
      const response = await api.get('/');
      return response.status === 200;
    } catch (error) {
      console.error('Sign.mt connection test failed:', error);
      return false;
    }
  }
};

export default api; 