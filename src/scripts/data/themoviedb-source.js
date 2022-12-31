import API_ENDPOINT from '../globals/api-endpoint';

class TheMovieDbSource {
  static async homePageRestaurant() {
    const response = await fetch(API_ENDPOINT.home);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_PAGE(id));
    return response.json();
  }
}

export default TheMovieDbSource;
