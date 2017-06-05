export const getLevel = (stats) => {
    if(stats.quickplay.overall_stats.prestige) {
        return "" + stats.quickplay.overall_stats.prestige + stats.quickplay.overall_stats.level;
    } else {
        return "" +  stats.quickplay.overall_stats.level;
    }
}

export const getCompetitiveRank = (stats) => stats.competitive.overall_stats.comprank;