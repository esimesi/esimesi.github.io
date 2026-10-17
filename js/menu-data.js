// Menu data. To add/edit an item: find its section below and copy the entry shape.
// Sized pizzas use `prices: [{ size, price }, ...]`; everything else uses `price: N`.
// `desc` is the ingredient line shown on the card; `note` is the category blurb.
// Prices are plain numbers (SEK). Images live under pictures/.
const MENU = {
  categories: [
    {
      id: 'pizza',
      label: 'Pizza',
      icon: 'icons/image-from-rawpixel-id-6886162-png.png',
      iconActive: 'icons/pizza-active.png',
      note: 'TOMATSÅS, OST och oregano INGÅR'
    },
    {
      id: 'vitizza',
      label: 'Hot & Vitlök',
      icon: 'icons/vitpizza-default.png',
      iconActive: 'icons/vitpizza-active.png',
      note: 'TOMATSÅS, OST och oregano INGÅR'
    },
    {
      id: 'inbakad',
      label: 'Inbakad',
      icon: 'icons/inbakaddefault.png',
      iconActive: 'icons/inbakadactive.png',
      note: 'ingår tomatsås och ost'
    },
    {
      id: 'rullar',
      label: 'Rullar',
      icon: 'icons/sand-default.png',
      iconActive: 'icons/sand-active.png',
      note: 'INGÅR TOMAT, OST, SALLAD , GURKA, LÖK, DRESSING, FEFERONI'
    },
    {
      id: 'kebabgyrus',
      label: 'Kebab & Gyros',
      icon: 'icons/kebab-default.png',
      iconActive: 'icons/kebab-active.png',
      note: 'TOMATSÅS, OST och oregano INGÅR till pizzor'
    },
    {
      id: 'sallad',
      label: 'Sallad',
      icon: 'icons/sallad-default.png',
      iconActive: 'icons/sallad-active.png',
      note: 'OST, GURKA, TOMAT, ANANAS, DRESSING och NYBAKAT BRÖD INGÅR I ALLA SALLADER'
    },
    {
      id: 'veganvegetarian',
      label: 'Vegan',
      icon: 'icons/vegan-default.png',
      iconActive: 'icons/vegan-active.png',
      note: 'ingår tomatsås men ingen ost till vegan pizzor'
    },
    {
      id: 'hamburgare',
      label: 'Hamburgare',
      icon: 'icons/hamburger-default.png',
      iconActive: 'icons/hamburger-active.png',
      note: 'BRÖD, SALLAD, LÖK, & DRESSING INGÅR I ALLA HAMBURGARE'
    },
    {
      id: 'grillsnacks',
      label: 'Grill & Snacks',
      icon: 'icons/grill-default.png',
      iconActive: 'icons/grill-active.png',
      note: ''
    },
    {
      id: 'barnmeny',
      label: 'Barnmeny',
      icon: 'icons/barn-meny-default.png',
      iconActive: 'icons/barn-meny-active.png',
      note: 'DRYCK INGÅR I ALLA BARNRÄTTER'
    },
    {
      id: 'dagenslunch',
      label: 'Lunch',
      icon: 'icons/lunch-default.png',
      iconActive: 'icons/lunch-active.png',
      note: 'SALLAD BUFFE KAFFE och DRICKA ingår (110kr)'
    }
  ],
  sections: [
    {
      category: 'pizza',
      title: 'Pizza',
      items: [
        { name: 'Margherita', desc: 'ost och mer ost', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 109 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Vesuvio', desc: 'skinka', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 115 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Hawaii', desc: 'skinka, ananas', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 115 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Capricciosa', desc: 'skinka, svamp', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 115 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Opera', desc: 'skinka, tonfisk', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 119 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Banana', desc: 'skinka, banan, curry', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 119 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Salami', desc: 'salami, lök', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 119 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Al-Tono', desc: 'tonfisk, lök', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 119 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Mona Lisa', desc: 'skinka, bacon, lök, ägg', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 119 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Bussola', desc: 'skinka, räkor', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 125 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Bianca', desc: 'mozzarella ost, köttfärs, vitlök', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 125 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: '3s', desc: 'mozzarella ost, pepperonikorv, ananas, jalapeno', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 125 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Fano', desc: 'mozzarella ost, pepperonikorv, jalapeño, paprika, tomat', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 125 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Gorgonzola', desc: 'skinka, gorgonzola ost', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 125 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Mexico', desc: 'skinka, pepperonikorv, lök, paprika', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 125 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Elizabeth', desc: 'fläskfilé, lök, tomat, bearnaisesås', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 125 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Elias Special', desc: 'fläskfilé, champinjoner, tomat, gorgonzola ost, bearnaisesås', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 135 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Husets Pizza', desc: 'fläskfile, paprika, tomat, cayenpeppar, lök, bearnaisesås', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 135 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Jamaica', desc: 'skinka, svamp, räkor', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 135 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Quattro Stagioni', desc: 'skinka, svamp, räkor, musslor', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 135 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Anton Special', desc: 'skinka, oxfilé, fläskfilé, bearnaisesås', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 135 }, { size: '40cm', price: 289 }, { size: '50cm', price: 459 } ] },
        { name: 'Black & White', desc: 'oxfilé, fläskfilé, champinjoner, bearnaisesås', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 135 }, { size: '40cm', price: 289 }, { size: '50cm', price: 459 } ] },
        { name: 'Kycklingpizza', desc: 'kyckling, tomat, lök, feferoni, vitlökssås', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 135 }, { size: '40cm', price: 289 }, { size: '50cm', price: 459 } ] },
        { name: 'Kärlekspizza', desc: 'oxfilé, champinjon, purjolök, mozzarella ost, bearnaisesås', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 135 }, { size: '40cm', price: 289 }, { size: '50cm', price: 459 } ] },
        { name: 'Västerbotten Special', desc: 'oxfilé, västerbottenost, kantarell, vitlök', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 135 }, { size: '40cm', price: 289 }, { size: '50cm', price: 459 } ] },
        { name: 'Vännäs Special', desc: 'oxfilé, skinka, ananas, bearnaisesås', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 135 }, { size: '40cm', price: 289 }, { size: '50cm', price: 459 } ] },
        { name: 'Silvia Special', desc: 'oxfilé, salami, champinjon', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 120 }, { size: '40cm', price: 289 }, { size: '50cm', price: 459 } ] },
        { name: 'Tre Kronor Special', desc: 'oxfilé, salami, champinjon, purjolök, paprika, tomat, bearnaisesås', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 139 }, { size: '40cm', price: 289 }, { size: '50cm', price: 459 } ] },
        { name: 'Egen Pizza', desc: 'fyll i här med ingredienser som du vill ha på din pizza', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 149 }, { size: '40cm', price: 289 }, { size: '50cm', price: 459 } ] },
        { name: 'Falafelpizza', desc: 'falafel, tomat, lök, feferoni, kebabsås', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 135 }, { size: '40cm', price: 289 }, { size: '50cm', price: 459 } ] }
      ]
    },
    {
      category: 'pizza',
      title: 'Pan pizza',
      items: [
        { name: 'Hawaii', desc: 'skinka, ananas, banan, curry', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 169 }, { size: '40cm', price: 299 }, { size: '50cm', price: 459 } ] },
        { name: 'New York', desc: 'oxfile, champinjon, paprika, bearnaisesås', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 169 }, { size: '40cm', price: 299 }, { size: '50cm', price: 459 } ] },
        { name: 'Niagara', desc: 'skinka, salami, oliver, jalapeno', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 169 }, { size: '40cm', price: 299 }, { size: '50cm', price: 459 } ] },
        { name: 'California', desc: 'kebab, tomat, lök, feferoni, kebabsås', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 169 }, { size: '40cm', price: 299 }, { size: '50cm', price: 459 } ] }
      ]
    },
    {
      category: 'vitizza',
      title: 'Hot pizza',
      items: [
        { name: 'Hot Pepper', desc: 'skinka, salami, jalapeño, purjolök, starksås', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 125 }, { size: '40cm', price: 289 }, { size: '50cm', price: 459 } ] },
        { name: 'Tondi', desc: 'svamp, pepperonikorv, paprika, jalapeño', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 125 }, { size: '40cm', price: 289 }, { size: '50cm', price: 459 } ] },
        { name: 'Mexicana', desc: 'köttfärs,vitlök, lök, tacosås,tacokrydda,jalapeno', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 125 }, { size: '40cm', price: 289 }, { size: '50cm', price: 459 } ] },
        { name: 'Stark Pizza', desc: 'svamp, räkor, salami, paprika, jalapeno, starksås', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 125 }, { size: '40cm', price: 289 }, { size: '50cm', price: 459 } ] }
      ]
    },
    {
      category: 'vitizza',
      title: 'Vitlökspizza',
      items: [
        { name: 'Vitlök 1', desc: 'oxfilé, salami, champinjon, vitlök', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 135 }, { size: '40cm', price: 289 }, { size: '50cm', price: 459 } ] },
        { name: 'Vitlök 2', desc: 'oxfilé, salami, bacon, champinjon, vitlök', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 135 }, { size: '40cm', price: 289 }, { size: '50cm', price: 459 } ] },
        { name: 'Vitlök 3', desc: 'salami, bacon, champinjon, vitlök', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 135 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Lina Special', desc: 'salami, skinka, köttfärs, bacon, vitlök', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 120 }, { size: '40cm', price: 289 }, { size: '50cm', price: 459 } ] }
      ]
    },
    {
      category: 'inbakad',
      title: 'Calzone',
      items: [
        { name: 'Calzone', desc: 'skinka', img: 'pictures/calzone.png', price: 115 },
        { name: 'Calzone Paradis', desc: 'skinka, ananas', img: 'pictures/calzone.png', price: 119 },
        { name: 'Calzone Rhodos', desc: 'skinka, räkor', img: 'pictures/calzone.png', price: 119 },
        { name: 'Calzone Special', desc: 'skinka, svamp, räkor', img: 'pictures/calzone.png', price: 119 },
        { name: 'Hot Calzone', desc: 'skinka, salami, stark sås', img: 'pictures/calzone.png', price: 129 },
        { name: 'Calzone Kyckling', desc: 'kyckling, ananas, curry', img: 'pictures/calzone.png', price: 129 },
        { name: 'Calzone Kebab', desc: 'kebab, svamp, lök, tomat, feferoni', img: 'pictures/calzone.png', price: 129 },
        { name: 'Calzone Gyros', desc: 'gyros, svamp, lök, tomat, feferoni', img: 'pictures/calzone.png', price: 129 },
        { name: 'Dubbel Inbakad', desc: 'dubbelt av alla (av pizzorna ovan)', img: 'pictures/calzone.png', price: 149 }
      ]
    },
    {
      category: 'inbakad',
      title: 'Båtpizza',
      items: [
        { name: 'Vikingkebab', desc: 'kebab, tomat, lök, isbergssallad, peperoni, gurka, kebab dressing', img: 'pictures/ostkant.png', price: 135 },
        { name: 'Båtpizza', desc: 'oxfilé, champinjon, vitlök, bearnaisesås', img: 'pictures/ostkant.png', price: 135 },
        { name: 'Ciocio', desc: 'oxfilé, lök, bearnaisesås', img: 'pictures/ostkant.png', price: 135 },
        { name: 'Ubåt', desc: 'oxfilé, skinka, ananas, bearnaisesås', img: 'pictures/ostkant.png', price: 135 },
        { name: 'Mamani', desc: 'ägg, mozzarella ost, gorgonzola ost, ruccola', img: 'pictures/ostkant.png', price: 120 }
      ]
    },
    {
      category: 'inbakad',
      title: 'Ostkant',
      items: [
        { name: 'Nr 1 Ostkant', desc: 'svamp, gyros, lök', img: 'pictures/ostkant.png', price: 120 },
        { name: 'Nr 2 Ostkant', desc: 'oxfilé, champinjon, bearnaisesås', img: 'pictures/ostkant.png', price: 120 },
        { name: 'Nr 3 Ostkant', desc: 'kebab, tomat, lök, feferoni, kebabsås', img: 'pictures/ostkant.png', price: 120 }
      ]
    },
    {
      category: 'rullar',
      title: 'Rullar',
      items: [
        { name: 'Kebabrulle', desc: 'kebabkött', img: 'pictures/rulle.png', price: 125 },
        { name: 'Gyrosrulle', desc: 'gyros', img: 'pictures/rulle.png', price: 125 },
        { name: 'Kycklingrulle', desc: 'paprika, tomat, bearnaisesås', img: 'pictures/rulle.png', price: 125 },
        { name: 'Falafelrulle', desc: 'falafel', img: 'pictures/rulle.png', price: 125 },
        { name: 'Capricciosarulle', desc: 'skinka, svamp', img: 'pictures/rulle.png', price: 125 },
        { name: 'Pommesrulle', desc: 'kebab, pommes', img: 'pictures/rulle.png', price: 139 },
        { name: 'Oxfilérulle', desc: 'oxfilé, bearnaisesås', img: 'pictures/rulle.png', price: 159 },
        { name: 'Mexikanrulle', desc: 'oxfile, jalapeno, tacosås, bearnaisesås', img: 'pictures/rulle.png', price: 159 },
        { name: 'Mixrulle', desc: 'kebab, kyckling, gyros, feferoni, kebabsås', img: 'pictures/rulle.png', price: 159 },
        { name: 'Hawaiirulle', desc: 'skinka, ananas, kebabsås', img: 'pictures/rulle.png', price: 125 }
      ]
    },
    {
      category: 'kebabgyrus',
      title: 'Kebab & Gyros',
      items: [
        { name: 'Liten Kebab', desc: 'pitabröd, kebab, grönsaker, dresseing', img: 'pictures/litenkebab.png', price: 119 },
        { name: 'Stor Kebab', desc: 'pitabröd, kebab, grönsaker, dresseing', img: 'pictures/litenkebab.png', price: 129 },
        { name: 'Kebabtallrik', desc: 'kebab, pommes, grönsaker', img: 'pictures/talrik.png', price: 129 },
        { name: 'Gyrostallrik', desc: 'gyros, pommes, sallad', img: 'pictures/talrik.png', price: 139 },
        { name: 'Gyrosbåt', desc: 'gyros, tomat, lök, feferoni, kebabsås', img: 'pictures/ostkant.png', price: 139 },
        { name: 'Kebabpizza', desc: 'kebab, tomat, lök, feferoni, kebabsås', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 129 }, { size: '40cm', price: 289 }, { size: '50cm', price: 459 } ] },
        { name: 'Kristian Special', desc: 'kebab, isbergsallad, tomat, lök, feferoni, kebabsås', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 129 }, { size: '40cm', price: 289 }, { size: '50cm', price: 459 } ] },
        { name: 'Kebabpizza Hot', desc: 'kebab, tomat, lök, feferoni, hot sås, kebabås', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 129 }, { size: '40cm', price: 289 }, { size: '50cm', price: 459 } ] },
        { name: 'Superkebabpizza', desc: 'kebab, fetaost, tomat, lök, feferoni, kebabsås, pommes', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 139 }, { size: '40cm', price: 289 }, { size: '50cm', price: 459 } ] },
        { name: 'Gyros Special', desc: 'gyros, skinka, champinjoner, kebabsås', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 139 }, { size: '40cm', price: 289 }, { size: '50cm', price: 459 } ] }
      ]
    },
    {
      category: 'sallad',
      title: 'Sallad',
      items: [
        { name: 'Tre Kronor Sallad', desc: 'räkor, skinka, kyckling, banan', img: 'pictures/sallad.png', price: 125 },
        { name: 'Kebabsallad', desc: 'kebabkött, lök, peperoni', img: 'pictures/sallad.png', price: 125 },
        { name: 'Grekisk Sallad', desc: 'fårost, oliver, paprika, sallad', img: 'pictures/sallad.png', price: 125 },
        { name: 'Kycklingsallad', desc: 'kyckling, banan, sallad', img: 'pictures/sallad.png', price: 125 },
        { name: 'Räksallad', desc: 'räkor, sallad, paprika', img: 'pictures/sallad.png', price: 125 },
        { name: 'Tonfisksallad', desc: 'tonfisk, oliver, svartpeppar', img: 'pictures/sallad.png', price: 125 }
      ]
    },
    {
      category: 'veganvegetarian',
      title: 'Vegan & Vegetarisk',
      items: [
        { name: 'Veganpizza 1 (vegan)', desc: 'champinjon, ruccola, lök, vitlök, tomat', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 99 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Veganpizza 2 (vegan)', desc: 'champinjon, spenat, paprika, lök', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 99 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Vegetaria', desc: 'svamp, ananas, paprika, lök, tomat', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 115 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Spenatpizza', desc: 'spenat, lök, fetaost, vitlök', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 119 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Sandra Special', desc: 'champ., oliver, tomat, lök, ruccola, vitlök', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 119 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Indiana', desc: 'ananas, banan, curry', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 119 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Grekisk Pizza', desc: 'fetaost, lök, paprika, oliver, tomat', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 119 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Quattro Formaggio', desc: 'gorgonzola ost, mozzarella ost, fetaost', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 119 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Caprese', desc: 'mozzarella ost, champinjon, tomat, svartpeppar', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 119 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Al funghi', desc: 'mozzarella ost, champinjon', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 119 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] }
      ]
    },
    {
      category: 'hamburgare',
      title: 'Hamburgare',
      items: [
        { name: 'Stripsmeny', desc: 'pommes, dresseing', img: 'pictures/fries.png', price: 59 },
        { name: 'Miniskrov', desc: '45 g hamburgare, pommes, dricka', img: 'pictures/hamburgare.png', price: 89 },
        { name: 'Kycklingburgare', desc: '90g, pommes, dricka', img: 'pictures/hamburgare.png', price: 115 },
        { name: 'Hamburgartallrik', desc: '90 g hamburgare, pommes, dricka', img: 'pictures/hamburgare.png', price: 115 },
        { name: 'Skrovmål', desc: '2x45 g hamburgare, pommes, dricka', img: 'pictures/hamburgare.png', price: 115 },
        { name: 'Superskrovmål', desc: '2x90 g hamburgare, pommes, dricka', img: 'pictures/hamburgare.png', price: 139 },
        { name: 'Vännäsburgare', desc: '200 g hamburgare, bacon, sallad, bostongurka, dressing, pommes, dricka', img: 'pictures/hamburgare.png', price: 159 }
      ]
    },
    {
      category: 'grillsnacks',
      title: 'Grill',
      items: [
        { name: 'Falafeltallrik', desc: 'falafel, pommes, sallad, dressing', img: 'pictures/talrik.png', price: 135 },
        { name: 'Kycklingtallrik', desc: 'kyckling, pommes, sallad, vitlökssås, kebabsås', img: 'pictures/talrik.png', price: 135 },
        { name: 'Mixtallrik', desc: 'kyckling, kebab, pommes, sallad, vitlökssås, kebabsås', img: 'pictures/talrik.png', price: 135 },
        { name: 'Oxfilétallrik', desc: 'oxfile, pommes, sallad, bearnaisesås', img: 'pictures/talrik.png', price: 149 },
        { name: 'Lövbit', desc: 'pommes, sallad, bearnaisesås, persiljesmör', img: 'pictures/grill.png', price: 135 },
        { name: 'Rödspätta', desc: 'stekt potatis, grönsaker, remouladsås', img: 'pictures/grill.png', price: 135 },
        { name: 'Grillbiff', desc: 'pommes, sallad, bearnaisesås', img: 'pictures/grill.png', price: 135 },
        { name: 'Schnitzel', desc: 'pommes, sallad, bearnaisesås', img: 'pictures/grill.png', price: 135 }
      ]
    },
    {
      category: 'grillsnacks',
      title: 'Snacks',
      items: [
        { name: 'Mozzarellasticks', desc: '4st', img: 'pictures/mozarella.png', price: 40 },
        { name: 'Lökringar', desc: '5st', img: 'pictures/onionrings.png', price: 40 },
        { name: 'Hot Wings', desc: '4st', img: 'pictures/hotwings.png', price: 40 }
      ]
    },
    {
      category: 'barnmeny',
      title: 'Barnmeny',
      items: [
        { name: 'Grillkorvtallrik', desc: '2 korvar, pommes', img: 'pictures/korv.png', price: 89 },
        { name: 'Kycklingnuggets', desc: '5 st, pommes, dressing', img: 'pictures/nuggets.png', price: 89 },
        { name: 'Tom & Jerry', desc: 'skinka, färsk svamp', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg', price: 89 },
        { name: 'Nalle Puh', desc: 'skinka, vitlökssås', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg', price: 89 },
        { name: 'Simpson', desc: 'skinka, ananas', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg', price: 89 }
      ]
    },
    {
      category: 'dagenslunch',
      title: 'Dagens lunch',
      items: [
        { name: 'Margherita', desc: 'ost och mer ost', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 109 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Vesuvio', desc: 'skinka', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 115 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Hawaii', desc: 'skinka, ananas', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 115 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Capricciosa', desc: 'skinka, svamp', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 115 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Opera', desc: 'skinka, tonfisk', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 119 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Banana', desc: 'skinka, banan, curry', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 119 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Salami', desc: 'salami, lök', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 119 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Al-Tono', desc: 'tonfisk, lök', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 119 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Mona Lisa', desc: 'skinka, bacon, lök, ägg', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 119 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Bussola', desc: 'skinka, räkor', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 125 }, { size: '40cm', price: 269 }, { size: '50cm', price: 419 } ] },
        { name: 'Kycklingpizza', desc: 'kyckling, tomat, lök, feferoni, vitlökssås', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 135 }, { size: '40cm', price: 289 }, { size: '50cm', price: 459 } ] },
        { name: 'Kebabpizza', desc: 'kebab, tomat, lök, feferoni, kebabsås', img: 'pictures/fresh-pizza-with-mushrooms-ham-cheese-white-background-copy-space-homemade-with-love-fast-delivery-recipe-menu-top-view (1).jpg',
          prices: [ { size: '33cm', price: 129 }, { size: '40cm', price: 289 }, { size: '50cm', price: 459 } ] },
        { name: 'Kycklingtallrik', desc: 'kyckling, pommes, sallad, bearnaisesås', img: 'pictures/talrik.png', price: 135 },
        { name: 'Kebabtallrik', desc: 'kebab, pommes, grönsaker', img: 'pictures/talrik.png', price: 129 },
        { name: 'Miniskrov', desc: '45 g hamburgare, pommes, dricka', img: 'pictures/hamburgare.png', price: 89 },
        { name: 'Skrovmål', desc: '2x45 g hamburgare, pommes, dricka', img: 'pictures/hamburgare.png', price: 115 }
      ]
    }
  ]
};
