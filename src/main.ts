/* ••[1]••••••••••••••••••••••••• main.ts •••••••••••••••••••••••••••••• */

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, appConfig).catch((err: Error): void =>
  console.error(err)
);
