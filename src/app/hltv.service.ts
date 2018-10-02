import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-angular-link-http";

import gql from 'graphql-tag';

const getResultsQ = gql`
{
  MatchResults{
    id
    result
    event {
      name
    }
    team1 {
      name
    }
    team2 {
      name
    }
    stars
    date
    map
    format
  }
}
`;

const getMatchQ = gql`
query FullMatch($id: Int!){
  FullMatch(id: $id) {
    format
    additionalInfo
    winnerTeam {
      name
    }
    team1 {
      name
    }
    team2 {
      name
    }
    demos {
      name
      link
    }
    streams {
      name
      link
    }
    highlights {
      name
      link
    }
    maps{
      name
      result
    }
    event {
      name
    }
  }
}
`

@Injectable({
  providedIn: 'root'
})
export class HltvService {

  constructor(private apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({ uri: "http://localhost:4000/graphql" }),
      cache: new InMemoryCache()
    });
  }

  getResults():Observable<any> {
    return this.apollo.watchQuery({
      query: getResultsQ,
      fetchPolicy: 'network-only'
    }).valueChanges;
  }

  getMatch(id):Observable<any> {
    return this.apollo.watchQuery({
      query: getMatchQ,
      variables: {
        id: id
      },
      fetchPolicy: 'network-only'
    }).valueChanges;
  }
}
