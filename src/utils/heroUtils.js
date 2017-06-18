
export const getHeroMain = (heroes) => {
    let main = '';
    let currentMax = 0;
    Object.keys(heroes.playtime.quickplay).map((key) => {
        if(heroes.playtime.quickplay[key] > currentMax) {
            currentMax = heroes.playtime.quickplay[key];
            main = key;
        }
    });
    return main;
}

export const sortByRank = (playerA, playerB) => {
  const a = playerA.data.stats.competitive.overall_stats.comprank;
  const b = playerB.data.stats.competitive.overall_stats.comprank;
  if ( a < b ) return 1;
  if (a > b ) return -1;
  return 0;
}