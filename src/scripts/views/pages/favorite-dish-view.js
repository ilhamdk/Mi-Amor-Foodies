/* eslint-disable */
import { createRestItemTemplate } from '../templates/template-creator';

class FavoriteDishView {
  getTemplate() {
    return `
    <div class="content">
    <h2 class="content__heading">Your Liked Restaurants</h2>
    <div id="movies" class="movies">

    </div>
  </div>
        `;
  }

  showFavoriteDish(dishes = []) {
    let html;
    if (dishes.length) {
      html = dishes.reduce(
        (carry, dish) => carry.concat(createRestItemTemplate(dish)),
        '',
      );
    } else {
      document.getElementById('movies').style.display = 'block';
      html = this._getEmptyDishTemplate();
    }

    document.getElementById('movies').innerHTML = html;
    document.getElementById('movies').dispatchEvent(new Event('movies:updated'));
  }

  _getEmptyDishTemplate() {
    return `<div id="no_result">Shows no result</div>`;
  }
}

export default FavoriteDishView;
