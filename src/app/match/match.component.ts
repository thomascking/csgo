import { Component, OnInit } from '@angular/core';
import { HltvService } from '../hltv.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match-component',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  match: any;

  constructor(private hltv: HltvService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.hltv.getMatch(+this.route.snapshot.paramMap.get('id')).subscribe((data) => this.match = data.data.FullMatch);
  }

}
