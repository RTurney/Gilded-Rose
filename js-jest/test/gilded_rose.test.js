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
      // const gildedRose = new Shop([new Item("foo", 0, 0)]);
      // const items = gildedRose.items;
      expect(items[0].name).toBe("foo");
    });

    it('items return their up-to-date sellin value', () => {
      // const gildedRose = new Shop([new Item("foo", 0, 0)]);
      // const items = gildedRose.items;
      expect(items[0].sellIn).toEqual(0);
    });
  });
});
