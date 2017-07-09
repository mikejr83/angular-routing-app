import { Component } from '@angular/core';

import { ConfigurationService } from '../../config.service';

@Component({
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.less']
})
export class ConfigComponent {
  title = 'Configuration Home!';

  appTitle = 'My App';

  constructor(private configuration: ConfigurationService) {

  }
}
