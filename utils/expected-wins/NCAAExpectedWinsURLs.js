const mapSeasonUrl = (season) => {
    switch (season) {
        case '2022-2023':
            return ncaaExpectedWinsUrls[2022];
        case '2021-2022':
            return ncaaExpectedWinsUrls[2021];
        case '2020-2021':
            return ncaaExpectedWinsUrls[2020];
        case '2019-2020':
            return ncaaExpectedWinsUrls[2019];
        case '2018-2019':
            return ncaaExpectedWinsUrls[2018];
        case '2017-2018':
            return ncaaExpectedWinsUrls[2017];
        default:
            return ncaaExpectedWinsUrls[2022];
    }
};

const ncaaExpectedWinsUrls = {
    2022: 'https://docs.google.com/spreadsheets/d/1qnd8yf6ycseM63DE48u6zYKtiSC0nbxO-2XOGf4RIo0/pub?gid=187656278&single=true&output=csv',
    2021: 'https://docs.google.com/spreadsheets/d/1qnd8yf6ycseM63DE48u6zYKtiSC0nbxO-2XOGf4RIo0/pub?gid=0&single=true&output=csv',
    2020: 'https://docs.google.com/spreadsheets/d/1qnd8yf6ycseM63DE48u6zYKtiSC0nbxO-2XOGf4RIo0/pub?gid=347972402&single=true&output=csv',
    2019: 'https://docs.google.com/spreadsheets/d/1qnd8yf6ycseM63DE48u6zYKtiSC0nbxO-2XOGf4RIo0/pub?gid=1928053583&single=true&output=csv',
    2018: 'https://docs.google.com/spreadsheets/d/1qnd8yf6ycseM63DE48u6zYKtiSC0nbxO-2XOGf4RIo0/pub?gid=1582656730&single=true&output=csv',
    2017: 'https://docs.google.com/spreadsheets/d/1qnd8yf6ycseM63DE48u6zYKtiSC0nbxO-2XOGf4RIo0/pub?gid=583205997&single=true&output=csv'
};

export default mapSeasonUrl;