export const Adrian = require('./assets/images/powerpuff/adrian.png');
export const Cat = require('./assets/images/powerpuff/cat.png');
export const Christine = require('./assets/images/powerpuff/christine.png');
export const Dan = require('./assets/images/powerpuff/dan.png');
export const Edward = require('./assets/images/powerpuff/edward.png');
export const JP = require('./assets/images/powerpuff/tina.png'); // get jp
export const Irwin = require('./assets/images/powerpuff/irwin.png');
export const Jeff = require('./assets/images/powerpuff/jeff.png');
export const Matt = require('./assets/images/powerpuff/tina.png'); // get matt
export const Tina = require('./assets/images/powerpuff/tina.png');

export const getUserPicture = (name) => {
    switch(name) {
        case 'adrian':
            return Adrian;
        case 'cat':
            return Cat;
        case 'christine':
            return Christine;
        case 'dan':
            return Dan;
        case 'edward':
            return Edward;
        case 'irwin':
            return Irwin;
        case 'jeff':
            return Jeff;
        case 'tina':
            return Tina;
        default:
            return Tina
            break;
    }
}