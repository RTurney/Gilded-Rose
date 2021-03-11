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

  isItemQualityAboveFifty(item) {
    return item.quality > 50;
  }

  setItemToMaxQuality(item) {
    if (!this.isSulfuras(item) && this.isItemQualityAboveFifty(item)) {
      return item.quality = 50;
    }
  }
  isPastSellIn(item) {
    return item.sellIn <= 0;
  }

  calculateTicketQuality(ticket) {
    if (this.isPastSellIn(ticket)) {
      this.reduceQualityToZero(ticket);
    } else if (ticket.sellIn < 6) {
      this.qualityIncreaser(ticket);
      this.qualityIncreaser(ticket);
      this.qualityIncreaser(ticket);
    } else if (ticket.sellIn < 11) {
      this.qualityIncreaser(ticket);
      this.qualityIncreaser(ticket);
    } else {
      this.qualityIncreaser(ticket);
    }
  }

  calculateAgedBrieQuality(agedBrie) {
    if (this.isItemQualityBelowFifty(agedBrie)) {
      if (this.isPastSellIn(agedBrie)) {
        this.qualityIncreaser(agedBrie);
        this.qualityIncreaser(agedBrie);
      } else {
        this.qualityIncreaser(agedBrie);
      }
    }
  }

  caclulateItemQuality(item) {
    if (!this.isSulfuras(item)) {
      if (this.isItemQualityAboveZero(item)) {
        if (this.isPastSellIn(item)) {
          this.qualityReducer(item);
          this.qualityReducer(item);
        } else {
          this.qualityReducer(item);
        }
      }
    }
    this.setItemToMaxQuality(item);
  }

  updateSellIn(item) {
    if (!this.isSulfuras(item)) {
      this.sellInReducer(item);
    }
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.isAgedBrie(this.items[i])) {
        this.calculateAgedBrieQuality(this.items[i]);
      } else if (this.isBackstagePass(this.items[i])) {
        this.calculateTicketQuality(this.items[i]);
      } else {
        this.caclulateItemQuality(this.items[i]);
      }
      this.setItemToMaxQuality(this.items[i]);
      this.updateSellIn(this.items[i]);
    }
    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
