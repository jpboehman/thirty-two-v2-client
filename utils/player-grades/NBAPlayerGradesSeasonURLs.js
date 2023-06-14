const mapSeasonUrl = (season) => {
    switch (season) {
        case '2022-2023':
            return nbaPlayerGradesAndEPSUrls[2022];
        case '2021-2022':
            return nbaPlayerGradesAndEPSUrls[2021];
        case '2020-2021':
            return nbaPlayerGradesAndEPSUrls[2020];
        case '2019-2020':
            return nbaPlayerGradesAndEPSUrls[2019];
        case '2018-2019':
            return nbaPlayerGradesAndEPSUrls[2018];
        case '2017-2018':
            return nbaPlayerGradesAndEPSUrls[2017];
        default:
            return nbaPlayerGradesAndEPSUrls[2022];
    }
};

const nbaPlayerGradesAndEPSUrls = {
    2022: 'https://docs.google.com/spreadsheets/d/1TgIA3e6zXmauUg9XG7DZi_GmS6ZPHgplA4wCt3M8JM4/pub?gid=476428864&single=true&output=csv',
    2021: 'https://docs.google.com/spreadsheets/d/1TgIA3e6zXmauUg9XG7DZi_GmS6ZPHgplA4wCt3M8JM4/pub?gid=0&single=true&output=csv',
    2020: 'https://docs.google.com/spreadsheets/d/1TgIA3e6zXmauUg9XG7DZi_GmS6ZPHgplA4wCt3M8JM4/pub?gid=1045970703&single=true&output=csv',
    2019: 'https://docs.google.com/spreadsheets/d/1TgIA3e6zXmauUg9XG7DZi_GmS6ZPHgplA4wCt3M8JM4/pub?gid=159003523&single=true&output=csv',
    2018: 'https://docs.google.com/spreadsheets/d/1TgIA3e6zXmauUg9XG7DZi_GmS6ZPHgplA4wCt3M8JM4/pub?gid=1360989010&single=true&output=csv',
    2017: 'https://docs.google.com/spreadsheets/d/1TgIA3e6zXmauUg9XG7DZi_GmS6ZPHgplA4wCt3M8JM4/pub?gid=484221943&single=true&output=csv'
};

export default mapSeasonUrl;