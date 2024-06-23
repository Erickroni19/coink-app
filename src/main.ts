import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { checkmark } from 'ionicons/icons';
import { addIcons } from 'ionicons';

addIcons({
  'checkmark': checkmark,
});

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
