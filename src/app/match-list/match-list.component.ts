import { Component } from '@angular/core';
import { HltvService } from '../hltv.service';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent {
  results: any;

  constructor(private hltv: HltvService) {
  }

  ngOnInit() {
    this.hltv.getResults().subscribe((data) => this.results = data.data.MatchResults);
  }
}
