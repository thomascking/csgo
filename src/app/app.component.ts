import { Component } from '@angular/core';
import { HltvService } from './hltv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csgo';

  constructor(private hltv: HltvService) {
  }
}
