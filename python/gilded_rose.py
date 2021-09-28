# -*- coding: utf-8 -*-

from item import *


class GildedRose(object):

    def __init__(self, items):
        self.items = items

    def update_quality(self):
        for item in self.items:
            if self.is_not_brie_checker(item) and item.name != "Backstage passes to a TAFKAL80ETC concert":
                if item.quality > 0:
                    if self.is_not_sulfuras_checker(item):
                        self.quality_decreaser(item)
            else:
                if item.quality < 50:
                    self.quality_increaser(item)
                    if item.name == "Backstage passes to a TAFKAL80ETC concert":
                        if item.sell_in < 11:
                            if item.quality < 50:
                                self.quality_increaser(item)
                        if item.sell_in < 6:
                            if item.quality < 50:
                                self.quality_increaser(item)
            if self.is_not_sulfuras_checker(item):
                self.reduce_sell_in(item)
            if item.sell_in < 0:
                if self.is_not_brie_checker(item):
                    if item.name != "Backstage passes to a TAFKAL80ETC concert":
                        if item.quality > 0:
                            if item.name != "Sulfuras, Hand of Ragnaros":
                                self.quality_decreaser(item)
                    else:
                        item.quality = item.quality - item.quality
                else:
                    if item.quality < 50:
                        self.quality_increaser(item)

    def quality_decreaser(self, item):
        item.quality -= 1

    def quality_increaser(self, item):
        item.quality += 1

    def reduce_sell_in(self, item):
        item.sell_in -= 1

    def is_not_sulfuras_checker(self, item):
        if item.name != "Sulfuras, Hand of Ragnaros":
            return True

    def is_not_brie_checker(self, item):
        if item.name != "Aged Brie":
            return True
