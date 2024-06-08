import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { MainComponent } from './app/main/main.component';
import { importProvidersFrom } from '@angular/core';
import { AppRoutingRoutingModule } from './app/app-routing/app-routing-routing.module';

bootstrapApplication(MainComponent, {
  providers: [importProvidersFrom(AppRoutingRoutingModule)],
}).catch((err) => console.error(err));
