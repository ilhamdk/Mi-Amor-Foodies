const assert = require("assert");

Feature("Unliking Restaurant");

Before(({ I }) => {
  I.amOnPage("/");
});

Scenario("unliking one restaurant", async ({ I }) => {
  I.seeElement(".movie-item");

  const sampleDish = locate(".movie-item__content h3 a").first();
  const sampleDishTitle = await I.grabTextFrom(sampleDish);
  I.click(sampleDish);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/fav");
  I.seeElement(".movie-item");
  const likedDish = locate(".movie-item__content h3 a").first();
  const likedDishTitle = await I.grabTextFrom(".movie-item__content h3 a");

  assert.strictEqual(sampleDishTitle, likedDishTitle);

  I.click(likedDish);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/fav");
  I.see("Shows no result", "#no_result");
});