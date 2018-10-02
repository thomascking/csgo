const schema = `
type Team {
    id: ID!
    name: String
}

type Event {
    id: ID!
    name: String
}

type MatchResult {
    id: ID!
    team1: Team
    team2: Team
    format: String
    event: Event
    map: String
    result: String
    stars: Float
    date: Float
}

type Player {
  id: ID!
  name: String
}

type MatchPlayers {
  team1: [Player]
  team2: [Player]
}

type Veto {
  team: Team
  map: String
  type: String
}

type MapResult {
  name: String
  result: String
}

type Stream {
  name: String
  link: String
  viewers: Int
}

type Demo {
  name: String
  link: String
}

type HeadToHeadResult {
  date: Float
  winner: Team
  event: Event
  map: String
  result: String
}

type HighLight {
  link: String
  name: String
}

type FullMatch {
  team1: Team
  team2: Team
  winnerTeam: Team
  date: Float
  format: String
  additionalInfo: String
  vetoes: [Veto]
  event: Event
  maps: [MapResult]
  streams: [Stream]
  demos: [Demo]
  players: [MatchPlayers]
  title: String
  live: Boolean
  hasScorebot: Boolean
  highlightedPlayer: Player
  headToHead: [HeadToHeadResult]
  highlights: [HighLight]
}

type Query {
    MatchResults: [MatchResult]
    FullMatch(id:Int!): FullMatch
}
`

module.exports.Schema = schema;
