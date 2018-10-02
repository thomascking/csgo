const { HLTV } = require('hltv');

const resolvers = {
  Query: {
    MatchResults: () => HLTV.getResults({pages: 1}),
    FullMatch: function(_, {id}) {
      console.log(id);
      return HLTV.getMatch({id: id});
    }
  }
};

module.exports.Resolvers = resolvers;
