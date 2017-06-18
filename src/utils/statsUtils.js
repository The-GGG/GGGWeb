export const getLevel = (stats) => {
    if(stats.quickplay.overall_stats.prestige) {
        let level = stats.quickplay.overall_stats.level;
        if(level < 10) {
            level = "0" + level;
        }
        return "" + stats.quickplay.overall_stats.prestige + level;
    } else {
        return "" +  stats.quickplay.overall_stats.level;
    }
}

export const getCompetitiveRank = (stats) => stats.competitive.overall_stats.comprank;