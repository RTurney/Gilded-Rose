# -*- coding: utf-8 -*-
import unittest

from gilded_rose import GildedRose
from item import Item


class GildedRoseTest(unittest.TestCase):
    def setUp(self):
        self.items = [
            Item("foo", 0, 1),
            Item("Sulfuras, Hand of Ragnaros", 0, 80),
            Item("Aged Brie", 0, 0)
        ]
        self.gilded_rose = GildedRose(self.items)

    def test_foo(self):
        self.gilded_rose.update_quality()
        self.assertEqual("foo", self.items[0].name)
        self.assertEqual(-1, self.items[0].sell_in)
        self.assertEqual(0, self.items[0].quality)

    def test_sulfuras_checker(self):
        self.gilded_rose.update_quality()
        self.assertEqual("Sulfuras, Hand of Ragnaros", self.items[1].name)
        self.assertEqual(0, self.items[1].sell_in)
        self.assertEqual(80, self.items[1].quality)

    def test_aged_brie(self):
        self.gilded_rose.update_quality()
        self.assertEqual("Aged Brie", self.items[2].name)
        self.assertEqual(-1, self.items[2].sell_in)
        self.assertEqual(2, self.items[2].quality)


if __name__ == '__main__':
    unittest.main()
