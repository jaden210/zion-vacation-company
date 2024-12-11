import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideFirebaseApp(() => initializeApp({ projectId: "zion-vacation-company", appId: "1:599806012511:web:db2ff5c5e1de99de87bfea", storageBucket: "zion-vacation-company.firebasestorage.app", apiKey: "AIzaSyCtMsOLXEhQvHA8LPVhfP8Qbvru7kWjaog", authDomain: "zion-vacation-company.firebaseapp.com", messagingSenderId: "599806012511", measurementId: "G-XGWNE0NVVB" })), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore()), provideFunctions(() => getFunctions()), provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({ projectId: "zion-vacation-company", appId: "1:599806012511:web:db2ff5c5e1de99de87bfea", storageBucket: "zion-vacation-company.firebasestorage.app", apiKey: "AIzaSyCtMsOLXEhQvHA8LPVhfP8Qbvru7kWjaog", authDomain: "zion-vacation-company.firebaseapp.com", messagingSenderId: "599806012511", measurementId: "G-XGWNE0NVVB" })), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore()), provideFunctions(() => getFunctions()), provideStorage(() => getStorage()), provideAnimationsAsync()]
};
