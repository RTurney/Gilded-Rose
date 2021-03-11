const {Shop, Item} = require("../src/gilded_rose");

describe("Items", () => {
  let item;
  beforeEach(() => {
    item = new Item("foo", 0, 0);
  });

  it('return their name', () => {
    expect(item.name).toBe("foo");
  });

  it('return their sellIn date', () => {
    expect(item.sellIn).toEqual(0);
  });

  it('return their quality', () => {
    expect(item.quality).toEqual(0);
  });
});
