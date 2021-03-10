const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", () => {
  let gildedRose;
  let items;
  let item_list;

  describe("#items", () => {
    beforeEach(() => {
      gildedRose = new Shop([new Item("foo", 0, 0)]);
      items = gildedRose.items;
    });

    it('return their name', () => {
      expect(items[0].name).toBe("foo");
    });

    it('return their sellIn date', () => {
      expect(items[0].sellIn).toEqual(0);
    });

    it('return their quality', () => {
      expect(items[0].quality).toEqual(0);
    });
  });

  describe('#updateQuality', () => {
    beforeEach(() => {
      item_list = [
        new Item("potion", 1, 1),
        new Item("staleFood", 0, 9),
        new Item("rottenBread", 0, 0)
      ]
      gildedRose = new Shop(item_list);
      items = gildedRose.updateQuality();
    });

    it('reduces an items quality by 1', () => {
      expect(items[0].quality).toEqual(0);
    });

    it('updates the sellIn date', () => {
      expect(items[0].sellIn).toEqual(0);
    });

    it('reduces the quality by 2 after sellIn date', () => {
      expect(items[1].quality).toEqual(7);
    });

    it('cannot reduce an items quality below 0', () => {
      expect(items[2].quality).toEqual(0);
    });
  });
});
