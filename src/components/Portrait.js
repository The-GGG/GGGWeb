import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Portrait = ({prestige, level, rankImage}) => (
    <div className={css(styles.portrait)}>
        <div className={css(styles.level)}>23</div>
        <div className={css(styles.prestige)}></div>
    </div>
)

const styles = StyleSheet.create({
    portrait: {
      'background-image': "url(https://blzgdapipro-a.akamaihd.net/game/playerlevelrewards/0x0250000000000934_Border.png)",
      'height': '120px',
      'width': '120px',
      'background-size': 'auto 100%'
    },
    level: {
      'top': '50%',
      'position': 'relative'
    },
    prestige: {
        'background-image': "url(img/hexagon-2650e1ff2bf2f67eda695db4271509cda6ad326a27b3149815346c139d45d29ca3207fa72b11390443e05ae0adc76a90f0863743756fd4c32c6b7b1bee1484a1.png)",
        'height': '120px',
        'width': '120px',
        'background-size': 'auto 100%'
    }
});
export default Portrait;