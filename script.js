/* =====================================================
   ÉLIXIR — MAISON DE PARFUMS
   SCRIPT.JS
   88 PARFUMS — 44 FEMME + 44 HOMME
===================================================== */


/* =====================================================
   CONFIGURATION
===================================================== */

const WHATSAPP_NUMBER = "212600000000";

const IMAGE_PATH = "";


/* =====================================================
   CATALOGUE — 88 PARFUMS
===================================================== */

const products = [

    /* =================================================
       FEMME — 44 PARFUMS
    ================================================= */

    {
        id: "F01",
        catalogue: "01",
        name: "Kayli Marchmello",
        shortName: "KAYLI",
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
        shortName: "TAJ",
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
        shortName: "COCO",
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
        shortName: "HER",
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
        shortName: "HYPNOTIC",
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
        shortName: "PRADOX",
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
        shortName: "BLOOM",
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
        shortName: "VICTORIA",
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
        shortName: "SI",
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
        shortName: "TRÉSOR",
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
        shortName: "COCO",
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
        shortName: "WANTED GIRL",
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
        shortName: "TAJ",
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
        shortName: "AMBER",
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
        shortName: "NINA",
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
        shortName: "NOMADE",
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
        shortName: "LANCOME",
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
        shortName: "AMIRAT",
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
        shortName: "DAHAB",
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
        shortName: "ABYAD",
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
        shortName: "NINA",
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
        shortName: "ARMANI",
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
        shortName: "TOBACCO",
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
        shortName: "VOYAGE",
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


    /* =================================================
       HOMME — 44 PARFUMS
    ================================================= */

    {
        id: "H101",
        catalogue: "101",
        name: "Valentino Roma",
        shortName: "ROMA",
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
        shortName: "STRONG",
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
        shortName: "BOSS",
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
        shortName: "EROS",
        category: "homme",
        categoryLabel: "HOMME",
        image: "versace-eros.jpg",
        tagline: "Passion et puissance.",
        description: "Une fragrance masculine fraîche, sensuelle et énergique.",
        top: "Menthe & Citron",
        heart: "Pomme & Géranium",
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
        shortName: "BLEU",
        category: "homme",
        categoryLabel: "HOMME",
        image: "bleu-chanel.jpg",
        tagline: "Une élégance intemporelle.",
        description: "Une fragrance masculine fraîche, boisée et sophistiquée.",
        top: "Agrumes",
        heart: "Gingembre",
        base: "Bois & Encens",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "ICONIQUE",
        color: "dark"
    },

    {
        id: "H107",
        catalogue: "107",
        name: "Lacoste Noir",
        shortName: "LACOSTE",
        category: "homme",
        categoryLabel: "HOMME",
        image: "lacoste-noir.jpg",
        tagline: "Élégance et caractère.",
        description: "Une fragrance masculine fraîche et élégante.",
        top: "Agrumes",
        heart: "Fleurs",
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
        tagline: "Énergie et mouvement.",
        description: "Une fragrance masculine fraîche, sportive et élégante.",
        top: "Agrumes",
        heart: "Poivre",
        base: "Musc & Bois",
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
        tagline: "Libre et magnétique.",
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
        shortName: "ARMANI",
        category: "homme",
        categoryLabel: "HOMME",
        image: "giorgio-armani-homme.jpg",
        tagline: "Une élégance italienne.",
        description: "Une fragrance masculine élégante et raffinée.",
        top: "Agrumes",
        heart: "Aromates",
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
        heart: "Aromates",
        base: "Bois & Musc",
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
        tagline: "L'élégance italienne.",
        description: "Une fragrance masculine moderne et sophistiquée.",
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
        id: "H113",
        catalogue: "113",
        name: "Chanel Homme",
        shortName: "CHANEL",
        category: "homme",
        categoryLabel: "HOMME",
        image: "chanel-homme.jpg",
        tagline: "Une élégance masculine.",
        description: "Une fragrance masculine sophistiquée et intemporelle.",
        top: "Agrumes",
        heart: "Épices",
        base: "Bois & Musc",
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
        tagline: "Élégance française.",
        description: "Une fragrance masculine raffinée et sophistiquée.",
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
        shortName: "HERRERA",
        category: "homme",
        categoryLabel: "HOMME",
        image: "carolina-herrera-homme.jpg",
        tagline: "Charisme et élégance.",
        description: "Une fragrance masculine élégante avec une forte personnalité.",
        top: "Agrumes",
        heart: "Épices",
        base: "Bois",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "BEST-SELLER",
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
        description: "Une fragrance masculine fraîche et polyvalente.",
        top: "Agrumes",
        heart: "Fleurs",
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
        tagline: "Un caractère affirmé.",
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
        name: "Hermès",
        shortName: "HERMÈS",
        category: "homme",
        categoryLabel: "HOMME",
        image: "hermes-homme.jpg",
        tagline: "Raffinement et distinction.",
        description: "Une fragrance masculine élégante et raffinée.",
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
        tagline: "Audace et caractère.",
        description: "Une fragrance masculine moderne et audacieuse.",
        top: "Agrumes",
        heart: "Épices",
        base: "Bois & Ambre",
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
        tagline: "Une signature prestigieuse.",
        description: "Une fragrance masculine élégante et raffinée.",
        top: "Agrumes",
        heart: "Épices",
        base: "Bois",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "LUXE",
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
        tagline: "Une élégance accessible.",
        description: "Une fragrance masculine moderne et polyvalente.",
        top: "Agrumes",
        heart: "Épices",
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
        shortName: "MUGLER",
        category: "homme",
        categoryLabel: "HOMME",
        image: "thierry-mugler.jpg",
        tagline: "Une signature intense.",
        description: "Une fragrance masculine profonde et distinctive.",
        top: "Épices",
        heart: "Bois",
        base: "Ambre",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "PREMIUM",
        color: "dark"
    },

    {
        id: "H123",
        catalogue: "123",
        name: "Davidoff",
        shortName: "DAVIDOFF",
        category: "homme",
        categoryLabel: "HOMME",
        image: "davidoff.jpg",
        tagline: "Fraîcheur emblématique.",
        description: "Une fragrance masculine fraîche et vivifiante.",
        top: "Agrumes",
        heart: "Aromates",
        base: "Bois",
        price30: 450,
        price50: 610,
        price100: 780,
        badge: "",
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
        tagline: "Minimalisme et sophistication.",
        description: "Une fragrance masculine propre, moderne et élégante.",
        top: "Agrumes",
        heart: "Iris",
        base: "Musc & Bois",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "",
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
        tagline: "Élégance méditerranéenne.",
        description: "Une fragrance masculine fraîche et raffinée.",
        top: "Agrumes",
        heart: "Thé",
        base: "Bois",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "ICONIQUE",
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
        description: "Une fragrance masculine expressive et élégante.",
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
        id: "H127",
        catalogue: "127",
        name: "Paco Rabanne",
        shortName: "PACO",
        category: "homme",
        categoryLabel: "HOMME",
        image: "paco-rabanne.jpg",
        tagline: "Puissance et séduction.",
        description: "Une fragrance masculine moderne et magnétique.",
        top: "Agrumes",
        heart: "Épices",
        base: "Vanille & Bois",
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
        tagline: "Une présence élégante.",
        description: "Une fragrance masculine chaleureuse et raffinée.",
        top: "Agrumes",
        heart: "Fleurs",
        base: "Bois",
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
        shortName: "HERRERA",
        category: "homme",
        categoryLabel: "HOMME",
        image: "carolina-herrera-homme-2.jpg",
        tagline: "Une signature iconique.",
        description: "Une seconde référence Carolina Herrera masculine.",
        top: "Agrumes",
        heart: "Épices",
        base: "Bois & Tonka",
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
        tagline: "Tradition et raffinement.",
        description: "Une fragrance masculine élégante et sophistiquée.",
        top: "Agrumes",
        heart: "Aromates",
        base: "Bois & Musc",
        price30: 490,
        price50: 640,
        price100: 790,
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
        tagline: "Élégance intemporelle.",
        description: "Une fragrance masculine fraîche et boisée.",
        top: "Agrumes",
        heart: "Épices",
        base: "Bois & Musc",
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
        description: "Une fragrance masculine riche, élégante et sophistiquée.",
        top: "Épices",
        heart: "Bois",
        base: "Ambre & Vanille",
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
        tagline: "Audace et élégance.",
        description: "Une fragrance masculine moderne et charismatique.",
        top: "Agrumes",
        heart: "Aromates",
        base: "Bois",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "ICONIQUE",
        color: "dark"
    },

    {
        id: "H134",
        catalogue: "134",
        name: "Hugo Boss",
        shortName: "BOSS",
        category: "homme",
        categoryLabel: "HOMME",
        image: "hugo-boss-2.jpg",
        tagline: "Un classique masculin.",
        description: "Une seconde référence Hugo Boss masculine.",
        top: "Fruits",
        heart: "Aromates",
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
        tagline: "Une élégance italienne.",
        description: "Une fragrance masculine élégante et moderne.",
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
        shortName: "JPG",
        category: "homme",
        categoryLabel: "HOMME",
        image: "jean-paul-gaultier.jpg",
        tagline: "Une signature iconique.",
        description: "Une fragrance masculine sensuelle et reconnaissable.",
        top: "Menthe",
        heart: "Lavande",
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
        tagline: "Une signature orientale.",
        description: "Une fragrance masculine chaleureuse et sophistiquée.",
        top: "Épices",
        heart: "Bois",
        base: "Ambre & Musc",
        price30: 520,
        price50: 690,
        price100: 850,
        badge: "PREMIUM",
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
        tagline: "Luxe et puissance.",
        description: "Une fragrance masculine luxueuse, élégante et sophistiquée.",
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
        tagline: "Une signature moderne.",
        description: "Une fragrance masculine moderne et séduisante.",
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
        shortName: "BRITNEY",
        category: "homme",
        categoryLabel: "HOMME",
        image: "britney-spears.jpg",
        tagline: "Une fragrance originale.",
        description: "Une fragrance moderne, douce et expressive.",
        top: "Fruits",
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
        tagline: "Une personnalité affirmée.",
        description: "Une fragrance masculine intense et distinctive.",
        top: "Agrumes",
        heart: "Épices",
        base: "Vanille & Bois",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "",
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
        tagline: "Oud et profondeur.",
        description: "Une fragrance masculine orientale, profonde et chaleureuse.",
        top: "Épices",
        heart: "Oud",
        base: "Musc & Ambre",
        price30: 520,
        price50: 690,
        price100: 850,
        badge: "PREMIUM",
        color: "dark"
    },

    {
        id: "H143",
        catalogue: "143",
        name: "Amber Musk",
        shortName: "AMBER MUSK",
        category: "homme",
        categoryLabel: "HOMME",
        image: "amber-musk.jpg",
        tagline: "Chaleur et sensualité.",
        description: "Une fragrance chaleureuse mêlant ambre et musc.",
        top: "Épices",
        heart: "Ambre",
        base: "Musc & Bois",
        price30: 520,
        price50: 690,
        price100: 850,
        badge: "PREMIUM",
        color: "dark"
    },

    {
        id: "H144",
        catalogue: "144",
        name: "Modhila",
        shortName: "MODHILA",
        category: "homme",
        categoryLabel: "HOMME",
        image: "modhila.jpg",
        tagline: "Une signature mystérieuse.",
        description: "Une fragrance masculine chaleureuse, élégante et distinctive.",
        top: "Épices",
        heart: "Bois",
        base: "Ambre & Musc",
        price30: 490,
        price50: 640,
        price100: 790,
        badge: "NOUVEAU",
        color: "dark"
    }

];


/* =====================================================
   VARIABLES
===================================================== */

let currentProduct = null;
let currentSize = 50;
let currentPrice = 650;
let quantity = 1;

let favorites =
    JSON.parse(localStorage.getItem("elixirFavorites")) || [];

let bag =
    JSON.parse(localStorage.getItem("elixirBag")) || [];


/* =====================================================
   DOM
===================================================== */

const loader = document.getElementById("loader");
const navbar = document.getElementById("navbar");
const particles = document.getElementById("particles");
const productsGrid = document.getElementById("productsGrid");
const productCount = document.getElementById("productCount");

const modal = document.getElementById("productModal");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");

const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalTagline = document.getElementById("modalTagline");
const modalDescription = document.getElementById("modalDescription");
const modalTop = document.getElementById("modalTop");
const modalHeart = document.getElementById("modalHeart");
const modalBase = document.getElementById("modalBase");
const modalPrice = document.getElementById("modalPrice");
const modalBottleName = document.getElementById("modalBottleName");

const quantityValue = document.getElementById("quantityValue");
const modalFavorite = document.getElementById("modalFavorite");

const favoritesCount = document.getElementById("favoritesCount");
const bagCount = document.getElementById("bagCount");

const bagDrawer = document.getElementById("bagDrawer");
const drawerOverlay = document.getElementById("drawerOverlay");
const bagItems = document.getElementById("bagItems");
const bagTotal = document.getElementById("bagTotal");

const toast = document.getElementById("toast");

const searchPanel = document.getElementById("searchPanel");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

const mobileMenu = document.getElementById("mobileMenu");


/* =====================================================
   IMAGE
===================================================== */

function getProductImage(product) {
    return IMAGE_PATH + product.image;
}


/* =====================================================
   SAVE LOCAL STORAGE
===================================================== */

function saveFavorites() {
    localStorage.setItem(
        "elixirFavorites",
        JSON.stringify(favorites)
    );
}

function saveBag() {
    localStorage.setItem(
        "elixirBag",
        JSON.stringify(bag)
    );
}


/* =====================================================
   LOADER
===================================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        if (loader) {
            loader.classList.add("hidden");
        }

    }, 700);

});


/* =====================================================
   PARTICLES
===================================================== */

function createParticles() {

    if (!particles) return;

    const amount =
        window.innerWidth < 700
            ? 20
            : 45;

    for (let i = 0; i < amount; i++) {

        const particle =
            document.createElement("span");

        particle.className = "particle";

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.animationDuration =
            10 + Math.random() * 15 + "s";

        particle.style.animationDelay =
            -Math.random() * 15 + "s";

        particle.style.opacity =
            0.15 + Math.random() * 0.45;

        particles.appendChild(particle);
    }
}

createParticles();


/* =====================================================
   NAVBAR SCROLL
===================================================== */

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =====================================================
   PRODUCT BOTTLE
===================================================== */

function bottleHTML(product) {

    return `

        <div class="product-bottle">

            <div class="product-cap"></div>

            <div class="product-neck"></div>

            <div class="product-body">

                <img
                    src="${getProductImage(product)}"
                    alt="${product.name}"
                    class="perfume-image"
                    loading="lazy"
                    onerror="this.style.display='none';"
                >

                <div class="product-label">

                    <small>ÉLIXIR</small>

                    <strong>
                        ${product.shortName}
                    </strong>

                </div>

            </div>

        </div>

    `;
}


/* =====================================================
   RENDER PRODUCTS
===================================================== */

function renderProducts(filter = "all") {

    if (!productsGrid) return;

    const filtered =
        filter === "all"
            ? products
            : products.filter(
                product =>
                    product.category === filter
            );

    if (productCount) {

        productCount.textContent =
            String(filtered.length).padStart(2, "0");

    }

    productsGrid.innerHTML = "";

    filtered.forEach((product, index) => {

        const isFavorite =
            favorites.includes(product.id);

        const card =
            document.createElement("article");

        card.className =
            "product-card reveal";

        card.style.animationDelay =
            `${Math.min(index * 0.04, 0.5)}s`;

        card.innerHTML = `

            <div class="product-card-image">

                ${
                    product.badge
                        ? `
                            <span class="product-badge">
                                ${product.badge}
                            </span>
                          `
                        : ""
                }

                <button
                    class="favorite-btn ${isFavorite ? "active" : ""}"
                    data-favorite="${product.id}"
                    aria-label="Ajouter aux favoris"
                >
                    ${isFavorite ? "♥" : "♡"}
                </button>

                ${bottleHTML(product)}

            </div>


            <div class="product-card-content">

                <span class="product-category">
                    ${product.categoryLabel}
                </span>

                <h3>
                    ${product.name}
                </h3>

                <p class="product-tagline">
                    ${product.tagline}
                </p>

                <div class="product-price">

                    <span>
                        À partir de
                    </span>

                    <strong>
                        ${product.price30} DH
                    </strong>

                </div>

                <button
                    class="product-view-btn"
                    data-product="${product.id}"
                >
                    Découvrir
                </button>

            </div>

        `;

        productsGrid.appendChild(card);

    });


    /* FAVORITES */

    productsGrid
        .querySelectorAll("[data-favorite]")
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    toggleFavorite(
                        button.dataset.favorite
                    );

                }
            );

        });


    /* PRODUCT MODAL */

    productsGrid
        .querySelectorAll("[data-product]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    openProduct(
                        button.dataset.product
                    );

                }
            );

        });


    /* REVEAL */

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "revealed"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.08
                }
            );

        productsGrid
            .querySelectorAll(".reveal")
            .forEach(element => {

                observer.observe(element);

            });

    } else {

        productsGrid
            .querySelectorAll(".reveal")
            .forEach(element => {

                element.classList.add(
                    "revealed"
                );

            });

    }

}


/* =====================================================
   FILTERS
===================================================== */

document
    .querySelectorAll(".filter-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".filter-btn")
                    .forEach(btn => {

                        btn.classList.remove(
                            "active"
                        );

                    });

                button.classList.add("active");

                renderProducts(
                    button.dataset.filter
                );

            }
        );

    });


function getCurrentFilter() {

    const active =
        document.querySelector(
            ".filter-btn.active"
        );

    return active
        ? active.dataset.filter
        : "all";

}


/* =====================================================
   OPEN PRODUCT
===================================================== */

function openProduct(id) {

    const product =
        products.find(
            item => item.id === id
        );

    if (!product) return;

    currentProduct = product;

    currentSize = 50;

    currentPrice =
        product.price50;

    quantity = 1;


    if (modalTitle)
        modalTitle.textContent =
            product.name;

    if (modalCategory)
        modalCategory.textContent =
            product.categoryLabel;

    if (modalTagline)
        modalTagline.textContent =
            product.tagline;

    if (modalDescription)
        modalDescription.textContent =
            product.description;

    if (modalTop)
        modalTop.textContent =
            product.top;

    if (modalHeart)
        modalHeart.textContent =
            product.heart;

    if (modalBase)
        modalBase.textContent =
            product.base;

    if (modalBottleName)
        modalBottleName.textContent =
            product.shortName;

    if (quantityValue)
        quantityValue.textContent =
            "1";

    updateModalPrice();

    updateModalFavorite();

    if (modal) {

        modal.classList.add("open");

        document.body.classList.add(
            "modal-open"
        );

    }

}


/* =====================================================
   CLOSE PRODUCT
===================================================== */

function closeProduct() {

    if (modal) {

        modal.classList.remove("open");

    }

    document.body.classList.remove(
        "modal-open"
    );

}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeProduct
    );

}


if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeProduct
    );

}


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeProduct();

            closeBag();

            closeSearch();

        }

    }
);


/* =====================================================
   SIZE SELECTION
===================================================== */

document
    .querySelectorAll("[data-size]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll("[data-size]")
                    .forEach(btn => {

                        btn.classList.remove(
                            "active"
                        );

                    });

                button.classList.add("active");

                currentSize =
                    Number(
                        button.dataset.size
                    );

                if (currentProduct) {

                    if (currentSize === 30) {
                        currentPrice =
                            currentProduct.price30;
                    }

                    if (currentSize === 50) {
                        currentPrice =
                            currentProduct.price50;
                    }

                    if (currentSize === 100) {
                        currentPrice =
                            currentProduct.price100;
                    }

                }

                updateModalPrice();

            }
        );

    });


/* =====================================================
   MODAL PRICE
===================================================== */

function updateModalPrice() {

    if (!modalPrice) return;

    modalPrice.textContent =
        `${currentPrice} DH`;

}


/* =====================================================
   QUANTITY
===================================================== */

const quantityMinus =
    document.getElementById(
        "quantityMinus"
    );

const quantityPlus =
    document.getElementById(
        "quantityPlus"
    );


if (quantityMinus) {

    quantityMinus.addEventListener(
        "click",
        () => {

            if (quantity > 1) {

                quantity--;

            }

            updateQuantity();

        }
    );

}


if (quantityPlus) {

    quantityPlus.addEventListener(
        "click",
        () => {

            if (quantity < 99) {

                quantity++;

            }

            updateQuantity();

        }
    );

}


function updateQuantity() {

    if (quantityValue) {

        quantityValue.textContent =
            quantity;

    }

}


/* =====================================================
   FAVORITES
===================================================== */

function toggleFavorite(id) {

    if (
        favorites.includes(id)
    ) {

        favorites =
            favorites.filter(
                item => item !== id
            );

        showToast(
            "Retiré des favoris",
            "Le parfum a été retiré de vos favoris."
        );

    } else {

        favorites.push(id);

        showToast(
            "Ajouté aux favoris",
            "Le parfum a été ajouté à vos favoris."
        );

    }

    saveFavorites();

    updateCounters();

    renderProducts(
        getCurrentFilter()
    );

    updateModalFavorite();

}


/* =====================================================
   MODAL FAVORITE
===================================================== */

function updateModalFavorite() {

    if (!modalFavorite) return;

    if (
        currentProduct &&
        favorites.includes(
            currentProduct.id
        )
    ) {

        modalFavorite.classList.add(
            "active"
        );

        modalFavorite.textContent =
            "♥";

    } else {

        modalFavorite.classList.remove(
            "active"
        );

        modalFavorite.textContent =
            "♡";

    }

}


if (modalFavorite) {

    modalFavorite.addEventListener(
        "click",
        () => {

            if (currentProduct) {

                toggleFavorite(
                    currentProduct.id
                );

            }

        }
    );

}


/* =====================================================
   ADD TO BAG
===================================================== */

const addToBag =
    document.getElementById(
        "addToBag"
    );


if (addToBag) {

    addToBag.addEventListener(
        "click",
        addCurrentProductToBag
    );

}


function addCurrentProductToBag() {

    if (!currentProduct) return;

    const existing =
        bag.find(
            item =>
                item.id === currentProduct.id &&
                item.size === currentSize
        );


    if (existing) {

        existing.quantity += quantity;

    } else {

        bag.push({

            id: currentProduct.id,

            name: currentProduct.name,

            image: currentProduct.image,

            size: currentSize,

            price: currentPrice,

            quantity: quantity

        });

    }


    saveBag();

    updateCounters();

    updateBag();

    showToast(
        "Ajouté au panier",
        `${currentProduct.name} a été ajouté.`
    );

}


/* =====================================================
   COUNTERS
===================================================== */

function updateCounters() {

    if (favoritesCount) {

        favoritesCount.textContent =
            favorites.length;

    }

    if (bagCount) {

        const totalQuantity =
            bag.reduce(
                (
                    total,
                    item
                ) =>
                    total +
                    item.quantity,
                0
            );

        bagCount.textContent =
            totalQuantity;

    }

}


/* =====================================================
   BAG
===================================================== */

const bagBtn =
    document.getElementById(
        "bagBtn"
    );

const bagClose =
    document.getElementById(
        "bagClose"
    );

const drawerWhatsapp =
    document.getElementById(
        "drawerWhatsapp"
    );


if (bagBtn) {

    bagBtn.addEventListener(
        "click",
        openBag
    );

}


if (bagClose) {

    bagClose.addEventListener(
        "click",
        closeBag
    );

}


if (drawerOverlay) {

    drawerOverlay.addEventListener(
        "click",
        closeBag
    );

}


function openBag() {

    if (!bagDrawer) return;

    bagDrawer.classList.add(
        "open"
    );

    document.body.classList.add(
        "bag-open"
    );

    updateBag();

}


function closeBag() {

    if (!bagDrawer) return;

    bagDrawer.classList.remove(
        "open"
    );

    document.body.classList.remove(
        "bag-open"
    );

}


/* =====================================================
   UPDATE BAG
===================================================== */

function updateBag() {

    if (!bagItems) return;

    if (bag.length === 0) {

        bagItems.innerHTML = `

            <div class="empty-bag">

                <div class="empty-bag-icon">
                    ♡
                </div>

                <h3>
                    Votre panier est vide
                </h3>

                <p>
                    Découvrez notre collection
                    et ajoutez vos parfums préférés.
                </p>

            </div>

        `;

        if (bagTotal)
            bagTotal.textContent =
                "0 DH";

        return;

    }


    bagItems.innerHTML = "";


    bag.forEach(
        (item, index) => {

            const itemElement =
                document.createElement(
                    "div"
                );

            itemElement.className =
                "bag-item";


            itemElement.innerHTML = `

                <div class="bag-item-image">

                    <img
                        src="${IMAGE_PATH + item.image}"
                        alt="${item.name}"
                        onerror="this.style.display='none';"
                    >

                </div>


                <div class="bag-item-info">

                    <h4>
                        ${item.name}
                    </h4>

                    <span>
                        ${item.size} ML
                    </span>

                    <strong>
                        ${item.price} DH
                    </strong>


                    <div class="bag-item-controls">

                        <button
                            data-bag-minus="${index}"
                        >
                            −
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            data-bag-plus="${index}"
                        >
                            +
                        </button>

                        <button
                            class="bag-remove"
                            data-bag-remove="${index}"
                        >
                            Supprimer
                        </button>

                    </div>

                </div>

            `;


            bagItems.appendChild(
                itemElement
            );

        }
    );


    /* MINUS */

    bagItems
        .querySelectorAll(
            "[data-bag-minus]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            button.dataset.bagMinus
                        );

                    if (
                        bag[index]
                    ) {

                        bag[index].quantity--;

                        if (
                            bag[index].quantity <= 0
                        ) {

                            bag.splice(
                                index,
                                1
                            );

                        }

                    }

                    saveBag();

                    updateCounters();

                    updateBag();

                }
            );

        });


    /* PLUS */

    bagItems
        .querySelectorAll(
            "[data-bag-plus]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            button.dataset.bagPlus
                        );

                    if (
                        bag[index]
                    ) {

                        bag[index].quantity++;

                    }

                    saveBag();

                    updateCounters();

                    updateBag();

                }
            );

        });


    /* REMOVE */

    bagItems
        .querySelectorAll(
            "[data-bag-remove]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            button.dataset.bagRemove
                        );

                    bag.splice(
                        index,
                        1
                    );

                    saveBag();

                    updateCounters();

                    updateBag();

                    showToast(
                        "Supprimé",
                        "Le parfum a été retiré du panier."
                    );

                }
            );

        });


    const total =
        bag.reduce(
            (
                sum,
                item
            ) =>
                sum +
                item.price *
                item.quantity,
            0
        );


    if (bagTotal) {

        bagTotal.textContent =
            `${total} DH`;

    }

}


/* =====================================================
   WHATSAPP ORDER
===================================================== */

function sendWhatsAppOrder() {

    if (!WHATSAPP_NUMBER) return;


    let message =
        "Bonjour ÉLIXIR 👋\n\n";

    message +=
        "Je souhaite commander :\n\n";


    if (
        currentProduct &&
        modal &&
        modal.classList.contains(
            "open"
        )
    ) {

        message +=
            `• ${currentProduct.name}\n`;

        message +=
            `Référence : ${currentProduct.catalogue}\n`;

        message +=
            `Format : ${currentSize} ML\n`;

        message +=
            `Quantité : ${quantity}\n`;

        message +=
            `Prix : ${currentPrice * quantity} DH\n\n`;

    } else {

        if (bag.length === 0) {

            message +=
                "Je souhaite avoir plus d'informations sur vos parfums.";

        } else {

            bag.forEach(
                item => {

                    const product =
                        products.find(
                            p =>
                                p.id ===
                                item.id
                        );

                    message +=
                        `• ${item.name}`;

                    if (product) {

                        message +=
                            ` — Réf. ${product.catalogue}`;

                    }

                    message +=
                        ` — ${item.size} ML × ${item.quantity} — ${item.price * item.quantity} DH\n`;

                }
            );


            const total =
                bag.reduce(
                    (
                        sum,
                        item
                    ) =>
                        sum +
                        item.price *
                        item.quantity,
                    0
                );


            message +=
                `\nTotal estimé : ${total} DH`;

        }

    }


    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


    window.open(
        url,
        "_blank"
    );

}


const whatsappOrder =
    document.getElementById(
        "whatsappOrder"
    );


if (whatsappOrder) {

    whatsappOrder.addEventListener(
        "click",
        sendWhatsAppOrder
    );

}


if (drawerWhatsapp) {

    drawerWhatsapp.addEventListener(
        "click",
        sendWhatsAppOrder
    );

}


/* =====================================================
   TOAST
===================================================== */

let toastTimer;


function showToast(
    title,
    message
) {

    if (!toast) return;


    const strong =
        toast.querySelector(
            "strong"
        );

    const span =
        toast.querySelector(
            "span"
        );


    if (strong) {

        strong.textContent =
            title;

    }


    if (span) {

        span.textContent =
            message;

    }


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            3000
        );

}


/* =====================================================
   SEARCH
===================================================== */

const searchBtn =
    document.getElementById(
        "searchBtn"
    );

const searchClose =
    document.getElementById(
        "searchClose"
    );


if (searchBtn) {

    searchBtn.addEventListener(
        "click",
        openSearch
    );

}


if (searchClose) {

    searchClose.addEventListener(
        "click",
        closeSearch
    );

}


function openSearch() {

    if (!searchPanel) return;

    searchPanel.classList.add(
        "open"
    );

    document.body.classList.add(
        "search-open"
    );


    setTimeout(
        () => {

            if (searchInput) {

                searchInput.focus();

            }

        },
        100
    );

}


function closeSearch() {

    if (!searchPanel) return;

    searchPanel.classList.remove(
        "open"
    );

    document.body.classList.remove(
        "search-open"
    );

}


/* =====================================================
   SEARCH INPUT
===================================================== */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        () => {

            const query =
                searchInput.value
                    .trim()
                    .toLowerCase();


            if (!searchResults) return;


            if (!query) {

                searchResults.innerHTML = `

                    <div class="search-empty">

                        <p>
                            Recherchez un parfum,
                            une marque ou une référence.
                        </p>

                    </div>

                `;

                return;

            }


            const results =
                products.filter(
                    product => {

                        const content =
                            `
                            ${product.name}
                            ${product.shortName}
                            ${product.categoryLabel}
                            ${product.catalogue}
                            ${product.tagline}
                            `.toLowerCase();

                        return content.includes(
                            query
                        );

                    }
                );


            if (results.length === 0) {

                searchResults.innerHTML = `

                    <div class="search-empty">

                        <p>
                            Aucun parfum trouvé.
                        </p>

                    </div>

                `;

                return;

            }


            searchResults.innerHTML =
                results
                    .map(
                        product => `

                            <button
                                class="search-result"
                                data-search-product="${product.id}"
                            >

                                <div class="search-result-image">

                                    <img
                                        src="${getProductImage(product)}"
                                        alt="${product.name}"
                                        onerror="this.style.display='none';"
                                    >

                                </div>

                                <div>

                                    <span>
                                        ${product.categoryLabel}
                                    </span>

                                    <strong>
                                        ${product.name}
                                    </strong>

                                    <small>
                                        À partir de ${product.price30} DH
                                    </small>

                                </div>

                            </button>

                        `
                    )
                    .join("");


            searchResults
                .querySelectorAll(
                    "[data-search-product]"
                )
                .forEach(button => {

                    button.addEventListener(
                        "click",
                        () => {

                            closeSearch();

                            openProduct(
                                button.dataset.searchProduct
                            );

                        }
                    );

                });

        }
    );

}


/* =====================================================
   MOBILE MENU
===================================================== */

const mobileMenuButton =
    document.getElementById(
        "mobileMenuButton"
    );

const mobileMenuClose =
    document.getElementById(
        "mobileMenuClose"
    );


if (mobileMenuButton) {

    mobileMenuButton.addEventListener(
        "click",
        () => {

            if (!mobileMenu) return;

            mobileMenu.classList.add(
                "open"
            );

        }
    );

}


if (mobileMenuClose) {

    mobileMenuClose.addEventListener(
        "click",
        () => {

            if (!mobileMenu) return;

            mobileMenu.classList.remove(
                "open"
            );

        }
    );

}


if (mobileMenu) {

    mobileMenu
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    mobileMenu.classList.remove(
                        "open"
                    );

                }
            );

        });

}


/* =====================================================
   SMOOTH ANCHOR LINKS
===================================================== */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute(
                        "href"
                    );

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) return;


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


/* =====================================================
   PARALLAX HERO
===================================================== */

window.addEventListener(
    "scroll",
    () => {

        const heroBottle =
            document.querySelector(
                ".hero-bottle"
            );


        if (
            heroBottle &&
            window.scrollY <
            window.innerHeight
        ) {

            heroBottle.style.transform =
                `translateY(${window.scrollY * 0.08}px)`;

        }

    },
    {
        passive: true
    }
);


/* =====================================================
   PREVENT IMAGE DRAG
===================================================== */

document.addEventListener(
    "dragstart",
    event => {

        if (
            event.target.tagName ===
            "IMG"
        ) {

            event.preventDefault();

        }

    }
);


/* =====================================================
   REVEAL ON SCROLL
===================================================== */

if (
    "IntersectionObserver"
    in window
) {

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "revealed"
                            );

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    document
        .querySelectorAll(
            ".reveal"
        )
        .forEach(
            element =>
                revealObserver.observe(
                    element
                )
        );

}


/* =====================================================
   INITIAL RENDER
===================================================== */

renderProducts();

updateCounters();

updateBag();


/* =====================================================
   CONSOLE
===================================================== */

console.log(
    "%cÉLIXIR — Maison de Parfums",
    `
        color:#d6ad63;
        font-size:20px;
        font-weight:bold;
    `
);

console.log(
    `Catalogue chargé : ${products.length} parfums`
);

console.log(
    "44 parfums FEMME + 44 parfums HOMME"
);
