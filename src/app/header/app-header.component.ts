import { Component } from '@angular/core';

import { ConfigurationService } from '../config.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.less']
})
export class AppHeaderComponent {
  title = 'app works!';

  constructor(public configuration: ConfigurationService) {

  }
}
