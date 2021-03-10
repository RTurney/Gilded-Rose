const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", () => {
  let gildedRose;
  let items;

  describe("#items", () => {
    beforeEach(() => {
      gildedRose = new Shop([new Item("foo", 0, 0)]);
      items = gildedRose.items;
    });

    it('items return their name', () => {
      expect(items[0].name).toBe("foo");
    });

    it('items return their sellIn date', () => {
      expect(items[0].sellIn).toEqual(0);
    });

    it('items return their quality', () => {
      expect(items[0].quality).toEqual(0);
    });
  });
});
