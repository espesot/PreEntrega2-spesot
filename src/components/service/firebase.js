// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDteLqGkNbRZSZuXzRdqYIQqHg8nQHQO5c",
    authDomain: "diverstore-6637c.firebaseapp.com",
    projectId: "diverstore-6637c",
    storageBucket: "diverstore-6637c.appspot.com",
    messagingSenderId: "734882547631",
    appId: "1:734882547631:web:92a45748edab5dfdf2915a",
    measurementId: "G-SFY9YPEHED"
};
// iniiciamos firebase y firestone
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

export async function getArticulos() {
    const collectionRef = collection(db, "articulos")
    let results = await getDocs(collectionRef)
    let data = results.docs.map(doc => {
        return { id: doc.id, ...doc.data() };
    })
    return data

}

export async function getUnArticulo(idParams) {
    const docRef = doc(db, "articulos", idParams)
    const docResult = await getDoc(docRef)
    return { id: docResult.id, ...docResult.data() }
}

export async function getArtByCategory(idCategory) {
    const collectionRef = collection(db, "articulos")
    const queryCat = query(
        collectionRef,
        where("category", "==", idCategory)
    );
    let results = await getDocs(queryCat);

    let data = results.docs.map(doc => {
        return {
            id: doc.id,
            ...doc.data(),
        };
    })
    return data
}

export async function createBuyOrden(ordenData) {
    const collectionRef = collection(db, "orden")
    let respuesta = await addDoc(collectionRef, ordenData)
    return respuesta.id
}

//se comenta la funcion sendDataToFirebase porque no se la utiliza ya que usa sola vez eviamos los datos al servidor
// export async function sendDataToFirebase() {

//     const data = [
//         {
//             id: 1,
//             title: "Excite-Pro",
//             img: "https://www.nauticalnewstoday.com/wp-content/uploads/2016/10/aletas-de-buceo-atomic-acuatics.jpg",
//             price: 599,
//             detail: "Las aletas de buceo Exite Pro tienen un bolsillo para el pie abierto y una pala r??gida. Fabricados con materiales innovadores de alto rendimiento, proporcionan un empuje superior y son bimateriales. La m??xima expresi??n del empuje del channel trust para la ??ltima aleta Mares, el m??nimo esfuerzo para un empuje ??ptimo en todo momento.",
//             stock: 8,
//             category: "aleta",
//             new: true
//         },

//         {
//             id: 2,
//             title: "I3 Sunrise",
//             img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmbXkSRXjJ2_36HAhKTg69WB5ZBRJFI5q4mSqLlBIkMiUVmyQz2gw2xPJmM6BQ_XQxsY&usqp=CAU",
//             price: 900,
//             detail: "Falda de silicona Peque??as costillas alrededor de la nariz para aliviar la presi??n Gran visi??n perif??rica. Correa de silicona en forma de X. Versi??n Sunrise disponible",
//             stock: 8,
//             category: "visor",
//             new: false
//         },
//         {
//             id: 3,
//             title: "Smart",
//             img: "https://cdn-mdb.head.com/CDN3/D/414129_BKWH/1/768x768/smart-black-white.jpg",
//             price: 1000,
//             detail: "Smart es el ejemplo perfecto de las cualidades de un excelente ordenador de buceo. Pantalla perfectamente configurada, con caracteres claros y claramente visibles, perfil ergon??mico con dos botones que permiten una navegaci??n muy sencilla. Smart el ordenador de buceo m??s inteligente del mercado.",
//             stock: 4,
//             category: "ordenador",
//             new: true
//         },

//         {
//             id: 4,
//             title: "Scuba Jet-Pro",
//             img: "https://i.ebayimg.com/images/g/FFMAAOSwa4lh65Pp/s-l1600.jpg",
//             price: 1200,
//             detail: "Impulsado por innovar y mejorar constantemente la experiencia del buceo, Scuba construye equipos de alta calidad para el trabajo, el deporte y el estilo de vida de las personas cuya pasi??n se encuentra debajo de la superficie.",
//             stock: 3,
//             category: "aleta",
//             new: false
//         },

//         {
//             id: 5,
//             title: "V Sunrise",
//             img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRat0129K67axUqrVwWg_rUP-Wl0mNc6mEKWg&usqp=CAU",
//             price: 1500,
//             detail: "Peque??as nervaduras horizontales entre el marco y el fald??n en la zona del contorno de la nariz. Estas nervaduras absorben y redistribuyen la presi??n ejercida por el marco sobre el fald??n, lo que aumenta la comodidad.",
//             stock: 1,
//             category: "visor",
//             new: true
//         },


//         {
//             id: 6,
//             title: "Genius +",
//             img: "https://cdn-mdb.head.com/CDN3/G/414139_BKSI/1/400x400/genius-black-silver.jpg",
//             price: 850,
//             detail: "EL ordenador de buceo Mares Genius es ideal para buceadores t??cnicos que usan mezclas de Trimix y Nitrox con m??ltiples cambios y que desean tener una optimizaci??n de los tiempos de descompresi??n y fondo de acuerdo con el suministro de gas. La posibilidad de variar la descompresi??n seg??n el gas realmente utilizado genera una gran ventaja por motivos de seguridad. La pantalla a color es claramente visible en todas las condiciones y el men?? de la interfaz es intuitivo y f??cil de usar gracias a las teclas grandes",
//             stock: 0,
//             category: "ordenador",
//             new: false
//         },


//         {
//             id: 7,
//             title: "X-Strem",
//             img: "https://tubuceas.com/wp-content/uploads/elementor/thumbs/aletas-scubapro-p7ty5ycw6bgxudn2w1syoubwf0wp80e8cz03acx39c.jpg",
//             price: 2000,
//             detail: "X-Strem es la aleta t??cnica perfecta, especialmente para nadar a braza. Fabricada con goma natural pr??cticamente indestructible y con una flotabilidad negativa. La aleta ideal para el buceador Extended Range.",
//             stock: 10,
//             category: "aleta",
//             new: false
//         },

//         {
//             id: 8,
//             title: "Wire Spyder",
//             img: "https://cdn-mdb.head.com/CDN3/D/411074_WHBCL/1/768x768/spyder-whbcl.jpg",
//             price: 300,
//             detail: "La gafa Wire Spyder tiene un dise??o atractivo y moderno. La conformaci??n de la pieza facial y la suave silicona especial permiten que se adapte perfectamente a cualquier forma de cara. Gran m??scara para tu buceo gracias a su amplio campo de visi??n.",
//             stock: 4,
//             category: "visor",
//             new: false
//         },

//         {
//             id: 9,
//             title: "Quad Air",
//             img: "https://cdn-mdb.head.com/CDN3/D/414169_BKBK/1/768x768/quad-air-black.jpg",
//             price: 1300,
//             detail: "El ordenador de buceo Quad, Air tiene una pantalla clara y permite una visualizaci??n inmediata de los datos de buceo relevantes. Con Quad Air tambi??n puede leer la presi??n del tanque directamente en la pantalla, a trav??s de la conexi??n inal??mbrica. El dise??o de tres sectores incluye todos los datos relevantes, incluida la presi??n del tanque. Mayor duraci??n de la bater??a, reemplazable por el usuario.",
//             stock: 7,
//             category: "ordenador",
//             new: true
//         },

//     ]
//     let itemsColletionRef = collection(db, "articulos")
//     for (let articulo of data) {
//         delete (articulo.id)
//         // let newDoc = await addDoc(itemsColletionRef, articulo)

//     }
// }


export default firebaseApp;