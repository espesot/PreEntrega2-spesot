// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, doc, getDoc,query, where } from "firebase/firestore"
import { Await } from "react-router-dom";
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
    const docRef = doc(db,"articulos", idParams)
    const docResult = await getDoc(docRef)
    return {id: docResult.id, ...docResult.data()}
}

export async function getArtByCategory(idCategory) {
    const collectionRef = collection(db,"articulos")
    const queryCat = query(
        collectionRef,
         where("category","==",idCategory)
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


export default firebaseApp;