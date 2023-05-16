const mapSeasonUrl = (season) => {
    switch (season) {
        case '2022-2023':
            return nbaTeamEPSSSharedUrls[2022];
        case '2021-2022':
            return nbaTeamEPSSSharedUrls[2021];
        case '2020-2021':
            return nbaTeamEPSSSharedUrls[2020];
        case '2019-2020':
            return nbaTeamEPSSSharedUrls[2019];
        case '2018-2019':
            return nbaTeamEPSSSharedUrls[2018];
        case '2017-2018':
            return nbaTeamEPSSSharedUrls[2017];
        default:
            return nbaTeamEPSSSharedUrls[2022];
    }
};

const nbaTeamEPSSSharedUrls = {
    2022: 'https://docs.google.com/spreadsheets/d/1rhrtbW6Sgc8VOBK0OkTsCGl4ridKuEewc4BL-6VVYyE/pub?gid=1150726815&single=true&output=csv',
    2021: 'https://docs.google.com/spreadsheets/d/1rhrtbW6Sgc8VOBK0OkTsCGl4ridKuEewc4BL-6VVYyE/pub?gid=0&single=true&output=csv',
    2020: 'https://docs.google.com/spreadsheets/d/1rhrtbW6Sgc8VOBK0OkTsCGl4ridKuEewc4BL-6VVYyE/pub?gid=1517582386&single=true&output=csv',
    2019: 'https://docs.google.com/spreadsheets/d/1rhrtbW6Sgc8VOBK0OkTsCGl4ridKuEewc4BL-6VVYyE/pub?gid=287366984&single=true&output=csv',
    2018: 'https://docs.google.com/spreadsheets/d/1rhrtbW6Sgc8VOBK0OkTsCGl4ridKuEewc4BL-6VVYyE/pub?gid=1278594779&single=true&output=csv',
    2017: 'https://docs.google.com/spreadsheets/d/1rhrtbW6Sgc8VOBK0OkTsCGl4ridKuEewc4BL-6VVYyE/pub?gid=561492024&single=true&output=csv'
};

export default mapSeasonUrl;