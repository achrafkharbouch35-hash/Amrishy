/* =========================================================
   ÉLIXIR — MAISON DE PARFUMS
   SCRIPT.JS COMPLET
   88 PARFUMS + PACKS + PANIER + WHATSAPP
========================================================= */


/* =========================================================
   CONFIGURATION
========================================================= */

const WHATSAPP_NUMBER = "212600000000";
const IMAGE_PATH = "";


/* =========================================================
   PRIX
========================================================= */

const PRICES = {
    eau: {
        30: 50,
        50: 70,
        100: 120
    },

    extrait: {
        30: 150,
        50: 170,
        100: 320
    }
};


/* =========================================================
   PARFUMS CLASSÉS COMME EXTRAITS
========================================================= */

const EXTRAIT_IDS = new Set([
    "F11",
    "F26",
    "F32",
    "F35",
    "F36",
    "F37",
    "F40",

    "H120",
    "H122",
    "H130",
    "H132",
    "H137",
    "H138",
    "H142",
    "H143",
    "H144"
]);


/* =========================================================
   88 PARFUMS
========================================================= */

const products = [

    /* =====================================================
       FEMME — 44
    ===================================================== */

    {
        id: "F01",
        catalogue: "01",
        name: "Kayli Marchmello",
        shortName: "KAYLI MARCHMELLO",
        category: "femme",
        categoryLabel: "FEMME",
        image: "kayli-marchmello.jpg",
        tagline: "Une signature douce et lumineuse.",
        description: "Une fragrance féminine moderne, douce et élégante, pensée pour celles qui aiment un parfum délicat avec une belle présence.",
        top: "Notes fruitées",
        heart: "Fleurs blanches",
        base: "Musc & Vanille",
        price30: 490,
        price50: 650,
        price100: 820,
        badge: "NOUVEAU",
        color: "rose"
    },

    {
        id: "F02",
        catalogue: "02",
        name: "Escada Taj",
        shortName: "ESCADA TAJ",
        category: "femme",
        categoryLabel: "FEMME",
        image: "escada-taj.jpg",
        tagline: "Une évasion exotique.",
        description: "Une fragrance féminine fruitée et exotique offrant une sensation fraîche, joyeuse et estivale.",
        top: "Fruits exotiques",
        heart: "Fleurs tropicales",
        base: "Bois doux",
        price30: 490,
        price50: 650,
        price100: 820,
        badge: "ICONIQUE",
        color: "rose"
    },

    {
        id: "F03",
        catalogue: "03",
        name: "Coco Chanel",
        shortName: "COCO CHANEL",
        category: "femme",
        categoryLabel: "FEMME",
        image: "coco-chanel.jpg",
        tagline: "L'élégance intemporelle.",
        description: "Une signature féminine sophistiquée mêlant caractère, élégance et sensualité.",
        top: "Agrumes",
        heart: "Rose & Jasmin",
        base: "Ambre & Patchouli",
        price30: 490,
        price50: 650,
        price100: 820,
        badge: "BEST-SELLER",
        color: "rose"
    },

    {
        id: "F04",
        catalogue: "04",
        name: "Jador",
        shortName: "JADOR",
        category: "femme",
        categoryLabel: "FEMME",
        image: "jador.jpg",
        tagline: "Une féminité précieuse.",
        description: "Une composition florale lumineuse et raffinée avec une présence élégante sur la peau.",
        top: "Fruité",
        heart: "Jasmin & Rose",
        base: "Musc & Bois",
        price30: 490,
        price50: 650,
        price100: 820,
        badge: "ICONIQUE",
        color: "rose"
    },

    {
        id: "F05",
        catalogue: "05",
        name: "La Belle",
        shortName: "LA BELLE",
        category: "femme",
        categoryLabel: "FEMME",
        image: "la-belle.jpg",
        tagline: "Belle. Sensuelle. Inoubliable.",
        description: "Une fragrance féminine gourmande et séduisante avec une signature chaleureuse.",
        top: "Poire",
        heart: "Fleurs blanches",
        base: "Vanille",
        price30: 490,
        price50: 650,
        price100: 820,
        badge: "BEST-SELLER",
        color: "rose"
    },

    {
        id: "F06",
        catalogue: "06",
        name: "Burberry Her",
        shortName: "BURBERRY HER",
        category: "femme",
        categoryLabel: "FEMME",
        image: "burberry-her.jpg",
        tagline: "Une énergie londonienne.",
        description: "Une fragrance fruitée et moderne, féminine et dynamique.",
        top: "Fruits rouges",
        heart: "Fleurs",
        base: "Musc & Bois",
        price30: 490,
        price50: 650,
        price100: 820,
        badge: "NOUVEAU",
        color: "rose"
    },

    {
        id: "F07",
        catalogue: "07",
        name: "Hypnotic Poison",
        shortName: "HYPNOTIC POISON",
        category: "femme",
        categoryLabel: "FEMME",
        image: "hypnotic-poison.jpg",
        tagline: "Une attraction mystérieuse.",
        description: "Une fragrance intense et sensuelle dominée par des notes gourmandes et chaleureuses.",
        top: "Amande",
        heart: "Jasmin",
        base: "Vanille & Musc",
        price30: 490,
        price50: 650,
        price100: 820,
        badge: "BEST-SELLER",
        color: "rose"
    },

    {
        id: "F08",
        catalogue: "08",
        name: "Good Girl",
        shortName: "GOOD GIRL",
        category: "femme",
        categoryLabel: "FEMME",
        image: "good-girl.jpg",
        tagline: "Une femme aux multiples facettes.",
        description: "Une fragrance contrastée mêlant fraîcheur florale, gourmandise et profondeur.",
        top: "Amande",
        heart: "Jasmin & Tubéreuse",
        base: "Tonka & Cacao",
        price30: 490,
        price50: 650,
        price100: 820,
        badge: "BEST-SELLER",
        color: "rose"
    },

    {
        id: "F09",
        catalogue: "09",
        name: "Prada Pradox",
        shortName: "PRADA PRADOX",
        category: "femme",
        categoryLabel: "FEMME",
        image: "prada-pradox.jpg",
        tagline: "Une élégance contemporaine.",
        description: "Une fragrance moderne, lumineuse et élégante.",
        top: "Agrumes",
        heart: "Fleurs blanches",
        base: "Ambre",
        price30: 490,
        price50: 650,
        price100: 820,
        badge: "NOUVEAU",
        color: "rose"
    },

    {
        id: "F10",
        catalogue: "10",
        name: "Scandal",
        shortName: "SCANDAL",
        category: "femme",
        categoryLabel: "FEMME",
        image: "scandal.jpg",
        tagline: "Provocante par nature.",
        description: "Une fragrance gourmande et audacieuse destinée à une femme qui aime attirer l'attention.",
        top: "Miel",
        heart: "Gardénia",
        base: "Patchouli",
        price30: 490,
        price50: 650,
        price100: 820,
        badge: "ICONIQUE",
        color: "rose"
    },

    {
        id: "F11",
        catalogue: "11",
        name: "Oud Night",
        shortName: "OUD NIGHT",
        category: "femme",
        categoryLabel: "FEMME",
        image: "oud-night.jpg",
        tagline: "La nuit en une fragrance.",
        description: "Une fragrance mystérieuse construite autour du oud et de notes chaleureuses.",
        top: "Épices",
        heart: "Oud",
        base: "Ambre & Musc",
        price30: 520,
        price50: 690,
        price100: 850,
        badge: "PREMIUM",
        color: "oud"
    },

    {
        id: "F12",
        catalogue: "12",
        name: "Gucci Bloom",
        shortName: "GUCCI BLOOM",
        category: "femme",
        categoryLabel: "FEMME",
        image: "gucci-bloom.jpg",
        tagline: "Fleurir avec élégance.",
        description: "Une fragrance florale riche et féminine.",
        top: "Fleurs",
        heart: "Tubéreuse",
        base: "Rangoon Creeper",
        price30: 490,
        price50: 650,
        price100: 820,
        badge: "ICONIQUE",
        color: "rose"
    },

    {
        id: "F13",
        catalogue: "13",
        name: "Victorias Secret",
        shortName: "VICTORIAS SECRET",
        category: "femme",
        categoryLabel: "FEMME",
        image: "victorias-secret.jpg",
        tagline: "Glamour et sensualité.",
        description: "Une fragrance féminine séduisante et lumineuse.",
        top: "Fruits",
        heart: "Fleurs",
        base: "Vanille & Musc",
        price30: 490,
        price50: 650,
        price100: 820,
        badge: "FAVORI",
        color: "rose"
    },

    {
        id: "F14",
        catalogue: "14",
        name: "Si Armani",
        shortName: "SI ARMANI",
        category: "femme",
        categoryLabel: "FEMME",
        image: "si-armani.jpg",
        tagline: "Une féminité affirmée.",
        description: "Une fragrance élégante et sophistiquée avec une signature chaleureuse.",
        top: "Cassis",
        heart: "Rose",
        base: "Vanille & Bois",
        price30: 490,
        price50: 650,
        price100: 820,
        badge: "ICONIQUE",
        color: "rose"
    },

    {
        id: "F15",
        catalogue: "15",
        name: "La Nuit Trésor",
        shortName: "LA NUIT TRÉSOR",
        category: "femme",
        categoryLabel: "FEMME",
        image: "la-nuit-tresor.jpg",
        tagline: "Une nuit précieuse.",
        description: "Une fragrance sensuelle et profonde aux accents gourmands.",
        top: "Fruits",
        heart: "Rose",
        base: "Vanille & Pralin",
        price30: 490,
        price50: 650,
        price100: 820,
        badge: "BEST-SELLER",
        color: "rose"
    },

    {
        id: "F16",
        catalogue: "16",
        name: "Coco Chanel",
        shortName: "COCO CHANEL",
        category: "femme",
        categoryLabel: "FEMME",
        image: "coco-chanel-2.jpg",
        tagline: "L'élégance intemporelle.",
        description: "Une seconde référence Coco Chanel présente dans votre catalogue.",
        top: "Agrumes",
        heart: "Rose & Jasmin",
        base: "Ambre & Patchouli",
        price30: 490,
        price50: 650,
        price100: 820,
        badge: "ICONIQUE",
        color: "rose"
    },

    {
        id: "F17",
        catalogue: "17",
        name: "Giordani",
        shortName: "GIORDANI",
        category: "femme",
        categoryLabel: "FEMME",
        image: "giordani.jpg",
        tagline: "Une élégance raffinée.",
        description: "Une fragrance féminine florale et élégante.",
        top: "Agrumes",
        heart: "Fleurs blanches",
        base: "Bois",
        price30: 450,
        price50: 610,
        price100: 780,
        badge: "",
        color: "white"
    },

    {
        id: "F18",
        catalogue: "18",
        name: "Dior",
        shortName: "DIOR",
        category: "femme",
        categoryLabel: "FEMME",
        image: "dior-femme.jpg",
        tagline: "L'élégance française.",
        description: "Une fragrance féminine sophistiquée et intemporelle.",
        top: "Agrumes",
        heart: "Fleurs",
        base: "Bois & Musc",
        price30: 490,
        price50: 650,
        price100: 820,
        badge: "ICONIQUE",
        color: "rose"
    },

    {
        id: "F19",
        catalogue: "19",
        name: "Azzaro Wanted Girl",
        shortName: "AZZARO WANTED GIRL",
        category: "femme",
        categoryLabel: "FEMME",
        image: "azzaro-wanted-girl.jpg",
        tagline: "Audacieuse et magnétique.",
        description: "Une fragrance féminine gourmande et lumineuse.",
        top: "Gingembre",
        heart: "Fleurs",
        base: "Tonka & Dulce",
        price30: 490,
        price50: 650,
        price100: 820,
        badge: "NOUVEAU",
        color: "rose"
    },

    {
        id: "F20",
        catalogue: "20",
        name: "Escada Taj",
        shortName: "ESCADA TAJ",
        category: "femme",
        categoryLabel: "FEMME",
        image: "escada-taj-2.jpg",
        tagline: "Une évasion exotique.",
        description: "Une seconde référence Escada Taj présente dans votre catalogue.",
        top: "Fruits exotiques",
        heart: "Fleurs tropicales",
        base: "Bois doux",
        price30: 490,
        price50: 650,
        price100: 820,
        badge: "",
        color: "rose"
    },

    {
        id: "F21",
        catalogue: "21",
        name: "Valentino",
        shortName: "VALENTINO",
        category: "femme",
        categoryLabel: "FEMME",
        image: "valentino-femme.jpg",
        tagline: "Romantique et sophistiquée.",
        description: "Une fragrance féminine élégante et moderne.",
        top: "Fruité",
        heart: "Rose & Jasmin",
        base: "Vanille & Bois",
        price30: 490,
        price50: 650,
        price100: 820,
        badge: "",
        color: "rose"
    },

    {
        id: "F22",
        catalogue: "22",
        name: "So Elixir",
        shortName: "SO ELIXIR",
        category: "femme",
        categoryLabel: "FEMME",
        image: "so-elixir.jpg",
        tagline: "Une aura mystérieuse.",
        description: "Une fragrance féminine florale et chaleureuse.",
        top: "Fruits",
        heart: "Rose",
        base: "Patchouli & Musc",
        price30: 450,
        price50: 610,
        price100: 780,
        badge: "",
        color: "rose"
    },

    {
        id: "F23",
        catalogue: "23",
        name: "Evidence",
        shortName: "EVIDENCE",
        category: "femme",
        categoryLabel: "FEMME",
        image: "evidence.jpg",
        tagline: "Une élégance naturelle.",
        description: "Une fragrance fraîche et féminine.",
        top: "Agrumes",
        heart: "Rose",
        base: "Mousse & Bois",
        price30: 450,
        price50: 610,
        price100: 780,
        badge: "",
        color: "white"
    },

    {
        id: "F24",
        catalogue: "24",
        name: "Musk Rouge",
        shortName: "MUSK ROUGE",
        category: "femme",
        categoryLabel: "FEMME",
        image: "musk-rouge.jpg",
        tagline: "Musc et sensualité.",
        description: "Une fragrance douce, chaude et sensuelle.",
        top: "Fruits rouges",
        heart: "Rose",
        base: "Musc",
        price30: 490,
        price50: 650,
        price100: 820,
        badge: "FAVORI",
        color: "rose"
    },

    {
        id: "F25",
        catalogue: "25",
        name: "D&G",
        shortName: "D&G",
        category: "femme",
        categoryLabel: "FEMME",
        image: "dg-femme.jpg",
        tagline: "Une signature italienne.",
        description: "Une fragrance féminine élégante et expressive.",
        top: "Agrumes",
        heart: "Fleurs",
        base: "Bois",
        price30: 490,
        price50: 650,
        price100: 820,
        badge: "",
        color: "rose"
    },

    {
        id: "F26",
        catalogue: "26",
        name: "Amber Elixir",
        shortName: "AMBER ELIXIR",
        category: "femme",
        categoryLabel: "FEMME",
        image: "amber-elixir.jpg",
        tagline: "Chaleur et mystère.",
        description: "Une fragrance enveloppante dominée par l'ambre.",
        top: "Épices",
        heart: "Ambre",
        base: "Vanille & Bois",
        price30: 520,
        price50: 690,
        price100: 850,
        badge: "PREMIUM",
        color: "amber"
    },

    {
        id: "F27",
        catalogue: "27",
        name: "Nina Ricci",
        shortName: "NINA RICCI",
        category: "femme",
        categoryLabel: "FEMME",
        image: "nina-ricci.jpg",
        tagline: "Romantique et délicate.",
        description: "Une fragrance fruitée et féminine.",
        top: "Pomme",
        heart: "Fleurs",
        base: "Musc & Bois",
        price30: 490,
        price50: 650,
        price100: 820,
        badge: "",
        color: "rose"
    },

    {
        id: "F28",
        catalogue: "28",
        name: "Versace",
        shortName: "VERSACE",
        category: "femme",
        categoryLabel: "FEMME",
        image: "versace-femme.jpg",
        tagline: "Glamour méditerranéen.",
        description: "Une fragrance féminine lumineuse et sophistiquée.",
        top: "Fruits",
        heart: "Fleurs",
        base: "Bois & Musc",
        price30: 490,
        price50: 650,
        price100: 820,
        badge: "ICONIQUE",
        color: "rose"
    },

    {
        id: "F29",
        catalogue: "29",
        name: "Cloé Nomade",
        shortName: "CLOÉ NOMADE",
        category: "femme",
        categoryLabel: "FEMME",
        image: "chloe-nomade.jpg",
        tagline: "Libre et élégante.",
        description: "Une fragrance féminine moderne avec une personnalité affirmée.",
        top: "Mirabelle",
        heart: "Freesia",
        base: "Mousse & Patchouli",
        price30: 490,
        price50: 650,
        price100: 820,
        badge: "NOUVEAU",
        color: "rose"
    },

    {
        id: "F30",
        catalogue: "30",
        name: "Lancôme",
        shortName: "LANCÔME",
        category: "femme",
        categoryLabel: "FEMME",
        image: "lancome-femme.jpg",
        tagline: "Une élégance parisienne.",
        description: "Une fragrance féminine raffinée et sophistiquée.",
        top: "Fruité",
        heart: "Rose & Jasmin",
        base: "Vanille & Musc",
        price30: 490,
        price50: 650,
        price100: 820,
        badge: "ICONIQUE",
        color: "rose"
    },

    {
        id: "F31",
        catalogue: "31",
        name: "Amirat Al Arab",
        shortName: "AMIRAT AL ARAB",
        category: "femme",
        categoryLabel: "FEMME",
        image: "amirat-al-arab.jpg",
        tagline: "Une signature orientale.",
        description: "Une fragrance chaleureuse et élégante inspirée de la parfumerie orientale.",
        top: "Fruits",
        heart: "Fleurs",
        base: "Musc & Ambre",
        price30: 490,
        price50: 650,
        price100: 820,
        badge: "ORIENTAL",
        color: "amber"
    },

    {
        id: "F32",
        catalogue: "32",
        name: "Ghobar Dahab",
        shortName: "GHOBAR DAHAB",
        category: "femme",
        categoryLabel: "FEMME",
        image: "ghobar-dahab.jpg",
        tagline: "L'or en parfum.",
        description: "Une fragrance chaleureuse et précieuse.",
        top: "Épices",
        heart: "Ambre",
        base: "Musc & Bois",
        price30: 520,
        price50: 690,
        price100: 850,
        badge: "PREMIUM",
        color: "amber"
    },

    {
        id: "F33",
        catalogue: "33",
        name: "Ana Al Abyad",
        shortName: "ANA AL ABYAD",
        category: "femme",
        categoryLabel: "FEMME",
        image: "ana-al-abyad.jpg",
        tagline: "Pureté et élégance.",
        description: "Une fragrance musquée, douce et lumineuse.",
        top: "Agrumes",
        heart: "Fleurs blanches",
        base: "Musc",
        price30: 490,
        price50: 650,
        price100: 820,
        badge: "FAVORI",
        color: "white"
    },

    {
        id: "F34",
        catalogue: "34",
        name: "Yara",
        shortName: "YARA",
        category: "femme",
        categoryLabel: "FEMME",
        image: "yara.jpg",
        tagline: "Douceur irrésistible.",
        description: "Une fragrance gourmande et féminine à la signature douce.",
        top: "Fruits",
        heart: "Fleurs",
        base: "Vanille & Musc",
        price30: 490,
        price50: 650,
        price100: 820,
        badge: "BEST-SELLER",
        color: "rose"
    },

    {
        id: "F35",
        catalogue: "35",
        name: "Khamra",
        shortName: "KHAMRA",
        category: "femme",
        categoryLabel: "FEMME",
        image: "khamra.jpg",
        tagline: "Chaleur et gourmandise.",
        description: "Une fragrance orientale gourmande et chaleureuse.",
        top: "Cannelle",
        heart: "Dattes & Pralin",
        base: "Vanille & Ambre",
        price30: 520,
        price50: 690,
        price100: 850,
        badge: "BEST-SELLER",
        color: "amber"
    },

    {
        id: "F36",
        catalogue: "36",
        name: "Kayali",
        shortName: "KAYALI",
        category: "femme",
        categoryLabel: "FEMME",
        image: "kayali.jpg",
        tagline: "Une collection de sensations.",
        description: "Une fragrance féminine moderne et sophistiquée.",
        top: "Fruité",
        heart: "Fleurs",
        base: "Vanille & Musc",
        price30: 520,
        price50: 690,
        price100: 850,
        badge: "PREMIUM",
        color: "rose"
    },

    {
        id: "F37",
        catalogue: "37",
        name: "Louis Vuitton",
        shortName: "LOUIS VUITTON",
        category: "femme",
        categoryLabel: "FEMME",
        image: "louis-vuitton-femme.jpg",
        tagline: "Luxe et sophistication.",
        description: "Une fragrance élégante et raffinée.",
        top: "Agrumes",
        heart: "Fleurs",
        base: "Bois",
        price30: 550,
        price50: 720,
        price100: 890,
        badge: "LUXE",
        color: "amber"
    },

    {
        id: "F38",
        catalogue: "38",
        name: "Nina Ricci",
        shortName: "NINA RICCI",
        category: "femme",
        categoryLabel: "FEMME",
        image: "nina-ricci-2.jpg",
        tagline: "Une douceur féminine.",
        description: "Une seconde référence Nina Ricci présente dans votre catalogue.",
        top: "Fruits",
        heart: "Fleurs",
        base: "Musc & Bois",
        price30: 490,
        price50: 650,
        price100: 820,
        badge: "",
        color: "rose"
    },

    {
        id: "F39",
        catalogue: "39",
        name: "Giorgio Armani",
        shortName: "GIORGIO ARMANI",
        category: "femme",
        categoryLabel: "FEMME",
        image: "giorgio-armani-femme.jpg",
        tagline: "Une sophistication italienne.",
        description: "Une fragrance féminine élégante et raffinée.",
        top: "Fruits",
        heart: "Fleurs",
        base: "Bois & Vanille",
        price30: 490,
        price50: 650,
        price100: 820,
        badge: "ICONIQUE",
        color: "rose"
    },

    {
        id: "F40",
        catalogue: "40",
        name: "Tobaco Vanille",
        shortName: "TOBACO VANILLE",
        category: "femme",
        categoryLabel: "FEMME",
        image: "tobacco-vanille.jpg",
        tagline: "Opulence et chaleur.",
        description: "Une fragrance riche et chaleureuse mêlant tabac, épices et vanille.",
        top: "Tabac",
        heart: "Épices",
        base: "Vanille",
        price30: 550,
        price50: 720,
        price100: 890,
        badge: "PREMIUM",
        color: "amber"
    },

    {
        id: "F41",
        catalogue: "41",
        name: "Givenchy",
        shortName: "GIVENCHY",
        category: "femme",
        categoryLabel: "FEMME",
        image: "givenchy-femme.jpg",
        tagline: "Élégance française.",
        description: "Une fragrance féminine raffinée et sophistiquée.",
        top: "Fruits",
        heart: "Fleurs",
        base: "Bois & Musc",
        price30: 490,
        price50: 650,
        price100: 820,
        badge: "",
        color: "rose"
    },

    {
        id: "F42",
        catalogue: "42",
        name: "Prada",
        shortName: "PRADA",
        category: "femme",
        categoryLabel: "FEMME",
        image: "prada-femme.jpg",
        tagline: "Minimalisme et élégance.",
        description: "Une fragrance moderne, propre et sophistiquée.",
        top: "Agrumes",
        heart: "Fleurs",
        base: "Musc & Bois",
        price30: 490,
        price50: 650,
        price100: 820,
        badge: "",
        color: "white"
    },

    {
        id: "F43",
        catalogue: "43",
        name: "Zara",
        shortName: "ZARA",
        category: "femme",
        categoryLabel: "FEMME",
        image: "zara-femme.jpg",
        tagline: "Une élégance accessible.",
        description: "Une fragrance féminine moderne et polyvalente.",
        top: "Fruité",
        heart: "Fleurs",
        base: "Musc & Bois",
        price30: 450,
        price50: 610,
        price100: 780,
        badge: "",
        color: "rose"
    },

    {
        id: "F44",
        catalogue: "44",
        name: "Hermes Voyage",
        shortName: "HERMES VOYAGE",
        category: "femme",
        categoryLabel: "FEMME",
        image: "hermes-voyage.jpg",
        tagline: "Une invitation au voyage.",
        description: "Une fragrance élégante et fraîche à la personnalité raffinée.",
        top: "Agrumes",
        heart: "Thé",
        base: "Bois & Musc",
        price30: 490,
        price50: 650,
        price100: 820,
        badge: "ICONIQUE",
        color: "white"
    },


    /* =====================================================
       HOMME — 44
    ===================================================== */

    {
        id: "H101",
        catalogue: "101",
        name: "Valentino Roma",
        shortName: "VALENTINO ROMA",
        category: "homme",
        categoryLabel: "HOMME",
        image: "valentino-roma.jpg",
        tagline: "Une élégance contemporaine.",
        description: "Une fragrance masculine sophistiquée, élégante et chaleureuse.",
        top: "Bergamote",
        heart: "Épices",
        base: "Bois & Vanille",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "BEST-SELLER",
        color: "dark"
    },

    {
        id: "H102",
        catalogue: "102",
        name: "Ultra Male",
        shortName: "ULTRA MALE",
        category: "homme",
        categoryLabel: "HOMME",
        image: "ultra-male.jpg",
        tagline: "Intense et magnétique.",
        description: "Une fragrance masculine puissante et gourmande.",
        top: "Poire",
        heart: "Cannelle",
        base: "Vanille & Ambre",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "BEST-SELLER",
        color: "dark"
    },

    {
        id: "H103",
        catalogue: "103",
        name: "Strong With You Intense",
        shortName: "STRONG WITH YOU INTENSE",
        category: "homme",
        categoryLabel: "HOMME",
        image: "strong-with-you-intense.jpg",
        tagline: "Une intensité addictive.",
        description: "Une fragrance masculine chaleureuse, sucrée et intense.",
        top: "Poivre rose",
        heart: "Cannelle",
        base: "Vanille & Ambre",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "BEST-SELLER",
        color: "dark"
    },

    {
        id: "H104",
        catalogue: "104",
        name: "Hugo Boss",
        shortName: "HUGO BOSS",
        category: "homme",
        categoryLabel: "HOMME",
        image: "hugo-boss.jpg",
        tagline: "Une élégance masculine.",
        description: "Une fragrance masculine fraîche et élégante.",
        top: "Pomme",
        heart: "Géranium",
        base: "Bois",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "",
        color: "dark"
    },

    {
        id: "H105",
        catalogue: "105",
        name: "Versace Eros",
        shortName: "VERSACE EROS",
        category: "homme",
        categoryLabel: "HOMME",
        image: "versace-eros.jpg",
        tagline: "Force et séduction.",
        description: "Une fragrance masculine fraîche, intense et séduisante.",
        top: "Menthe",
        heart: "Tonka",
        base: "Vanille & Bois",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "BEST-SELLER",
        color: "dark"
    },

    {
        id: "H106",
        catalogue: "106",
        name: "Bleu Chanel",
        shortName: "BLEU CHANEL",
        category: "homme",
        categoryLabel: "HOMME",
        image: "bleu-chanel.jpg",
        tagline: "Une liberté absolue.",
        description: "Une fragrance masculine élégante, fraîche et boisée.",
        top: "Agrumes",
        heart: "Gingembre",
        base: "Bois de santal",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "ICONIQUE",
        color: "dark"
    },

    {
        id: "H107",
        catalogue: "107",
        name: "La Coste Noir",
        shortName: "LA COSTE NOIR",
        category: "homme",
        categoryLabel: "HOMME",
        image: "lacoste-noir.jpg",
        tagline: "Élégance et fraîcheur.",
        description: "Une fragrance masculine fraîche et élégante.",
        top: "Fruits",
        heart: "Épices",
        base: "Bois",
        price30: 450,
        price50: 610,
        price100: 780,
        badge: "",
        color: "dark"
    },

    {
        id: "H108",
        catalogue: "108",
        name: "Allure Sport",
        shortName: "ALLURE SPORT",
        category: "homme",
        categoryLabel: "HOMME",
        image: "allure-sport.jpg",
        tagline: "Énergie et élégance.",
        description: "Une fragrance masculine fraîche, dynamique et sportive.",
        top: "Agrumes",
        heart: "Poivre",
        base: "Tonka & Musc",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "BEST-SELLER",
        color: "dark"
    },

    {
        id: "H109",
        catalogue: "109",
        name: "Sovage",
        shortName: "SOVAGE",
        category: "homme",
        categoryLabel: "HOMME",
        image: "sovage.jpg",
        tagline: "Libre. Sauvage. Magnétique.",
        description: "Une fragrance masculine fraîche et puissante.",
        top: "Bergamote",
        heart: "Poivre",
        base: "Ambroxan & Bois",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "BEST-SELLER",
        color: "dark"
    },

    {
        id: "H110",
        catalogue: "110",
        name: "Giorgio Armani",
        shortName: "GIORGIO ARMANI",
        category: "homme",
        categoryLabel: "HOMME",
        image: "giorgio-armani-homme.jpg",
        tagline: "L'élégance italienne.",
        description: "Une fragrance masculine raffinée et sophistiquée.",
        top: "Agrumes",
        heart: "Aromatiques",
        base: "Bois",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "ICONIQUE",
        color: "dark"
    },

    {
        id: "H111",
        catalogue: "111",
        name: "D&G",
        shortName: "D&G",
        category: "homme",
        categoryLabel: "HOMME",
        image: "dg-homme.jpg",
        tagline: "Une signature italienne.",
        description: "Une fragrance masculine élégante et expressive.",
        top: "Agrumes",
        heart: "Aromatiques",
        base: "Bois",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "",
        color: "dark"
    },

    {
        id: "H112",
        catalogue: "112",
        name: "Gucci",
        shortName: "GUCCI",
        category: "homme",
        categoryLabel: "HOMME",
        image: "gucci-homme.jpg",
        tagline: "Luxe et caractère.",
        description: "Une fragrance masculine élégante et sophistiquée.",
        top: "Agrumes",
        heart: "Fleurs",
        base: "Bois & Musc",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "PREMIUM",
        color: "dark"
    },

    {
        id: "H113",
        catalogue: "113",
        name: "Chanel",
        shortName: "CHANEL",
        category: "homme",
        categoryLabel: "HOMME",
        image: "chanel-homme.jpg",
        tagline: "L'élégance absolue.",
        description: "Une fragrance masculine intemporelle et raffinée.",
        top: "Agrumes",
        heart: "Aromatiques",
        base: "Bois",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "ICONIQUE",
        color: "dark"
    },

    {
        id: "H114",
        catalogue: "114",
        name: "Givenchy",
        shortName: "GIVENCHY",
        category: "homme",
        categoryLabel: "HOMME",
        image: "givenchy-homme.jpg",
        tagline: "Un caractère raffiné.",
        description: "Une fragrance masculine élégante et moderne.",
        top: "Agrumes",
        heart: "Épices",
        base: "Bois",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "",
        color: "dark"
    },

    {
        id: "H115",
        catalogue: "115",
        name: "Carolina Herrera",
        shortName: "CAROLINA HERRERA",
        category: "homme",
        categoryLabel: "HOMME",
        image: "carolina-herrera-homme.jpg",
        tagline: "Élégance et puissance.",
        description: "Une fragrance masculine sophistiquée et séduisante.",
        top: "Agrumes",
        heart: "Épices",
        base: "Bois",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "FAVORI",
        color: "dark"
    },

    {
        id: "H116",
        catalogue: "116",
        name: "Lacoste",
        shortName: "LACOSTE",
        category: "homme",
        categoryLabel: "HOMME",
        image: "lacoste-homme.jpg",
        tagline: "Fraîcheur et élégance.",
        description: "Une fragrance masculine fraîche et sportive.",
        top: "Agrumes",
        heart: "Aromatiques",
        base: "Bois",
        price30: 450,
        price50: 610,
        price100: 780,
        badge: "",
        color: "dark"
    },

    {
        id: "H117",
        catalogue: "117",
        name: "Azzaro",
        shortName: "AZZARO",
        category: "homme",
        categoryLabel: "HOMME",
        image: "azzaro-homme.jpg",
        tagline: "Charisme et séduction.",
        description: "Une fragrance masculine chaleureuse et élégante.",
        top: "Agrumes",
        heart: "Épices",
        base: "Bois",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "",
        color: "dark"
    },

    {
        id: "H118",
        catalogue: "118",
        name: "Hermes",
        shortName: "HERMES",
        category: "homme",
        categoryLabel: "HOMME",
        image: "hermes-homme.jpg",
        tagline: "Une élégance naturelle.",
        description: "Une fragrance masculine raffinée et boisée.",
        top: "Agrumes",
        heart: "Épices",
        base: "Bois",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "ICONIQUE",
        color: "dark"
    },

    {
        id: "H119",
        catalogue: "119",
        name: "Diesel",
        shortName: "DIESEL",
        category: "homme",
        categoryLabel: "HOMME",
        image: "diesel-homme.jpg",
        tagline: "Une attitude affirmée.",
        description: "Une fragrance masculine moderne et expressive.",
        top: "Fruité",
        heart: "Épices",
        base: "Bois",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "",
        color: "dark"
    },

    {
        id: "H120",
        catalogue: "120",
        name: "Cartier",
        shortName: "CARTIER",
        category: "homme",
        categoryLabel: "HOMME",
        image: "cartier-homme.jpg",
        tagline: "Luxe et distinction.",
        description: "Une fragrance masculine élégante et sophistiquée.",
        top: "Agrumes",
        heart: "Épices",
        base: "Bois",
        price30: 520,
        price50: 690,
        price100: 850,
        badge: "PREMIUM",
        color: "dark"
    },

    {
        id: "H121",
        catalogue: "121",
        name: "Zara",
        shortName: "ZARA",
        category: "homme",
        categoryLabel: "HOMME",
        image: "zara-homme.jpg",
        tagline: "Moderne et accessible.",
        description: "Une fragrance masculine polyvalente et moderne.",
        top: "Agrumes",
        heart: "Aromatiques",
        base: "Bois",
        price30: 450,
        price50: 610,
        price100: 780,
        badge: "",
        color: "dark"
    },

    {
        id: "H122",
        catalogue: "122",
        name: "Thierry Mugler",
        shortName: "THIERRY MUGLER",
        category: "homme",
        categoryLabel: "HOMME",
        image: "thierry-mugler.jpg",
        tagline: "Une signature puissante.",
        description: "Une fragrance masculine intense et originale.",
        top: "Agrumes",
        heart: "Café",
        base: "Bois",
        price30: 520,
        price50: 690,
        price100: 850,
        badge: "EXCLUSIF",
        color: "dark"
    },

    {
        id: "H123",
        catalogue: "123",
        name: "David Off",
        shortName: "DAVID OFF",
        category: "homme",
        categoryLabel: "HOMME",
        image: "davidoff.jpg",
        tagline: "Fraîcheur emblématique.",
        description: "Une fragrance masculine fraîche et aquatique.",
        top: "Agrumes",
        heart: "Aromatiques",
        base: "Bois",
        price30: 450,
        price50: 610,
        price100: 780,
        badge: "CLASSIQUE",
        color: "dark"
    },

    {
        id: "H124",
        catalogue: "124",
        name: "Prada",
        shortName: "PRADA",
        category: "homme",
        categoryLabel: "HOMME",
        image: "prada-homme.jpg",
        tagline: "Minimalisme sophistiqué.",
        description: "Une fragrance masculine élégante et moderne.",
        top: "Agrumes",
        heart: "Aromatiques",
        base: "Ambre & Bois",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "PREMIUM",
        color: "dark"
    },

    {
        id: "H125",
        catalogue: "125",
        name: "Bvlgari",
        shortName: "BVLGARI",
        category: "homme",
        categoryLabel: "HOMME",
        image: "bvlgari-homme.jpg",
        tagline: "L'élégance italienne.",
        description: "Une fragrance masculine raffinée et contemporaine.",
        top: "Agrumes",
        heart: "Thé",
        base: "Bois",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "PREMIUM",
        color: "dark"
    },

    {
        id: "H126",
        catalogue: "126",
        name: "Versace",
        shortName: "VERSACE",
        category: "homme",
        categoryLabel: "HOMME",
        image: "versace-homme.jpg",
        tagline: "Charisme méditerranéen.",
        description: "Une fragrance masculine élégante et séduisante.",
        top: "Agrumes",
        heart: "Épices",
        base: "Bois",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "ICONIQUE",
        color: "dark"
    },

    {
        id: "H127",
        catalogue: "127",
        name: "Paco Rabanne",
        shortName: "PACO RABANNE",
        category: "homme",
        categoryLabel: "HOMME",
        image: "paco-rabanne.jpg",
        tagline: "Puissance et séduction.",
        description: "Une fragrance masculine intense et moderne.",
        top: "Agrumes",
        heart: "Épices",
        base: "Bois & Tonka",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "BEST-SELLER",
        color: "dark"
    },

    {
        id: "H128",
        catalogue: "128",
        name: "Nikos",
        shortName: "NIKOS",
        category: "homme",
        categoryLabel: "HOMME",
        image: "nikos.jpg",
        tagline: "Une signature masculine.",
        description: "Une fragrance masculine élégante et chaleureuse.",
        top: "Agrumes",
        heart: "Fleurs",
        base: "Vanille & Bois",
        price30: 450,
        price50: 610,
        price100: 780,
        badge: "",
        color: "dark"
    },

    {
        id: "H129",
        catalogue: "129",
        name: "Carolina Herrera",
        shortName: "CAROLINA HERRERA",
        category: "homme",
        categoryLabel: "HOMME",
        image: "carolina-herrera-homme-2.jpg",
        tagline: "Un caractère iconique.",
        description: "Une seconde référence Carolina Herrera présente dans votre catalogue.",
        top: "Agrumes",
        heart: "Épices",
        base: "Bois",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "ICONIQUE",
        color: "dark"
    },

    {
        id: "H130",
        catalogue: "130",
        name: "Guerlain",
        shortName: "GUERLAIN",
        category: "homme",
        categoryLabel: "HOMME",
        image: "guerlain-homme.jpg",
        tagline: "L'art de la parfumerie.",
        description: "Une fragrance masculine raffinée et sophistiquée.",
        top: "Agrumes",
        heart: "Aromatiques",
        base: "Bois",
        price30: 520,
        price50: 690,
        price100: 850,
        badge: "PREMIUM",
        color: "dark"
    },

    {
        id: "H131",
        catalogue: "131",
        name: "Mont Blanc",
        shortName: "MONT BLANC",
        category: "homme",
        categoryLabel: "HOMME",
        image: "mont-blanc.jpg",
        tagline: "Fraîcheur et raffinement.",
        description: "Une fragrance masculine fraîche, élégante et polyvalente.",
        top: "Agrumes",
        heart: "Aromatiques",
        base: "Bois",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "",
        color: "dark"
    },

    {
        id: "H132",
        catalogue: "132",
        name: "Tom Ford",
        shortName: "TOM FORD",
        category: "homme",
        categoryLabel: "HOMME",
        image: "tom-ford-homme.jpg",
        tagline: "Luxe et caractère.",
        description: "Une fragrance masculine intense, sophistiquée et luxueuse.",
        top: "Épices",
        heart: "Bois",
        base: "Ambre & Oud",
        price30: 550,
        price50: 720,
        price100: 890,
        badge: "LUXE",
        color: "dark"
    },

    {
        id: "H133",
        catalogue: "133",
        name: "YSL",
        shortName: "YSL",
        category: "homme",
        categoryLabel: "HOMME",
        image: "ysl-homme.jpg",
        tagline: "Une élégance audacieuse.",
        description: "Une fragrance masculine moderne et sophistiquée.",
        top: "Agrumes",
        heart: "Aromatiques",
        base: "Bois",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "BEST-SELLER",
        color: "dark"
    },

    {
        id: "H134",
        catalogue: "134",
        name: "Hugo Boss",
        shortName: "HUGO BOSS",
        category: "homme",
        categoryLabel: "HOMME",
        image: "hugo-boss-2.jpg",
        tagline: "L'assurance masculine.",
        description: "Une seconde référence Hugo Boss présente dans votre catalogue.",
        top: "Fruité",
        heart: "Aromatiques",
        base: "Bois",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "",
        color: "dark"
    },

    {
        id: "H135",
        catalogue: "135",
        name: "Valentino",
        shortName: "VALENTINO",
        category: "homme",
        categoryLabel: "HOMME",
        image: "valentino-homme.jpg",
        tagline: "Élégance italienne.",
        description: "Une fragrance masculine moderne et raffinée.",
        top: "Agrumes",
        heart: "Épices",
        base: "Bois & Vanille",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "",
        color: "dark"
    },

    {
        id: "H136",
        catalogue: "136",
        name: "Jean Paul Gaultier",
        shortName: "JEAN PAUL GAULTIER",
        category: "homme",
        categoryLabel: "HOMME",
        image: "jean-paul-gaultier.jpg",
        tagline: "Un caractère iconique.",
        description: "Une fragrance masculine sensuelle et reconnaissable.",
        top: "Lavande",
        heart: "Épices",
        base: "Vanille & Tonka",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "BEST-SELLER",
        color: "dark"
    },

    {
        id: "H137",
        catalogue: "137",
        name: "Majouri",
        shortName: "MAJOURI",
        category: "homme",
        categoryLabel: "HOMME",
        image: "majouri.jpg",
        tagline: "Une signature précieuse.",
        description: "Une fragrance masculine élégante et chaleureuse.",
        top: "Épices",
        heart: "Bois",
        base: "Ambre & Musc",
        price30: 520,
        price50: 690,
        price100: 850,
        badge: "EXCLUSIF",
        color: "dark"
    },

    {
        id: "H138",
        catalogue: "138",
        name: "Parfum de Marly",
        shortName: "PARFUM DE MARLY",
        category: "homme",
        categoryLabel: "HOMME",
        image: "parfum-de-marly.jpg",
        tagline: "Le luxe à l'état pur.",
        description: "Une fragrance masculine luxueuse et sophistiquée.",
        top: "Agrumes",
        heart: "Épices",
        base: "Bois & Ambre",
        price30: 550,
        price50: 720,
        price100: 890,
        badge: "LUXE",
        color: "dark"
    },

    {
        id: "H139",
        catalogue: "139",
        name: "Paris Hilton",
        shortName: "PARIS HILTON",
        category: "homme",
        categoryLabel: "HOMME",
        image: "paris-hilton.jpg",
        tagline: "Glamour et caractère.",
        description: "Une fragrance élégante et moderne.",
        top: "Fruits",
        heart: "Fleurs",
        base: "Bois & Musc",
        price30: 450,
        price50: 610,
        price100: 780,
        badge: "",
        color: "dark"
    },

    {
        id: "H140",
        catalogue: "140",
        name: "Britney Spears",
        shortName: "BRITNEY SPEARS",
        category: "homme",
        categoryLabel: "HOMME",
        image: "britney-spears.jpg",
        tagline: "Une signature originale.",
        description: "Une fragrance moderne et expressive.",
        top: "Fruité",
        heart: "Fleurs",
        base: "Vanille & Musc",
        price30: 450,
        price50: 610,
        price100: 780,
        badge: "",
        color: "dark"
    },

    {
        id: "H141",
        catalogue: "141",
        name: "Joop",
        shortName: "JOOP",
        category: "homme",
        categoryLabel: "HOMME",
        image: "joop.jpg",
        tagline: "Intense et reconnaissable.",
        description: "Une fragrance masculine chaleureuse et expressive.",
        top: "Agrumes",
        heart: "Fleurs",
        base: "Bois & Musc",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "CLASSIQUE",
        color: "dark"
    },

    {
        id: "H142",
        catalogue: "142",
        name: "Musk Oud",
        shortName: "MUSK OUD",
        category: "homme",
        categoryLabel: "HOMME",
        image: "musk-oud.jpg",
        tagline: "Mystère oriental.",
        description: "Une fragrance masculine profonde mêlant musc et oud.",
        top: "Épices",
        heart: "Oud",
        base: "Musc & Ambre",
        price30: 520,
        price50: 690,
        price100: 850,
        badge: "PREMIUM",
        color: "oud"
    },

    {
        id: "H143",
        catalogue: "143",
        name: "Amber Musk",
        shortName: "AMBER MUSK",
        category: "homme",
        categoryLabel: "HOMME",
        image: "amber-musk.jpg",
        tagline: "Chaleur et profondeur.",
        description: "Une fragrance chaleureuse construite autour de l'ambre et du musc.",
        top: "Épices",
        heart: "Ambre",
        base: "Musc & Bois",
        price30: 520,
        price50: 690,
        price100: 850,
        badge: "PREMIUM",
        color: "amber"
    },

    {
        id: "H144",
        catalogue: "144",
        name: "Modhila",
        shortName: "MODHILA",
        category: "homme",
        categoryLabel: "HOMME",
        image: "modhila.jpg",
        tagline: "Une présence qui reste.",
        description: "Une fragrance masculine chaleureuse et mystérieuse.",
        top: "Épices",
        heart: "Bois",
        base: "Ambre & Musc",
        price30: 520,
        price50: 690,
        price100: 850,
        badge: "EXCLUSIF",
        color: "amber"
    }
];


/* =========================================================
   OUTILS PARFUM
========================================================= */

function getProductType(product) {
    if (!product) return "eau";

    if (product.type === "extrait") {
        return "extrait";
    }

    if (EXTRAIT_IDS.has(product.id)) {
        return "extrait";
    }

    return "eau";
}


function getProductTypeLabel(product) {
    return getProductType(product) === "extrait"
        ? "EXTRAIT DE PARFUM"
        : "EAU DE PARFUM";
}


function getProductPrice(product, size) {
    const type = getProductType(product);
    return PRICES[type][size];
}


/* =========================================================
   PACKS
========================================================= */

const packs = [

    {
        id: "P01",
        catalogue: "PACK-01",
        name: "Pack 3 Parfums",
        shortName: "PACK 3",
        category: "packs",
        categoryLabel: "PACKS",
        tagline: "1 Extrait + 2 Eaux de Parfum",
        description: "Composez votre pack avec 1 Extrait de Parfum et 2 Eaux de Parfum au choix.",
        price: 200,
        badge: "BEST-SELLER",
        packType: "three",
        selectionCount: 3,
        extraitCount: 1,
        eauCount: 2
    },

    {
        id: "P02",
        catalogue: "PACK-02",
        name: "Pack 6 Parfums",
        shortName: "PACK 6",
        category: "packs",
        categoryLabel: "PACKS",
        tagline: "2 Extraits + 4 Eaux de Parfum",
        description: "Composez votre pack avec 2 Extraits de Parfum et 4 Eaux de Parfum au choix.",
        price: 400,
        badge: "MEILLEURE OFFRE",
        packType: "six",
        selectionCount: 6,
        extraitCount: 2,
        eauCount: 4
    }
];


/* =========================================================
   VARIABLES
========================================================= */

let currentProduct = null;
let currentSize = 50;
let currentPrice = 70;
let quantity = 1;

let bag = [];
let favorites = [];

let selectedPackSlots = [];
let currentPack = null;


/* =========================================================
   LOCAL STORAGE
========================================================= */

function saveData() {
    try {
        localStorage.setItem("elixirBag", JSON.stringify(bag));
        localStorage.setItem("elixirFavorites", JSON.stringify(favorites));
    } catch (error) {
        console.warn("LocalStorage indisponible.");
    }
}


function loadData() {
    try {
        const savedBag = localStorage.getItem("elixirBag");
        const savedFavorites = localStorage.getItem("elixirFavorites");

        if (savedBag) {
            bag = JSON.parse(savedBag);
        }

        if (savedFavorites) {
            favorites = JSON.parse(savedFavorites);
        }
    } catch (error) {
        bag = [];
        favorites = [];
    }
}


/* =========================================================
   CATALOGUE
========================================================= */

function isPack(item) {
    return item && item.category === "packs";
}


function getCatalogItem(id) {
    return (
        products.find(product => product.id === id) ||
        packs.find(pack => pack.id === id) ||
        null
    );
}


function getCatalogTypeLabel(item) {
    if (isPack(item)) {
        return "PACK";
    }

    return getProductTypeLabel(item);
}


function getCatalogPrice(item, size = 50) {
    if (isPack(item)) {
        return item.price;
    }

    return getProductPrice(item, size);
}


/* =========================================================
   IMAGES
========================================================= */

function getProductImage(product) {
    if (!product || !product.image) {
        return "";
    }

    return IMAGE_PATH + product.image;
}


function getPackPreviewProducts(pack) {
    if (!pack) return [];

    if (pack.packType === "three") {
        const extrait = products.find(product =>
            getProductType(product) === "extrait"
        );

        const eaux = products
            .filter(product => getProductType(product) === "eau")
            .slice(0, 2);

        return [
            extrait,
            ...eaux
        ].filter(Boolean);
    }

    if (pack.packType === "six") {
        const extraits = products
            .filter(product => getProductType(product) === "extrait")
            .slice(0, 2);

        const eaux = products
            .filter(product => getProductType(product) === "eau")
            .slice(0, 4);

        return [
            ...extraits,
            ...eaux
        ].filter(Boolean);
    }

    return [];
}


function packPreviewHTML(pack) {
    const preview = getPackPreviewProducts(pack);

    if (!preview.length) {
        return `
            <div class="product-image-wrapper">
                <div style="
                    width:100%;
                    height:100%;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    font-size:42px;
                ">
                    ✦
                </div>
            </div>
        `;
    }

    const images = preview.slice(0, 4).map(product => `
        <img
            src="${getProductImage(product)}"
            alt="${product.name}"
            loading="lazy"
            style="
                width:100%;
                height:100%;
                object-fit:cover;
                display:block;
            "
            onerror="this.style.display='none';"
        >
    `).join("");

    return `
        <div
            class="product-image-wrapper"
            style="
                display:grid;
                grid-template-columns:repeat(2,1fr);
                gap:3px;
                overflow:hidden;
                width:100%;
                height:100%;
            "
        >
            ${images}
        </div>
    `;
}


function bottleHTML(product) {
    if (isPack(product)) {
        return packPreviewHTML(product);
    }

    return `
        <div class="product-image-wrapper">
            <img
                src="${getProductImage(product)}"
                alt="${product.name}"
                class="product-real-image"
                loading="lazy"
                onerror="this.style.display='none';"
            >
        </div>
    `;
}


/* =========================================================
   PACK SELECTION
========================================================= */

function createPackModal() {

    if (document.getElementById("elixirPackModal")) {
        return;
    }

    const modal = document.createElement("div");

    modal.id = "elixirPackModal";

    modal.innerHTML = `
        <div
            class="elixir-pack-overlay"
            id="elixirPackOverlay"
            style="
                position:fixed;
                inset:0;
                background:rgba(0,0,0,.75);
                z-index:99999;
                display:flex;
                align-items:center;
                justify-content:center;
                padding:20px;
                overflow-y:auto;
            "
        >

            <div
                style="
                    width:min(760px,100%);
                    max-height:92vh;
                    overflow-y:auto;
                    background:#111;
                    color:#fff;
                    border:1px solid rgba(255,255,255,.15);
                    border-radius:18px;
                    padding:25px;
                    box-shadow:0 25px 80px rgba(0,0,0,.5);
                "
            >

                <div
                    style="
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                        gap:15px;
                        margin-bottom:20px;
                    "
                >
                    <div>
                        <div
                            id="elixirPackModalEyebrow"
                            style="
                                font-size:11px;
                                letter-spacing:2px;
                                opacity:.6;
                                margin-bottom:7px;
                            "
                        >
                            PACK
                        </div>

                        <h2
                            id="elixirPackModalTitle"
                            style="
                                margin:0;
                                font-size:28px;
                            "
                        >
                            Votre Pack
                        </h2>
                    </div>

                    <button
                        type="button"
                        id="elixirPackClose"
                        style="
                            width:40px;
                            height:40px;
                            border:1px solid rgba(255,255,255,.2);
                            border-radius:50%;
                            background:transparent;
                            color:#fff;
                            cursor:pointer;
                            font-size:20px;
                        "
                    >
                        ×
                    </button>
                </div>


                <div
                    id="elixirPackDescription"
                    style="
                        opacity:.72;
                        line-height:1.6;
                        margin-bottom:22px;
                    "
                ></div>


                <div id="elixirPackSlots"></div>


                <div
                    style="
                        margin-top:25px;
                        padding-top:20px;
                        border-top:1px solid rgba(255,255,255,.12);
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                        gap:15px;
                        flex-wrap:wrap;
                    "
                >

                    <div>
                        <div
                            style="
                                font-size:11px;
                                letter-spacing:1.5px;
                                opacity:.6;
                            "
                        >
                            TOTAL DU PACK
                        </div>

                        <div
                            id="elixirPackTotal"
                            style="
                                font-size:30px;
                                font-weight:700;
                                margin-top:4px;
                            "
                        >
                            0 DH
                        </div>
                    </div>


                    <button
                        type="button"
                        id="elixirPackAdd"
                        style="
                            border:0;
                            background:#d6ad63;
                            color:#111;
                            padding:14px 24px;
                            border-radius:10px;
                            font-weight:700;
                            cursor:pointer;
                            font-size:14px;
                        "
                    >
                        AJOUTER AU PANIER
                    </button>

                </div>

            </div>
        </div>
    `;

    document.body.appendChild(modal);

    document
        .getElementById("elixirPackClose")
        .addEventListener("click", closePackModal);

    document
        .getElementById("elixirPackOverlay")
        .addEventListener("click", event => {
            if (event.target.id === "elixirPackOverlay") {
                closePackModal();
            }
        });

    document
        .getElementById("elixirPackAdd")
        .addEventListener("click", addSelectedPackToBag);
}


function openPack(packId) {

    const pack = packs.find(item => item.id === packId);

    if (!pack) {
        return;
    }

    createPackModal();

    currentPack = pack;

    selectedPackSlots = Array(pack.selectionCount).fill(null);

    const title = document.getElementById("elixirPackModalTitle");
    const description = document.getElementById("elixirPackDescription");
    const total = document.getElementById("elixirPackTotal");
    const slotsContainer = document.getElementById("elixirPackSlots");

    title.textContent = pack.name;

    description.textContent = pack.description;

    total.textContent = `${pack.price} DH`;

    slotsContainer.innerHTML = "";

    for (let i = 0; i < pack.selectionCount; i++) {

        let slotType;

        if (pack.packType === "three") {
            slotType = i === 0 ? "extrait" : "eau";
        } else {
            slotType = i < 2 ? "extrait" : "eau";
        }

        const label = slotType === "extrait"
            ? `Extrait de Parfum ${i + 1}`
            : `Eau de Parfum ${i + 1}`;

        const available = products.filter(product =>
            getProductType(product) === slotType
        );

        const wrapper = document.createElement("div");

        wrapper.style.marginBottom = "16px";

        wrapper.innerHTML = `
            <label
                style="
                    display:block;
                    font-size:12px;
                    letter-spacing:1px;
                    margin-bottom:7px;
                    opacity:.8;
                "
            >
                ${label}
            </label>

            <select
                class="elixir-pack-select"
                data-slot="${i}"
                style="
                    width:100%;
                    padding:13px 14px;
                    border-radius:10px;
                    border:1px solid rgba(255,255,255,.15);
                    background:#1b1b1b;
                    color:#fff;
                    outline:none;
                    font-size:14px;
                "
            >
                <option value="">
                    Sélectionnez votre parfum
                </option>

                ${available.map(product => `
                    <option value="${product.id}">
                        ${product.name} — ${getProductTypeLabel(product)}
                    </option>
                `).join("")}

            </select>
        `;

        slotsContainer.appendChild(wrapper);
    }

    document
        .querySelectorAll(".elixir-pack-select")
        .forEach(select => {

            select.addEventListener("change", event => {

                const slot = Number(event.target.dataset.slot);

                selectedPackSlots[slot] = event.target.value || null;

                updatePackTotal();
            });

        });

    updatePackTotal();

    document.getElementById("elixirPackModal").style.display = "block";

    document.body.style.overflow = "hidden";
}


function closePackModal() {

    const modal = document.getElementById("elixirPackModal");

    if (modal) {
        modal.style.display = "none";
    }

    document.body.style.overflow = "";
    currentPack = null;
    selectedPackSlots = [];
}


function updatePackTotal() {

    const total = document.getElementById("elixirPackTotal");

    if (!total || !currentPack) {
        return;
    }

    const selectedCount = selectedPackSlots.filter(Boolean).length;

    total.textContent =
        selectedCount === currentPack.selectionCount
            ? `${currentPack.price} DH`
            : `${selectedCount}/${currentPack.selectionCount} — ${currentPack.price} DH`;
}


function addSelectedPackToBag() {

    if (!currentPack) {
        return;
    }

    const selected = selectedPackSlots
        .map(id => getCatalogItem(id))
        .filter(Boolean);

    if (selected.length !== currentPack.selectionCount) {

        showToast(
            `Sélectionnez les ${currentPack.selectionCount} parfums du pack.`
        );

        return;
    }


    let valid = true;

    if (currentPack.packType === "three") {

        const extraitCount = selected.filter(product =>
            getProductType(product) === "extrait"
        ).length;

        const eauCount = selected.filter(product =>
            getProductType(product) === "eau"
        ).length;

        if (extraitCount !== 1 || eauCount !== 2) {
            valid = false;
        }
    }


    if (currentPack.packType === "six") {

        const extraitCount = selected.filter(product =>
            getProductType(product) === "extrait"
        ).length;

        const eauCount = selected.filter(product =>
            getProductType(product) === "eau"
        ).length;

        if (extraitCount !== 2 || eauCount !== 4) {
            valid = false;
        }
    }


    if (!valid) {

        showToast(
            "La composition du pack n'est pas correcte."
        );

        return;
    }


    const selectionText = selected
        .map(product => product.name)
        .join(" + ");


    const existing = bag.find(item =>
        item.isPack &&
        item.packId === currentPack.id &&
        item.selectionIds &&
        JSON.stringify(item.selectionIds) === JSON.stringify(selected.map(p => p.id))
    );


    if (existing) {

        existing.quantity += 1;

    } else {

        bag.push({

            id: `${currentPack.id}-${Date.now()}`,

            packId: currentPack.id,

            name: currentPack.name,

            size: null,

            price: currentPack.price,

            quantity: 1,

            isPack: true,

            selectionIds: selected.map(product => product.id),

            selectionNames: selected.map(product => product.name),

            selectionText: selectionText

        });

    }


    saveData();

    updateBag();
    updateCounters();

    closePackModal();

    showToast(
        `${currentPack.name} ajouté au panier.`
    );
}


/* =========================================================
   RENDU DES PRODUITS
========================================================= */

function renderProducts(filter = "all", searchTerm = "") {

    const grid = document.getElementById("productsGrid");

    if (!grid) {
        return;
    }


    let catalog = [];

    if (filter === "all") {
        catalog = [
            ...products,
            ...packs
        ];
    }

    else if (filter === "packs") {
        catalog = [
            ...packs
        ];
    }

    else {
        catalog = products.filter(product =>
            product.category === filter
        );
    }


    if (searchTerm.trim()) {

        const term = searchTerm
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        catalog = catalog.filter(item => {

            const text = `
                ${item.name}
                ${item.shortName || ""}
                ${item.tagline || ""}
                ${item.description || ""}
                ${item.categoryLabel || ""}
                ${item.catalogue || ""}
            `
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");

            return text.includes(term);
        });
    }


    const countElement =
        document.querySelector("[data-products-count]") ||
        document.getElementById("productsCount");


    if (countElement) {
        countElement.textContent = catalog.length;
    }


    if (!catalog.length) {

        grid.innerHTML = `
            <div
                style="
                    grid-column:1/-1;
                    text-align:center;
                    padding:60px 20px;
                    opacity:.65;
                "
            >
                <div style="font-size:35px;margin-bottom:15px;">⌕</div>
                <div>Aucun parfum trouvé.</div>
            </div>
        `;

        return;
    }


    grid.innerHTML = catalog.map(item => {

        const pack = isPack(item);

        const price = pack
            ? item.price
            : getProductPrice(item, 30);


        const favorite =
            favorites.includes(item.id);


        return `
            <article
                class="product-card ${pack ? "pack-card" : ""}"
                data-product-id="${item.id}"
            >

                <div class="product-card-image">

                    ${bottleHTML(item)}

                    ${
                        item.badge
                            ? `
                                <span class="product-badge">
                                    ${item.badge}
                                </span>
                              `
                            : ""
                    }

                    <button
                        type="button"
                        class="favorite-btn ${favorite ? "active" : ""}"
                        data-favorite="${item.id}"
                        aria-label="Ajouter aux favoris"
                    >
                        ${favorite ? "♥" : "♡"}
                    </button>

                </div>


                <div class="product-card-content">

                    <div
                        class="product-card-category"
                    >
                        ${pack ? "PACK" : item.categoryLabel}
                        ${!pack ? ` · ${getProductTypeLabel(item)}` : ""}
                    </div>


                    <div
                        class="product-card-reference"
                    >
                        Réf. ${item.catalogue}
                    </div>


                    <h3 class="product-card-title">
                        ${item.name}
                    </h3>


                    <p class="product-card-tagline">
                        ${item.tagline}
                    </p>


                    <div class="product-card-price">

                        ${
                            pack
                                ? `${price} DH`
                                : `À partir de ${price} DH`
                        }

                    </div>

                </div>

            </article>
        `;
    }).join("");


    grid
        .querySelectorAll(".product-card")
        .forEach(card => {

            card.addEventListener("click", event => {

                if (
                    event.target.closest(".favorite-btn")
                ) {
                    return;
                }

                const id =
                    card.dataset.productId;

                const item =
                    getCatalogItem(id);

                if (!item) {
                    return;
                }

                if (isPack(item)) {
                    openPack(item.id);
                } else {
                    openProduct(item.id);
                }

            });

        });


    grid
        .querySelectorAll(".favorite-btn")
        .forEach(button => {

            button.addEventListener("click", event => {

                event.stopPropagation();

                toggleFavorite(
                    button.dataset.favorite
                );

            });

        });
}


/* =========================================================
   FAVORIS
========================================================= */

function toggleFavorite(id) {

    const index = favorites.indexOf(id);

    if (index === -1) {

        favorites.push(id);

        showToast("Ajouté aux favoris.");

    } else {

        favorites.splice(index, 1);

        showToast("Retiré des favoris.");
    }


    saveData();

    updateCounters();

    const activeFilter =
        document
            .querySelector(".filter-btn.active")
            ?.dataset.filter || "all";

    renderProducts(activeFilter);
}


function updateCounters() {

    const bagCount = bag.reduce(
        (total, item) =>
            total + Number(item.quantity || 0),
        0
    );


    document
        .querySelectorAll("[data-bag-count], #bagCount")
        .forEach(element => {
            element.textContent = bagCount;
        });


    document
        .querySelectorAll("[data-favorites-count], #favoritesCount")
        .forEach(element => {
            element.textContent = favorites.length;
        });
}


/* =========================================================
   MODAL PARFUM
========================================================= */

function openProduct(id) {

    const product = products.find(
        item => item.id === id
    );

    if (!product) {
        return;
    }


    currentProduct = product;

    currentSize = 50;

    currentPrice =
        getProductPrice(product, currentSize);

    quantity = 1;


    const modal =
        document.getElementById("productModal");


    if (!modal) {
        return;
    }


    const title =
        document.getElementById("modalProductName");

    const image =
        document.getElementById("modalProductImage");

    const price =
        document.getElementById("modalProductPrice");

    const category =
        document.getElementById("modalProductCategory");

    const description =
        document.getElementById("modalProductDescription");

    const top =
        document.getElementById("modalTop");

    const heart =
        document.getElementById("modalHeart");

    const base =
        document.getElementById("modalBase");


    if (title) {
        title.textContent = product.name;
    }

    if (image) {
        image.src = getProductImage(product);
        image.alt = product.name;
        image.style.display = "block";
    }

    if (price) {
        price.textContent = `${currentPrice} DH`;
    }

    if (category) {
        category.textContent =
            `${product.categoryLabel} · ${getProductTypeLabel(product)}`;
    }

    if (description) {
        description.textContent =
            product.description;
    }

    if (top) {
        top.textContent = product.top;
    }

    if (heart) {
        heart.textContent = product.heart;
    }

    if (base) {
        base.textContent = product.base;
    }


    const reference =
        document.getElementById("modalProductReference");

    if (reference) {
        reference.textContent =
            `Réf. ${product.catalogue}`;
    }


    document
        .querySelectorAll(".size-btn")
        .forEach(button => {

            const size =
                Number(button.dataset.size);

            const sizePrice =
                getProductPrice(product, size);

            button.classList.toggle(
                "active",
                size === currentSize
            );


            const priceSpan =
                button.querySelector(
                    "[data-size-price]"
                );


            if (priceSpan) {

                priceSpan.textContent =
                    `${sizePrice} DH`;

            } else {

                const priceText =
                    button.querySelector(
                        ".size-price"
                    );

                if (priceText) {
                    priceText.textContent =
                        `${sizePrice} DH`;
                }
            }

        });


    setQuantity(1);


    modal.classList.add("open");

    document.body.classList.add("modal-open");
}


/* =========================================================
   FERMETURE MODAL
========================================================= */

function closeProductModal() {

    const modal =
        document.getElementById("productModal");

    if (modal) {
        modal.classList.remove("open");
    }

    document.body.classList.remove("modal-open");

    currentProduct = null;
}


/* =========================================================
   TAILLES
========================================================= */

function updateModalPrice() {

    if (!currentProduct || isPack(currentProduct)) {
        return;
    }

    currentPrice =
        getProductPrice(
            currentProduct,
            currentSize
        );


    const price =
        document.getElementById("modalProductPrice");

    if (price) {
        price.textContent =
            `${currentPrice} DH`;
    }
}


/* =========================================================
   QUANTITÉ
========================================================= */

function setQuantity(value) {

    quantity = Math.max(
        1,
        Math.min(10, Number(value) || 1)
    );


    const input =
        document.getElementById("quantityInput");

    if (input) {
        input.value = quantity;
    }


    const quantityDisplay =
        document.getElementById("quantityValue");

    if (quantityDisplay) {
        quantityDisplay.textContent =
            quantity;
    }
}


/* =========================================================
   AJOUT PARFUM AU PANIER
========================================================= */

function addCurrentProductToBag() {

    if (!currentProduct) {
        return;
    }


    const existing = bag.find(item =>
        !item.isPack &&
        item.id === currentProduct.id &&
        Number(item.size) === Number(currentSize)
    );


    if (existing) {

        existing.quantity += quantity;

    } else {

        bag.push({

            id: currentProduct.id,

            name: currentProduct.name,

            size: currentSize,

            price: currentPrice,

            quantity: quantity,

            isPack: false

        });

    }


    saveData();

    updateBag();

    updateCounters();

    closeProductModal();

    showToast(
        `${currentProduct.name} ajouté au panier.`
    );
}


/* =========================================================
   PANIER
========================================================= */

function getBagItemImage(item) {

    if (item.isPack) {

        const pack =
            packs.find(
                packItem =>
                    packItem.id === item.packId
            );

        const preview =
            getPackPreviewProducts(pack);

        return preview.length
            ? getProductImage(preview[0])
            : "";

    }


    const product =
        getCatalogItem(item.id);

    return product
        ? getProductImage(product)
        : "";
}


function updateBag() {

    const container =
        document.getElementById("bagItems");

    if (!container) {
        return;
    }


    if (!bag.length) {

        container.innerHTML = `
            <div
                style="
                    text-align:center;
                    padding:45px 20px;
                    opacity:.65;
                "
            >
                <div
                    style="
                        font-size:38px;
                        margin-bottom:15px;
                    "
                >
                    ♡
                </div>

                <div>
                    Votre panier est vide.
                </div>
            </div>
        `;

        updateBagTotal();

        return;
    }


    container.innerHTML =
        bag.map((item, index) => {

            const image =
                getBagItemImage(item);


            const unitPrice =
                Number(item.price || 0);

            const total =
                unitPrice *
                Number(item.quantity || 1);


            let subtitle = "";

            if (item.isPack) {

                subtitle =
                    `PACK · ${item.selectionText || ""}`;

            } else {

                const product =
                    getCatalogItem(item.id);

                subtitle =
                    `${product ? getProductTypeLabel(product) : ""} · ${item.size} ml`;

            }


            return `
                <div
                    class="bag-item"
                    data-bag-index="${index}"
                >

                    <div class="bag-mini-bottle">

                        ${
                            image
                                ? `
                                    <img
                                        src="${image}"
                                        alt="${item.name}"
                                    >
                                  `
                                : "✦"
                        }

                    </div>


                    <div class="bag-item-info">

                        <div
                            class="bag-item-name"
                        >
                            ${item.name}
                        </div>


                        <div
                            class="bag-item-meta"
                        >
                            ${subtitle}
                        </div>


                        <div
                            style="
                                display:flex;
                                align-items:center;
                                gap:8px;
                                margin-top:7px;
                            "
                        >

                            <button
                                type="button"
                                class="bag-qty-minus"
                                data-index="${index}"
                            >
                                −
                            </button>

                            <span>
                                ${item.quantity}
                            </span>

                            <button
                                type="button"
                                class="bag-qty-plus"
                                data-index="${index}"
                            >
                                +
                            </button>

                        </div>

                    </div>


                    <div
                        class="bag-item-right"
                    >

                        <div
                            class="bag-item-price"
                        >
                            ${total} DH
                        </div>

                        <button
                            type="button"
                            class="bag-remove"
                            data-index="${index}"
                        >
                            ×
                        </button>

                    </div>

                </div>
            `;

        }).join("");


    container
        .querySelectorAll(".bag-remove")
        .forEach(button => {

            button.addEventListener("click", () => {

                removeBagItem(
                    Number(button.dataset.index)
                );

            });

        });


    container
        .querySelectorAll(".bag-qty-minus")
        .forEach(button => {

            button.addEventListener("click", () => {

                changeBagQuantity(
                    Number(button.dataset.index),
                    -1
                );

            });

        });


    container
        .querySelectorAll(".bag-qty-plus")
        .forEach(button => {

            button.addEventListener("click", () => {

                changeBagQuantity(
                    Number(button.dataset.index),
                    1
                );

            });

        });


    updateBagTotal();
}


function changeBagQuantity(index, change) {

    if (!bag[index]) {
        return;
    }

    bag[index].quantity += change;


    if (bag[index].quantity <= 0) {

        bag.splice(index, 1);

    }


    if (bag[index]) {

        bag[index].quantity =
            Math.min(
                10,
                Math.max(
                    1,
                    bag[index].quantity
                )
            );

    }


    saveData();

    updateBag();

    updateCounters();
}


function removeBagItem(index) {

    if (!bag[index]) {
        return;
    }


    const name =
        bag[index].name;


    bag.splice(index, 1);

    saveData();

    updateBag();

    updateCounters();

    showToast(
        `${name} retiré du panier.`
    );
}


function getBagTotal() {

    return bag.reduce(
        (total, item) =>
            total +
            (
                Number(item.price || 0) *
                Number(item.quantity || 1)
            ),
        0
    );
}


function updateBagTotal() {

    const total =
        getBagTotal();


    document
        .querySelectorAll(
            "#bagTotal, [data-bag-total]"
        )
        .forEach(element => {

            element.textContent =
                `${total} DH`;

        });
}


/* =========================================================
   PANIER — OUVERTURE
========================================================= */

function openBag() {

    const drawer =
        document.getElementById("bagDrawer");

    const overlay =
        document.getElementById("bagOverlay");


    if (drawer) {
        drawer.classList.add("open");
    }

    if (overlay) {
        overlay.classList.add("open");
    }

    document.body.classList.add("drawer-open");
}


function closeBag() {

    const drawer =
        document.getElementById("bagDrawer");

    const overlay =
        document.getElementById("bagOverlay");


    if (drawer) {
        drawer.classList.remove("open");
    }

    if (overlay) {
        overlay.classList.remove("open");
    }

    document.body.classList.remove("drawer-open");
}


/* =========================================================
   WHATSAPP
========================================================= */

function sendWhatsAppOrder() {

    if (!bag.length) {

        showToast(
            "Votre panier est vide."
        );

        return;
    }


    let message =
        "Bonjour ÉLIXIR ✨\n\n";

    message +=
        "Je souhaite commander :\n\n";


    bag.forEach((item, index) => {

        const total =
            Number(item.price || 0) *
            Number(item.quantity || 1);


        message +=
            `${index + 1}. ${item.name}\n`;


        if (item.isPack) {

            message +=
                `Type : PACK\n`;

            message +=
                `Composition : ${item.selectionText || "—"}\n`;

        } else {

            const product =
                getCatalogItem(item.id);

            message +=
                `Référence : ${product ? product.catalogue : "—"}\n`;

            message +=
                `Type : ${product ? getProductTypeLabel(product) : "—"}\n`;

            message +=
                `Format : ${item.size} ml\n`;
        }


        message +=
            `Quantité : ${item.quantity}\n`;

        message +=
            `Prix unitaire : ${item.price} DH\n`;

        message +=
            `Sous-total : ${total} DH\n\n`;

    });


    message +=
        `TOTAL : ${getBagTotal()} DH\n\n`;

    message +=
        "Merci ✨";


    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


    window.open(
        url,
        "_blank"
    );
}


/* =========================================================
   COMMANDE WHATSAPP DEPUIS LE MODAL
========================================================= */

function sendCurrentProductWhatsApp() {

    if (!currentProduct) {
        return;
    }


    if (isPack(currentProduct)) {

        openPack(currentProduct.id);

        return;
    }


    const total =
        currentPrice * quantity;


    let message =
        "Bonjour ÉLIXIR ✨\n\n";

    message +=
        "Je souhaite commander :\n\n";

    message +=
        `${currentProduct.name}\n`;

    message +=
        `Référence : ${currentProduct.catalogue}\n`;

    message +=
        `Type : ${getProductTypeLabel(currentProduct)}\n`;

    message +=
        `Format : ${currentSize} ml\n`;

    message +=
        `Quantité : ${quantity}\n`;

    message +=
        `Prix unitaire : ${currentPrice} DH\n`;

    message +=
        `Total : ${total} DH\n\n`;

    message +=
        "Merci ✨";


    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


    window.open(
        url,
        "_blank"
    );
}


/* =========================================================
   RECHERCHE
========================================================= */

function searchProducts(term) {

    const results =
        document.getElementById("searchResults");

    if (!results) {
        return;
    }


    const normalized =
        term
            .trim()
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");


    if (!normalized) {

        results.innerHTML = "";

        return;
    }


    const catalog = [
        ...products,
        ...packs
    ];


    const found =
        catalog.filter(item => {

            const text = `
                ${item.name}
                ${item.shortName || ""}
                ${item.description || ""}
                ${item.tagline || ""}
                ${item.categoryLabel || ""}
                ${item.catalogue || ""}
            `
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");


            return text.includes(normalized);
        })
        .slice(0, 12);


    if (!found.length) {

        results.innerHTML = `
            <div
                style="
                    padding:20px;
                    opacity:.6;
                "
            >
                Aucun résultat.
            </div>
        `;

        return;
    }


    results.innerHTML =
        found.map(item => {

            const pack =
                isPack(item);


            const image =
                pack
                    ? getBagItemImage({
                        isPack: true,
                        packId: item.id
                    })
                    : getProductImage(item);


            const price =
                pack
                    ? item.price
                    : getProductPrice(item, 30);


            return `
                <button
                    type="button"
                    class="search-result-item"
                    data-search-id="${item.id}"
                    style="
                        width:100%;
                        display:flex;
                        align-items:center;
                        gap:12px;
                        text-align:left;
                        background:transparent;
                        border:0;
                        color:inherit;
                        padding:10px;
                        cursor:pointer;
                    "
                >

                    <div
                        style="
                            width:55px;
                            height:65px;
                            border-radius:8px;
                            overflow:hidden;
                            flex:0 0 55px;
                        "
                    >
                        ${
                            image
                                ? `
                                    <img
                                        src="${image}"
                                        alt="${item.name}"
                                        style="
                                            width:100%;
                                            height:100%;
                                            object-fit:contain;
                                        "
                                    >
                                  `
                                : ""
                        }
                    </div>


                    <div>

                        <strong>
                            ${item.name}
                        </strong>

                        <div
                            style="
                                font-size:11px;
                                opacity:.6;
                                margin-top:3px;
                            "
                        >
                            ${
                                pack
                                    ? "PACK"
                                    : getProductTypeLabel(item)
                            }
                            · ${price} DH
                        </div>

                    </div>

                </button>
            `;

        }).join("");


    results
        .querySelectorAll(".search-result-item")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        button.dataset.searchId;

                    const item =
                        getCatalogItem(id);

                    if (!item) {
                        return;
                    }

                    if (isPack(item)) {
                        openPack(item.id);
                    } else {
                        openProduct(item.id);
                    }

                }
            );

        });
}


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

    let toast =
        document.getElementById("elixirToast");


    if (!toast) {

        toast =
            document.createElement("div");

        toast.id =
            "elixirToast";

        toast.style.cssText = `
            position:fixed;
            left:50%;
            bottom:30px;
            transform:translateX(-50%) translateY(20px);
            z-index:100000;
            background:#111;
            color:#fff;
            border:1px solid rgba(255,255,255,.15);
            padding:13px 20px;
            border-radius:999px;
            font-size:13px;
            opacity:0;
            pointer-events:none;
            transition:.3s ease;
            box-shadow:0 15px 40px rgba(0,0,0,.3);
        `;

        document.body.appendChild(toast);
    }


    toast.textContent =
        message;

    toast.style.opacity =
        "1";

    toast.style.transform =
        "translateX(-50%) translateY(0)";


    clearTimeout(
        window.elixirToastTimeout
    );


    window.elixirToastTimeout =
        setTimeout(() => {

            toast.style.opacity =
                "0";

            toast.style.transform =
                "translateX(-50%) translateY(20px)";

        }, 2500);
}


/* =========================================================
   FILTRES
========================================================= */

function bindFilterButton(button) {

    if (!button || button.dataset.filterBound === "true") {
        return;
    }


    button.dataset.filterBound =
        "true";


    button.addEventListener(
        "click",
        () => {

            document
                .querySelectorAll(".filter-btn")
                .forEach(btn => {
                    btn.classList.remove("active");
                });


            button.classList.add("active");


            renderProducts(
                button.dataset.filter || "all"
            );

        }
    );
}


function setupFilters() {

    document
        .querySelectorAll(".filter-btn")
        .forEach(button => {

            bindFilterButton(button);

        });


    const existingPacks =
        document.querySelector(
            '.filter-btn[data-filter="packs"]'
        );


    if (existingPacks) {
        return;
    }


    const firstButton =
        document.querySelector(".filter-btn");


    if (!firstButton) {
        return;
    }


    const container =
        firstButton.parentElement;


    if (!container) {
        return;
    }


    const packButton =
        document.createElement("button");


    packButton.type =
        "button";

    packButton.className =
        "filter-btn";

    packButton.dataset.filter =
        "packs";


    packButton.innerHTML =
        `✦ PACKS`;


    container.appendChild(
        packButton
    );


    bindFilterButton(
        packButton
    );
}


/* =========================================================
   LOADER
========================================================= */

function setupLoader() {

    const loader =
        document.querySelector(".loader");


    if (!loader) {
        return;
    }


    setTimeout(() => {

        loader.classList.add("hidden");

    }, 1800);
}


/* =========================================================
   PARTICULES
========================================================= */

function createParticles() {

    const container =
        document.querySelector(".particles");


    if (!container) {
        return;
    }


    const count =
        window.innerWidth <= 600
            ? 25
            : 50;


    for (let i = 0; i < count; i++) {

        const particle =
            document.createElement("span");


        particle.style.left =
            `${Math.random() * 100}%`;

        particle.style.top =
            `${Math.random() * 100}%`;

        particle.style.animationDelay =
            `${Math.random() * 8}s`;

        particle.style.animationDuration =
            `${5 + Math.random() * 8}s`;


        container.appendChild(
            particle
        );
    }
}


/* =========================================================
   NAVBAR SCROLL
========================================================= */

function setupNavbar() {

    const navbar =
        document.querySelector(".navbar");


    if (!navbar) {
        return;
    }


    window.addEventListener(
        "scroll",
        () => {

            navbar.classList.toggle(
                "scrolled",
                window.scrollY > 60
            );

        },
        {
            passive: true
        }
    );
}


/* =========================================================
   CURSEUR
========================================================= */

function setupCursor() {

    const cursor =
        document.querySelector(".cursor");

    const follower =
        document.querySelector(".cursor-follower");


    if (!cursor || !follower) {
        return;
    }


    if (
        window.matchMedia(
            "(max-width: 768px)"
        ).matches
    ) {
        return;
    }


    let mouseX = 0;
    let mouseY = 0;

    let followerX = 0;
    let followerY = 0;


    document.addEventListener(
        "mousemove",
        event => {

            mouseX =
                event.clientX;

            mouseY =
                event.clientY;


            cursor.style.left =
                `${mouseX}px`;

            cursor.style.top =
                `${mouseY}px`;

        }
    );


    function animate() {

        followerX +=
            (mouseX - followerX) * .15;

        followerY +=
            (mouseY - followerY) * .15;


        follower.style.left =
            `${followerX}px`;

        follower.style.top =
            `${followerY}px`;


        requestAnimationFrame(
            animate
        );
    }


    animate();


    document.addEventListener(
        "mouseover",
        event => {

            if (
                event.target.closest(
                    "button, a, .product-card"
                )
            ) {

                cursor.classList.add(
                    "hover"
                );

                follower.classList.add(
                    "hover"
                );

            }

        }
    );


    document.addEventListener(
        "mouseout",
        event => {

            if (
                event.target.closest(
                    "button, a, .product-card"
                )
            ) {

                cursor.classList.remove(
                    "hover"
                );

                follower.classList.remove(
                    "hover"
                );

            }

        }
    );
}


/* =========================================================
   MENU MOBILE
========================================================= */

function setupMobileMenu() {

    const menu =
        document.getElementById("mobileMenu");

    const open =
        document.getElementById("mobileMenuBtn");

    const close =
        document.getElementById("mobileClose");


    if (open && menu) {

        open.addEventListener(
            "click",
            () => {

                menu.classList.add(
                    "open"
                );

            }
        );
    }


    if (close && menu) {

        close.addEventListener(
            "click",
            () => {

                menu.classList.remove(
                    "open"
                );

            }
        );
    }


    if (menu) {

        menu
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        menu.classList.remove(
                            "open"
                        );

                    }
                );

            });

    }
}


/* =========================================================
   SEARCH PANEL
========================================================= */

function setupSearch() {

    const panel =
        document.getElementById("searchPanel");

    const input =
        document.getElementById("searchInput");


    const openButtons =
        document.querySelectorAll(
            "#searchBtn, [data-search-open]"
        );


    const closeButtons =
        document.querySelectorAll(
            "#searchClose, [data-search-close]"
        );


    openButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                if (panel) {

                    panel.classList.add(
                        "open"
                    );

                }

                if (input) {

                    setTimeout(
                        () => input.focus(),
                        100
                    );

                }

            }
        );

    });


    closeButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                if (panel) {
                    panel.classList.remove(
                        "open"
                    );
                }

            }
        );

    });


    if (input) {

        input.addEventListener(
            "input",
            () => {

                searchProducts(
                    input.value
                );

            }
        );

    }
}


/* =========================================================
   MODAL EVENTS
========================================================= */

function setupModal() {

    const modal =
        document.getElementById("productModal");


    if (!modal) {
        return;
    }


    document
        .querySelectorAll(
            "#modalClose, [data-modal-close]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                closeProductModal
            );

        });


    modal.addEventListener(
        "click",
        event => {

            if (
                event.target === modal ||
                event.target.closest(
                    "[data-modal-overlay]"
                )
            ) {

                closeProductModal();

            }

        }
    );


    document
        .querySelectorAll(".size-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    if (!currentProduct) {
                        return;
                    }


                    currentSize =
                        Number(
                            button.dataset.size
                        );


                    document
                        .querySelectorAll(
                            ".size-btn"
                        )
                        .forEach(btn => {

                            btn.classList.remove(
                                "active"
                            );

                        });


                    button.classList.add(
                        "active"
                    );


                    updateModalPrice();

                }
            );

        });


    const minus =
        document.getElementById(
            "quantityMinus"
        );


    const plus =
        document.getElementById(
            "quantityPlus"
        );


    if (minus) {

        minus.addEventListener(
            "click",
            () => {

                setQuantity(
                    quantity - 1
                );

            }
        );

    }


    if (plus) {

        plus.addEventListener(
            "click",
            () => {

                setQuantity(
                    quantity + 1
                );

            }
        );

    }


    const quantityInput =
        document.getElementById(
            "quantityInput"
        );


    if (quantityInput) {

        quantityInput.addEventListener(
            "change",
            () => {

                setQuantity(
                    quantityInput.value
                );

            }
        );

    }


    const addButton =
        document.getElementById(
            "modalAdd"
        );


    if (addButton) {

        addButton.addEventListener(
            "click",
            addCurrentProductToBag
        );

    }


    const whatsappButton =
        document.getElementById(
            "whatsappOrder"
        );


    if (whatsappButton) {

        whatsappButton.addEventListener(
            "click",
            sendCurrentProductWhatsApp
        );

    }
}


/* =========================================================
   BAG EVENTS
========================================================= */

function setupBag() {

    const openButtons =
        document.querySelectorAll(
            "#bagBtn, [data-bag-open]"
        );


    const closeButtons =
        document.querySelectorAll(
            "#bagClose, [data-bag-close]"
        );


    openButtons.forEach(button => {

        button.addEventListener(
            "click",
            openBag
        );

    });


    closeButtons.forEach(button => {

        button.addEventListener(
            "click",
            closeBag
        );

    });


    const overlay =
        document.getElementById(
            "bagOverlay"
        );


    if (overlay) {

        overlay.addEventListener(
            "click",
            closeBag
        );

    }


    const whatsapp =
        document.getElementById(
            "drawerWhatsapp"
        );


    if (whatsapp) {

        whatsapp.addEventListener(
            "click",
            sendWhatsAppOrder
        );

    }
}


/* =========================================================
   ESCAPE
========================================================= */

function setupEscape() {

    document.addEventListener(
        "keydown",
        event => {

            if (event.key !== "Escape") {
                return;
            }


            closeProductModal();

            closeBag();

            closePackModal();


            const search =
                document.getElementById(
                    "searchPanel"
                );


            if (search) {

                search.classList.remove(
                    "open"
                );

            }


            const menu =
                document.getElementById(
                    "mobileMenu"
                );


            if (menu) {

                menu.classList.remove(
                    "open"
                );

            }

        }
    );
}


/* =========================================================
   REVEAL AU SCROLL
========================================================= */

function setupReveal() {

    const elements =
        document.querySelectorAll(
            ".reveal, .fade-up, .product-card"
        );


    if (!elements.length) {
        return;
    }


    if (
        !("IntersectionObserver" in window)
    ) {

        elements.forEach(
            element =>
                element.classList.add(
                    "visible"
                )
        );

        return;
    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: .08
            }
        );


    elements.forEach(
        element =>
            observer.observe(element)
    );
}


/* =========================================================
   SMOOTH SCROLL
========================================================= */

function setupSmoothAnchors() {

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const id =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !id ||
                        id === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            id
                        );


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });
}


/* =========================================================
   PARALLAX HERO
========================================================= */

function setupHeroParallax() {

    const hero =
        document.querySelector(
            ".hero"
        );


    if (!hero) {
        return;
    }


    if (
        window.matchMedia(
            "(max-width: 768px)"
        ).matches
    ) {
        return;
    }


    window.addEventListener(
        "scroll",
        () => {

            const y =
                window.scrollY;


            if (y < window.innerHeight) {

                hero.style.transform =
                    `translateY(${y * .08}px)`;

            }

        },
        {
            passive: true
        }
    );
}


/* =========================================================
   EMPÊCHER LE DRAG DES IMAGES
========================================================= */

function preventImageDrag() {

    document.addEventListener(
        "dragstart",
        event => {

            if (
                event.target.tagName === "IMG"
            ) {

                event.preventDefault();

            }

        }
    );
}


/* =========================================================
   INITIALISATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        console.log(
            "ÉLIXIR — Initialisation..."
        );


        loadData();


        setupLoader();

        createParticles();

        setupNavbar();

        setupCursor();

        setupMobileMenu();

        setupSearch();

        setupModal();

        setupBag();

        setupEscape();

        setupReveal();

        setupSmoothAnchors();

        setupHeroParallax();

        preventImageDrag();

        setupFilters();


        renderProducts("all");

        updateBag();

        updateCounters();


        console.log(
            `ÉLIXIR — ${products.length} parfums + ${packs.length} packs chargés.`
        );

    }
);


/* =========================================================
   FIN DU SCRIPT
========================================================= */
