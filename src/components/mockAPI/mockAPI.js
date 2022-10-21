const data = [
    {
        id: 1,
        title: "Excite-Pro",
        img: "https://www.nauticalnewstoday.com/wp-content/uploads/2016/10/aletas-de-buceo-atomic-acuatics.jpg",
        price: 599,
        detail: "Las aletas de buceo Exite Pro tienen un bolsillo para el pie abierto y una pala rígida. Fabricados con materiales innovadores de alto rendimiento, proporcionan un empuje superior y son bimateriales. La máxima expresión del empuje del channel trust para la última aleta Mares, el mínimo esfuerzo para un empuje óptimo en todo momento.",
        stock: 8,
        category: "aleta",
        new: true
    },

    {
        id: 2,
        title: "I3 Sunrise",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmbXkSRXjJ2_36HAhKTg69WB5ZBRJFI5q4mSqLlBIkMiUVmyQz2gw2xPJmM6BQ_XQxsY&usqp=CAU",
        price: 900,
        detail: "Falda de silicona Pequeñas costillas alrededor de la nariz para aliviar la presión Gran visión periférica. Correa de silicona en forma de X. Versión Sunrise disponible",
        stock: 8,
        category: "visor",
        new: false
    },
    {
        id: 3,
        title: "Smart",
        img: "https://cdn-mdb.head.com/CDN3/D/414129_BKWH/1/768x768/smart-black-white.jpg",
        price: 1000,
        detail: "Smart es el ejemplo perfecto de las cualidades de un excelente ordenador de buceo. Pantalla perfectamente configurada, con caracteres claros y claramente visibles, perfil ergonómico con dos botones que permiten una navegación muy sencilla. Smart el ordenador de buceo más inteligente del mercado.",
        stock: 4,
        category: "ordenador",
        new: true
    },

    {
        id: 4,
        title: "Scuba Jet-Pro",
        img: "https://i.ebayimg.com/images/g/FFMAAOSwa4lh65Pp/s-l1600.jpg",
        price: 1200,
        detail: "Impulsado por innovar y mejorar constantemente la experiencia del buceo, Scuba construye equipos de alta calidad para el trabajo, el deporte y el estilo de vida de las personas cuya pasión se encuentra debajo de la superficie.",
        stock: 3,
        category: "aleta",
        new: false
    },

    {
        id: 5,
        title: "V Sunrise",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRat0129K67axUqrVwWg_rUP-Wl0mNc6mEKWg&usqp=CAU",
        price: 1500,
        detail: "Pequeñas nervaduras horizontales entre el marco y el faldón en la zona del contorno de la nariz. Estas nervaduras absorben y redistribuyen la presión ejercida por el marco sobre el faldón, lo que aumenta la comodidad.",
        stock: 1,
        category: "visor",
        new: true
    },


    {
        id: 6,
        title: "Genius +",
        img: "https://cdn-mdb.head.com/CDN3/G/414139_BKSI/1/400x400/genius-black-silver.jpg",
        price: 850,
        detail: "EL ordenador de buceo Mares Genius es ideal para buceadores técnicos que usan mezclas de Trimix y Nitrox con múltiples cambios y que desean tener una optimización de los tiempos de descompresión y fondo de acuerdo con el suministro de gas. La posibilidad de variar la descompresión según el gas realmente utilizado genera una gran ventaja por motivos de seguridad. La pantalla a color es claramente visible en todas las condiciones y el menú de la interfaz es intuitivo y fácil de usar gracias a las teclas grandes",
        stock: 0,
        category: "ordenador",
        new: false
    },


    {
        id: 7,
        title: "X-Strem",
        img: "https://tubuceas.com/wp-content/uploads/elementor/thumbs/aletas-scubapro-p7ty5ycw6bgxudn2w1syoubwf0wp80e8cz03acx39c.jpg",
        price: 2000,
        detail: "X-Strem es la aleta técnica perfecta, especialmente para nadar a braza. Fabricada con goma natural prácticamente indestructible y con una flotabilidad negativa. La aleta ideal para el buceador Extended Range.",
        stock: 10,
        category: "aleta",
        new: false
    },

    {
        id: 8,
        title: "Wire Spyder",
        img: "https://cdn-mdb.head.com/CDN3/D/411074_WHBCL/1/768x768/spyder-whbcl.jpg",
        price: 300,
        detail: "La gafa Wire Spyder tiene un diseño atractivo y moderno. La conformación de la pieza facial y la suave silicona especial permiten que se adapte perfectamente a cualquier forma de cara. Gran máscara para tu buceo gracias a su amplio campo de visión.",
        stock: 4,
        category: "visor",
        new: false
    },

    {
        id: 9,
        title: "Quad Air",
        img: "https://cdn-mdb.head.com/CDN3/D/414169_BKBK/1/768x768/quad-air-black.jpg",
        price: 1300,
        detail: "El ordenador de buceo Quad, Air tiene una pantalla clara y permite una visualización inmediata de los datos de buceo relevantes. Con Quad Air también puede leer la presión del tanque directamente en la pantalla, a través de la conexión inalámbrica. El diseño de tres sectores incluye todos los datos relevantes, incluida la presión del tanque. Mayor duración de la batería, reemplazable por el usuario.",
        stock: 7,
        category: "ordenador",
        new: true
    },

]
//cuando se ejecute la funcion pedida se genera una nueva promesa
export function getArticulos() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(data), 1000);
    });
}
export function getUnArticulo(idParams) {
    return new Promise((resolve, reject) => {
        let articuloReq = data.find((item) => {
            return item.id === Number(idParams)
        })
        // en el resolve de la promesa de la funcion devolvemos la busqueda que guardamos en el articuloreq
        setTimeout(() => {
            if (articuloReq === undefined)
                reject(new Error("no hay urso"))
            else {
                resolve(articuloReq);
            }
        }, 1000);

    });
}

export function getArtByCategory(idCategory) {
    return new Promise((resolve) => {
        let filterCategoty = data.filter(item => item.category === idCategory)
        setTimeout(() => resolve(filterCategoty), 1000);
    })
}