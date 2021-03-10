const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", () => {
  it("items return their name", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });
});
