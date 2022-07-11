export const createAdapterdProductFromFirestore = (doc) => {
    const data = doc.data()

    const productFormatted = {
        id: doc.id,
        img: data.img,
        nombre: data.nombre,
        precio: data.precio,
        stock: data.stock,
        caracteristicas: data.caracteristicas,
    }

    return productFormatted
}