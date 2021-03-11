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

  calculateTicketQuality(ticket) {
    if (ticket.sellIn < 6) {
      this.qualityIncreaser(ticket);
      this.qualityIncreaser(ticket);
      this.qualityIncreaser(ticket);
    } else if (ticket.sellIn < 11) {
      this.qualityIncreaser(ticket);
      this.qualityIncreaser(ticket);
    } else if (this.isPastSellIn(ticket)) {
      this.reduceQualityToZero(ticket);
    } else {
      this.qualityIncreaser(ticket);
    }
  }

  calculateAgedBrieQuality(agedBrie) {
    if (this.isItemQualityBelowFifty(agedBrie)) {
      if (isPastSellIn(agedBrie)) {
        this.qualityIncreaser(agedBrie);
        this.qualityIncreaser(agedBrie);
      } else {
        this.qualityIncreaser(agedBrie);
      }
    }
  }

  caclulateItemQuality(item) {
    if (this.isItemQualityAboveZero(item)) {
      if (this.isPastSellIn(item)) {
        this.qualityReducer(item);
        this.qualityReducer(item);
      } else {
        this.qualityReducer(item);
      }
    }
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
