const data = [
    {
        id: 1,
        title:"aletas-pro",
        img:"https://www.nauticalnewstoday.com/wp-content/uploads/2016/10/aletas-de-buceo-atomic-acuatics.jpg",
        price:  8,
        detail:"lorem",
        stock: 8,
        categoty: "",
    },

    {
        id: 2,
        title:"aletas-2",
        img:"https://i.blogs.es/1752fb/71kteeyxatl._ac_sl1500_/450_1000.webp",
        price:  9,
        detail:"lorem",
        stock: 8,
        categoty: "",
    },
    {
        id: 3,
        title:"aletas-pro3",
        img:"https://tubuceas.com/wp-content/uploads/elementor/thumbs/aletas-scubapro-p7ty5ycw6bgxudn2w1syoubwf0wp80e8cz03acx39c.jpg",
        price:  10,
        detail:"",
        stock: 8,
        categoty: "",
    },

    {
        id: 4,
        title:"aletas-pro4",
        img: "",
        price:  12,
        detail:"",
        stock: 8,
        categoty: "",
    },

    {
        id: 5,
        title:"aletas-pro5",
        img: "",
        price:  15,
        detail:"",
        stock: 8,
        categoty: "",
    },


    {
        id: 6,
        title:"aletas-pro6",
        img: "",
        price:  8,
        detail:"",
        stock: 8,
        categoty: "",
    },


    {
        id: 7,
        title:"aletas-pro",
        img: "",
        price:  8,
        detail:"",
        stock: 8,
        categoty: "",
    },
]

export function getArticulos(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(data),1500);
    });
}
