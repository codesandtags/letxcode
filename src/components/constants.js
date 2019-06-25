export default class AppConstants {

  static get api() {
    return {
      URL: 'https://cors-anywhere.herokuapp.com/https://jobs.github.com',
      END_POINTS: {
        POSITIONS: 'positions.json'
      },
      MIN_CHARACTERS: 3,
      PARAMETERS : {
        DESCRIPTION: 'description',
        LOCATION: 'location',
        LATITUD : 'lat',
        LONGITUDE: 'long',
        FULL_TIME: 'full_time',
        MARKDOWN: 'markdown',
        PAGE: 'page'
      }
    };
  }

}
