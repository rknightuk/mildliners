const all = {
	PINK: { name: 'Pink', color: 'ffb6d9', code: 'MP' },
	ORANGE: { name: 'Orange', color: 'ffdfb5', code: 'MOR' },
	YELLOW: { name: 'Yellow', color: 'f0f4a3', code: 'MY' },
	BLUE: { name: 'Blue', color: '98d5e8', code: 'MBL' },
	BLUE_GREEN: { name: 'Blue Green', color: 'a1d0ca', code: 'MBG' },
	GREEN: { name: 'Green', color: 'b0d492', code: 'MG' },
	DARK_BLUE: { name: 'Dark Blue', color: '8ea7c8', code: 'MDB' },
	GRAY: { name: 'Gray', color: 'bdc7c4', code: 'MGR' },
	VIOLET: { name: 'Violet', color: 'b7abc8', code: 'MVI' },
	RED: { name: 'Red', color: 'dd7e92', code: 'MR' },
	SMOKE_BLUE: { name: 'Smoke Blue', color: 'a9d0ce', code: 'MSB' },
	VERMILLION: { name: 'Vermillion', color: 'ffa488', code: 'MVE' },
	GOLD: { name: 'Gold', color: 'fcd97d', code: 'MGO' },
	MAGENTA: { name: 'Magenta', color: 'e27fd2', code: 'MMZ' },
	BROWN: { name: 'Brown', color: 'ca9e8b', code: 'ME' },
	FUCHSIA: { name: 'Fuchsia', color: 'f3badf', code: 'MFU' },
	MARIGOLD: { name: 'Marigold', color: 'e26650', code: 'MMGO' },
	CITRUS_GREEN: { name: 'Citrus Green', color: 'e3e766', code: 'MCG' },
	SUMMER_GREEN: { name: 'Summer Green', color: '64bda7', code: 'MSG' },
	LAVENDER: { name: 'Lavender', color: '64649e', code: 'MLV' },
	LEMON_YELLOW: { name: 'Lemon Yellow', color: 'fdf284', code: 'MLY' },
	APRICOT: { name: 'Apricot', color: 'f2b071', code: 'MAP' },
	CORAL_PINK: { name: 'Coral Pink', color: 'feb2b8', code: 'MCOP' },
	CYAN: { name: 'Cyan', color: '7bc9d3', code: 'MCYA' },
	DARK_GRAY: { name: 'Dark Gray', color: '83827b', code: 'MDGR' },
	COPPER: { name: 'Copper', color: 'dfa16c', code: null },
	BEIGE: { name: 'Beige', color: 'd4bd8d', code: 'MBE' },
	CREAM: { name: 'Cream', color: 'f7e4bb', code: 'MCR' },
	COOL_GRAY: { name: 'Cool Gray', color: 'd2d2cd', code: 'MCGR' },
	OLIVE: { name: 'Olive', color: 'd8cf96', code: 'MOL' },
	DUSTY_PINK: { name: 'Dusty Pink', color: 'fcb9c2', code: 'MDP' },
	HONEY_ORANGE: { name: 'Honey Orange', color: 'f3cca3', code: 'MHOR' },
	SHERBET_YELLOW: { name: 'Sherbet Yellow', color: 'f2ee8e', code: 'MSY' },
	SODA_BLUE: { name: 'Soda Blue', color: 'a1d7e1', code: 'MSOB' },
	LILAC: { name: 'Lilac', color: 'dbc1d3', code: 'MLL' },
	BABY_PINK: { name: 'Baby Pink', color: 'f3c2ca', code: 'MBP' },
	IRIS: { name: 'Iris', color: 'cdc4d6', code: 'MIR' },
	SMOKE_RED: { name: 'Smoke Red', color: 'e5bdc5', code: 'MSR' },
	MIMOSA_YELLOW: { name: 'Mimosa Yellow', color: 'd3ce99', code: 'MMY' },
	MINT: { name: 'Mint', color: 'c5d7d0', code: 'MM' },
	MOSS_GREEN: { name: 'Moss Green', color: '96bab6', code: 'MMOG' },
}

// codes
// WKT7 - highlighter
// WYT9 - fine
// WKS23 - Q1/2/etc
// WFT8 - brush

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

let data = [
    {
        name: 'Mildliner',
        prefix: 'WKT7',
        sets: {
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
                all.BEIGE, all.CREAM, all.COOL_GRAY, all.OLIVE, { ...all.DUSTY_PINK, note: 'Japan only' }, { ...all.COPPER, note: 'US only' },
            ],
            Gentle: [
                all.HONEY_ORANGE, all.SHERBET_YELLOW, all.SODA_BLUE, all.LILAC, all.BABY_PINK,
            ],
            Calm: [
                all.IRIS, all.SMOKE_RED, all.MIMOSA_YELLOW, all.MINT, all.MOSS_GREEN,
            ]
        }
    },
    {
        name: 'Brush',
        prefix: 'WFT8',
        sets: {
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
        },
    },
    {
        name: 'Fine',
        prefix: 'WYT9',
        sets: {
            A: [
                all.GRAY, all.BROWN, all.DARK_BLUE, all.RED, all.DARK_GRAY,    
            ],
            B: [
                all.GOLD, all.APRICOT, all.FUCHSIA, all.VIOLET, all.SUMMER_GREEN,
            ],
        },
    },
    {
        name: 'Dot',
        prefix: null,
        sets: {
            'Ten Pack': [
                all.COPPER,
                all.GRAY,
                all.LAVENDER,
                all.CYAN,
                all.SUMMER_GREEN,
                all.GREEN,
                all.GOLD,
                all.APRICOT,
                all.RED,
                all.FUCHSIA,
            ]
        }
    },
    {
        name: 'Fragrance',
        prefix: 'WKT7-FR',
        sets: {
            'Six Pack': [
                { ...all.SODA_BLUE, note: 'Cotton scent' },
                { ...all.OLIVE, note: 'Green scent' },
                { ...all.SHERBET_YELLOW, note: 'Citrus scent' },
                { ...all.CITRUS_GREEN, note: 'White Bloom scent' },
                { ...all.COOL_GRAY, note: 'Wood scent' },
                { ...all.BEIGE, note: 'Flower Bouquet scent' },
            ]
        }
    },
    {
        name: 'Stamp',
        prefix: null,
        sets: {
            'Five Pack': [
                { ...all.GOLD, icon: 'stamp-star' },
                { ...all.APRICOT, icon: 'stamp-arrow' },
                { ...all.CYAN, icon: 'stamp-star' },
                { ...all.MAGENTA, icon: 'stamp-heart' },
                { ...all.MARIGOLD, icon: 'stamp-flower' },
            ]
        }
    },
    {
        name: 'Colour',
        prefix: null,
        sets: {
            Reds: [
               all. RED, all.MARIGOLD, all.SMOKE_RED, all.CORAL_PINK, all.PINK, all.BABY_PINK, all.DUSTY_PINK,
            ],
            Oranges: [
                all.VERMILLION, all.APRICOT, all.ORANGE, all.HONEY_ORANGE,
            ],
            Yellows: [
                all.GOLD, all.LEMON_YELLOW, all.SHERBET_YELLOW, all.MIMOSA_YELLOW, all.YELLOW,
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
                all.BEIGE, all.COPPER, all.BROWN, all.CREAM,
            ],
            Grays: [
                all.COOL_GRAY, all.GRAY, all.DARK_GRAY,
            ],
        }
    }
]

const types = [
    'Mildliner',
    'Brush',
    'Fine',
    'Mix',
    'Dot',
    'Stamp',
    'Fragrance',
    'Colour',
]

let colourData = {}
Object.values(all).forEach(c => colourData[c.name] = [])

data = data.map(type => {
    let colours = []
    Object.values(type.sets).forEach(cl => {
        cl.forEach(c => {
            colours.push(c.name)
            colourData[c.name].push(type.name)
        })
    })
    type.colours = [...new Set(colours)]
    return type
})

module.exports = function () {
    return {
        types,
        data,
        colourData,
        cssSteps: steps.join('\n'),
        all: Object.values(all),
        mixColors: [
            all.RED.name, all.GOLD.name, 
            all.MAGENTA.name, all.APRICOT.name, 
            all.CORAL_PINK.name, all.LEMON_YELLOW.name, 
            all.LAVENDER.name, all.SUMMER_GREEN.name, 
            all.FUCHSIA.name, 
            all.PINK.name,
            all.MARIGOLD.name,
            all.CYAN.name,
            all.CITRUS_GREEN.name,
            all.VIOLET.name,
            all.BLUE.name,
            all.SHERBET_YELLOW.name,
        ],
        mix: {
            Warm: [
                [all.RED, all.GOLD],
                [all.MAGENTA, all.APRICOT],
                [all.CORAL_PINK, all.LEMON_YELLOW],
            ],
            Cool: [
                [all.LAVENDER, all.SUMMER_GREEN],
                [all.LAVENDER, all.FUCHSIA],
                [all.FUCHSIA, all.PINK],
            ],
            Other: [
                [all.SUMMER_GREEN, all.BLUE],
                [all.CYAN, all.SHERBET_YELLOW],
                [all.VIOLET, all.BLUE],
                [all.MARIGOLD, all.CITRUS_GREEN],
                [all.CYAN, all.BLUE],
            ],
        },
    }
}