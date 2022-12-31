import UrlParser from '../../routes/url-parser';
import TheMovieDbSource from '../../data/themoviedb-source';
import { createRestDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-initiator';
import FavoriteDish from '../../data/favorite-movie-idb';

const Detail = {
  async render() {
    return `
    <div id="movie" class="movie"></div>    
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resta = await TheMovieDbSource.detailRestaurant(url.id);
    const { restaurant } = resta;
    const restContainer = document.querySelector('#movie');
    restContainer.innerHTML = createRestDetailTemplate(restaurant);
    console.log(resta);

    LikeButtonPresenter.init({
      likeButtonContainer: document.getElementById('likeButtonContainer'),
      favoriteDish: FavoriteDish,
      dish: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        rating: restaurant.rating,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
      },
    });
  },
};

export default Detail;
