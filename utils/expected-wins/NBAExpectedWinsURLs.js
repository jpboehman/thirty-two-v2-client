const mapSeasonUrl = (season) => {
    switch (season) {
        case '2022-2023':
            return nbaExpectedWinsUrls[2022];
        case '2021-2022':
            return nbaExpectedWinsUrls[2021];
        case '2020-2021':
            return nbaExpectedWinsUrls[2020];
        case '2019-2020':
            return nbaExpectedWinsUrls[2019];
        case '2018-2019':
            return nbaExpectedWinsUrls[2018];
        case '2017-2018':
            return nbaExpectedWinsUrls[2017];
        default:
            return nbaExpectedWinsUrls[2022];
    }
};

const nbaExpectedWinsUrls = {
    2022: 'https://docs.google.com/spreadsheets/d/1agjPAvpjw0EGOKZURP_gK-tYV1dtKmxxRPlr8eyydgQ/pub?gid=42602509&single=true&output=csv',
    2021: 'https://docs.google.com/spreadsheets/d/1agjPAvpjw0EGOKZURP_gK-tYV1dtKmxxRPlr8eyydgQ/pub?gid=0&single=true&output=csv',
    2020: 'https://docs.google.com/spreadsheets/d/1agjPAvpjw0EGOKZURP_gK-tYV1dtKmxxRPlr8eyydgQ/pub?gid=1712098413&single=true&output=csv',
    2019: 'https://docs.google.com/spreadsheets/d/1agjPAvpjw0EGOKZURP_gK-tYV1dtKmxxRPlr8eyydgQ/pub?gid=1001954197&single=true&output=csv',
    2018: 'https://docs.google.com/spreadsheets/d/1agjPAvpjw0EGOKZURP_gK-tYV1dtKmxxRPlr8eyydgQ/pub?gid=550998690&single=true&output=csv',
    2017: 'https://docs.google.com/spreadsheets/d/1agjPAvpjw0EGOKZURP_gK-tYV1dtKmxxRPlr8eyydgQ/pub?gid=1575698862&single=true&output=csv'
};

export default mapSeasonUrl;