// Supported languages configuration
export const SUPPORTED_LANGUAGES = {
  // Spoken languages
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    type: 'spoken'
  },
  de: {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    type: 'spoken'
  },
  fr: {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    type: 'spoken'
  },
  es: {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    type: 'spoken'
  },
  it: {
    code: 'it',
    name: 'Italian',
    nativeName: 'Italiano',
    flag: '🇮🇹',
    type: 'spoken'
  },
  pt: {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    flag: '🇵🇹',
    type: 'spoken'
  },
  ru: {
    code: 'ru',
    name: 'Russian',
    nativeName: 'Русский',
    flag: '🇷🇺',
    type: 'spoken'
  },
  zh: {
    code: 'zh',
    name: 'Chinese',
    nativeName: '中文',
    flag: '🇨🇳',
    type: 'spoken'
  },
  ja: {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    flag: '🇯🇵',
    type: 'spoken'
  },
  ko: {
    code: 'ko',
    name: 'Korean',
    nativeName: '한국어',
    flag: '🇰🇷',
    type: 'spoken'
  },

  // Sign languages
  asl: {
    code: 'asl',
    name: 'American Sign Language',
    nativeName: 'American Sign Language',
    flag: '🤟',
    type: 'sign'
  },
  bsl: {
    code: 'bsl',
    name: 'British Sign Language',
    nativeName: 'British Sign Language',
    flag: '🤟',
    type: 'sign'
  },
  isl: {
    code: 'isl',
    name: 'International Sign Language',
    nativeName: 'International Sign Language',
    flag: '🤟',
    type: 'sign'
  },
  auslan: {
    code: 'auslan',
    name: 'Australian Sign Language',
    nativeName: 'Australian Sign Language',
    flag: '🤟',
    type: 'sign'
  },
  lsf: {
    code: 'lsf',
    name: 'French Sign Language',
    nativeName: 'Langue des Signes Française',
    flag: '🤟',
    type: 'sign'
  },
  dgs: {
    code: 'dgs',
    name: 'German Sign Language',
    nativeName: 'Deutsche Gebärdensprache',
    flag: '🤟',
    type: 'sign'
  }
};

// Language groups for easier selection
export const LANGUAGE_GROUPS = {
  spoken: Object.values(SUPPORTED_LANGUAGES).filter(lang => lang.type === 'spoken'),
  sign: Object.values(SUPPORTED_LANGUAGES).filter(lang => lang.type === 'sign')
};

// Default language pairs
export const DEFAULT_LANGUAGE_PAIRS = [
  { source: 'en', target: 'asl', name: 'English → ASL' },
  { source: 'asl', target: 'en', name: 'ASL → English' },
  { source: 'en', target: 'bsl', name: 'English → BSL' },
  { source: 'bsl', target: 'en', name: 'BSL → English' },
  { source: 'de', target: 'dgs', name: 'German → DGS' },
  { source: 'dgs', target: 'de', name: 'DGS → German' },
  { source: 'fr', target: 'lsf', name: 'French → LSF' },
  { source: 'lsf', target: 'fr', name: 'LSF → French' }
];

// Application configuration
export const APP_CONFIG = {
  name: 'Sign Language Translate',
  version: '1.0.0',
  description: 'Effortless Real-Time Sign Language Translation',
  author: 'Amit Moryossef',
  repository: 'https://github.com/sign/translate',
  website: 'https://sign.mt',
  maxFileSize: 100 * 1024 * 1024, // 100MB
  supportedVideoFormats: ['mp4', 'avi', 'mov', 'wmv', 'webm'],
  supportedImageFormats: ['jpg', 'jpeg', 'png', 'gif'],
  maxTextLength: 500,
  apiTimeout: 30000, // 30 seconds
  retryAttempts: 3,
  retryDelay: 1000 // 1 second
};

// UI Configuration
export const UI_CONFIG = {
  theme: {
    primary: '#667eea',
    secondary: '#764ba2',
    success: '#4ade80',
    warning: '#fbbf24',
    error: '#ef4444',
    info: '#3b82f6',
    background: '#ffffff',
    surface: '#f8f9fa',
    text: {
      primary: '#333333',
      secondary: '#666666',
      disabled: '#999999'
    }
  },
  animation: {
    duration: {
      fast: 0.2,
      normal: 0.3,
      slow: 0.5
    },
    easing: {
      ease: 'ease',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out'
    }
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1200px'
  }
};

// Error messages
export const ERROR_MESSAGES = {
  network: {
    connection: 'Network connection error. Please check your internet connection.',
    timeout: 'Request timed out. Please try again.',
    server: 'Server error. Please try again later.',
    unauthorized: 'Unauthorized access. Please log in.',
    forbidden: 'Access forbidden.',
    notFound: 'Resource not found.',
    unknown: 'An unknown error occurred.'
  },
  translation: {
    emptyInput: 'Please enter some text to translate.',
    invalidLanguage: 'Invalid language selection.',
    translationFailed: 'Translation failed. Please try again.',
    fileTooLarge: 'File is too large. Maximum size is 100MB.',
    unsupportedFormat: 'Unsupported file format.',
    uploadFailed: 'File upload failed. Please try again.'
  },
  validation: {
    required: 'This field is required.',
    minLength: 'Minimum length is {min} characters.',
    maxLength: 'Maximum length is {max} characters.',
    invalidEmail: 'Please enter a valid email address.',
    passwordMismatch: 'Passwords do not match.'
  }
};

// Success messages
export const SUCCESS_MESSAGES = {
  translation: {
    completed: 'Translation completed successfully!',
    copied: 'Text copied to clipboard!',
    saved: 'Translation saved successfully!'
  },
  file: {
    uploaded: 'File uploaded successfully!',
    processed: 'File processed successfully!'
  },
  user: {
    loggedIn: 'Logged in successfully!',
    registered: 'Account created successfully!',
    profileUpdated: 'Profile updated successfully!'
  }
};

// Local storage keys
export const STORAGE_KEYS = {
  user: 'sign_translate_user',
  settings: 'sign_translate_settings',
  history: 'sign_translate_history',
  theme: 'sign_translate_theme',
  language: 'sign_translate_language'
};

// API endpoints
export const API_ENDPOINTS = {
  translate: {
    textToSign: '/api/translate/text-to-sign',
    signToText: '/api/translate/sign-to-text',
    detectLanguage: '/api/detect-language'
  },
  languages: '/api/languages',
  health: '/api/health',
  upload: '/api/upload',
  auth: {
    login: '/api/auth/login',
    register: '/api/auth/register',
    logout: '/api/auth/logout'
  },
  user: {
    profile: '/api/user/profile',
    history: '/api/translation-history'
  }
}; 