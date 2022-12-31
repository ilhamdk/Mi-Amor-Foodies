import LikeButtonPresenter from "../../src/scripts/utils/like-button-initiator";
import FavoriteDish from "../../src/scripts/data/favorite-movie-idb";

const likeButtonPresenterWithDish = async (dish) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector("#likeButtonContainer"),
    favoriteDish: FavoriteDish,
    dish,
  });
};

export { likeButtonPresenterWithDish };