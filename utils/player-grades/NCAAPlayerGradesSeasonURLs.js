const mapSeasonUrl = (season) => {
    switch (season) {
        case '2022-2023':
            return ncaaPlayerGradesAndEPSUrls[2022];
        case '2021-2022':
            return ncaaPlayerGradesAndEPSUrls[2021];
        case '2020-2021':
            return ncaaPlayerGradesAndEPSUrls[2020];
        case '2019-2020':
            return ncaaPlayerGradesAndEPSUrls[2019];
        case '2018-2019':
            return ncaaPlayerGradesAndEPSUrls[2018];
        case '2017-2018':
            return ncaaPlayerGradesAndEPSUrls[2017];
        default:
            return ncaaPlayerGradesAndEPSUrls[2022];
    }
};

const ncaaPlayerGradesAndEPSUrls = {
    2022: 'https://docs.google.com/spreadsheets/d/1BM4XgtUD2Z48lQlgvlBw-IoVLbKEr7HhvpefHN5JHsA/pub?gid=1828440697&single=true&output=csv',
    2021: 'https://docs.google.com/spreadsheets/d/1BM4XgtUD2Z48lQlgvlBw-IoVLbKEr7HhvpefHN5JHsA/pub?gid=0&single=true&output=csv',
    2020: 'https://docs.google.com/spreadsheets/d/1BM4XgtUD2Z48lQlgvlBw-IoVLbKEr7HhvpefHN5JHsA/pub?gid=1407375697&single=true&output=csv',
    2019: 'https://docs.google.com/spreadsheets/d/1BM4XgtUD2Z48lQlgvlBw-IoVLbKEr7HhvpefHN5JHsA/pub?gid=171155052&single=true&output=csv',
    2018: 'https://docs.google.com/spreadsheets/d/1BM4XgtUD2Z48lQlgvlBw-IoVLbKEr7HhvpefHN5JHsA/pub?gid=2134201361&single=true&output=csv',
    2017: 'https://docs.google.com/spreadsheets/d/1BM4XgtUD2Z48lQlgvlBw-IoVLbKEr7HhvpefHN5JHsA/pub?gid=423865399&single=true&output=csv'
};

export default mapSeasonUrl;