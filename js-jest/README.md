# Gilded Rose

This is the Gilded Rose kata in JavaScript with Jest

## Getting started

Install dependencies

```sh
npm install
```

## Running tests

To run all tests

```sh
npm test
```

To run all tests in watch mode

```sh
npm run test:watch
```

To generate test coverage report

```sh
npm run test:coverage
```


### Code requirements
# ======================================
# Gilded Rose Requirements Specification
# ======================================

Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a
prominent city ran by a friendly innkeeper named Allison. We also buy and sell only the finest goods.
Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We
have a system in place that updates our inventory for us. It was developed by a no-nonsense type named
Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that
we can begin selling a new category of items. First an introduction to our system:

	- All items have a SellIn value which denotes the number of days we have to sell the item
	- All items have a Quality value which denotes how valuable the item is
	- At the end of each day our system lowers both values for every item

Pretty simple, right? Well this is where it gets interesting:

	- Once the sell by date has passed, Quality degrades twice as fast
	- The Quality of an item is never negative
	- "Aged Brie" actually increases in Quality the older it gets
	- The Quality of an item is never more than 50
	- "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
	- "Backstage passes", [like aged brie], increases in Quality as its SellIn value approaches;
	Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
	Quality drops to 0 after the concert

We have recently signed a supplier of conjured items. This requires an update to our system:

	- "Conjured" items degrade in Quality twice as fast as normal items

Feel free to make any changes to the UpdateQuality method and add any new code as long as everything
still works correctly. However, do not alter the Item class or Items property as those belong to the
goblin in the corner who will insta-rage and one-shot you as he doesn't believe in shared code
ownership (you can make the UpdateQuality method and Items property static if you like, we'll cover
for you).

Just for clarification, an item can never have its Quality increase above 50, however "Sulfuras" is a
legendary item and as such its Quality is 80 and it never alters.

### Test brief

Refactor the code in such a way that adding the 'conjured' functionality is easy.

## Production notes

* [x] do **NOT** alter Items class
* [x] do **NOT** alter Items properties
* [x] need to write tests to cover the whole code
* [x] refactor current code
* [x] add test for conjured feature
* [x] add conjured feature

At this application's current status, I have developed a full test suite for the Shop and Item classes. I have also refactored the code while keeping its outcome working in the same way. I have now implemented a checker for 'conjured' items and doubled their decrease in quality compared to normal items.


#### Tests in production

* items have a sellin value
* items have a quality value
* at the end of each day both values are lowered
* Once the sellin date has passed, quality drops 2x faster
* updateQuality will not take an item's value below 0
* aged brie increases in quailty the older it gets
* quality of an item cannot be above 50
* Sulfuras does not have to be sold and does not decrease in quality
* backstage passes increase in value the closer they get to sellin dates
  - increases by 2 when there are 10 days or less left
  - increases by 3 when there are 5 days or less left
* backstage passes drop to 0 after the concert
* conjured items decreae in quality at double the rate

There are two test suites, with 17 tests.
Currently this code passes all tests with 100% coverage

<img src="public/Tests_and_coverage.png">

#### Tests to build

Items:
* ~~items have a sellin value~~
* ~~items have a quality value~~
* ~~at the end of each day both values are lowered~~

UpdateQuality:
* ~~updatequality reduces item's value~~
* ~~updateQuality updates sellIn date~~
* ~~Once the sellin date has passed, quality drops 2x faster~~
* ~~quality of an item cannot be negative~~
* ~~aged brie increases in quailty the older it gets~~
* ~~quality of an item cannot be above 50~~
* ~~Sulfuras does not have to be sold and does not decrease in quality~~
* ~~backstage passes increase in value close they get to sellin dates~~
  - ~~increases by 2 when there are 10 days or less left~~
  - ~~increases by 3 when there are 5 days or less left~~
* ~~backstage passes drop to 0 after the concert~~
* ~~conjured items decrease in value twice as fast as standard items~~
