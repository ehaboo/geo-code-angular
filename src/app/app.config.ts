import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch())

  ],
  coordinatesUrl: "http://localhost:5000/api/coordinates",
  popularSearchUrl: "http://localhost:5000/api/popular-search", 
  popularSearchListUrl: "http://localhost:5000/api/popular-search-list"
};
