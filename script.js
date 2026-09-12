/* =====================================================
   ÉLIXIR — MAISON DE PARFUMS
   SCRIPT.JS
===================================================== */


/* =====================================================
   CONFIGURATION
===================================================== */

/*
   IMPORTANT :

   Remplace ce numéro par le vrai WhatsApp du parfumeur.

   Maroc :
   06 XX XX XX XX

   devient :

   2126XXXXXXXX

   Exemple :

   0612345678

   devient :

   212612345678
*/

const WHATSAPP_NUMBER = "212600000000";


/* =====================================================
   PRODUCTS
===================================================== */

const products = [

    {
        id: 1,

        name: "Noir Élégance",

        shortName: "NOIR",

        category: "homme",

        categoryLabel: "HOMME",

        tagline: "L'obscurité devient lumière.",

        description:
            "Une fragrance intense et sophistiquée où la fraîcheur de la bergamote rencontre un cœur élégant d'iris avant de s'envelopper dans la profondeur du bois de oud et de l'ambre.",

        top: "Bergamote",

        heart: "Iris & Épices",

        base: "Oud & Ambre",

        price30: 490,

        price50: 640,

        price100: 790,

        badge: "BEST-SELLER",

        color: "dark"

    },


    {
        id: 2,

        name: "Rose Impériale",

        shortName: "ROSE",

        category: "femme",

        categoryLabel: "FEMME",

        tagline: "Une féminité qui ne s'excuse pas.",

        description:
            "Une composition florale raffinée autour d'une rose velours, illuminée par des notes de poire et de safran puis prolongée par un fond sensuel de musc blanc et de vanille.",

        top: "Poire & Safran",

        heart: "Rose de Mai",

        base: "Vanille & Musc",

        price30: 490,

        price50: 650,

        price100: 820,

        badge: "ICONIQUE",

        color: "rose"

    },


    {
        id: 3,

        name: "Ambre Royal",

        shortName: "AMBRE",

        category: "unisexe",

        categoryLabel: "UNISEXE",

        tagline: "Chaleur. Mystère. Présence.",

        description:
            "Un parfum enveloppant construit autour d'un ambre précieux, de bois crémeux et d'une touche de safran. Une signature chaleureuse qui évolue magnifiquement sur la peau.",

        top: "Safran",

        heart: "Ambre",

        base: "Bois de Santal",

        price30: 520,

        price50: 690,

        price100: 850,

        badge: "EXCLUSIF",

        color: "amber"

    },


    {
        id: 4,

        name: "Velours Blanc",

        shortName: "VELVOURS",

        category: "femme",

        categoryLabel: "FEMME",

        tagline: "La douceur avec du caractère.",

        description:
            "Une fragrance lumineuse et délicate mêlant fleurs blanches, musc propre et vanille douce pour créer un sillage élégant, moderne et incroyablement féminin.",

        top: "Fleur d'Oranger",

        heart: "Jasmin",

        base: "Musc & Vanille",

        price30: 450,

        price50: 610,

        price100: 780,

        badge: "NOUVEAU",

        color: "white"

    },


    {
        id: 5,

        name: "Oud Majesté",

        shortName: "OUD",

        category: "homme",

        categoryLabel: "HOMME",

        tagline: "La puissance dans le silence.",

        description:
            "Un oud profond et précieux accompagné de cuir, de bois fumés et d'épices chaudes. Une fragrance imposante destinée à ceux qui aiment laisser une véritable empreinte.",

        top: "Poivre Noir",

        heart: "Cuir",

        base: "Oud Royal",

        price30: 550,

        price50: 720,

        price100: 890,

        badge: "PREMIUM",

        color: "oud"

    },


    {
        id: 6,

        name: "Santal Mystique",

        shortName: "SANTAL",

        category: "unisexe",

        categoryLabel: "UNISEXE",

        tagline: "Une aura qui reste.",

        description:
            "Une interprétation contemporaine du santal, mêlant crème de bois, cardamome, figue et musc. Une fragrance douce, mystérieuse et parfaitement équilibrée.",

        top: "Cardamome",

        heart: "Figue",

        base: "Santal & Musc",

        price30: 500,

        price50: 670,

        price100: 830,

        badge: "",

        color: "sandal"

    }

];


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

        loader.classList.add("hidden");

        document.body.classList.remove(
            "modal-open"
        );

    }, 1800);

});


/* =====================================================
   PARTICLES
===================================================== */

function createParticles() {

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


    document.querySelectorAll(
        "a, button, .product-card"
    ).forEach((element) => {

        element.addEventListener(
            "mouseenter",
            () => {
                follower.style.width = "55px";
                follower.style.height = "55px";
            }
        );

        element.addEventListener(
            "mouseleave",
            () => {
                follower.style.width = "32px";
                follower.style.height = "32px";
            }
        );

    });

}


/* =====================================================
   PRODUCT BOTTLE HTML
===================================================== */

function bottleHTML(product) {

    return `

        <div class="product-bottle">

            <div class="product-cap"></div>

            <div class="product-neck"></div>

            <div class="product-body">

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

    const filtered =
        filter === "all"
            ? products
            : products.filter(
                product =>
                    product.category === filter
            );

    productCount.textContent =
        String(filtered.length).padStart(2, "0");

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

            }, index * 100);

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
                    Number(card.dataset.id);

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
                    Number(
                        button.dataset.favorite
                    );

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

    modalTitle.textContent =
        currentProduct.name;

    modalCategory.textContent =
        currentProduct.categoryLabel;

    modalTagline.textContent =
        currentProduct.tagline;

    modalDescription.textContent =
        currentProduct.description;

    modalTop.textContent =
        currentProduct.top;

    modalHeart.textContent =
        currentProduct.heart;

    modalBase.textContent =
        currentProduct.base;

    modalPrice.textContent =
        currentPrice + " DH";

    modalBottleName.textContent =
        currentProduct.shortName;

    quantityValue.textContent =
        quantity;


    document.querySelectorAll(
        ".size-btn"
    ).forEach(button => {

        button.classList.toggle(
            "active",
            Number(button.dataset.size)
            === 50
        );

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

        button.querySelector("strong")
            .textContent =
                price + " DH";

    });


    updateModalFavorite();

    modal.classList.add("open");

    document.body.classList.add(
        "modal-open"
    );

}


/* =====================================================
   CLOSE PRODUCT
===================================================== */

function closeProduct() {

    modal.classList.remove("open");

    document.body.classList.remove(
        "modal-open"
    );

}

modalClose.addEventListener(
    "click",
    closeProduct
);

modalOverlay.addEventListener(
    "click",
    closeProduct
);

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

            modalPrice.textContent =
                currentPrice + " DH";

        }
    );

});


/* =====================================================
   QUANTITY
===================================================== */

document.getElementById(
    "minusQty"
).addEventListener(
    "click",
    () => {

        if (quantity > 1) {

            quantity--;

            quantityValue.textContent =
                quantity;

        }

    }
);


document.getElementById(
    "plusQty"
).addEventListener(
    "click",
    () => {

        if (quantity < 10) {

            quantity++;

            quantityValue.textContent =
                quantity;

        }

    }
);


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

    if (!currentProduct) return;

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

    favoritesCount.textContent =
        favorites.length;

    const totalQuantity =
        bag.reduce(
            (sum, item) =>
                sum + item.quantity,
            0
        );

    bagCount.textContent =
        totalQuantity;

}


/* =====================================================
   ADD TO BAG
===================================================== */

document.getElementById(
    "modalAdd"
).addEventListener(
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


/* =====================================================
   UPDATE BAG
===================================================== */

function updateBag() {

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

        document.getElementById(
            "emptyBagBtn"
        ).addEventListener(
            "click",
            () => {

                closeBag();

                document.getElementById(
                    "collection"
                ).scrollIntoView({
                    behavior: "smooth"
                });

            }
        );

    } else {

        bagItems.innerHTML = "";

        bag.forEach(
            (item, index) => {

                const product =
                    products.find(
                        p => p.id === item.id
                    );

                const itemElement =
                    document.createElement(
                        "div"
                    );

                itemElement.className =
                    "bag-item";

                itemElement.innerHTML = `

                    <div class="bag-mini-bottle">

                        <div class="mini-body"></div>

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

    bagTotal.textContent =
        total + " DH";

}


/* =====================================================
   OPEN BAG
===================================================== */

function openBag() {

    updateBag();

    bagDrawer.classList.add("open");

    drawerOverlay.classList.add("open");

    document.body.classList.add(
        "drawer-open"
    );

}

function closeBag() {

    bagDrawer.classList.remove(
        "open"
    );

    drawerOverlay.classList.remove(
        "open"
    );

    document.body.classList.remove(
        "drawer-open"
    );

}


document.getElementById(
    "bagBtn"
).addEventListener(
    "click",
    openBag
);

document.getElementById(
    "drawerClose"
).addEventListener(
    "click",
    closeBag
);

drawerOverlay.addEventListener(
    "click",
    closeBag
);


/* =====================================================
   WHATSAPP ORDER
===================================================== */

function sendWhatsAppOrder() {

    if (!WHATSAPP_NUMBER) return;

    let message =
        "Bonjour ÉLIXIR 👋%0A%0A";

    message +=
        "Je souhaite commander :%0A%0A";


    if (
        currentProduct &&
        modal.classList.contains("open")
    ) {

        message +=
            `• ${currentProduct.name}%0A`;

        message +=
            `Format : ${currentSize} ML%0A`;

        message +=
            `Quantité : ${quantity}%0A`;

        message +=
            `Prix : ${currentPrice * quantity} DH%0A%0A`;

    } else {

        if (bag.length === 0) {

            message +=
                "Je souhaite avoir plus d'informations sur vos parfums.";

        } else {

            bag.forEach(item => {

                message +=
                    `• ${item.name} — ${item.size} ML × ${item.quantity} — ${item.price * item.quantity} DH%0A`;

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
                `%0ATotal estimé : ${total} DH`;

        }

    }


    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    window.open(
        url,
        "_blank"
    );

}


/* =====================================================
   WHATSAPP BUTTONS
===================================================== */

document.getElementById(
    "whatsappOrder"
).addEventListener(
    "click",
    sendWhatsAppOrder
);

document.getElementById(
    "drawerWhatsapp"
).addEventListener(
    "click",
    sendWhatsAppOrder
);


/* =====================================================
   TOAST
===================================================== */

let toastTimer;

function showToast(
    title,
    message
) {

    toast.querySelector(
        "strong"
    ).textContent = title;

    toast.querySelector(
        "span"
    ).textContent = message;

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

document.getElementById(
    "searchBtn"
).addEventListener(
    "click",
    openSearch
);

document.getElementById(
    "searchClose"
).addEventListener(
    "click",
    closeSearch
);


function openSearch() {

    searchPanel.classList.add(
        "open"
    );

    document.body.classList.add(
        "modal-open"
    );

    setTimeout(
        () => searchInput.focus(),
        300
    );

}


function closeSearch() {

    searchPanel.classList.remove(
        "open"
    );

    document.body.classList.remove(
        "modal-open"
    );

    searchInput.value = "";

    searchResults.innerHTML = "";

}


searchInput.addEventListener(
    "input",
    () => {

        const query =
            searchInput.value
                .trim()
                .toLowerCase();

        if (!query) {

            searchResults.innerHTML = "";

            return;

        }


        const results =
            products.filter(
                product => {

                    const content =
                        `
                        ${product.name}
                        ${product.category}
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
                        Number(
                            result.dataset.searchId
                        );

                    closeSearch();

                    openProduct(id);

                }
            );

        });

    }
);


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

    mobileMenu.classList.add(
        "open"
    );

    document.body.classList.add(
        "menu-open"
    );

}

function closeMobileMenu() {

    mobileMenu.classList.remove(
        "open"
    );

    document.body.classList.remove(
        "menu-open"
    );

}


mobileMenuBtn.addEventListener(
    "click",
    openMobileMenu
);

mobileClose.addEventListener(
    "click",
    closeMobileMenu
);


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
        revealObserver.observe(element)
);


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
                link.getAttribute("href");

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
    "Site initialisé avec succès."
);
