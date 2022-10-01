const data = [
    {
        id: 1,
        title:"Excite-Pro",
        img:"https://www.nauticalnewstoday.com/wp-content/uploads/2016/10/aletas-de-buceo-atomic-acuatics.jpg",
        price:  599,
        detail:"lorem",
        stock: 8,
        categoty: "",
    },

    {
        id: 2,
        title:"I3 Sunrise ",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmbXkSRXjJ2_36HAhKTg69WB5ZBRJFI5q4mSqLlBIkMiUVmyQz2gw2xPJmM6BQ_XQxsY&usqp=CAU",
        price:  900,
        detail:"lorem",
        stock: 8,
        categoty: "",
    },
    {
        id: 3,
        title:"Smart",
        img: "https://cdn-mdb.head.com/CDN3/D/414129_BKWH/1/768x768/smart-black-white.jpg",
        price:  1000,
        detail:"",
        stock: 4,
        categoty: "",
    },

    {
        id: 4,
        title:"Scuba Jet-Pro",
        img:"https://i.ebayimg.com/images/g/FFMAAOSwa4lh65Pp/s-l1600.jpg",
        price:  1200,
        detail:"",
        stock: 3,
        categoty: "",
    },

    {
        id: 5,
        title:"V Sunrise",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRat0129K67axUqrVwWg_rUP-Wl0mNc6mEKWg&usqp=CAU",
        price:  1500,
        detail:"",
        stock: 1,
        categoty: "",
    },


    {
        id: 6,
        title:"Genius +",
        img: "https://cdn-mdb.head.com/CDN3/G/414139_BKSI/1/400x400/genius-black-silver.jpg",
        price:  850,
        detail:"",
        stock: 0,
        categoty: "",
    },


    {
        id: 7,
        title:"X-Strem",
        img:"https://tubuceas.com/wp-content/uploads/elementor/thumbs/aletas-scubapro-p7ty5ycw6bgxudn2w1syoubwf0wp80e8cz03acx39c.jpg",
        price:  2000,
        detail:"",
        stock: 10,
        categoty: "",
    },

    {
        id: 8,
        title:"Wire Spyder",
        img: "https://cdn-mdb.head.com/CDN3/D/411074_WHBCL/1/768x768/spyder-whbcl.jpg",
        price:  300,
        detail:"",
        stock: 4,
        categoty: "",
    },

    {
        id: 9,
        title:"Quad Air",
        img: "https://cdn-mdb.head.com/CDN3/D/414169_BKBK/1/768x768/quad-air-black.jpg",
        price:  1300,
        detail:"",
        stock: 7,
        categoty: "",
    },

]
//cuando se ejecute la funcion pedida se genera una nueva promesa
export function getArticulos(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(data),1500);
    });
}
export function getUnArticulos(id){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(data)[0],1500);
    });
}
