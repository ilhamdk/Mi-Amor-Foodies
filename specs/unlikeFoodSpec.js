import FavoriteDish from "../src/scripts/data/favorite-movie-idb";
import * as TestFactories from "./helpers/testFactories";

/*
Scenario of dislike a dish
- Dish has been liked
- Unlike button shows
- Unlike button clicked
- Dish deleted from favorite list
  - There are no dish displayed
*/

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe("Unliking A dish", () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteDish.putDish({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteDish.deleteDish(1);
  });

  it("should display unlike widget when the dish has been liked", async () => {
    await TestFactories.likeButtonPresenterWithDish({ id: 1 });

    expect(
      document.querySelector('[aria-label="Unfavourite this dish"]')
    ).toBeTruthy();
  });

  it("should not display like widget when the dish has been liked", async () => {
    await TestFactories.likeButtonPresenterWithDish({ id: 1 });

    expect(
      document.querySelector('[aria-label="Favorite this dish"]')
    ).toBeFalsy();
  });

  it("should be able to remove liked dish from the list", async () => {
    await TestFactories.likeButtonPresenterWithDish({ id: 1 });

    document
      .querySelector('[aria-label="Unfavourite this dish"]')
      .dispatchEvent(new Event("click"));

    expect(await FavoriteDish.getAllDish()).toEqual([]);
  });

  it("should not throw error if the unliked dish is not in the list", async () => {
    await TestFactories.likeButtonPresenterWithDish({ id: 1 });

    await FavoriteDish.deleteDish(1);

    document
      .querySelector('[aria-label="Unfavourite this dish"]')
      .dispatchEvent(new Event("click"));

    expect(await FavoriteDish.getAllDish()).toEqual([]);
  });
});