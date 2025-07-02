const all = {
	PINK: { name: 'Pink', color: 'ffb6d9' },
	ORANGE: { name: 'Orange', color: 'ffdfb5' },
	YELLOW: { name: 'Yellow', color: 'f0f4a3' },
	BLUE: { name: 'Blue', color: '98d5e8' },
	BLUE_GREEN: { name: 'Blue Green', color: 'a1d0ca' },
	GREEN: { name: 'Green', color: 'b0d492' },
	DARK_BLUE: { name: 'Dark Blue', color: '8ea7c8' },
	GRAY: { name: 'Gray', color: 'bdc7c4' },
	VIOLET: { name: 'Violet', color: 'b7abc8' },
	RED: { name: 'Red', color: 'dd7e92' },
	SMOKE_BLUE: { name: 'Smoke Blue', color: 'a9d0ce' },
	VERMILLION: { name: 'Vermillion', color: 'ffa488' },
	GOLD: { name: 'Gold', color: 'fcd97d' },
	MAGENTA: { name: 'Magenta', color: 'e27fd2' },
	BROWN: { name: 'Brown', color: 'ca9e8b' },
	FUCHSIA: { name: 'Fuchsia', color: 'f3badf' },
	MARIGOLD: { name: 'Marigold', color: 'e26650' },
	CITRUS_GREEN: { name: 'Citrus Green', color: 'e3e766' },
	SUMMER_GREEN: { name: 'Summer Green', color: '64bda7' },
	LAVENDER: { name: 'Lavender', color: '64649e' },
	LEMON_YELLOW: { name: 'Lemon Yellow', color: 'fdf284' },
	APRICOT: { name: 'Apricot', color: 'f2b071' },
	CORAL_PINK: { name: 'Coral Pink', color: 'feb2b8' },
	CYAN: { name: 'Cyan', color: '7bc9d3' },
	DARK_GRAY: { name: 'Dark Gray', color: '83827b' },
	COPPER: { name: 'Copper', color: 'dfa16c', note: '(US only)' },
	BEIGE: { name: 'Beige', color: 'd4bd8d' },
	CREAM: { name: 'Cream', color: 'f7e4bb' },
	COOL_GRAY: { name: 'Cool Gray', color: 'd2d2cd' },
	OLIVE: { name: 'Olive', color: 'd8cf96' },
	DUSTY_PINK: { name: 'Dusty Pink', color: 'fcb9c2', note: '(Japan only)' },
	HONEY_ORANGE: { name: 'Honey Orange', color: 'f3cca3' },
	SHERBERT_YELLOW: { name: 'Sherbert Yellow', color: 'f2ee8e' },
	SODA_BLUE: { name: 'Soda Blue', color: 'a1d7e1' },
	LILAC: { name: 'Lilac', color: 'dbc1d3' },
	BABY_PINK: { name: 'Baby Pink', color: 'f3c2ca' },
	IRIS: { name: 'Iris', color: 'cdc4d6' },
	SMOKE_RED: { name: 'Smoke Red', color: 'e5bdc5' },
	MIMOSA_YELLOW: { name: 'Mimosa Yellow', color: 'd3ce99' },
	MINT: { name: 'Mint', color: 'c5d7d0' },
	MOSS_GREEN: { name: 'Moss Green', color: '96bab6' },
}

const stepsExample = [
    '10% { color: hsl(360, 65%, 45%); }',
]

let steps = []

const step = 100 / Object.keys(all).length

for (let i = 0; i < Object.keys(all).length; i++) {
    if (i === 0) {
        steps.push(`from, to { color: #${all[Object.keys(all)[i]].color}; }`)
        continue
    }
    const key = Object.keys(all)[i]
    const color = all[key].color
    const percentage = step * i
    steps.push(`${percentage}% { color: #${color}; }`)
}

module.exports = function () {
    return {
        cssSteps: steps.join('\n'),
        all: Object.values(all),
        set: {
            Fluorescent: [
                all.PINK, all.ORANGE, all.YELLOW, all.BLUE, all.BLUE_GREEN,
            ],
            'Cool and Refined': [
                all.GREEN, all.DARK_BLUE, all.GRAY, all.VIOLET, all.RED,
            ],
            Warm: [
                all.SMOKE_BLUE, all.VERMILLION, all.GOLD, all.MAGENTA, all.BROWN,
            ],
            'Refresh Bright': [
                all.FUCHSIA, all.MARIGOLD, all.CITRUS_GREEN, all.SUMMER_GREEN, all.LAVENDER,
            ],
            Friendly: [
                all.LEMON_YELLOW, all.APRICOT, all.CORAL_PINK, all.CYAN, all.DARK_GRAY,
            ],
            'Neutral (US) / Natural (JP)': [
                all.COPPER, all.BEIGE, all.CREAM, all.COOL_GRAY, all.OLIVE, all.DUSTY_PINK,
            ],
            Gentle: [
                all.HONEY_ORANGE, all.SHERBERT_YELLOW, all.SODA_BLUE, all.LILAC, all.BABY_PINK,
            ],
            Calm: [
                all.IRIS, all.SMOKE_RED, all.MIMOSA_YELLOW, all.MINT, all.MOSS_GREEN,
            ]
        },
        color: {
            Reds: [
               all. RED, all.MARIGOLD, all.SMOKE_RED, all.CORAL_PINK, all.PINK, all.BABY_PINK,
            ],
            Oranges: [
                all.VERMILLION, all.APRICOT, all.ORANGE, all.HONEY_ORANGE,
            ],
            Yellows: [
                all.GOLD, all.LEMON_YELLOW, all.SHERBERT_YELLOW, all.MIMOSA_YELLOW, all.YELLOW,
            ],
            Greens: [
                all.CITRUS_GREEN, all.GREEN, all.OLIVE, all.BLUE_GREEN, all.SUMMER_GREEN, all.MOSS_GREEN, all.MINT,
            ],
            Blues: [
                all.CYAN, all.SMOKE_BLUE, all.DARK_BLUE, all.BLUE, all.SODA_BLUE,
            ],
            Purples: [
                all.FUCHSIA, all.LAVENDER, all.VIOLET, all.MAGENTA, all.LILAC, all.IRIS,
            ],
            Browns: [
                all.BEIGE, all.COPPER, all.BROWN,
            ],
            Grays: [
                all.COOL_GRAY, all.GRAY, all.DARK_GRAY,
            ],
        },
    }
}