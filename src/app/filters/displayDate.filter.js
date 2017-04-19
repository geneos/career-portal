export default function (configuration, moment) {
    'ngInject';

    return function (date) {
        let momentDate = moment(date);
        let now = moment();
        console.log(configuration.dateFormat);
        if (now.diff(momentDate, 'days') > 1) {
            if (!configuration.dateFormat || 0 === configuration.dateFormat.length) {
                if (['en-EU', 'en-GB', 'es-AR'].indexOf(configuration.defaultLocale) !== -1) {
                    return momentDate.format('DD/MM/YY');
                } else {
                    return momentDate.format('MM/DD/YY');
                }
            }
            else {
                 return momentDate.format(configuration.dateFormat);
            }
        }
        return momentDate.fromNow();
    };
}
