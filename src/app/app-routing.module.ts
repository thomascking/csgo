import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchComponent } from './match/match.component';
import { MatchListComponent } from './match-list/match-list.component';

const routes = [
  {
    path: '',
    component: MatchListComponent
  },
  {
    path: 'match/:id',
    component: MatchComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
