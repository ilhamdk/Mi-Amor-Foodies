/* eslint-disable */
import FavoriteDish from '../../data/favorite-movie-idb';
import FavoriteDishView from './favorite-dish-view';
import FavoriteDishShowPresenter from './favorite-dish-show-presenter';

const view = new FavoriteDishView();

const fav = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteDishShowPresenter({ view, favoriteDish: FavoriteDish });
  },
};

export default fav;