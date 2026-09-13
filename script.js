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
   PARFUMS EXTRACT
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
   OUTILS
========================================================= */

function getProductType(product) {

    if (!product) {
        return "eau";
    }

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

    return PRICES[type][size] || 0;
}


function getProductImage(product) {

    if (!product) {
        return "";
    }

    return IMAGE_PATH + product.image;
}


function isPack(item) {

    return !!item && (
        item.isPack === true ||
        String(item.id).startsWith("P")
    );
}


function getCatalogItem(id) {

    return (
        products.find(p => p.id === id) ||
        packs.find(p => p.id === id) ||
        null
    );
}


function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   88 PARFUMS
========================================================= */

const products = [

    /* =====================================================
       FEMME
    ===================================================== */

    {
        id: "F01",
        catalogue: "01",
        name: "Kayli Marchmello",
        image: "kayli-marchmello.jpg",
        category: "femme",
        tagline: "Une signature douce et lumineuse.",
        description: "Une fragrance féminine moderne, douce et élégante, pensée pour celles qui aiment un parfum délicat avec une belle présence.",
        top: "Notes fruitées",
        heart: "Fleurs blanches",
        base: "Musc & Vanille",
        badge: "NOUVEAU"
    },

    {
        id: "F02",
        catalogue: "02",
        name: "Escada Taj",
        image: "escada-taj.jpg",
        category: "femme",
        tagline: "Une évasion exotique.",
        description: "Une fragrance féminine fruitée et exotique offrant une sensation fraîche, joyeuse et estivale.",
        top: "Fruits exotiques",
        heart: "Fleurs tropicales",
        base: "Bois doux",
        badge: "ICONIQUE"
    },

    {
        id: "F03",
        catalogue: "03",
        name: "Coco Chanel",
        image: "coco-chanel.jpg",
        category: "femme",
        tagline: "L'élégance intemporelle.",
        description: "Une signature féminine sophistiquée mêlant caractère, élégance et sensualité.",
        top: "Agrumes",
        heart: "Rose & Jasmin",
        base: "Ambre & Patchouli",
        badge: "BEST-SELLER"
    },

    {
        id: "F04",
        catalogue: "04",
        name: "Jador",
        image: "jador.jpg",
        category: "femme",
        tagline: "Une féminité précieuse.",
        description: "Une composition florale lumineuse et raffinée avec une présence élégante sur la peau.",
        top: "Fruité",
        heart: "Jasmin & Rose",
        base: "Musc & Bois",
        badge: "ICONIQUE"
    },

    {
        id: "F05",
        catalogue: "05",
        name: "La Belle",
        image: "la-belle.jpg",
        category: "femme",
        tagline: "Belle. Sensuelle. Inoubliable.",
        description: "Une fragrance féminine gourmande et séduisante avec une signature chaleureuse.",
        top: "Poire",
        heart: "Fleurs blanches",
        base: "Vanille",
        badge: "BEST-SELLER"
    },

    {
        id: "F06",
        catalogue: "06",
        name: "Burberry Her",
        image: "burberry-her.jpg",
        category: "femme",
        tagline: "Une énergie londonienne.",
        description: "Une fragrance fruitée et moderne, féminine et dynamique.",
        top: "Fruits rouges",
        heart: "Fleurs",
        base: "Musc & Bois",
        badge: "NOUVEAU"
    },

    {
        id: "F07",
        catalogue: "07",
        name: "Hypnotic Poison",
        image: "hypnotic-poison.jpg",
        category: "femme",
        tagline: "Une attraction mystérieuse.",
        description: "Une fragrance intense et sensuelle dominée par des notes gourmandes et chaleureuses.",
        top: "Amande",
        heart: "Jasmin",
        base: "Vanille & Musc",
        badge: "BEST-SELLER"
    },

    {
        id: "F08",
        catalogue: "08",
        name: "Good Girl",
        image: "good-girl.jpg",
        category: "femme",
        tagline: "Une femme aux multiples facettes.",
        description: "Une fragrance contrastée mêlant fraîcheur florale, gourmandise et profondeur.",
        top: "Amande",
        heart: "Jasmin & Tubéreuse",
        base: "Tonka & Cacao",
        badge: "BEST-SELLER"
    },

    {
        id: "F09",
        catalogue: "09",
        name: "Prada Pradox",
        image: "prada-pradox.jpg",
        category: "femme",
        tagline: "Une élégance contemporaine.",
        description: "Une fragrance moderne, lumineuse et élégante.",
        top: "Agrumes",
        heart: "Fleurs blanches",
        base: "Ambre",
        badge: "NOUVEAU"
    },

    {
        id: "F10",
        catalogue: "10",
        name: "Scandal",
        image: "scandal.jpg",
        category: "femme",
        tagline: "Provocante par nature.",
        description: "Une fragrance gourmande et audacieuse destinée à une femme qui aime attirer l'attention.",
        top: "Miel",
        heart: "Gardénia",
        base: "Patchouli",
        badge: "ICONIQUE"
    },

    {
        id: "F11",
        catalogue: "11",
        name: "Oud Night",
        image: "oud-night.jpg",
        category: "femme",
        tagline: "La nuit en une fragrance.",
        description: "Une fragrance mystérieuse construite autour du oud et de notes chaleureuses.",
        top: "Épices",
        heart: "Oud",
        base: "Ambre & Musc",
        badge: "PREMIUM"
    },

    {
        id: "F12",
        catalogue: "12",
        name: "Gucci Bloom",
        image: "gucci-bloom.jpg",
        category: "femme",
        tagline: "Fleurir avec élégance.",
        description: "Une fragrance florale riche et féminine.",
        top: "Fleurs",
        heart: "Tubéreuse",
        base: "Rangoon Creeper",
        badge: "ICONIQUE"
    },

    {
        id: "F13",
        catalogue: "13",
        name: "Victorias Secret",
        image: "victorias-secret.jpg",
        category: "femme",
        tagline: "Glamour et sensualité.",
        description: "Une fragrance féminine séduisante et lumineuse.",
        top: "Fruits",
        heart: "Fleurs",
        base: "Vanille & Musc",
        badge: "FAVORI"
    },

    {
        id: "F14",
        catalogue: "14",
        name: "Si Armani",
        image: "si-armani.jpg",
        category: "femme",
        tagline: "Une féminité affirmée.",
        description: "Une fragrance élégante et sophistiquée avec une signature chaleureuse.",
        top: "Cassis",
        heart: "Rose",
        base: "Vanille & Bois",
        badge: "ICONIQUE"
    },

    {
        id: "F15",
        catalogue: "15",
        name: "La Nuit Trésor",
        image: "la-nuit-tresor.jpg",
        category: "femme",
        tagline: "Une nuit précieuse.",
        description: "Une fragrance sensuelle et profonde aux accents gourmands.",
        top: "Fruits",
        heart: "Rose",
        base: "Vanille & Pralin",
        badge: "BEST-SELLER"
    },

    {
        id: "F16",
        catalogue: "16",
        name: "Coco Chanel",
        image: "coco-chanel-2.jpg",
        category: "femme",
        tagline: "L'élégance intemporelle.",
        description: "Une seconde référence Coco Chanel présente dans votre catalogue.",
        top: "Agrumes",
        heart: "Rose & Jasmin",
        base: "Ambre & Patchouli",
        badge: "ICONIQUE"
    },

    {
        id: "F17",
        catalogue: "17",
        name: "Giordani",
        image: "giordani.jpg",
        category: "femme",
        tagline: "Une élégance raffinée.",
        description: "Une fragrance féminine florale et élégante.",
        top: "Agrumes",
        heart: "Fleurs blanches",
        base: "Bois"
    },

    {
        id: "F18",
        catalogue: "18",
        name: "Dior",
        image: "dior-femme.jpg",
        category: "femme",
        tagline: "L'élégance française.",
        description: "Une fragrance féminine sophistiquée et intemporelle.",
        top: "Agrumes",
        heart: "Fleurs",
        base: "Bois & Musc",
        badge: "ICONIQUE"
    },

    {
        id: "F19",
        catalogue: "19",
        name: "Azzaro Wanted Girl",
        image: "azzaro-wanted-girl.jpg",
        category: "femme",
        tagline: "Audacieuse et magnétique.",
        description: "Une fragrance féminine gourmande et lumineuse.",
        top: "Gingembre",
        heart: "Fleurs",
        base: "Tonka & Dulce",
        badge: "NOUVEAU"
    },

    {
        id: "F20",
        catalogue: "20",
        name: "Escada Taj",
        image: "escada-taj-2.jpg",
        category: "femme",
        tagline: "Une évasion exotique.",
        description: "Une seconde référence Escada Taj présente dans votre catalogue.",
        top: "Fruits exotiques",
        heart: "Fleurs tropicales",
        base: "Bois doux"
    },

    {
        id: "F21",
        catalogue: "21",
        name: "Valentino",
        image: "valentino-femme.jpg",
        category: "femme",
        tagline: "Romantique et sophistiquée.",
        description: "Une fragrance féminine élégante et moderne.",
        top: "Fruité",
        heart: "Rose & Jasmin",
        base: "Vanille & Bois"
    },

    {
        id: "F22",
        catalogue: "22",
        name: "So Elixir",
        image: "so-elixir.jpg",
        category: "femme",
        tagline: "Une aura mystérieuse.",
        description: "Une fragrance féminine florale et chaleureuse.",
        top: "Fruits",
        heart: "Rose",
        base: "Patchouli & Musc"
    },

    {
        id: "F23",
        catalogue: "23",
        name: "Evidence",
        image: "evidence.jpg",
        category: "femme",
        tagline: "Une élégance naturelle.",
        description: "Une fragrance fraîche et féminine.",
        top: "Agrumes",
        heart: "Rose",
        base: "Mousse & Bois"
    },

    {
        id: "F24",
        catalogue: "24",
        name: "Musk Rouge",
        image: "musk-rouge.jpg",
        category: "femme",
        tagline: "Musc et sensualité.",
        description: "Une fragrance douce, chaude et sensuelle.",
        top: "Fruits rouges",
        heart: "Rose",
        base: "Musc",
        badge: "FAVORI"
    },

    {
        id: "F25",
        catalogue: "25",
        name: "D&G",
        image: "dg-femme.jpg",
        category: "femme",
        tagline: "Une signature italienne.",
        description: "Une fragrance féminine élégante et expressive.",
        top: "Agrumes",
        heart: "Fleurs",
        base: "Bois"
    },

    {
        id: "F26",
        catalogue: "26",
        name: "Amber Elixir",
        image: "amber-elixir.jpg",
        category: "femme",
        tagline: "Chaleur et mystère.",
        description: "Une fragrance enveloppante dominée par l'ambre.",
        top: "Épices",
        heart: "Ambre",
        base: "Vanille & Bois",
        badge: "PREMIUM"
    },

    {
        id: "F27",
        catalogue: "27",
        name: "Nina Ricci",
        image: "nina-ricci.jpg",
        category: "femme",
        tagline: "Romantique et délicate.",
        description: "Une fragrance fruitée et féminine.",
        top: "Pomme",
        heart: "Fleurs",
        base: "Musc & Bois"
    },

    {
        id: "F28",
        catalogue: "28",
        name: "Versace",
        image: "versace-femme.jpg",
        category: "femme",
        tagline: "Glamour méditerranéen.",
        description: "Une fragrance féminine lumineuse et sophistiquée.",
        top: "Fruits",
        heart: "Fleurs",
        base: "Bois & Musc",
        badge: "ICONIQUE"
    },

    {
        id: "F29",
        catalogue: "29",
        name: "Cloé Nomade",
        image: "chloe-nomade.jpg",
        category: "femme",
        tagline: "Libre et élégante.",
        description: "Une fragrance féminine moderne avec une personnalité affirmée.",
        top: "Mirabelle",
        heart: "Freesia",
        base: "Mousse & Patchouli",
        badge: "NOUVEAU"
    },

    {
        id: "F30",
        catalogue: "30",
        name: "Lancôme",
        image: "lancome-femme.jpg",
        category: "femme",
        tagline: "Une élégance parisienne.",
        description: "Une fragrance féminine raffinée et sophistiquée.",
        top: "Fruité",
        heart: "Rose & Jasmin",
        base: "Vanille & Musc",
        badge: "ICONIQUE"
    },

    {
        id: "F31",
        catalogue: "31",
        name: "Amirat Al Arab",
        image: "amirat-al-arab.jpg",
        category: "femme",
        tagline: "Une signature orientale.",
        description: "Une fragrance chaleureuse et élégante inspirée de la parfumerie orientale.",
        top: "Fruits",
        heart: "Fleurs",
        base: "Musc & Ambre",
        badge: "ORIENTAL"
    },

    {
        id: "F32",
        catalogue: "32",
        name: "Ghobar Dahab",
        image: "ghobar-dahab.jpg",
        category: "femme",
        tagline: "L'or en parfum.",
        description: "Une fragrance chaleureuse et précieuse.",
        top: "Épices",
        heart: "Ambre",
        base: "Musc & Bois",
        badge: "PREMIUM"
    },

    {
        id: "F33",
        catalogue: "33",
        name: "Ana Al Abyad",
        image: "ana-al-abyad.jpg",
        category: "femme",
        tagline: "Pureté et élégance.",
        description: "Une fragrance musquée, douce et lumineuse.",
        top: "Agrumes",
        heart: "Fleurs blanches",
        base: "Musc",
        badge: "FAVORI"
    },

    {
        id: "F34",
        catalogue: "34",
        name: "Yara",
        image: "yara.jpg",
        category: "femme",
        tagline: "Douceur irrésistible.",
        description: "Une fragrance gourmande et féminine à la signature douce.",
        top: "Fruits",
        heart: "Fleurs",
        base: "Vanille & Musc",
        badge: "BEST-SELLER"
    },

    {
        id: "F35",
        catalogue: "35",
        name: "Khamra",
        image: "khamra.jpg",
        category: "femme",
        tagline: "Chaleur et gourmandise.",
        description: "Une fragrance orientale gourmande et chaleureuse.",
        top: "Cannelle",
        heart: "Dattes & Pralin",
        base: "Vanille & Ambre",
        badge: "BEST-SELLER"
    },

    {
        id: "F36",
        catalogue: "36",
        name: "Kayali",
        image: "kayali.jpg",
        category: "femme",
        tagline: "Une collection de sensations.",
        description: "Une fragrance féminine moderne et sophistiquée.",
        top: "Fruité",
        heart: "Fleurs",
        base: "Vanille & Musc",
        badge: "PREMIUM"
    },

    {
        id: "F37",
        catalogue: "37",
        name: "Louis Vuitton",
        image: "louis-vuitton-femme.jpg",
        category: "femme",
        tagline: "Luxe et sophistication.",
        description: "Une fragrance élégante et raffinée.",
        top: "Agrumes",
        heart: "Fleurs",
        base: "Bois",
        badge: "LUXE"
    },

    {
        id: "F38",
        catalogue: "38",
        name: "Nina Ricci",
        image: "nina-ricci-2.jpg",
        category: "femme",
        tagline: "Une douceur féminine.",
        description: "Une seconde référence Nina Ricci présente dans votre catalogue.",
        top: "Fruits",
        heart: "Fleurs",
        base: "Musc & Bois"
    },

    {
        id: "F39",
        catalogue: "39",
        name: "Giorgio Armani",
        image: "giorgio-armani-femme.jpg",
        category: "femme",
        tagline: "Une sophistication italienne.",
        description: "Une fragrance féminine élégante et raffinée.",
        top: "Fruits",
        heart: "Fleurs",
        base: "Bois & Vanille",
        badge: "ICONIQUE"
    },

    {
        id: "F40",
        catalogue: "40",
        name: "Tobaco Vanille",
        image: "tobacco-vanille.jpg",
        category: "femme",
        tagline: "Opulence et chaleur.",
        description: "Une fragrance riche et chaleureuse mêlant tabac, épices et vanille.",
        top: "Tabac",
        heart: "Épices",
        base: "Vanille",
        badge: "PREMIUM"
    },

    {
        id: "F41",
        catalogue: "41",
        name: "Givenchy",
        image: "givenchy-femme.jpg",
        category: "femme",
        tagline: "Élégance française.",
        description: "Une fragrance féminine raffinée et sophistiquée.",
        top: "Fruits",
        heart: "Fleurs",
        base: "Bois & Musc"
    },

    {
        id: "F42",
        catalogue: "42",
        name: "Prada",
        image: "prada-femme.jpg",
        category: "femme",
        tagline: "Minimalisme et élégance.",
        description: "Une fragrance moderne, propre et sophistiquée.",
        top: "Agrumes",
        heart: "Fleurs",
        base: "Musc & Bois"
    },

    {
        id: "F43",
        catalogue: "43",
        name: "Zara",
        image: "zara-femme.jpg",
        category: "femme",
        tagline: "Une élégance accessible.",
        description: "Une fragrance féminine moderne et polyvalente.",
        top: "Fruité",
        heart: "Fleurs",
        base: "Musc & Bois"
    },

    {
        id: "F44",
        catalogue: "44",
        name: "Hermes Voyage",
        image: "hermes-voyage.jpg",
        category: "femme",
        tagline: "Une invitation au voyage.",
        description: "Une fragrance élégante et fraîche à la personnalité raffinée.",
        top: "Agrumes",
        heart: "Thé",
        base: "Bois & Musc",
        badge: "ICONIQUE"
    },


    /* =====================================================
       HOMME
    ===================================================== */

    {
        id: "H101",
        catalogue: "101",
        name: "Valentino Roma",
        image: "valentino-roma.jpg",
        category: "homme",
        tagline: "Une élégance contemporaine.",
        description: "Une fragrance masculine sophistiquée, élégante et chaleureuse.",
        top: "Bergamote",
        heart: "Épices",
        base: "Bois & Vanille",
        badge: "BEST-SELLER"
    },

    {
        id: "H102",
        catalogue: "102",
        name: "Ultra Male",
        image: "ultra-male.jpg",
        category: "homme",
        tagline: "Intense et magnétique.",
        description: "Une fragrance masculine puissante et gourmande.",
        top: "Poire",
        heart: "Cannelle",
        base: "Vanille & Ambre",
        badge: "BEST-SELLER"
    },

    {
        id: "H103",
        catalogue: "103",
        name: "Strong With You Intense",
        image: "strong-with-you-intense.jpg",
        category: "homme",
        tagline: "Une intensité addictive.",
        description: "Une fragrance masculine chaleureuse, sucrée et intense.",
        top: "Poivre rose",
        heart: "Cannelle",
        base: "Vanille & Ambre",
        badge: "BEST-SELLER"
    },

    {
        id: "H104",
        catalogue: "104",
        name: "Hugo Boss",
        image: "hugo-boss.jpg",
        category: "homme",
        tagline: "Une élégance masculine.",
        description: "Une fragrance masculine fraîche et élégante.",
        top: "Pomme",
        heart: "Géranium",
        base: "Bois"
    },

    {
        id: "H105",
        catalogue: "105",
        name: "Versace Eros",
        image: "versace-eros.jpg",
        category: "homme",
        tagline: "Force et séduction.",
        description: "Une fragrance masculine fraîche, intense et séduisante.",
        top: "Menthe",
        heart: "Tonka",
        base: "Vanille & Bois",
        badge: "BEST-SELLER"
    },

    {
        id: "H106",
        catalogue: "106",
        name: "Bleu Chanel",
        image: "bleu-chanel.jpg",
        category: "homme",
        tagline: "Une liberté absolue.",
        description: "Une fragrance masculine élégante, fraîche et boisée.",
        top: "Agrumes",
        heart: "Gingembre",
        base: "Bois de santal",
        badge: "ICONIQUE"
    },

    {
        id: "H107",
        catalogue: "107",
        name: "La Coste Noir",
        image: "lacoste-noir.jpg",
        category: "homme",
        tagline: "Élégance et fraîcheur.",
        description: "Une fragrance masculine fraîche et élégante.",
        top: "Fruits",
        heart: "Épices",
        base: "Bois"
    },

    {
        id: "H108",
        catalogue: "108",
        name: "Allure Sport",
        image: "allure-sport.jpg",
        category: "homme",
        tagline: "Énergie et élégance.",
        description: "Une fragrance masculine fraîche, dynamique et sportive.",
        top: "Agrumes",
        heart: "Poivre",
        base: "Tonka & Musc",
        badge: "BEST-SELLER"
    },

    {
        id: "H109",
        catalogue: "109",
        name: "Sovage",
        image: "sovage.jpg",
        category: "homme",
        tagline: "Libre. Sauvage. Magnétique.",
        description: "Une fragrance masculine fraîche et puissante.",
        top: "Bergamote",
        heart: "Poivre",
        base: "Ambroxan & Bois",
        badge: "BEST-SELLER"
    },

    {
        id: "H110",
        catalogue: "110",
        name: "Giorgio Armani",
        image: "giorgio-armani-homme.jpg",
        category: "homme",
        tagline: "L'élégance italienne.",
        description: "Une fragrance masculine raffinée et sophistiquée.",
        top: "Agrumes",
        heart: "Aromatiques",
        base: "Bois",
        badge: "ICONIQUE"
    },

    {
        id: "H111",
        catalogue: "111",
        name: "D&G",
        image: "dg-homme.jpg",
        category: "homme",
        tagline: "Une signature italienne.",
        description: "Une fragrance masculine élégante et expressive.",
        top: "Agrumes",
        heart: "Aromatiques",
        base: "Bois"
    },

    {
        id: "H112",
        catalogue: "112",
        name: "Gucci",
        image: "gucci-homme.jpg",
        category: "homme",
        tagline: "Luxe et caractère.",
        description: "Une fragrance masculine élégante et sophistiquée.",
        top: "Agrumes",
        heart: "Fleurs",
        base: "Bois & Musc",
        badge: "PREMIUM"
    },

    {
        id: "H113",
        catalogue: "113",
        name: "Chanel",
        image: "chanel-homme.jpg",
        category: "homme",
        tagline: "L'élégance absolue.",
        description: "Une fragrance masculine intemporelle et raffinée.",
        top: "Agrumes",
        heart: "Aromatiques",
        base: "Bois",
        badge: "ICONIQUE"
    },

    {
        id: "H114",
        catalogue: "114",
        name: "Givenchy",
        image: "givenchy-homme.jpg",
        category: "homme",
        tagline: "Un caractère raffiné.",
        description: "Une fragrance masculine élégante et moderne.",
        top: "Agrumes",
        heart: "Épices",
        base: "Bois"
    },

    {
        id: "H115",
        catalogue: "115",
        name: "Carolina Herrera",
        image: "carolina-herrera-homme.jpg",
        category: "homme",
        tagline: "Élégance et puissance.",
        description: "Une fragrance masculine sophistiquée et séduisante.",
        top: "Agrumes",
        heart: "Épices",
        base: "Bois",
        badge: "FAVORI"
    },

    {
        id: "H116",
        catalogue: "116",
        name: "Lacoste",
        image: "lacoste-homme.jpg",
        category: "homme",
        tagline: "Fraîcheur et élégance.",
        description: "Une fragrance masculine fraîche et sportive.",
        top: "Agrumes",
        heart: "Aromatiques",
        base: "Bois"
    },

    {
        id: "H117",
        catalogue: "117",
        name: "Azzaro",
        image: "azzaro-homme.jpg",
        category: "homme",
        tagline: "Charisme et séduction.",
        description: "Une fragrance masculine chaleureuse et élégante.",
        top: "Agrumes",
        heart: "Épices",
        base: "Bois"
    },

    {
        id: "H118",
        catalogue: "118",
        name: "Hermes",
        image: "hermes-homme.jpg",
        category: "homme",
        tagline: "Une élégance naturelle.",
        description: "Une fragrance masculine raffinée et boisée.",
        top: "Agrumes",
        heart: "Épices",
        base: "Bois",
        badge: "ICONIQUE"
    },

    {
        id: "H119",
        catalogue: "119",
        name: "Diesel",
        image: "diesel-homme.jpg",
        category: "homme",
        tagline: "Une attitude affirmée.",
        description: "Une fragrance masculine moderne et expressive.",
        top: "Fruité",
        heart: "Épices",
        base: "Bois"
    },

    {
        id: "H120",
        catalogue: "120",
        name: "Cartier",
        image: "cartier-homme.jpg",
        category: "homme",
        tagline: "Luxe et distinction.",
        description: "Une fragrance masculine élégante et sophistiquée.",
        top: "Agrumes",
        heart: "Épices",
        base: "Bois",
        badge: "PREMIUM"
    },

    {
        id: "H121",
        catalogue: "121",
        name: "Zara",
        image: "zara-homme.jpg",
        category: "homme",
        tagline: "Moderne et accessible.",
        description: "Une fragrance masculine polyvalente et moderne.",
        top: "Agrumes",
        heart: "Aromatiques",
        base: "Bois"
    },

    {
        id: "H122",
        catalogue: "122",
        name: "Thierry Mugler",
        image: "thierry-mugler.jpg",
        category: "homme",
        tagline: "Une signature puissante.",
        description: "Une fragrance masculine intense et originale.",
        top: "Agrumes",
        heart: "Café",
        base: "Bois",
        badge: "EXCLUSIF"
    },

    {
        id: "H123",
        catalogue: "123",
        name: "David Off",
        image: "davidoff.jpg",
        category: "homme",
        tagline: "Fraîcheur emblématique.",
        description: "Une fragrance masculine fraîche et aquatique.",
        top: "Agrumes",
        heart: "Aromatiques",
        base: "Bois",
        badge: "CLASSIQUE"
    },

    {
        id: "H124",
        catalogue: "124",
        name: "Prada",
        image: "prada-homme.jpg",
        category: "homme",
        tagline: "Minimalisme sophistiqué.",
        description: "Une fragrance masculine élégante et moderne.",
        top: "Agrumes",
        heart: "Aromatiques",
        base: "Ambre & Bois",
        badge: "PREMIUM"
    },

    {
        id: "H125",
        catalogue: "125",
        name: "Bvlgari",
        image: "bvlgari-homme.jpg",
        category: "homme",
        tagline: "L'élégance italienne.",
        description: "Une fragrance masculine raffinée et contemporaine.",
        top: "Agrumes",
        heart: "Thé",
        base: "Bois",
        badge: "PREMIUM"
    },

    {
        id: "H126",
        catalogue: "126",
        name: "Versace",
        image: "versace-homme.jpg",
        category: "homme",
        tagline: "Charisme méditerranéen.",
        description: "Une fragrance masculine élégante et séduisante.",
        top: "Agrumes",
        heart: "Épices",
        base: "Bois",
        badge: "ICONIQUE"
    },

    {
        id: "H127",
        catalogue: "127",
        name: "Paco Rabanne",
        image: "paco-rabanne.jpg",
        category: "homme",
        tagline: "Puissance et séduction.",
        description: "Une fragrance masculine intense et moderne.",
        top: "Agrumes",
        heart: "Épices",
        base: "Bois & Tonka",
        badge: "BEST-SELLER"
    },

    {
        id: "H128",
        catalogue: "128",
        name: "Nikos",
        image: "nikos.jpg",
        category: "homme",
        tagline: "Une signature masculine.",
        description: "Une fragrance masculine élégante et chaleureuse.",
        top: "Agrumes",
        heart: "Fleurs",
        base: "Vanille & Bois"
    },

    {
        id: "H129",
        catalogue: "129",
        name: "Carolina Herrera",
        image: "carolina-herrera-homme-2.jpg",
        category: "homme",
        tagline: "Un caractère iconique.",
        description: "Une seconde référence Carolina Herrera présente dans votre catalogue.",
        top: "Agrumes",
        heart: "Épices",
        base: "Bois",
        badge: "ICONIQUE"
    },

    {
        id: "H130",
        catalogue: "130",
        name: "Guerlain",
        image: "guerlain-homme.jpg",
        category: "homme",
        tagline: "L'art de la parfumerie.",
        description: "Une fragrance masculine raffinée et sophistiquée.",
        top: "Agrumes",
        heart: "Aromatiques",
        base: "Bois",
        badge: "PREMIUM"
    },

    {
        id: "H131",
        catalogue: "131",
        name: "Mont Blanc",
        image: "mont-blanc.jpg",
        category: "homme",
        tagline: "Fraîcheur et raffinement.",
        description: "Une fragrance masculine fraîche, élégante et polyvalente.",
        top: "Agrumes",
        heart: "Aromatiques",
        base: "Bois"
    },

    {
        id: "H132",
        catalogue: "132",
        name: "Tom Ford",
        image: "tom-ford-homme.jpg",
        category: "homme",
        tagline: "Luxe et caractère.",
        description: "Une fragrance masculine intense, sophistiquée et luxueuse.",
        top: "Épices",
        heart: "Bois",
        base: "Ambre & Oud",
        badge: "LUXE"
    },

    {
        id: "H133",
        catalogue: "133",
        name: "YSL",
        image: "ysl-homme.jpg",
        category: "homme",
        tagline: "Une élégance audacieuse.",
        description: "Une fragrance masculine moderne et sophistiquée.",
        top: "Agrumes",
        heart: "Aromatiques",
        base: "Bois",
        badge: "BEST-SELLER"
    },

    {
        id: "H134",
        catalogue: "134",
        name: "Hugo Boss",
        image: "hugo-boss-2.jpg",
        category: "homme",
        tagline: "L'assurance masculine.",
        description: "Une seconde référence Hugo Boss présente dans votre catalogue.",
        top: "Fruité",
        heart: "Aromatiques",
        base: "Bois"
    },

    {
        id: "H135",
        catalogue: "135",
        name: "Valentino",
        image: "valentino-homme.jpg",
        category: "homme",
        tagline: "Élégance italienne.",
        description: "Une fragrance masculine moderne et raffinée.",
        top: "Agrumes",
        heart: "Épices",
        base: "Bois & Vanille"
    },

    {
        id: "H136",
        catalogue: "136",
        name: "Jean Paul Gaultier",
        image: "jean-paul-gaultier.jpg",
        category: "homme",
        tagline: "Un caractère iconique.",
        description: "Une fragrance masculine sensuelle et reconnaissable.",
        top: "Lavande",
        heart: "Épices",
        base: "Vanille & Tonka",
        badge: "BEST-SELLER"
    },

    {
        id: "H137",
        catalogue: "137",
        name: "Majouri",
        image: "majouri.jpg",
        category: "homme",
        tagline: "Une signature précieuse.",
        description: "Une fragrance masculine élégante et chaleureuse.",
        top: "Épices",
        heart: "Bois",
        base: "Ambre & Musc",
        badge: "EXCLUSIF"
    },

    {
        id: "H138",
        catalogue: "138",
        name: "Parfum de Marly",
        image: "parfum-de-marly.jpg",
        category: "homme",
        tagline: "Le luxe à l'état pur.",
        description: "Une fragrance masculine luxueuse et sophistiquée.",
        top: "Agrumes",
        heart: "Épices",
        base: "Bois & Ambre",
        badge: "LUXE"
    },

    {
        id: "H139",
        catalogue: "139",
        name: "Paris Hilton",
        image: "paris-hilton.jpg",
        category: "homme",
        tagline: "Glamour et caractère.",
        description: "Une fragrance élégante et moderne.",
        top: "Fruits",
        heart: "Fleurs",
        base: "Bois & Musc"
    },

    {
        id: "H140",
        catalogue: "140",
        name: "Britney Spears",
        image: "britney-spears.jpg",
        category: "homme",
        tagline: "Une signature originale.",
        description: "Une fragrance moderne et expressive.",
        top: "Fruité",
        heart: "Fleurs",
        base: "Vanille & Musc"
    },

    {
        id: "H141",
        catalogue: "141",
        name: "Joop",
        image: "joop.jpg",
        category: "homme",
        tagline: "Intense et reconnaissable.",
        description: "Une fragrance masculine chaleureuse et expressive.",
        top: "Agrumes",
        heart: "Fleurs",
        base: "Bois & Musc",
        badge: "CLASSIQUE"
    },

    {
        id: "H142",
        catalogue: "142",
        name: "Musk Oud",
        image: "musk-oud.jpg",
        category: "homme",
        tagline: "Mystère oriental.",
        description: "Une fragrance masculine profonde mêlant musc et oud.",
        top: "Épices",
        heart: "Oud",
        base: "Musc & Ambre",
        badge: "PREMIUM"
    },

    {
        id: "H143",
        catalogue: "143",
        name: "Amber Musk",
        image: "amber-musk.jpg",
        category: "homme",
        tagline: "Chaleur et profondeur.",
        description: "Une fragrance chaleureuse construite autour de l'ambre et du musc.",
        top: "Épices",
        heart: "Ambre",
        base: "Musc & Bois",
        badge: "PREMIUM"
    },

    {
        id: "H144",
        catalogue: "144",
        name: "Modhila",
        image: "modhila.jpg",
        category: "homme",
        tagline: "Une présence qui reste.",
        description: "Une fragrance masculine chaleureuse et mystérieuse.",
        top: "Épices",
        heart: "Bois",
        base: "Ambre & Musc",
        badge: "EXCLUSIF"
    }

];


/* =========================================================
   PACKS
========================================================= */

const packs = [

    {
        id: "P03",
        catalogue: "PACK-03",
        name: "Pack 3 Parfums",
        shortName: "PACK 3",
        category: "packs",
        categoryLabel: "PACKS",
        tagline: "1 Extrait + 2 Eaux de Parfum",
        description: "Composez votre pack avec 1 Extrait de Parfum et 2 Eaux de Parfum.",
        price: 200,
        badge: "BEST-SELLER",
        packType: "pack3",
        selectionCount: 3,
        required: {
            extrait: 1,
            eau: 2
        }
    },

    {
        id: "P06",
        catalogue: "PACK-06",
        name: "Pack 6 Parfums",
        shortName: "PACK 6",
        category: "packs",
        categoryLabel: "PACKS",
        tagline: "2 Extraits + 4 Eaux de Parfum",
        description: "Composez votre pack avec 2 Extraits de Parfum et 4 Eaux de Parfum.",
        price: 400,
        badge: "MEILLEURE OFFRE",
        packType: "pack6",
        selectionCount: 6,
        required: {
            extrait: 2,
            eau: 4
        }
    }

];


/* =========================================================
   ÉTAT
========================================================= */

let currentProduct = null;
let currentPack = null;

let currentSize = 50;
let currentPrice = 70;
let quantity = 1;

let bag = [];
let favorites = [];


/* =========================================================
   DOM
========================================================= */

let productsGrid;
let productsCount;
let bagItems;
let bagTotal;
let bagCount;
let searchInput;


/* =========================================================
   INITIALISATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    productsGrid = document.querySelector("#productsGrid");
    productsCount = document.querySelector("#productsCount");
    bagItems = document.querySelector("#bagItems");
    bagTotal = document.querySelector("#bagTotal");
    bagCount = document.querySelector("#bagCount");
    searchInput = document.querySelector("#searchInput");

    createPackModal();
    createPacksFilter();

    loadStorage();

    renderProducts("all");
    updateBag();

    setupEvents();

    setTimeout(() => {
        document.body.classList.add("page-ready");
    }, 100);

});


/* =========================================================
   STORAGE
========================================================= */

function loadStorage() {

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

        console.warn("Impossible de charger le stockage.", error);

        bag = [];
        favorites = [];

    }

}


function saveStorage() {

    try {

        localStorage.setItem(
            "elixirBag",
            JSON.stringify(bag)
        );

        localStorage.setItem(
            "elixirFavorites",
            JSON.stringify(favorites)
        );

    } catch (error) {

        console.warn("Impossible de sauvegarder.", error);

    }

}


/* =========================================================
   IMAGE PARFUM
========================================================= */

function bottleHTML(product) {

    return `
        <div class="product-image-wrapper">
            <img
                src="${escapeHTML(getProductImage(product))}"
                alt="${escapeHTML(product.name)}"
                class="product-real-image"
                loading="lazy"
                onerror="this.style.display='none';"
            >
        </div>
    `;
}


/* =========================================================
   PACK PREVIEW
========================================================= */

function getPackPreviewProducts(pack) {

    const extraits = products.filter(
        p => getProductType(p) === "extrait"
    );

    const eaux = products.filter(
        p => getProductType(p) === "eau"
    );

    if (pack.packType === "pack3") {

        return [
            extraits[0],
            eaux[0],
            eaux[1]
        ].filter(Boolean);

    }

    return [
        extraits[0],
        extraits[1],
        eaux[0],
        eaux[1],
        eaux[2],
        eaux[3]
    ].filter(Boolean);

}


function packPreviewHTML(pack) {

    const preview = getPackPreviewProducts(pack);

    return `
        <div
            class="pack-preview-grid"
            style="
                width:100%;
                height:100%;
                display:grid;
                grid-template-columns:repeat(3,1fr);
                gap:6px;
                padding:12px;
                box-sizing:border-box;
            "
        >
            ${preview.slice(0, 6).map(product => `
                <div
                    style="
                        overflow:hidden;
                        border-radius:10px;
                        background:rgba(255,255,255,.05);
                    "
                >
                    <img
                        src="${escapeHTML(getProductImage(product))}"
                        alt="${escapeHTML(product.name)}"
                        style="
                            width:100%;
                            height:100%;
                            min-height:70px;
                            object-fit:cover;
                            display:block;
                        "
                        loading="lazy"
                    >
                </div>
            `).join("")}
        </div>
    `;

}


/* =========================================================
   RENDU PRODUITS
========================================================= */

function renderProducts(filter = "all", searchTerm = "") {

    if (!productsGrid) {
        console.error("productsGrid introuvable.");
        return;
    }

    const catalog = [
        ...products,
        ...packs
    ];

    let filtered = catalog;

    if (filter === "femme") {

        filtered = products.filter(
            product => product.category === "femme"
        );

    }

    else if (filter === "homme") {

        filtered = products.filter(
            product => product.category === "homme"
        );

    }

    else if (filter === "packs") {

        filtered = packs;

    }


    if (searchTerm.trim() !== "") {

        const query = searchTerm
            .toLowerCase()
            .trim();

        filtered = filtered.filter(item => {

            const text = [
                item.name,
                item.tagline,
                item.description,
                item.category,
                item.categoryLabel,
                item.catalogue,
                item.shortName
            ]
                .filter(Boolean)
                .join(" ")
                .toLowerCase();

            return text.includes(query);

        });

    }


    if (productsCount) {
        productsCount.textContent = filtered.length;
    }


    if (!filtered.length) {

        productsGrid.innerHTML = `
            <div
                style="
                    grid-column:1/-1;
                    padding:60px 20px;
                    text-align:center;
                    opacity:.7;
                "
            >
                <h3>Aucun parfum trouvé</h3>
                <p>Essayez une autre recherche.</p>
            </div>
        `;

        return;
    }


    productsGrid.innerHTML = filtered.map(item => {

        if (isPack(item)) {
            return renderPackCard(item);
        }

        return renderProductCard(item);

    }).join("");


    bindProductCards();

}


/* =========================================================
   CARTE PRODUIT
========================================================= */

function renderProductCard(product) {

    const type = getProductTypeLabel(product);

    const price = getProductPrice(product, 30);

    const isFavorite = favorites.includes(product.id);

    return `
        <article
            class="product-card"
            data-product-id="${escapeHTML(product.id)}"
        >

            <div class="product-card-image">

                ${
                    product.badge
                    ? `
                        <span class="product-badge">
                            ${escapeHTML(product.badge)}
                        </span>
                    `
                    : ""
                }

                <button
                    class="favorite-btn ${isFavorite ? "active" : ""}"
                    data-favorite="${escapeHTML(product.id)}"
                    type="button"
                    aria-label="Ajouter aux favoris"
                >
                    ${isFavorite ? "♥" : "♡"}
                </button>

                ${bottleHTML(product)}

            </div>


            <div class="product-card-content">

                <div class="product-card-category">
                    ${escapeHTML(product.category === "femme" ? "FEMME" : "HOMME")}
                    <span>•</span>
                    ${escapeHTML(type)}
                </div>

                <div class="product-reference">
                    RÉF. ${escapeHTML(product.catalogue)}
                </div>

                <h3 class="product-name">
                    ${escapeHTML(product.name)}
                </h3>

                <p class="product-tagline">
                    ${escapeHTML(product.tagline)}
                </p>

                <div class="product-card-bottom">

                    <div class="product-price">
                        À partir de
                        <strong>${price} DH</strong>
                    </div>

                    <button
                        class="product-view-btn"
                        data-open-product="${escapeHTML(product.id)}"
                        type="button"
                    >
                        Voir
                    </button>

                </div>

            </div>

        </article>
    `;

}


/* =========================================================
   CARTE PACK
========================================================= */

function renderPackCard(pack) {

    const isFavorite = favorites.includes(pack.id);

    return `
        <article
            class="product-card pack-card"
            data-product-id="${escapeHTML(pack.id)}"
        >

            <div class="product-card-image">

                <span class="product-badge">
                    ${escapeHTML(pack.badge)}
                </span>

                <button
                    class="favorite-btn ${isFavorite ? "active" : ""}"
                    data-favorite="${escapeHTML(pack.id)}"
                    type="button"
                    aria-label="Ajouter aux favoris"
                >
                    ${isFavorite ? "♥" : "♡"}
                </button>

                ${packPreviewHTML(pack)}

            </div>


            <div class="product-card-content">

                <div class="product-card-category">
                    PACKS
                    <span>•</span>
                    OFFRE
                </div>

                <div class="product-reference">
                    ${escapeHTML(pack.catalogue)}
                </div>

                <h3 class="product-name">
                    ${escapeHTML(pack.name)}
                </h3>

                <p class="product-tagline">
                    ${escapeHTML(pack.tagline)}
                </p>

                <div class="product-card-bottom">

                    <button
                        class="product-view-btn"
                        data-open-pack="${escapeHTML(pack.id)}"
                        type="button"
                    >
                        Composer
                    </button>

                </div>

            </div>

        </article>
    `;

}


/* =========================================================
   EVENTS CARTES
========================================================= */

function bindProductCards() {

    document.querySelectorAll("[data-open-product]")
        .forEach(button => {

            button.addEventListener("click", () => {

                const id = button.dataset.openProduct;

                openProduct(id);

            });

        });


    document.querySelectorAll("[data-open-pack]")
        .forEach(button => {

            button.addEventListener("click", () => {

                const id = button.dataset.openPack;

                openPack(id);

            });

        });


    document.querySelectorAll("[data-favorite]")
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

    if (index >= 0) {

        favorites.splice(index, 1);

        showToast("Retiré des favoris");

    } else {

        favorites.push(id);

        showToast("Ajouté aux favoris");

    }

    saveStorage();

    const activeFilter =
        document.querySelector(".filter-btn.active")
            ?.dataset.filter || "all";

    renderProducts(
        activeFilter,
        searchInput?.value || ""
    );

}


/* =========================================================
   MODAL PRODUIT
========================================================= */

function openProduct(id) {

    const product = products.find(
        item => item.id === id
    );

    if (!product) {
        console.error("Produit introuvable :", id);
        return;
    }

    currentProduct = product;
    currentPack = null;

    currentSize = 50;
    currentPrice = getProductPrice(
        product,
        currentSize
    );

    quantity = 1;


    const modal = document.querySelector("#productModal");

    if (!modal) {

        console.error(
            "L'élément #productModal est introuvable dans index.html"
        );

        return;

    }


    const title = modal.querySelector("#modalProductName");
    const category = modal.querySelector("#modalProductCategory");
    const description = modal.querySelector("#modalProductDescription");
    const image = modal.querySelector("#modalProductImage");
    const price = modal.querySelector("#modalProductPrice");
    const reference = modal.querySelector("#modalProductReference");


    if (title) {
        title.textContent = product.name;
    }

    if (category) {
        category.textContent = getProductTypeLabel(product);
    }

    if (description) {
        description.textContent = product.description;
    }

    if (reference) {
        reference.textContent =
            `RÉF. ${product.catalogue}`;
    }

    if (image) {

        image.src = getProductImage(product);
        image.alt = product.name;
        image.style.display = "block";

    }


    if (price) {
        price.textContent =
            `${currentPrice} DH`;
    }


    updateModalNotes(product);

    updateSizeButtons(product);

    resetQuantity();

    modal.classList.add("active");
    document.body.classList.add("modal-open");

}


/* =========================================================
   NOTES MODAL
========================================================= */

function updateModalNotes(product) {

    const top = document.querySelector("#modalTop");
    const heart = document.querySelector("#modalHeart");
    const base = document.querySelector("#modalBase");

    if (top) {
        top.textContent = product.top || "";
    }

    if (heart) {
        heart.textContent = product.heart || "";
    }

    if (base) {
        base.textContent = product.base || "";
    }

}


/* =========================================================
   BOUTONS TAILLE
========================================================= */

function updateSizeButtons(product) {

    document.querySelectorAll(".size-btn")
        .forEach(button => {

            const size = Number(
                button.dataset.size
            );

            const price = getProductPrice(
                product,
                size
            );

            const priceElement =
                button.querySelector(".size-price");

            if (priceElement) {

                priceElement.textContent =
                    `${price} DH`;

            } else {

                const priceNode =
                    button.querySelector("[data-price]");

                if (priceNode) {
                    priceNode.textContent =
                        `${price} DH`;
                }

            }

            if (size === currentSize) {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }

        });

}


/* =========================================================
   QUANTITÉ
========================================================= */

function resetQuantity() {

    quantity = 1;

    const quantityElement =
        document.querySelector("#quantity");

    if (quantityElement) {
        quantityElement.textContent = "1";
    }

}


function updateQuantityDisplay() {

    const quantityElement =
        document.querySelector("#quantity");

    if (quantityElement) {
        quantityElement.textContent =
            quantity;
    }

}


/* =========================================================
   AJOUT PRODUIT AU PANIER
========================================================= */

function addCurrentProductToBag() {

    if (!currentProduct) {
        return;
    }

    const existingIndex = bag.findIndex(item =>
        item.id === currentProduct.id &&
        !item.isPack &&
        item.size === currentSize
    );


    if (existingIndex !== -1) {

        bag[existingIndex].quantity += quantity;

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


    saveStorage();

    updateBag();

    closeProductModal();

    showToast("Parfum ajouté au panier");

}


/* =========================================================
   MODAL PACK — CRÉATION AUTOMATIQUE
========================================================= */

function createPackModal() {

    if (document.querySelector("#packModal")) {
        return;
    }


    const modal = document.createElement("div");

    modal.id = "packModal";

    modal.innerHTML = `

        <div
            class="elixir-pack-overlay"
            data-close-pack
        ></div>

        <div
            class="elixir-pack-window"
        >

            <button
                type="button"
                class="elixir-pack-close"
                data-close-pack
                aria-label="Fermer"
            >
                ×
            </button>

            <div class="elixir-pack-header">

                <div class="elixir-pack-eyebrow">
                    ÉLIXIR • PACKS
                </div>

                <h2 id="packModalTitle">
                    Composer votre pack
                </h2>

                <p id="packModalDescription"></p>

            </div>


            <div
                id="packSelectionArea"
                class="elixir-pack-selection"
            ></div>


            <div class="elixir-pack-footer">

                <div>

                    <span>
                        Total
                    </span>

                    <strong id="packModalPrice">
                        0 DH
                    </strong>

                </div>

                <button
                    type="button"
                    id="addPackToBag"
                    class="elixir-pack-add"
                >
                    Ajouter au panier
                </button>

            </div>

        </div>
    `;


    document.body.appendChild(modal);


    modal.querySelectorAll("[data-close-pack]")
        .forEach(element => {

            element.addEventListener(
                "click",
                closePackModal
            );

        });


    const addButton =
        modal.querySelector("#addPackToBag");

    if (addButton) {

        addButton.addEventListener(
            "click",
            addSelectedPackToBag
        );

    }


    injectPackModalStyles();

}


/* =========================================================
   CSS MODAL PACK — INLINE
========================================================= */

function injectPackModalStyles() {

    if (document.querySelector("#elixirPackStyles")) {
        return;
    }


    const style = document.createElement("style");

    style.id = "elixirPackStyles";

    style.textContent = `

        #packModal {
            position:fixed;
            inset:0;
            z-index:99999;
            display:none;
            align-items:center;
            justify-content:center;
            padding:20px;
            box-sizing:border-box;
        }

        #packModal.active {
            display:flex;
        }

        .elixir-pack-overlay {
            position:absolute;
            inset:0;
            background:rgba(0,0,0,.78);
            backdrop-filter:blur(10px);
        }

        .elixir-pack-window {
            position:relative;
            width:min(850px,100%);
            max-height:90vh;
            overflow:auto;
            background:#111;
            color:#fff;
            border:1px solid rgba(255,255,255,.12);
            border-radius:24px;
            padding:28px;
            box-sizing:border-box;
            box-shadow:0 30px 100px rgba(0,0,0,.55);
        }

        .elixir-pack-close {
            position:absolute;
            top:15px;
            right:18px;
            width:42px;
            height:42px;
            border:1px solid rgba(255,255,255,.15);
            border-radius:50%;
            background:rgba(255,255,255,.05);
            color:#fff;
            font-size:26px;
            cursor:pointer;
        }

        .elixir-pack-eyebrow {
            font-size:11px;
            letter-spacing:3px;
            opacity:.6;
            margin-bottom:8px;
        }

        .elixir-pack-header h2 {
            margin:0 50px 8px 0;
            font-size:30px;
        }

        .elixir-pack-header p {
            margin:0;
            opacity:.7;
            line-height:1.6;
        }

        .elixir-pack-selection {
            margin-top:25px;
            display:grid;
            gap:22px;
        }

        .pack-selection-section {
            border:1px solid rgba(255,255,255,.1);
            border-radius:18px;
            padding:18px;
            background:rgba(255,255,255,.025);
        }

        .pack-selection-title {
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap:15px;
            margin-bottom:14px;
        }

        .pack-selection-title strong {
            font-size:15px;
        }

        .pack-selection-title span {
            font-size:12px;
            opacity:.6;
        }

        .pack-select-row {
            display:grid;
            grid-template-columns:1fr;
            gap:8px;
            margin-top:10px;
        }

        .pack-select-row label {
            font-size:11px;
            letter-spacing:1px;
            opacity:.65;
        }

        .pack-select-row select {
            width:100%;
            min-height:48px;
            padding:12px 14px;
            border-radius:12px;
            border:1px solid rgba(255,255,255,.14);
            background:#181818;
            color:#fff;
            outline:none;
            cursor:pointer;
        }

        .elixir-pack-footer {
            position:sticky;
            bottom:-28px;
            margin:25px -28px -28px;
            padding:18px 28px;
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap:20px;
            background:rgba(17,17,17,.95);
            backdrop-filter:blur(15px);
            border-top:1px solid rgba(255,255,255,.1);
        }

        .elixir-pack-footer div {
            display:flex;
            flex-direction:column;
            gap:4px;
        }

        .elixir-pack-footer span {
            font-size:11px;
            opacity:.55;
            text-transform:uppercase;
            letter-spacing:1px;
        }

        .elixir-pack-footer strong {
            font-size:25px;
        }

        .elixir-pack-add {
            min-height:50px;
            padding:0 24px;
            border:0;
            border-radius:12px;
            background:#fff;
            color:#111;
            font-weight:700;
            cursor:pointer;
        }

        .elixir-pack-add:hover {
            transform:translateY(-1px);
        }

        @media(max-width:600px) {

            #packModal {
                padding:10px;
            }

            .elixir-pack-window {
                max-height:94vh;
                border-radius:18px;
                padding:20px;
            }

            .elixir-pack-footer {
                margin:20px -20px -20px;
                padding:15px 20px;
                flex-direction:column;
                align-items:stretch;
            }

            .elixir-pack-add {
                width:100%;
            }

            .elixir-pack-header h2 {
                font-size:24px;
            }

        }

    `;

    document.head.appendChild(style);

}


/* =========================================================
   OUVRIR PACK
========================================================= */

function openPack(packId) {

    const pack = packs.find(
        p => p.id === packId
    );

    if (!pack) {
        return;
    }

    currentPack = pack;

    const modal =
        document.querySelector("#packModal");

    const title =
        document.querySelector("#packModalTitle");

    const description =
        document.querySelector("#packModalDescription");

    const price =
        document.querySelector("#packModalPrice");

    const area =
        document.querySelector("#packSelectionArea");


    if (!modal || !area) {
        return;
    }


    if (title) {
        title.textContent = pack.name;
    }

    if (description) {
        description.textContent =
            pack.description;
    }

    if (price) {
        price.textContent =
            `${pack.price} DH`;
    }


    const extraitProducts =
        products.filter(
            p => getProductType(p) === "extrait"
        );

    const eauProducts =
        products.filter(
            p => getProductType(p) === "eau"
        );


    const extraitCount =
        pack.required.extrait;

    const eauCount =
        pack.required.eau;


    let html = "";


    if (extraitCount > 0) {

        html += `
            <section class="pack-selection-section">

                <div class="pack-selection-title">

                    <strong>
                        Extraits de Parfum
                    </strong>

                    <span>
                        ${extraitCount} sélection
                        ${extraitCount > 1 ? "s" : ""}
                    </span>

                </div>

                ${Array.from(
                    { length: extraitCount },
                    (_, index) => `
                        <div class="pack-select-row">

                            <label>
                                EXTRAIT ${index + 1}
                            </label>

                            <select
                                class="pack-perfume-select"
                                data-type="extrait"
                                data-index="${index}"
                            >

                                <option value="">
                                    Choisissez votre extrait
                                </option>

                                ${extraitProducts.map(product => `
                                    <option value="${escapeHTML(product.id)}">
                                        ${escapeHTML(product.name)}
                                    </option>
                                `).join("")}

                            </select>

                        </div>
                    `
                ).join("")}

            </section>
        `;

    }


    if (eauCount > 0) {

        html += `
            <section class="pack-selection-section">

                <div class="pack-selection-title">

                    <strong>
                        Eaux de Parfum
                    </strong>

                    <span>
                        ${eauCount} sélections
                    </span>

                </div>

                ${Array.from(
                    { length: eauCount },
                    (_, index) => `
                        <div class="pack-select-row">

                            <label>
                                EAU DE PARFUM ${index + 1}
                            </label>

                            <select
                                class="pack-perfume-select"
                                data-type="eau"
                                data-index="${index}"
                            >

                                <option value="">
                                    Choisissez votre parfum
                                </option>

                                ${eauProducts.map(product => `
                                    <option value="${escapeHTML(product.id)}">
                                        ${escapeHTML(product.name)}
                                    </option>
                                `).join("")}

                            </select>

                        </div>
                    `
                ).join("")}

            </section>
        `;

    }


    area.innerHTML = html;


    area.querySelectorAll(".pack-perfume-select")
        .forEach(select => {

            select.addEventListener(
                "change",
                validatePackSelections
            );

        });


    modal.classList.add("active");

    document.body.classList.add("modal-open");

}


/* =========================================================
   VALIDATION PACK
========================================================= */

function getSelectedPackProducts() {

    if (!currentPack) {
        return [];
    }

    const selects =
        document.querySelectorAll(
            ".pack-perfume-select"
        );

    const selected = [];

    selects.forEach(select => {

        if (!select.value) {
            return;
        }

        const product =
            products.find(
                p => p.id === select.value
            );

        if (product) {
            selected.push(product);
        }

    });

    return selected;

}


function validatePackSelections() {

    const selects =
        Array.from(
            document.querySelectorAll(
                ".pack-perfume-select"
            )
        );


    const values =
        selects
            .map(select => select.value)
            .filter(Boolean);


    selects.forEach(select => {

        Array.from(select.options)
            .forEach(option => {

                if (!option.value) {
                    return;
                }

                const usedElsewhere =
                    values.includes(option.value) &&
                    option.value !== select.value;

                option.disabled =
                    usedElsewhere;

            });

    });


    const selected =
        getSelectedPackProducts();


    const addButton =
        document.querySelector("#addPackToBag");


    const requiredCount =
        currentPack?.selectionCount || 0;


    const valid =
        selected.length === requiredCount;


    if (addButton) {

        addButton.disabled = !valid;

        addButton.style.opacity =
            valid ? "1" : ".45";

        addButton.style.cursor =
            valid ? "pointer" : "not-allowed";

    }

}


/* =========================================================
   AJOUT PACK
========================================================= */

function addSelectedPackToBag() {

    if (!currentPack) {
        return;
    }


    const selected =
        getSelectedPackProducts();


    if (
        selected.length !==
        currentPack.selectionCount
    ) {

        showToast(
            "Veuillez sélectionner tous les parfums."
        );

        return;
    }


    const selectedPerfumes =
        selected.map(product => ({
            id: product.id,
            name: product.name,
            type: getProductTypeLabel(product)
        }));


    bag.push({

        id: currentPack.id,

        name: currentPack.name,

        size: null,

        price: currentPack.price,

        quantity: 1,

        isPack: true,

        selectedPerfumes

    });


    saveStorage();

    updateBag();

    closePackModal();

    showToast(
        `${currentPack.name} ajouté au panier`
    );

}


/* =========================================================
   FERMER PACK
========================================================= */

function closePackModal() {

    const modal =
        document.querySelector("#packModal");

    if (modal) {
        modal.classList.remove("active");
    }

    document.body.classList.remove("modal-open");

    currentPack = null;

}


/* =========================================================
   FERMER PRODUIT
========================================================= */

function closeProductModal() {

    const modal =
        document.querySelector("#productModal");

    if (modal) {
        modal.classList.remove("active");
    }

    document.body.classList.remove("modal-open");

    currentProduct = null;

}


/* =========================================================
   PANIER
========================================================= */

function updateBag() {

    if (!bagItems) {
        return;
    }


    if (!bag.length) {

        bagItems.innerHTML = `
            <div
                class="empty-bag"
                style="
                    padding:40px 15px;
                    text-align:center;
                    opacity:.65;
                "
            >
                <div style="font-size:40px;margin-bottom:12px;">
                    🛍
                </div>

                <strong>
                    Votre panier est vide
                </strong>

                <p>
                    Découvrez notre collection.
                </p>
            </div>
        `;

    } else {

        bagItems.innerHTML =
            bag.map(
                (item, index) =>
                    renderBagItem(item, index)
            ).join("");

    }


    const total =
        bag.reduce(
            (sum, item) =>
                sum + (
                    Number(item.price) *
                    Number(item.quantity)
                ),
            0
        );


    const count =
        bag.reduce(
            (sum, item) =>
                sum + Number(item.quantity),
            0
        );


    if (bagTotal) {
        bagTotal.textContent =
            `${total} DH`;
    }

    if (bagCount) {
        bagCount.textContent =
            count;
    }


    bindBagEvents();

}


function renderBagItem(item, index) {

    const catalogItem =
        getCatalogItem(item.id);


    let image = "";

    if (catalogItem && !isPack(item)) {

        image =
            getProductImage(catalogItem);

    } else if (catalogItem && isPack(item)) {

        const preview =
            getPackPreviewProducts(catalogItem);

        image =
            preview[0]
                ? getProductImage(preview[0])
                : "";

    }


    let details = "";


    if (isPack(item)) {

        details = `
            <div
                style="
                    margin-top:5px;
                    font-size:11px;
                    line-height:1.5;
                    opacity:.65;
                "
            >
                ${item.selectedPerfumes
                    ? item.selectedPerfumes
                        .map(p =>
                            `• ${escapeHTML(p.name)}`
                        )
                        .join("<br>")
                    : ""
                }
            </div>
        `;

    } else {

        details = `
            <div class="bag-item-meta">
                ${escapeHTML(
                    getProductTypeLabel(catalogItem)
                )}
                •
                ${item.size} ml
            </div>
        `;

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
                            src="${escapeHTML(image)}"
                            alt="${escapeHTML(item.name)}"
                        >
                    `
                    : ""
                }

            </div>


            <div
                class="bag-item-info"
                style="flex:1;min-width:0;"
            >

                <strong>
                    ${escapeHTML(item.name)}
                </strong>

                ${details}

                <div
                    style="
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                        margin-top:8px;
                        gap:8px;
                    "
                >

                    <div
                        style="
                            display:flex;
                            align-items:center;
                            gap:7px;
                        "
                    >

                        <button
                            type="button"
                            class="bag-qty-minus"
                            data-bag-minus="${index}"
                        >
                            −
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            type="button"
                            class="bag-qty-plus"
                            data-bag-plus="${index}"
                        >
                            +
                        </button>

                    </div>

                    <strong>
                        ${item.price * item.quantity} DH
                    </strong>

                </div>

            </div>


            <button
                type="button"
                class="bag-remove"
                data-bag-remove="${index}"
                aria-label="Supprimer"
            >
                ×
            </button>

        </div>
    `;

}


/* =========================================================
   EVENTS PANIER
========================================================= */

function bindBagEvents() {

    document.querySelectorAll("[data-bag-minus]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            button.dataset.bagMinus
                        );

                    if (!bag[index]) {
                        return;
                    }

                    bag[index].quantity--;

                    if (bag[index].quantity <= 0) {
                        bag.splice(index, 1);
                    }

                    saveStorage();

                    updateBag();

                }
            );

        });


    document.querySelectorAll("[data-bag-plus]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            button.dataset.bagPlus
                        );

                    if (!bag[index]) {
                        return;
                    }

                    if (bag[index].quantity < 10) {
                        bag[index].quantity++;
                    }

                    saveStorage();

                    updateBag();

                }
            );

        });


    document.querySelectorAll("[data-bag-remove]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            button.dataset.bagRemove
                        );

                    bag.splice(index, 1);

                    saveStorage();

                    updateBag();

                    showToast(
                        "Article supprimé"
                    );

                }
            );

        });

}


/* =========================================================
   FILTRE PACKS
========================================================= */

function createPacksFilter() {

    const filterContainer =
        document.querySelector(
            ".filters"
        ) ||
        document.querySelector(
            ".filter-buttons"
        ) ||
        document.querySelector(
            "[data-filters]"
        );


    if (!filterContainer) {
        return;
    }


    if (
        filterContainer.querySelector(
            '[data-filter="packs"]'
        )
    ) {
        return;
    }


    const button =
        document.createElement("button");

    button.type = "button";

    button.className = "filter-btn";

    button.dataset.filter = "packs";

    button.textContent = "PACKS";


    filterContainer.appendChild(button);

}


/* =========================================================
   SETUP EVENTS
========================================================= */

function setupEvents() {


    /* -----------------------------------------------
       FILTRES
    ----------------------------------------------- */

    document.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    ".filter-btn"
                );

            if (!button) {
                return;
            }


            const filter =
                button.dataset.filter ||
                "all";


            document.querySelectorAll(
                ".filter-btn"
            ).forEach(btn => {

                btn.classList.remove(
                    "active"
                );

            });


            button.classList.add("active");


            renderProducts(
                filter,
                searchInput?.value || ""
            );

        }
    );


    /* -----------------------------------------------
       TAILLES
    ----------------------------------------------- */

    document.querySelectorAll(
        ".size-btn"
    ).forEach(button => {

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


                currentPrice =
                    getProductPrice(
                        currentProduct,
                        currentSize
                    );


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


                const price =
                    document.querySelector(
                        "#modalProductPrice"
                    );


                if (price) {

                    price.textContent =
                        `${currentPrice} DH`;

                }

            }
        );

    });


    /* -----------------------------------------------
       AJOUT PRODUIT
    ----------------------------------------------- */

    const modalAdd =
        document.querySelector(
            "#modalAdd"
        ) ||
        document.querySelector(
            "[data-modal-add]"
        );


    if (modalAdd) {

        modalAdd.addEventListener(
            "click",
            addCurrentProductToBag
        );

    }


    /* -----------------------------------------------
       QUANTITÉ -
    ----------------------------------------------- */

    const quantityMinus =
        document.querySelector(
            "#quantityMinus"
        ) ||
        document.querySelector(
            "[data-quantity-minus]"
        );


    if (quantityMinus) {

        quantityMinus.addEventListener(
            "click",
            () => {

                if (quantity > 1) {
                    quantity--;
                }

                updateQuantityDisplay();

            }
        );

    }


    /* -----------------------------------------------
       QUANTITÉ +
    ----------------------------------------------- */

    const quantityPlus =
        document.querySelector(
            "#quantityPlus"
        ) ||
        document.querySelector(
            "[data-quantity-plus]"
        );


    if (quantityPlus) {

        quantityPlus.addEventListener(
            "click",
            () => {

                if (quantity < 10) {
                    quantity++;
                }

                updateQuantityDisplay();

            }
        );

    }


    /* -----------------------------------------------
       FERMETURE MODAL PRODUIT
    ----------------------------------------------- */

    document.querySelectorAll(
        "[data-close-modal]"
    ).forEach(button => {

        button.addEventListener(
            "click",
            closeProductModal
        );

    });


    const productModal =
        document.querySelector(
            "#productModal"
        );


    if (productModal) {

        productModal.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    productModal
                ) {
                    closeProductModal();
                }

            }
        );

    }


    /* -----------------------------------------------
       RECHERCHE
    ----------------------------------------------- */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            () => {

                const activeFilter =
                    document.querySelector(
                        ".filter-btn.active"
                    )?.dataset.filter ||
                    "all";


                renderProducts(
                    activeFilter,
                    searchInput.value
                );

            }
        );

    }


    /* -----------------------------------------------
       BOUTON PANIER
    ----------------------------------------------- */

    const bagButton =
        document.querySelector(
            "#bagButton"
        ) ||
        document.querySelector(
            "[data-open-bag]"
        );


    if (bagButton) {

        bagButton.addEventListener(
            "click",
            openBag
        );

    }


    /* -----------------------------------------------
       FERMER PANIER
    ----------------------------------------------- */

    const bagClose =
        document.querySelector(
            "#bagClose"
        ) ||
        document.querySelector(
            "[data-close-bag]"
        );


    if (bagClose) {

        bagClose.addEventListener(
            "click",
            closeBag
        );

    }


    /* -----------------------------------------------
       OVERLAY PANIER
    ----------------------------------------------- */

    const bagOverlay =
        document.querySelector(
            "#bagOverlay"
        );


    if (bagOverlay) {

        bagOverlay.addEventListener(
            "click",
            closeBag
        );

    }


    /* -----------------------------------------------
       WHATSAPP
    ----------------------------------------------- */

    const whatsappButtons =
        document.querySelectorAll(
            "[data-whatsapp-order]"
        );


    whatsappButtons.forEach(button => {

        button.addEventListener(
            "click",
            sendWhatsAppOrder
        );

    });


    const bagOrder =
        document.querySelector(
            "#bagOrder"
        );


    if (bagOrder) {

        bagOrder.addEventListener(
            "click",
            sendWhatsAppOrder
        );

    }


    /* -----------------------------------------------
       ESC
    ----------------------------------------------- */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key !== "Escape") {
                return;
            }

            closeProductModal();
            closePackModal();
            closeBag();

        }
    );

}


/* =========================================================
   PANIER OUVERTURE
========================================================= */

function openBag() {

    const drawer =
        document.querySelector(
            "#bagDrawer"
        );


    const overlay =
        document.querySelector(
            "#bagOverlay"
        );


    if (drawer) {
        drawer.classList.add("active");
    }

    if (overlay) {
        overlay.classList.add("active");
    }

    document.body.classList.add("bag-open");

}


/* =========================================================
   PANIER FERMETURE
========================================================= */

function closeBag() {

    const drawer =
        document.querySelector(
            "#bagDrawer"
        );


    const overlay =
        document.querySelector(
            "#bagOverlay"
        );


    if (drawer) {
        drawer.classList.remove("active");
    }

    if (overlay) {
        overlay.classList.remove("active");
    }

    document.body.classList.remove(
        "bag-open"
    );

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
        "Bonjour ÉLIXIR 👋\n\n" +
        "Je souhaite commander :\n\n";


    let total = 0;


    bag.forEach((item, index) => {

        const itemTotal =
            Number(item.price) *
            Number(item.quantity);


        total += itemTotal;


        message +=
            `${index + 1}. ${item.name}\n`;


        if (isPack(item)) {

            message +=
                `   Offre : ${item.price} DH\n`;


            if (
                item.selectedPerfumes &&
                item.selectedPerfumes.length
            ) {

                message +=
                    `   Parfums sélectionnés :\n`;

                item.selectedPerfumes
                    .forEach(perfume => {

                        message +=
                            `   - ${perfume.name} (${perfume.type})\n`;

                    });

            }

        } else {

            const product =
                getCatalogItem(item.id);


            message +=
                `   Réf. ${product?.catalogue || item.id}\n`;

            message +=
                `   Type : ${getProductTypeLabel(product)}\n`;

            message +=
                `   Format : ${item.size} ml\n`;

            message +=
                `   Prix unitaire : ${item.price} DH\n`;

        }


        message +=
            `   Quantité : ${item.quantity}\n`;

        message +=
            `   Sous-total : ${itemTotal} DH\n\n`;

    });


    message +=
        `TOTAL : ${total} DH\n\n`;


    message +=
        "Merci de me confirmer la disponibilité et la livraison. 😊";


    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=` +
        encodeURIComponent(message);


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

    let toast =
        document.querySelector(
            "#elixirToast"
        );


    if (!toast) {

        toast =
            document.createElement(
                "div"
            );

        toast.id =
            "elixirToast";


        toast.style.position =
            "fixed";

        toast.style.left =
            "50%";

        toast.style.bottom =
            "25px";

        toast.style.transform =
            "translateX(-50%) translateY(20px)";

        toast.style.zIndex =
            "100000";

        toast.style.padding =
            "13px 20px";

        toast.style.borderRadius =
            "999px";

        toast.style.background =
            "#111";

        toast.style.color =
            "#fff";

        toast.style.border =
            "1px solid rgba(255,255,255,.15)";

        toast.style.boxShadow =
            "0 15px 40px rgba(0,0,0,.3)";

        toast.style.opacity =
            "0";

        toast.style.transition =
            "all .3s ease";

        toast.style.pointerEvents =
            "none";


        document.body.appendChild(
            toast
        );

    }


    toast.textContent =
        message;


    requestAnimationFrame(() => {

        toast.style.opacity =
            "1";

        toast.style.transform =
            "translateX(-50%) translateY(0)";

    });


    clearTimeout(
        toast._timer
    );


    toast._timer =
        setTimeout(() => {

            toast.style.opacity =
                "0";

            toast.style.transform =
                "translateX(-50%) translateY(20px)";

        }, 2200);

}


/* =========================================================
   MOBILE MENU
========================================================= */

function setupMobileMenu() {

    const menuButton =
        document.querySelector(
            "#menuToggle"
        ) ||
        document.querySelector(
            ".menu-toggle"
        ) ||
        document.querySelector(
            "[data-menu-toggle]"
        );


    const mobileMenu =
        document.querySelector(
            "#mobileMenu"
        ) ||
        document.querySelector(
            ".mobile-menu"
        );


    if (!menuButton || !mobileMenu) {
        return;
    }


    menuButton.addEventListener(
        "click",
        () => {

            mobileMenu.classList.toggle(
                "active"
            );

            menuButton.classList.toggle(
                "active"
            );

        }
    );

}


document.addEventListener(
    "DOMContentLoaded",
    setupMobileMenu
);


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.addEventListener(
    "click",
    event => {

        const link =
            event.target.closest(
                'a[href^="#"]'
            );


        if (!link) {
            return;
        }


        const targetId =
            link.getAttribute("href");


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


/* =========================================================
   NAVBAR AU SCROLL
========================================================= */

window.addEventListener(
    "scroll",
    () => {

        const navbar =
            document.querySelector(
                ".navbar"
            ) ||
            document.querySelector(
                "nav"
            );


        if (!navbar) {
            return;
        }


        if (window.scrollY > 30) {

            navbar.classList.add(
                "scrolled"
            );

        } else {

            navbar.classList.remove(
                "scrolled"
            );

        }

    },
    { passive: true }
);


/* =========================================================
   REVEAL ANIMATION
========================================================= */

function setupRevealObserver() {

    const elements =
        document.querySelectorAll(
            ".reveal, .reveal-up, .fade-up"
        );


    if (!elements.length) {
        return;
    }


    if (!("IntersectionObserver" in window)) {

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
                threshold: .1
            }
        );


    elements.forEach(
        element =>
            observer.observe(element)
    );

}


document.addEventListener(
    "DOMContentLoaded",
    setupRevealObserver
);


/* =========================================================
   PARTICULES / CURSEUR — OPTIONNEL
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const cursor =
            document.querySelector(
                ".custom-cursor"
            );


        if (!cursor) {
            return;
        }


        document.addEventListener(
            "mousemove",
            event => {

                cursor.style.left =
                    `${event.clientX}px`;

                cursor.style.top =
                    `${event.clientY}px`;

            }
        );

    }
);


/* =========================================================
   EMPÊCHER DRAG IMAGES
========================================================= */

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


/* =========================================================
   DEBUG
========================================================= */

console.log(
    `ÉLIXIR chargé : ${products.length} parfums + ${packs.length} packs`
);
