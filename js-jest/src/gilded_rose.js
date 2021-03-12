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

  reduceQualityByTwo(item) {
    item.quality -= 2;
  }

  reduceQualityByFour(item) {
    item.quality -= 4;
  }

  reduceQualityToZero(item) {
    item.quality = 0;
  }

  qualityIncreaser(item) {
    item.quality += 1;
  }

  increaseQualityByTwo(item) {
    item.quality += 2;
  }

  increaseQualityByThree(item) {
    item.quality += 3;
  }

  sellInReducer(item) {
    item.sellIn -= 1;
  }

  isPastSellIn(item) {
    return item.sellIn <= 0;
  }

  updateSellIn(item) {
    const isNotSulfuras = !this.isSulfuras(item)

    if (isNotSulfuras) {
      this.sellInReducer(item);
    }
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

  isConjuredItem(item) {
    let wordsArray = item.name.split(' ')
    return wordsArray.includes('Conjured');
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
    //constants here and remove return
    if (!this.isSulfuras(item) && this.isItemQualityAboveFifty(item)) {
       item.quality = 50;
    }
  }

  calculateTicketQuality(ticket) {
    // case statement here
    if (this.isPastSellIn(ticket)) {
      this.reduceQualityToZero(ticket);
    } else if (ticket.sellIn < 6) {
      this.increaseQualityByThree(ticket);
    } else if (ticket.sellIn < 11) {
      this.increaseQualityByTwo(ticket);
    } else {
      this.qualityIncreaser(ticket);
    }
  }

  calculateAgedBrieQuality(agedBrie) {
    // refactor here
    if (this.isItemQualityBelowFifty(agedBrie)) {
      if (this.isPastSellIn(agedBrie)) {
        this.increaseQualityByTwo(agedBrie);
      } else {
        this.qualityIncreaser(agedBrie);
      }
    }
  }

  calculateItemQuality(item) {
    // add constants here and single line return
    if (!this.isSulfuras(item) && this.isItemQualityAboveZero(item)) {
      if (this.isPastSellIn(item)) {
        this.reduceQualityByTwo(item);
      } else {
        this.qualityReducer(item);
      }
    }
  }

  calculateConjuredQuality(conjuredItem) {
    if (this.isPastSellIn(conjuredItem)) {
      this.reduceQualityByFour(conjuredItem);
    } else {
      this.reduceQualityByTwo(conjuredItem);
    }
  }

  itemSorter(item) {

    if (this.isAgedBrie(item)) {
      this.calculateAgedBrieQuality(item);
    } else if (this.isBackstagePass(item)) {
      this.calculateTicketQuality(item);
    } else if (this.isConjuredItem(item)) {
      this.calculateConjuredQuality(item);
    } else {
      this.calculateItemQuality(item);
    }
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      this.itemSorter(this.items[i]);
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
