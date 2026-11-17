export type Woodblock = {
  title: string
  year: number | null   // null = pre-2015 / year unknown
  dims?: string
  edition?: string
  series?: string
  price?: number | null
  status?: 'Available' | 'Out of Stock' | 'Gallery Only' | 'Reserved'
  img?: string
  note?: string         // gallery note shown in place of price
}

// ─── 2023 ──────────────────────────────────────────────────────────────────
const woodblocks2023: Woodblock[] = [
  { title: 'Gorge Nocturne',          year: 2023, dims: "18 x 12",    status: 'Gallery Only', note: 'On display at 2027 Coors Western Art Exhibit' },
  { title: 'Viejo San Acacio',        year: 2023, dims: '12 x 9',     status: 'Gallery Only', note: 'Gerald Peters Gallery' },
  { title: 'Rio Grande Gorge Track',  year: 2023, dims: '11.5 x 16.5',status: 'Gallery Only' },
  { title: 'Snowy Plateau',           year: 2023, dims: '12 x 9',     img: '/images/woodblocks/snowy-mesa.jpg' },
  { title: 'Old Rio Pueblo Road',     year: 2023, dims: '12 x 9' },
  { title: 'March Dance',            year: 2023, dims: '14.75 x 20' },
  { title: 'Quaral Mission',         year: 2023,                      img: '/images/woodblocks/adobe-church.jpg' },
  { title: 'Fields Of Gold',         year: 2023 },
  { title: 'Spirits Of Abo',         year: 2023, dims: '18 x 12',    img: '/images/woodblocks/desert-pueblo-sunset.jpg' },
  { title: 'Idle Clouds',            year: 2023 },
  { title: 'Snow Angel',             year: 2023 },
  { title: 'Sunrise, Broadmoor Motif', year: 2023, dims: '12 x 9' },
  { title: 'Moon Rise, Broadmoor Motif', year: 2023, dims: '12 x 9' },
  { title: 'Warm Evening',           year: 2023, dims: '9 x 6', edition: 'Ed. 19', img: '/images/woodblocks/warm-evening-9x6.jpg', price: null, status: 'Available' },
]

// ─── 2022 ──────────────────────────────────────────────────────────────────
const woodblocks2022: Woodblock[] = [
  { title: 'Afternoon Thunderheads', year: 2022, note: 'Broadmoor Gallery Only' },
  { title: 'Evening Enchantment',    year: 2022, note: 'Oh Be Joyful Gallery' },
  { title: 'Frosty Moon',           year: 2022, note: 'Oh Be Joyful Gallery' },
  { title: 'November Tapestry',     year: 2022, status: 'Available' },
  { title: 'March Ascent',          year: 2022, status: 'Out of Stock' },
  { title: 'Frosty Streamers',      year: 2022, note: 'Oh Be Joyful Gallery' },
  { title: 'Moon Crossing',         year: 2022, note: 'Breckenridge Gallery' },
]

// ─── 2021 ──────────────────────────────────────────────────────────────────
const woodblocks2021: Woodblock[] = [
  { title: 'Sunset Chapel',  year: 2021, img: '/images/woodblocks/sunset-chapel.jpg' },
  { title: 'San Geronimo',   year: 2021 },
]

// ─── 2020 ──────────────────────────────────────────────────────────────────
const woodblocks2020: Woodblock[] = [
  { title: 'Aspen Mtn McLains Flat',   year: 2020, img: '/images/woodblocks/cb-evening.jpg' },
  { title: 'Morning Float',            year: 2020 },
  { title: 'Flurries At The Broadmoor', year: 2020 },
  { title: 'Emile',                    year: 2020 },
  { title: 'Evening Iris',             year: 2020 },
  { title: 'Summer Lily',              year: 2020 },
  { title: 'Sunny Iris',               year: 2020 },
]

// ─── 2019 ──────────────────────────────────────────────────────────────────
const woodblocks2019: Woodblock[] = [
  { title: 'Pecos Mission 1780',      year: 2019, series: 'NM ReImagined' },
  { title: 'Chaco Canyon Sunrise',    year: 2019, series: 'NM ReImagined' },
  { title: 'Passing Time',            year: 2019, dims: '14 x 11', series: 'NM ReImagined' },
  { title: 'Lodgepole Sunset',        year: 2019 },
  { title: 'Pecos Reconstruction 1694', year: 2019, series: 'NM ReImagined' },
  { title: 'Lower Cliff House',       year: 2019, series: 'NM ReImagined' },
  { title: 'Frijoles Canyon',         year: 2019, series: 'NM ReImagined' },
  { title: 'Cicuye Morning',          year: 2019, series: 'NM ReImagined' },
]

// ─── 2018 ──────────────────────────────────────────────────────────────────
const woodblocks2018: Woodblock[] = [
  { title: 'Wet Mtn Hay',  year: 2018, img: '/images/woodblocks/log-cabin-barn.jpg' },
  { title: 'Moon Gorge',   year: 2018, series: 'Gorge Songs' },
  // Gorge Songs series pieces (mostly 2017–2018)
  { title: 'Gorge Song',    year: 2018, series: 'Gorge Songs' },
  { title: 'Fractured Gorge', year: 2018, series: 'Gorge Songs' },
]

// ─── 2017 ──────────────────────────────────────────────────────────────────
const woodblocks2017: Woodblock[] = [
  { title: 'Wild Rivers',               year: 2017 },
  { title: 'White Waters',              year: 2017 },
  { title: 'Mono Tone',                 year: 2017 },
  { title: 'Gorge Trail',               year: 2017, series: 'Gorge Songs', img: '/images/woodblocks/riders-on-horseback.jpg' },
  { title: 'Whispers of White Water',   year: 2017, series: 'Gorge Songs' },
  { title: 'Hawk Circles',              year: 2017, series: 'Gorge Songs' },
  { title: 'Book Of Origins',           year: 2017, series: 'Gorge Songs' },
  { title: 'Wild Horses Below Mt Blanca', year: 2017 },
  { title: 'Moon Over Gorge',           year: 2017, series: 'Gorge Songs' },
  { title: 'Above Bear Lake',           year: 2017, img: '/images/woodblocks/mountain-stream.jpg' },
]

// ─── 2016 ──────────────────────────────────────────────────────────────────
const woodblocks2016: Woodblock[] = [
  { title: 'Senora de la Paz', year: 2016, dims: '22 x 14', edition: 'Ed. 19', price: 180,  status: 'Available', img: '/images/woodblocks/72263d_3ba8fe91.jpg' },
  { title: 'Last Spruce',      year: 2016, img: '/images/woodblocks/evergreens.jpg' },
  { title: 'Winters Hay',      year: 2016 },
  { title: 'Peak Study',       year: 2016 },
  { title: 'Peak Nocturne',    year: 2016 },
  { title: 'Golden Sentinels', year: 2016 },
  { title: 'Barn Study',       year: 2016, img: '/images/woodblocks/grey-day.jpg' },
  { title: 'Aspen Stand',      year: 2016 },
  { title: 'Aglow',            year: 2016 },
]

// ─── 2015 ──────────────────────────────────────────────────────────────────
const woodblocks2015: Woodblock[] = [
  { title: 'Shady Vista',       year: 2015, status: 'Available' },
  { title: 'San Xavier Interior', year: 2015, status: 'Available' },
]

// ─── Studio Editions (ongoing / year not tied to a single year page) ──────
const studioEditions: Woodblock[] = [
  { title: 'Fresh Snow',   year: null, dims: '9 x 6',   edition: 'Ed. 15', price: null,  status: 'Out of Stock', img: '/images/woodblocks/72263d_31b1a245.jpg' },
  { title: "Couse's Easel", year: null, dims: '8 x 8',  edition: 'Ed. 19', price: 200,   status: 'Available',    img: '/images/woodblocks/72263d_8e036ae3.jpg' },
  { title: 'Sunlit Rim',   year: null, dims: '12 x 9',  edition: 'Ed. 19', price: null,  status: 'Out of Stock', img: '/images/woodblocks/72263d_9632a751.jpg' },
  { title: 'Stormy Gorge', year: null, dims: '6 x 9',   edition: 'Ed. 19', price: 60,    status: 'Available',    img: '/images/woodblocks/72263d_3623055e.jpg' },
]

// ─── Trails End (older editions, nearly sold out) ─────────────────────────
const trailsEnd: Woodblock[] = [
  { title: 'Los Fuentes',       year: 2016, dims: '22 x 14', edition: 'Ed. 19', price: null, status: 'Out of Stock', img: '/images/woodblocks/72263d_cf21ad6d.jpg' },
  { title: 'Afternoon Cumulus', year: 2016, dims: '22 x 14', edition: 'Ed. 19', price: null, status: 'Out of Stock', img: '/images/woodblocks/72263d_85a337c5.jpg' },
]

// ─── All woodblocks flat (for year filter) ───────────────────────────────
export const allWoodblocks: Woodblock[] = [
  ...woodblocks2023,
  ...woodblocks2022,
  ...woodblocks2021,
  ...woodblocks2020,
  ...woodblocks2019,
  ...woodblocks2018,
  ...woodblocks2017,
  ...woodblocks2016,
  ...woodblocks2015,
  ...studioEditions,
  ...trailsEnd,
]

export const WOODBLOCK_YEARS = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015] as const

export { studioEditions, trailsEnd }
