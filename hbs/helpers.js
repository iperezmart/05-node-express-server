const hbs = require('hbs');

hbs.registerHelper('hbs_helper_getCommonValue1', () => {
    return 'qwerty1234567890';
});

hbs.registerHelper('hbs_helper_transform', (text) => {
    let t = (text || '').toUpperCase();
    return '__' + t + '__';
});