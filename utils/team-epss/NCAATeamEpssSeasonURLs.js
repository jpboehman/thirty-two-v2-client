const mapSeasonUrl = (season) => {
  switch (season) {
    case "2022-2023":
      return ncaaTeamEPSSUrls[2022];
    case "2021-2022":
      return ncaaTeamEPSSUrls[2021];
    case "2020-2021":
      return ncaaTeamEPSSUrls[2020];
    case "2019-2020":
      return ncaaTeamEPSSUrls[2019];
    case "2018-2019":
      return ncaaTeamEPSSUrls[2018];
    case "2017-2018":
      return ncaaTeamEPSSUrls[2017];
    default:
      return ncaaTeamEPSSUrls[2022];
  }
};

const ncaaTeamEPSSUrls = {
  2022: "https://docs.google.com/spreadsheets/d/11oKug1LY1DuVuui3HyXwq44blRyAClLOdekXuuv3aWg/pub?gid=1713561817&single=true&output=csv",
  2021: "https://docs.google.com/spreadsheets/d/11oKug1LY1DuVuui3HyXwq44blRyAClLOdekXuuv3aWg/pub?gid=0&single=true&output=csv",
  2020: "https://docs.google.com/spreadsheets/d/11oKug1LY1DuVuui3HyXwq44blRyAClLOdekXuuv3aWg/pub?gid=827193655&single=true&output=csv",
  2019: "https://docs.google.com/spreadsheets/d/11oKug1LY1DuVuui3HyXwq44blRyAClLOdekXuuv3aWg/pub?gid=1908155642&single=true&output=csv",
  2018: "https://docs.google.com/spreadsheets/d/11oKug1LY1DuVuui3HyXwq44blRyAClLOdekXuuv3aWg/pub?gid=2022840876&single=true&output=csv",
  2017: "https://docs.google.com/spreadsheets/d/11oKug1LY1DuVuui3HyXwq44blRyAClLOdekXuuv3aWg/pub?gid=334024478&single=true&output=csv",
};

export default mapSeasonUrl;
