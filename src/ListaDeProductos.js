import AMDRYZEN53600 from "./imagenes/AMD-RYZEN-5-3600.jpg"
import AsrockB450MHDV from "./imagenes/Asrock-B450M-HDV.jpg"
import GeiLDDR416GB3000MHZEVOPOTENZABlack from "./imagenes/GeiL-DDR4-16GB-3000MHZ-EVO-POTENZA-Black.jpg"
import AsrockRadeonRX6700XT12GBGDDR6 from "./imagenes/Asrock-Radeon-RX-6700-XT-12GB-GDDR6.jpg"


const productos = [
    { 
      idCategoria: 'Procesador', 
      id: 'Procesador-1', 
      nombre: 'Procesador AMD RYZEN 5 3600 4.2GHz Turbo AM4 Wraith Stealth Cooler', 
      precio: 32150, 
      stock: 2, 
      img: AMDRYZEN53600, 
      descripcion: "Ryzen 5 3600 es un microprocesador de escritorio de alto rendimiento con núcleo hexa de 64 bits. Fabricado en el proceso de 7 nm de TSMC basado en la microarquitectura Zen 2 , este procesador funciona a 3,6 GHz con un TDP de 65 W y una frecuencia Boost de hasta 4,2 GHz. El 3600 admite hasta 128 GiB de memoria DDR4-3200 de dos canales." 
    },
    { 
      idCategoria: 'Mother', 
      id: 'Mother-1', 
      nombre: 'Mother (AMD) Asrock B450M-HDV 4.0 AM4 HDMI M.2', 
      precio: 8440, 
      stock: 4, 
      img: AsrockB450MHDV, 
      descripcion: "Admite procesadores de escritorio AMD AM4 Socket Ryzen™ 2000, 3000, 4000 G-Series, 5000 y 5000 G-Series" 
    },
    { 
      idCategoria: 'Ram', 
      id: 'Ram-1', 
      nombre: 'Memoria GeiL DDR4 16GB 3000MHZ EVO POTENZA Black', 
      precio: 9920, 
      stock: 5, 
      img: GeiLDDR416GB3000MHZEVOPOTENZABlack, 
      descripcion: "" 
    },
    { 
      idCategoria: 'Placa', 
      id: 'Placa-1', 
      nombre: 'Placa de Video Asrock Radeon RX 6700 XT 12GB GDDR6 Challenger D OC', 
      precio: 170000, 
      stock: 2, 
      img: AsrockRadeonRX6700XT12GBGDDR6, 
      descripcion: "" 
    }
]

export const getProducto = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}

export const getProductsByCategory = (idCategoria) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(productos.filter(prod => prod.idCategoria === idCategoria))
      }, 500)
  })
}