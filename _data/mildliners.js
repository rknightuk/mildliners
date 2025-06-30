const PINK = { name: 'Pink', color: 'ffb6d9' }
const ORANGE = { name: 'Orange', color: 'ffdfb5' }
const YELLOW = { name: 'Yellow', color: 'f0f4a3' }
const BLUE = { name: 'Blue', color: '98d5e8' }
const BLUE_GREEN = { name: 'Blue Green', color: 'a1d0ca' }
const GREEN = { name: 'Green', color: 'b0d492' }
const DARK_BLUE = { name: 'Dark Blue', color: '8ea7c8' }
const GRAY = { name: 'Gray', color: 'bdc7c4' }
const VIOLET = { name: 'Violet', color: 'b7abc8' }
const RED = { name: 'Red', color: 'dd7e92' }
const SMOKE_BLUE = { name: 'Smoke Blue', color: 'a9d0ce' }
const VERMILLION = { name: 'Vermillion', color: 'ffa488' }
const GOLD = { name: 'Gold', color: 'fcd97d' }
const MAGENTA = { name: 'Magenta', color: 'e27fd2' }
const BROWN = { name: 'Brown', color: 'ca9e8b' }
const FUCHSIA = { name: 'Fuchsia', color: 'f3badf' }
const MARIGOLD = { name: 'Marigold', color: 'e26650' }
const CITRUS_GREEN = { name: 'Citrus Green', color: 'e3e766' }
const SUMMER_GREEN = { name: 'Summer Green', color: '64bda7' }
const LAVENDER = { name: 'Lavender', color: '64649e' }
const LEMON_YELLOW = { name: 'Lemon Yellow', color: 'fdf284' }
const APRICOT = { name: 'Apricot', color: 'f2b071' }
const CORAL_PINK = { name: 'Coral Pink', color: 'feb2b8' }
const CYAN = { name: 'Cyan', color: '7bc9d3' }
const DARK_GRAY = { name: 'Dark Gray', color: '83827b' }
const COPPER = { name: 'Copper', color: 'dfa16c', note: '(US only)' }
const BEIGE = { name: 'Beige', color: 'd4bd8d' }
const CREAM = { name: 'Cream', color: 'f7e4bb' }
const COOL_GRAY = { name: 'Cool Gray', color: 'd2d2cd' }
const OLIVE = { name: 'Olive', color: 'd8cf96' }
const DUSTY_PINK = { name: 'Dusty Pink', color: 'fcb9c2', note: '(Japan only)' }
const HONEY_ORANGE = { name: 'Honey Orange', color: 'f3cca3' }
const SHERBERT_YELLOW = { name: 'Sherbert Yellow', color: 'f2ee8e' }
const SODA_BLUE = { name: 'Soda Blue', color: 'a1d7e1' }
const LILAC = { name: 'Lilac', color: 'dbc1d3' }
const BABY_PINK = { name: 'Baby Pink', color: 'f3c2ca' }
const IRIS = { name: 'Iris', color: 'cdc4d6' }
const SMOKE_RED = { name: 'Smoke Red', color: 'e5bdc5' }
const MIMOSA_YELLOW = { name: 'Mimosa Yellow', color: 'd3ce99' }
const MINT = { name: 'Mint', color: 'c5d7d0' }
const MOSS_GREEN = { name: 'Moss Green', color: '96bab6' }

module.exports = function () {
    return {
        count: 41,
        set: {
            Fluorescent: [
                PINK, ORANGE, YELLOW, BLUE, BLUE_GREEN,
            ],
            'Cool and Refined': [
                GREEN, DARK_BLUE, GRAY, VIOLET, RED,
            ],
            Warm: [
                SMOKE_BLUE, VERMILLION, GOLD, MAGENTA, BROWN,
            ],
            'Refresh Bright': [
                FUCHSIA, MARIGOLD, CITRUS_GREEN, SUMMER_GREEN, LAVENDER,
            ],
            Friendly: [
                LEMON_YELLOW, APRICOT, CORAL_PINK, CYAN, DARK_GRAY,
            ],
            'Neutral (US) / Natural (JP)': [
                COPPER, BEIGE, CREAM, COOL_GRAY, OLIVE, DUSTY_PINK,
            ],
            Gentle: [
                HONEY_ORANGE, SHERBERT_YELLOW, SODA_BLUE, LILAC, BABY_PINK,
            ],
            Calm: [
                IRIS, SMOKE_RED, MIMOSA_YELLOW, MINT, MOSS_GREEN,
            ]
        },
        color: {
            Reds: [
                RED, MARIGOLD, SMOKE_RED, CORAL_PINK, PINK, BABY_PINK,
            ],
            Oranges: [
                VERMILLION, APRICOT, ORANGE, HONEY_ORANGE,
            ],
            Yellows: [
                GOLD, LEMON_YELLOW, SHERBERT_YELLOW, MIMOSA_YELLOW, YELLOW,
            ],
            Greens: [
                CITRUS_GREEN, GREEN, OLIVE, BLUE_GREEN, SUMMER_GREEN, MOSS_GREEN, MINT,
            ],
            Blues: [
                CYAN, SMOKE_BLUE, DARK_BLUE, BLUE, SODA_BLUE,
            ],
            Purples: [
                FUCHSIA, LAVENDER, VIOLET, MAGENTA, LILAC, IRIS,
            ],
            Browns: [
                BEIGE, COPPER, BROWN,
            ],
            Grays: [
                COOL_GRAY, GRAY, DARK_GRAY,
            ],
        }
    }
}