export const LANDING_ROUTES = {
  home: '#hero',
  features: '#caracteristicas',
  pricing: '#precios',

  auth: {
    login: '/login',
    register: '/registro',
  },
  
  contact: 'mailto:soporte@infonix.com',
};

export type LandingRoutes = typeof LANDING_ROUTES;