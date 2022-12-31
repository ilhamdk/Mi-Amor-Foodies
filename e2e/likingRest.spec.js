const assert = require("assert");

Feature("Liking Restaurant");

Before(({ I }) => {
  I.amOnPage("/#/fav");
});

Scenario("showing empty liked restaurant", ({ I }) => {
  I.see("Shows no result", "#no_result");
});

Scenario("liking one restaurant", async ({ I }) => {
  I.see("Shows no result", "#no_result");
  I.amOnPage("/");

  I.seeElement(".movie-item__content h3 a");

  const sampleDish = locate(".movie-item__content h3 a").first(); 
  const sampleDishTitle = await I.grabTextFrom(sampleDish);
  I.click(sampleDish);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/fav");
  I.seeElement(".movie-item");
  const likedDishTitle = await I.grabTextFrom(".movie-item__content h3 a");

  assert.strictEqual(sampleDishTitle, likedDishTitle);
});