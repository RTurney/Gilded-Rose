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

  reduceQualityByOne(item) {
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

  increaseQualityByOne(item) {
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

  isFiveDaysToConcert(ticket) {
    return ticket.sellIn <= 5;
  }

  isTenDaysToConcert(ticket) {
    return ticket.sellIn <= 10;
  }

  setItemToMaxQuality(item) {
    const isNotSulfuras = !this.isSulfuras(item);
    const qualityIsAboveFifty = this.isItemQualityAboveFifty(item);

    if (isNotSulfuras && qualityIsAboveFifty) {
       item.quality = 50;
    }
  }

  calculateTicketQuality(ticket) {
    if (this.isPastSellIn(ticket)) {
      this.reduceQualityToZero(ticket);
    } else {
      this.increaseTicketQuality(ticket);
    }
  }

  increaseTicketQuality(ticket){
    if (this.isFiveDaysToConcert(ticket)) {
      this.increaseQualityByThree(ticket);
    } else if (this.isTenDaysToConcert(ticket)) {
      this.increaseQualityByTwo(ticket);
    } else {
      this.increaseQualityByOne(ticket);
    }
  }

  calculateAgedBrieQuality(agedBrie) {
      if (this.isPastSellIn(agedBrie)) {
        this.increaseQualityByTwo(agedBrie);
      } else {
        this.increaseQualityByOne(agedBrie);
      }
  }

  calculateItemQuality(item) {
    const isNotSulfuras = !this.isSulfuras(item);
    const qualityIsAboveZero = this.isItemQualityAboveZero(item);

    if (isNotSulfuras && qualityIsAboveZero) {
      if (this.isPastSellIn(item)) {
        this.reduceQualityByTwo(item);
      } else {
        this.reduceQualityByOne(item);
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

  itemChecker(item) {
    if (this.isItemQualityBelowFifty(item)) {
      this.itemSorter(item);
    }
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      this.itemChecker(this.items[i]);
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
