class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  qualityReducer(item) {
    item.quality -= 1;
  }

  qualityIncreaser(item) {
    item.quality += 1;
  }

  sellInReducer(item) {
    item.sellIn -= 1;
  }

  reduceQualityToZero(item) {
    item.quality = 0;
  }

  isAgedBrie(item) {
    return item.name === 'Aged Brie';
  }

  isBackstagePass(item) {
    return item.name === 'Backstage passes to a TAFKAL80ETC concert';
  }

  isSulfuras(item) {
    return item.name === 'Sulfuras, Hand of Ragnaros';
  }

  isItemQualityAboveZero(item) {
    return item.quality > 0;
  }

  isItemQualityBelowFifty(item) {
    return item.quality < 50;
  }

  isPastSellIn(item) {
    return item.sellIn < 0;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (!this.isAgedBrie(this.items[i]) && !this.isBackstagePass(this.items[i])) {
        if (this.isItemQualityAboveZero(this.items[i])) {
          if (!this.isSulfuras(this.items[i])) {
            this.qualityReducer(this.items[i]);
          }
        }
      } else {
        if (this.isItemQualityBelowFifty(this.items[i])) {
            this.qualityIncreaser(this.items[i]);
          if (this.isBackstagePass(this.items[i])) {
            if (this.items[i].sellIn < 11) {
              if (this.isItemQualityBelowFifty(this.items[i])) {
                this.qualityIncreaser(this.items[i]);
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.isItemQualityBelowFifty(this.items[i])) {
                this.qualityIncreaser(this.items[i]);
              }
            }
          }
        }
      }
      if (!this.isSulfuras(this.items[i])) {
        this.sellInReducer(this.items[i]);
      }
      if (this.isPastSellIn(this.items[i])) {
        if (!this.isAgedBrie(this.items[i])) {
          if (!this.isBackstagePass(this.items[i])) {
            if (this.isItemQualityAboveZero(this.items[i])) {
              if (!this.isSulfuras(this.items[i])) {
                this.qualityReducer(this.items[i]);
              }
            }
          } else {
            this.reduceQualityToZero(this.items[i]);
          }
        } else {
          if (this.isItemQualityBelowFifty(this.items[i])) {
            this.qualityIncreaser(this.items[i]);
          }
        }
      }
    }
    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
