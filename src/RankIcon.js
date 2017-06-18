export const Bronze = require('./assets/images/rank/bronze.png');
export const Silver = require('./assets/images/rank/silver.png');
export const Gold = require('./assets/images/rank/gold.png');
export const Platinum = require('./assets/images/rank/platinum.png');
export const Diamond = require('./assets/images/rank/diamond.png');
export const Master = require('./assets/images/rank/master.png');
export const Gm = require('./assets/images/rank/gm.png');
export const Top500 = require('./assets/images/rank/top500.png');

export const getRankIcon = (rank) => {
    switch(rank) {
        case 'bronze':
            return Bronze;
        case 'silver':
            return Silver;
        case 'gold':
            return Gold;
        case 'platinum':
            return Platinum;
        case 'diamond':
            return Diamond;
        case 'master':
            return Master;
        case 'gm':
            return Gm;
        case 'top500':
            return Top500;
        default:
            break;
    }
}