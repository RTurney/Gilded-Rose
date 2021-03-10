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


  });
});
