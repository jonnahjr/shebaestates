import { GlobalOffice, SustainabilityPillar, ProcessStep } from '../types';

export const COMPANY_INFO = {
  name: 'Queen of Sheba Highland Estate Co.',
  shortName: 'Sheba Estates',
  tagline: 'Botanical Diamonds from the Ethiopian Highlands',
  subTagline: 'Exceptional coffee, saffron, vanilla, and macadamia cultivated with care, rooted in the land, and prepared for the world.',
  email: 'info@shebaestates.com',
  website: 'https://www.shebaestates.com/',
  copyrightYear: 2026,
  philosophySummary: 'Queen of Sheba Highland Estate Co. is dedicated to producing four top-tier agricultural products: Gesha Coffee, Negin Saffron, Highland Vanilla, and Macadamia. All our Botanical Diamonds are sourced exclusively from pristine highland estates. We uphold sustainable farming methods and prioritize the well-being of our land, guaranteeing consistent and exceptional offerings for our international partners and consumers.',
  estateRegion: 'Bahir Dar, Lake Tana, Amhara Region, Ethiopia',
  altitudeRange: '1,800 – 2,250 meters above sea level',
};

export const GLOBAL_OFFICES: GlobalOffice[] = [
  {
    country: 'Ethiopia',
    countryCode: 'ET',
    countryFlag: '🇪🇹',
    city: 'Bahir Dar & Amhara Region',
    address: 'Lake Tana Basin, Bahir Dar, Amhara Region, Ethiopia',
    phone: '+251-096 621 3636',
    phoneRaw: '+2510966213636',
    email: 'info@shebaestates.com',
    role: 'Estate Cultivation, Harvesting & Agricultural Processing'
  },
  {
    country: 'San Marino',
    countryCode: 'SM',
    countryFlag: '🇸🇲',
    city: 'Serravalle',
    address: 'Via Lattanzio Valli 17, 47899 Serravalle, Rep. of San Marino',
    phone: '+39-370 305 2766',
    phoneRaw: '+393703052766',
    email: 'info@shebaestates.com',
    role: 'European Distribution & Trade Relations'
  },
  {
    country: 'United Arab Emirates',
    countryCode: 'AE',
    countryFlag: '🇦🇪',
    city: 'Ajman',
    address: 'Unit 18, Al Helio, Ajman, United Arab Emirates',
    phone: '+971-058 551 2511',
    phoneRaw: '+9710585512511',
    email: 'info@shebaestates.com',
    role: 'Middle East & Gulf Regional Logistics Hub'
  },
  {
    country: 'United States',
    countryCode: 'US',
    countryFlag: '🇺🇸',
    city: 'New York',
    address: '80 West 40 Street, 10018 New York, NY, United States of America',
    phone: '+1-347 273 7181',
    phoneRaw: '+13472737181',
    email: 'info@shebaestates.com',
    role: 'North American Sourcing & Corporate Partnerships'
  }
];

export const SUSTAINABILITY_PILLARS: SustainabilityPillar[] = [
  {
    number: '01',
    title: 'Sustain the Soil',
    tagline: 'Living, nutrient-dense highland volcanic earth',
    description: 'We prioritize the microbiological vitality of the highland soil through organic compost derived from coffee pulps, saffron cuttings, and macadamia husks, maintaining moisture retention and zero synthetic degradation.',
    keyPoints: [
      'Circular organic composting of all agricultural byproducts',
      'Terraced contour farming to prevent highland water runoff',
      'Continuous micro-nutrient soil analysis and regenerative mulch'
    ],
    impactMetric: '100% Organic byproducts recycled on estate land'
  },
  {
    number: '02',
    title: 'Protect Biodiversity & Canopy',
    tagline: 'Agroforestry under indigenous forest canopy',
    description: 'Our Gesha coffee, vanilla vines, and macadamia trees are integrated into natural polyculture systems under legacy shade trees, protecting endemic birds, pollinators, and forest flora in the Lake Tana watershed.',
    keyPoints: [
      '100% shade-grown canopy for coffee and climbing vanilla orchids',
      'Wild bee apiaries supporting natural crop pollination',
      'Conservation corridors connecting estate parcels to natural reserves'
    ],
    impactMetric: 'Over 20 native canopy tree species protected'
  },
  {
    number: '03',
    title: 'Water Stewardship',
    tagline: 'Respecting the headwaters of the Blue Nile',
    description: 'Nestled near the source of the Blue Nile and Lake Tana, water is treated as a sacred resource. We utilize rainwater retention ponds, gravity-assisted drip systems, and eco-friendly natural processing.',
    keyPoints: [
      'Zero-discharge natural sun-drying processing methods',
      'Low-volume micro-irrigation for saffron cultivation beds',
      'Highland spring protection and watershed purification buffers'
    ],
    impactMetric: 'Minimal water footprint through natural sun drying'
  },
  {
    number: '04',
    title: 'Support Communities & Knowledge',
    tagline: 'Generational craftsmanship and shared growth',
    description: 'We invest directly in our farming communities, providing training in best agronomy practices, supplying high-yield macadamia seed stock, and ensuring dignified, reliable livelihoods across the harvest cycles.',
    keyPoints: [
      'Supplying certified macadamia seed stock to regional farmers',
      'Agronomy workshops on saffron and vanilla hand-pollination',
      'Long-term trade relationships providing stability across seasons'
    ],
    impactMetric: 'Generational agricultural knowledge preserved'
  }
];

export interface OriginCoffee {
  name: string;
  amharicName?: string;
  format: string;
  origin: string;
  notes: string;
  altitude: string;
}

export const ORIGIN_COFFEES: OriginCoffee[] = [
  {
    name: 'Kochere',
    amharicName: 'ኮቸሬ',
    format: '50kg, 60kg & 1 Ton',
    origin: 'Gedeo Zone, SNNPR',
    notes: 'Apricot, bergamot & jasmine florals',
    altitude: '1,900–2,200m'
  },
  {
    name: 'Bonga',
    amharicName: 'ቦንጋ',
    format: '50kg, 60kg & 1 Ton',
    origin: 'Kaffa Forest, SNNPR',
    notes: 'Wild forest spice & stone fruit',
    altitude: '1,600–1,900m'
  },
  {
    name: 'Kenbata',
    amharicName: 'ከምባታ',
    format: '50kg, 60kg & 1 Ton',
    origin: 'Hadiya Zone, SNNPR',
    notes: 'Stone fruit sweetness & tea body',
    altitude: '1,800–2,100m'
  },
  {
    name: 'Benchimaji',
    amharicName: 'ቤንች ማጂ',
    format: '50kg, 60kg & 1 Ton',
    origin: 'Bench Maji Zone, SNNPR',
    notes: 'Chocolate depth & gentle spice',
    altitude: '1,500–1,800m'
  },
  {
    name: 'Illubabor',
    amharicName: 'ኢሉባቦር',
    format: '50kg, 60kg & 1 Ton',
    origin: 'Illubabor Zone, Oromia',
    notes: 'Forest honey & dried fig',
    altitude: '1,500–1,900m'
  },
  {
    name: 'Mizan Tepi',
    amharicName: 'ሚዛን ቴፒ',
    format: '50kg, 60kg & 1 Ton',
    origin: 'Bench Maji Corridor, SNNPR',
    notes: 'Ripe plum & cacao nib',
    altitude: '1,500–1,800m'
  },
  {
    name: 'Anderacha',
    amharicName: 'አንደራቻ',
    format: '50kg, 60kg & 1 Ton',
    origin: 'Sheka Zone, SNNPR',
    notes: 'Tropical florals & citrus zest',
    altitude: '1,700–2,000m'
  },
  {
    name: 'Gesha',
    amharicName: 'ጌሻ',
    format: '50kg, 60kg & 1 Ton',
    origin: 'Bench Maji Highlands, SNNPR',
    notes: 'Jasmine, peach & noble florals',
    altitude: '1,900–2,200m'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Cultivate',
    subtitle: 'Nurtured in Highland Volcanic Soil',
    description: 'Selected micro-lots positioned between 1,800m and 2,250m elevation where cool highland nights and equatorial daytime sun produce dense, aromatic botanicals.',
    details: 'Carefully monitored polyculture soil beds, native shade trees, and organic nourishment.'
  },
  {
    number: '02',
    title: 'Harvest',
    subtitle: 'Dawn Hand-Selection',
    description: 'Strict manual harvesting at peak physiological maturity — saffron blossoms gathered at sunrise mist, and coffee cherries hand-picked when deep blood-red.',
    details: 'Zero mechanical stripping; our experienced hands select only prime specimens.'
  },
  {
    number: '03',
    title: 'Select',
    subtitle: 'Meticulous Density & Optical Sorting',
    description: 'Every batch undergoes rigorous float testing, visual grading, and sorting to remove any under-ripe or defective botanicals before drying.',
    details: 'Separating Super Negin crimson stigmas and prime screen-16+ coffee cherries.'
  },
  {
    number: '04',
    title: 'Process',
    subtitle: 'Traditional Sunlight & Sweat Curing',
    description: 'Slow, patient natural drying on raised African mesh beds for coffee, low-temperature curing for saffron, and wood-box sweat conditioning for vanilla pods.',
    details: '18 to 28 days of monitored turn-drying with constant air circulation.'
  },
  {
    number: '05',
    title: 'Prepare',
    subtitle: 'Precision Grading & Hermetic Packaging',
    description: 'Moisture verification below 7% for saffron and 11% for green coffee, packed in protective foil tins, corked vials, and nitrogen-flushed barrier bags.',
    details: 'Aroma-sealed packaging prevents oxidation and locks in pristine terroir freshness.'
  },
  {
    number: '06',
    title: 'Share with the World',
    subtitle: 'From the Highlands to Global Connoisseurs',
    description: 'Direct temperature-controlled logistics from our Ethiopian estate hub to partners and clients across Europe, the Gulf, and North America.',
    details: 'Seamless export documentation and direct traceability back to the estate lot.'
  }
];

export const TIMELINE_ITEMS = [
  {
    step: '01',
    phase: 'The Land',
    title: 'Ancestral Highland Terroir',
    description: 'Centuries of rich agricultural heritage in the volcanic highlands of the Amhara Region and the fertile shores of Lake Tana provide an incomparable natural foundation.'
  },
  {
    step: '02',
    phase: 'The Vision',
    title: 'The Botanical Diamonds Concept',
    description: 'Recognizing that Ethiopia’s altitude, volcanic soil, and microclimates can yield the world’s most exquisite coffee, saffron, vanilla, and macadamia.'
  },
  {
    step: '03',
    phase: 'The Estate',
    title: 'Sustainable Infrastructure',
    description: 'Establishing estate cultivation under native shade canopies, raised African drying beds, and regenerative organic composting facilities.'
  },
  {
    step: '04',
    phase: 'The Craft',
    title: 'Artisanal Harvesting Standards',
    description: 'Training master harvesters in delicate dawn saffron collection, hand pollination of highland vanilla orchids, and selective coffee cherry harvesting.'
  },
  {
    step: '05',
    phase: 'The World',
    title: 'A Global Luxury Presence',
    description: 'Opening direct international trade bridges connecting Addis Ababa and Bahir Dar with distribution hubs in San Marino, Ajman, and New York.'
  }
];
