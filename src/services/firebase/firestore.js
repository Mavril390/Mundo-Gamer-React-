import { db } from "."
import { getDocs, query, where, collection } from "firebase/firestore"
import { createAdapterdProductFromFirestore } from "../../adapters/productsAdapter"

export const getProducts = (idCategoria) => {
    return new Promise((resolve, rejected) => {
        const collectionRef = idCategoria 
            ? (query(collection(db, 'productos'), where('idCategoria', '==', idCategoria))) 
            : ( collection(db, 'productos') )

        getDocs(collectionRef).then(response => {
            const productosFirestore = response.docs.map(doc => {
                return createAdapterdProductFromFirestore(doc)
            })
            resolve(productosFirestore)
        }).catch((error) => {
            rejected(error)
        })
    })
}