// Configuration API pour différents environnements

  const API_CONFIG = {
    development: {
      baseURL: 'http://localhost:5000'
    },
    production: {
      baseURL: process.env.REACT_APP_API_BASE_URL || 'https://combis-backend.vercel.app'
    }
  };

  const environment = process.env.NODE_ENV || 'development';

  export const API_BASE_URL = API_CONFIG[environment].baseURL;

  // Configuration temporaire pour démo (sans backend)
  export const DEMO_MODE = !process.env.REACT_APP_API_BASE_URL;

  export default API_CONFIG;
