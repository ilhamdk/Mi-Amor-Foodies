import TheMovieDbSource from '../../data/themoviedb-source';
import { createRestItemTemplate } from '../templates/template-creator';

const home = {
  async render() {
    return `
    <div class="content">
        <h2>our place to eat</h2>
        <p>a restaurant that serves food and drinks from paradise.</p>
      <div id="movies" class="movies">
    </div>
  `;
  },

  async afterRender() {
    const resta = await TheMovieDbSource.homePageRestaurant();
    const restContainer = document.querySelector('#movies');
    resta.forEach((rest) => {
      restContainer.innerHTML += createRestItemTemplate(rest);
    });
  },
};

export default home;
