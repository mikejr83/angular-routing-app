import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigComponent } from './config.component';
import { ConfigGeneralComponent } from './config-general.component';
import { ConfigOtherComponent } from './config-other.component';

const configRoutes: Routes = [
  {
    path: '',
    component: ConfigComponent,
    children: [
      {
        path: '',
        redirectTo: 'general'
      },
      {
        path: 'general',
        component: ConfigGeneralComponent
      },
      {
        path: 'other',
        component: ConfigOtherComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(configRoutes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }
