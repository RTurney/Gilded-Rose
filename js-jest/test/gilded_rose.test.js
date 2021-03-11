const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", () => {
  let gildedRose;
  let items;
  let item_list;

  describe('.updateQuality', () => {
    beforeEach(() => {
      item_list = [
        new Item("potion", 1, 1),
        new Item("staleFood", 0, 9),
        new Item("rottenBread", 0, 0),
        new Item("Aged Brie", 1, 0),
        new Item("Sulfuras, Hand of Ragnaros", 0, 80),
        new Item("Backstage passes to a TAFKAL80ETC concert", 11, 10),
        new Item("Conjured Mana Cake", 3, 6)
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

    it('will not allow an items value to go above 50', () => {
      for (var i = 0; i < 60; i++) {
        items = gildedRose.updateQuality();
      }
      expect(items[3].quality).toEqual(50);
    });

    describe('Aged Brie', () => {
      it('increases in quality each day', () => {
        expect(items[3].quality).toEqual(1);
      });

      it('increases quality by 2 if past sellIn', () => {
        items = gildedRose.updateQuality();
        expect(items[3].quality).toEqual(3);
      });
    });

    describe('Sulfuras', () => {
      it('will not reduce Sulfuras value or sellIn date', () => {
        expect(items[4].quality).toEqual(80);
        expect(items[4].sellIn).toEqual(0);
      });
    });

    describe('backstage passes', () => {
      it('increase the value as concert date approaches', () => {
        expect(items[5].quality).toEqual(11)
      });

      it('increases the value by 2 when only 10 days are left ', () => {
        items = gildedRose.updateQuality();
        expect(items[5].quality).toEqual(13);
      });

      it('increases the value by 3 when only 5 days are left', () => {
        for (var i = 0; i < 7; i++) {
          items = gildedRose.updateQuality();
        }
        expect(items[5].quality).toEqual(27)
      });

      it('drops to 0 after the concert date', () => {
        for (var i = 0; i < 12; i++) {
          items = gildedRose.updateQuality();
        }
        expect(items[5].quality).toEqual(0)
      });
    });

    describe('Conjured items', () => {

      it('degrades in value twice as fast when above sellIn date', () => {
        expect(items[6].quality).toEqual(4);
      });

      // it('degrades in quailty 4x as fast after sellIn date', () => {
      //   for (var i = 0; i < 3; i++) {
      //     items = gildedRose.updateQuality();
      //    }
      //   expect(items[6].quality).toEqual(-4);
      // });
    });
  });
});
