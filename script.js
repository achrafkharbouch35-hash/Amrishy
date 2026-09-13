/* =====================================================
   ÉLIXIR — MAISON DE PARFUMS
   SCRIPT.JS
   88 PARFUMS — 44 FEMME + 44 HOMME
===================================================== */


/* =====================================================
   CONFIGURATION
===================================================== */

const WHATSAPP_NUMBER = "212600000000";


/* =====================================================
   DOSSIER DES IMAGES
===================================================== */

const IMAGE_PATH = "";


/* =====================================================
   PRODUCTS — 88 PARFUMS
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
        shortName: "BLEU",
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
        shortName: "NOIR",
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
        shortName: "ALLURE",
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
        shortName: "ARMANI",
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
        shortName: "HERRERA",
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
        shortName: "MUGLER",
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
        shortName: "DAVIDOFF",
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
        shortName: "PACO",
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
        shortName: "HERRERA",
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
        shortName: "BOSS",
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
        shortName: "JPG",
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
        shortName: "MARLY",
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
        shortName: "BRITNEY",
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


/* =====================================================
   IMAGE HELPER
===================================================== */

function getProductImage(product) {

    return IMAGE_PATH + product.image;

}


/* =====================================================
   STATE
===================================================== */

let currentProduct = null;

let currentSize = 50;

let currentPrice = 640;

let quantity = 1;

let bag = [];

let favorites = [];


/* =====================================================
   DOM
===================================================== */

const loader =
    document.getElementById("loader");

const navbar =
    document.getElementById("navbar");

const particles =
    document.getElementById("particles");

const productsGrid =
    document.getElementById("productsGrid");

const productCount =
    document.getElementById("productCount");

const modal =
    document.getElementById("productModal");

const modalOverlay =
    document.getElementById("modalOverlay");

const modalClose =
    document.getElementById("modalClose");

const modalTitle =
    document.getElementById("modalTitle");

const modalCategory =
    document.getElementById("modalCategory");

const modalTagline =
    document.getElementById("modalTagline");

const modalDescription =
    document.getElementById("modalDescription");

const modalTop =
    document.getElementById("modalTop");

const modalHeart =
    document.getElementById("modalHeart");

const modalBase =
    document.getElementById("modalBase");

const modalPrice =
    document.getElementById("modalPrice");

const modalBottleName =
    document.getElementById("modalBottleName");

const quantityValue =
    document.getElementById("quantityValue");

const modalFavorite =
    document.getElementById("modalFavorite");

const favoritesCount =
    document.getElementById("favoritesCount");

const bagCount =
    document.getElementById("bagCount");

const bagDrawer =
    document.getElementById("bagDrawer");

const drawerOverlay =
    document.getElementById("drawerOverlay");

const bagItems =
    document.getElementById("bagItems");

const bagTotal =
    document.getElementById("bagTotal");

const toast =
    document.getElementById("toast");

const searchPanel =
    document.getElementById("searchPanel");

const searchInput =
    document.getElementById("searchInput");

const searchResults =
    document.getElementById("searchResults");

const mobileMenu =
    document.getElementById("mobileMenu");


/* =====================================================
   LOADER
===================================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        if (loader) {
            loader.classList.add("hidden");
        }

        document.body.classList.remove(
            "modal-open"
        );

    }, 1800);

});


/* =====================================================
   PARTICLES
===================================================== */

function createParticles() {

    if (!particles) return;

    const amount =
        window.innerWidth < 700
            ? 25
            : 50;

    for (let i = 0; i < amount; i++) {

        const particle =
            document.createElement("span");

        particle.className =
            "particle";

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.animationDuration =
            (10 + Math.random() * 15) + "s";

        particle.style.animationDelay =
            (-Math.random() * 15) + "s";

        particle.style.opacity =
            (0.15 + Math.random() * 0.5);

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
   CUSTOM CURSOR
===================================================== */

const cursor =
    document.querySelector(".cursor");

const follower =
    document.querySelector(".cursor-follower");

if (cursor && follower) {

    let mouseX = 0;
    let mouseY = 0;

    let followerX = 0;
    let followerY = 0;

    document.addEventListener(
        "mousemove",
        (e) => {

            mouseX = e.clientX;
            mouseY = e.clientY;

            cursor.style.left =
                mouseX + "px";

            cursor.style.top =
                mouseY + "px";

        }
    );

    function animateCursor() {

        followerX +=
            (mouseX - followerX) * .12;

        followerY +=
            (mouseY - followerY) * .12;

        follower.style.left =
            followerX + "px";

        follower.style.top =
            followerY + "px";

        requestAnimationFrame(
            animateCursor
        );

    }

    animateCursor();

}


/* =====================================================
   PRODUCT IMAGE HTML
===================================================== */
function bottleHTML(product) {
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

    filtered.forEach(
        (product, index) => {

            const isFavorite =
                favorites.includes(product.id);

            const card =
                document.createElement("article");

            card.className =
                "product-card";

            card.dataset.id =
                product.id;

            card.innerHTML = `

                ${
                    product.badge
                        ? `
                            <div class="product-badge">
                                ${product.badge}
                            </div>
                          `
                        : ""
                }

                <button
                    class="
                        product-heart
                        ${isFavorite ? "active" : ""}
                    "
                    data-favorite="${product.id}"
                    aria-label="Ajouter aux favoris"
                >
                    <i class="
                        ${
                            isFavorite
                                ? "fa-solid"
                                : "fa-regular"
                        }
                        fa-heart
                    "></i>
                </button>

                <div class="product-card-image">

                    ${bottleHTML(product)}

                </div>

                <div class="product-info">

                    <span class="product-category">
                        ${product.categoryLabel}
                    </span>

                    <span class="product-reference">
                        Réf. ${product.catalogue}
                    </span>

                    <h3 class="product-name">
                        ${product.name}
                    </h3>

                    <p class="product-tagline">
                        ${product.tagline}
                    </p>

                    <div class="product-bottom">

                        <span class="product-price">
                            À partir de ${product.price30} DH
                        </span>

                        <span class="product-open">
                            <i class="fa-solid fa-arrow-right"></i>
                        </span>

                    </div>

                </div>
            `;

            productsGrid.appendChild(card);

            setTimeout(() => {

                card.classList.add("visible");

            }, index * 40);

        }
    );

    attachProductEvents();

}


/* =====================================================
   PRODUCT EVENTS
===================================================== */

function attachProductEvents() {

    document.querySelectorAll(
        ".product-card"
    ).forEach(card => {

        card.addEventListener(
            "click",
            (event) => {

                if (
                    event.target.closest(
                        ".product-heart"
                    )
                ) {
                    return;
                }

                const id =
                    card.dataset.id;

                openProduct(id);

            }
        );

    });


    document.querySelectorAll(
        "[data-favorite]"
    ).forEach(button => {

        button.addEventListener(
            "click",
            (event) => {

                event.stopPropagation();

                const id =
                    button.dataset.favorite;

                toggleFavorite(id);

            }
        );

    });

}


/* =====================================================
   FILTER
===================================================== */

document.querySelectorAll(
    ".filter-btn"
).forEach(button => {

    button.addEventListener(
        "click",
        () => {

            document.querySelectorAll(
                ".filter-btn"
            ).forEach(btn => {

                btn.classList.remove(
                    "active"
                );

            });

            button.classList.add(
                "active"
            );

            renderProducts(
                button.dataset.filter
            );

        }
    );

});


/* =====================================================
   OPEN PRODUCT
===================================================== */

function openProduct(id) {

    currentProduct =
        products.find(
            product =>
                product.id === id
        );

    if (!currentProduct) return;

    currentSize = 50;

    currentPrice =
        currentProduct.price50;

    quantity = 1;


    if (modalTitle)
        modalTitle.textContent =
            currentProduct.name;

    if (modalCategory)
        modalCategory.textContent =
            currentProduct.categoryLabel;

    if (modalTagline)
        modalTagline.textContent =
            currentProduct.tagline;

    if (modalDescription)
        modalDescription.textContent =
            currentProduct.description;

    if (modalTop)
        modalTop.textContent =
            currentProduct.top;

    if (modalHeart)
        modalHeart.textContent =
            currentProduct.heart;

    if (modalBase)
        modalBase.textContent =
            currentProduct.base;

    if (modalPrice)
        modalPrice.textContent =
            currentPrice + " DH";

    if (modalBottleName)
        modalBottleName.textContent =
            currentProduct.shortName;

    if (quantityValue)
        quantityValue.textContent =
            quantity;


    /* PHOTO DU PRODUIT DANS LE MODAL */

    const modalImage =
        document.getElementById("modalProductImage");

    if (modalImage) {

        modalImage.src =
            getProductImage(currentProduct);

        modalImage.alt =
            currentProduct.name;

    }


    document.querySelectorAll(
        ".size-btn"
    ).forEach(button => {

        const size =
            Number(button.dataset.size);

        let price;

        if (size === 30) {
            price =
                currentProduct.price30;
        }

        if (size === 50) {
            price =
                currentProduct.price50;
        }

        if (size === 100) {
            price =
                currentProduct.price100;
        }

        button.dataset.price =
            price;

        button.classList.toggle(
            "active",
            size === 50
        );

        const strong =
            button.querySelector("strong");

        if (strong) {

            strong.textContent =
                price + " DH";

        }

    });


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

    if (!modal) return;

    modal.classList.remove("open");

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


/* =====================================================
   ESCAPE
===================================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            closeProduct();

            closeBag();

            closeSearch();

            closeMobileMenu();

        }

    }
);


/* =====================================================
   SIZE SELECTION
===================================================== */

document.querySelectorAll(
    ".size-btn"
).forEach(button => {

    button.addEventListener(
        "click",
        () => {

            document.querySelectorAll(
                ".size-btn"
            ).forEach(btn => {

                btn.classList.remove(
                    "active"
                );

            });

            button.classList.add(
                "active"
            );

            currentSize =
                Number(
                    button.dataset.size
                );

            currentPrice =
                Number(
                    button.dataset.price
                );

            if (modalPrice) {

                modalPrice.textContent =
                    currentPrice + " DH";

            }

        }
    );

});


/* =====================================================
   QUANTITY
===================================================== */

const minusQty =
    document.getElementById("minusQty");

const plusQty =
    document.getElementById("plusQty");


if (minusQty) {

    minusQty.addEventListener(
        "click",
        () => {

            if (quantity > 1) {

                quantity--;

                if (quantityValue) {

                    quantityValue.textContent =
                        quantity;

                }

            }

        }
    );

}


if (plusQty) {

    plusQty.addEventListener(
        "click",
        () => {

            if (quantity < 10) {

                quantity++;

                if (quantityValue) {

                    quantityValue.textContent =
                        quantity;

                }

            }

        }
    );

}


/* =====================================================
   FAVORITES
===================================================== */

function toggleFavorite(id) {

    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                item => item !== id
            );

        showToast(
            "Retiré des favoris",
            "La fragrance a été retirée."
        );

    } else {

        favorites.push(id);

        showToast(
            "Ajouté aux favoris",
            "La fragrance a été sauvegardée."
        );

    }

    updateCounters();

    renderProducts(
        getCurrentFilter()
    );

    updateModalFavorite();

}


function updateModalFavorite() {

    if (!currentProduct ||
        !modalFavorite) return;

    const active =
        favorites.includes(
            currentProduct.id
        );

    modalFavorite.classList.toggle(
        "active",
        active
    );

    modalFavorite.innerHTML = `

        <i class="
            ${active
                ? "fa-solid"
                : "fa-regular"
            }
            fa-heart
        "></i>

    `;

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
   CURRENT FILTER
===================================================== */

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
   COUNTERS
===================================================== */

function updateCounters() {

    if (favoritesCount) {

        favoritesCount.textContent =
            favorites.length;

    }

    const totalQuantity =
        bag.reduce(
            (sum, item) =>
                sum + item.quantity,
            0
        );

    if (bagCount) {

        bagCount.textContent =
            totalQuantity;

    }

}


/* =====================================================
   ADD TO BAG
===================================================== */

const modalAdd =
    document.getElementById("modalAdd");


if (modalAdd) {

    modalAdd.addEventListener(
        "click",
        () => {

            if (!currentProduct) return;

            const existing =
                bag.find(
                    item =>
                        item.id === currentProduct.id
                        &&
                        item.size === currentSize
                );

            if (existing) {

                existing.quantity +=
                    quantity;

            } else {

                bag.push({

                    id:
                        currentProduct.id,

                    name:
                        currentProduct.name,

                    size:
                        currentSize,

                    price:
                        currentPrice,

                    quantity:
                        quantity

                });

            }

            updateCounters();

            updateBag();

            showToast(
                "Ajouté à votre sélection",
                `${currentProduct.name} — ${currentSize} ML`
            );

            closeProduct();

        }
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

                <i class="
                    fa-solid
                    fa-spray-can-sparkles
                "></i>

                <h4>
                    Votre sélection est vide
                </h4>

                <p>
                    Ajoutez vos fragrances préférées
                    pour préparer votre commande.
                </p>

                <button
                    class="btn btn-gold"
                    id="emptyBagBtn"
                >
                    Découvrir les parfums
                </button>

            </div>

        `;

        const emptyBagBtn =
            document.getElementById(
                "emptyBagBtn"
            );

        if (emptyBagBtn) {

            emptyBagBtn.addEventListener(
                "click",
                () => {

                    closeBag();

                    const collection =
                        document.getElementById(
                            "collection"
                        );

                    if (collection) {

                        collection.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                }
            );

        }

    } else {

        bagItems.innerHTML = "";

        bag.forEach(
            (item, index) => {

                const itemElement =
                    document.createElement(
                        "div"
                    );

                itemElement.className =
                    "bag-item";

                const product =
                    products.find(
                        p => p.id === item.id
                    );

                const image =
                    product
                        ? getProductImage(product)
                        : "";

                itemElement.innerHTML = `

                    <div class="bag-mini-bottle">

                        <img
                            src="${image}"
                            alt="${item.name}"
                        >

                    </div>

                    <div class="bag-item-info">

                        <h4>
                            ${item.name}
                        </h4>

                        <span>
                            ${item.size} ML
                            ×
                            ${item.quantity}
                        </span>

                        <button
                            class="bag-item-remove"
                            data-index="${index}"
                        >
                            Supprimer
                        </button>

                    </div>

                    <div class="bag-item-price">

                        ${
                            item.price *
                            item.quantity
                        } DH

                    </div>

                `;

                bagItems.appendChild(
                    itemElement
                );

            }
        );


        document.querySelectorAll(
            ".bag-item-remove"
        ).forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            button.dataset.index
                        );

                    bag.splice(index, 1);

                    updateCounters();

                    updateBag();

                }
            );

        });

    }


    const total =
        bag.reduce(
            (sum, item) =>
                sum +
                item.price *
                item.quantity,
            0
        );

    if (bagTotal) {

        bagTotal.textContent =
            total + " DH";

    }

}


/* =====================================================
   OPEN BAG
===================================================== */

function openBag() {

    updateBag();

    if (bagDrawer) {

        bagDrawer.classList.add("open");

    }

    if (drawerOverlay) {

        drawerOverlay.classList.add("open");

    }

    document.body.classList.add(
        "drawer-open"
    );

}


function closeBag() {

    if (bagDrawer) {

        bagDrawer.classList.remove(
            "open"
        );

    }

    if (drawerOverlay) {

        drawerOverlay.classList.remove(
            "open"
        );

    }

    document.body.classList.remove(
        "drawer-open"
    );

}


const bagBtn =
    document.getElementById("bagBtn");

if (bagBtn) {

    bagBtn.addEventListener(
        "click",
        openBag
    );

}


const drawerClose =
    document.getElementById("drawerClose");

if (drawerClose) {

    drawerClose.addEventListener(
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
        modal.classList.contains("open")
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

            bag.forEach(item => {

                const product =
                    products.find(
                        p => p.id === item.id
                    );

                message +=
                    `• ${item.name}`;

                if (product) {

                    message +=
                        ` — Réf. ${product.catalogue}`;

                }

                message +=
                    ` — ${item.size} ML × ${item.quantity} — ${item.price * item.quantity} DH\n`;

            });

            const total =
                bag.reduce(
                    (sum, item) =>
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


/* =====================================================
   WHATSAPP BUTTONS
===================================================== */

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


const drawerWhatsapp =
    document.getElementById(
        "drawerWhatsapp"
    );

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

    if (strong)
        strong.textContent =
            title;

    if (span)
        span.textContent =
            message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

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
        "modal-open"
    );

    setTimeout(
        () => {

            if (searchInput) {

                searchInput.focus();

            }

        },
        300
    );

}


function closeSearch() {

    if (!searchPanel) return;

    searchPanel.classList.remove(
        "open"
    );

    document.body.classList.remove(
        "modal-open"
    );

    if (searchInput) {

        searchInput.value = "";

    }

    if (searchResults) {

        searchResults.innerHTML = "";

    }

}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        () => {

            const query =
                searchInput.value
                    .trim()
                    .toLowerCase();

            if (!query) {

                searchResults.innerHTML =
                    "";

                return;

            }


            const results =
                products.filter(
                    product => {

                        const content =
                            `
                            ${product.name}
                            ${product.category}
                            ${product.categoryLabel}
                            ${product.catalogue}
                            ${product.tagline}
                            ${product.top}
                            ${product.heart}
                            ${product.base}
                            `
                            .toLowerCase();

                        return content.includes(
                            query
                        );

                    }
                );


            if (results.length === 0) {

                searchResults.innerHTML = `

                    <div class="search-result">

                        <span>
                            Aucun parfum trouvé
                        </span>

                        <small>
                            Essayez un autre terme
                        </small>

                    </div>

                `;

                return;

            }


            searchResults.innerHTML =
                results.map(
                    product => `

                        <div
                            class="search-result"
                            data-search-id="${product.id}"
                        >

                            <span>
                                ${product.name}
                            </span>

                            <small>
                                Réf. ${product.catalogue}
                                ·
                                ${product.categoryLabel}
                            </small>

                        </div>

                    `
                ).join("");


            document.querySelectorAll(
                "[data-search-id]"
            ).forEach(result => {

                result.addEventListener(
                    "click",
                    () => {

                        const id =
                            result.dataset.searchId;

                        closeSearch();

                        openProduct(id);

                    }
                );

            });

        }
    );

}


/* =====================================================
   MOBILE MENU
===================================================== */

const mobileMenuBtn =
    document.getElementById(
        "mobileMenuBtn"
    );

const mobileClose =
    document.getElementById(
        "mobileClose"
    );


function openMobileMenu() {

    if (!mobileMenu) return;

    mobileMenu.classList.add(
        "open"
    );

    document.body.classList.add(
        "menu-open"
    );

}


function closeMobileMenu() {

    if (!mobileMenu) return;

    mobileMenu.classList.remove(
        "open"
    );

    document.body.classList.remove(
        "menu-open"
    );

}


if (mobileMenuBtn) {

    mobileMenuBtn.addEventListener(
        "click",
        openMobileMenu
    );

}


if (mobileClose) {

    mobileClose.addEventListener(
        "click",
        closeMobileMenu
    );

}


document.querySelectorAll(
    ".mobile-menu nav a"
).forEach(link => {

    link.addEventListener(
        "click",
        closeMobileMenu
    );

});


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
                threshold: .12
            }
        );


    document.querySelectorAll(
        ".reveal"
    ).forEach(
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
   SMOOTH ANCHOR LINKS
===================================================== */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(link => {

    link.addEventListener(
        "click",
        event => {

            const targetId =
                link.getAttribute(
                    "href"
                );

            if (
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
                behavior: "smooth"
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

        const scroll =
            window.scrollY;

        const heroBottle =
            document.querySelector(
                ".hero-bottle"
            );

        if (
            heroBottle &&
            scroll < window.innerHeight
        ) {

            heroBottle.style.transform =
                `translateY(${scroll * .08}px)`;

        }

    },
    {
        passive: true
    }
);


/* =====================================================
   PREVENT IMAGE-LIKE DRAG
===================================================== */

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
