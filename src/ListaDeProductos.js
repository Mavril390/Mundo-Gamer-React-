import AMDRYZEN53600 from "./imagenes/AMD-RYZEN-5-3600.jpg"
import AsrockB450MHDV from "./imagenes/Asrock-B450M-HDV.jpg"
import GeiLDDR416GB3000MHZEVOPOTENZABlack from "./imagenes/GeiL-DDR4-16GB-3000MHZ-EVO-POTENZA-Black.jpg"
import AsrockRadeonRX6700XT12GBGDDR6 from "./imagenes/Asrock-Radeon-RX-6700-XT-12GB-GDDR6.jpg"

const productos = [
    {
        id: 1,
        nombre: "Procesador AMD RYZEN 5 3600 4.2GHz Turbo AM4 Wraith Stealth Cooler",
        precio: 32150,
        img: AMDRYZEN53600,
        alt: "AMD RYZEN 5 3600"
    },
    {
        id: 2,
        nombre: "Mother (AMD) Asrock B450M-HDV 4.0 AM4 HDMI M.2",
        precio: 8440,
        img: AsrockB450MHDV,
        alt: "Asrock-B450M-HDV"
    },
    {
        id: 3,
        nombre: "Memoria GeiL DDR4 16GB 3000MHZ EVO POTENZA Black",
        precio: 9920,
        img: GeiLDDR416GB3000MHZEVOPOTENZABlack,
        alt: "GeiL-DDR4-16GB-3000MHZ-EVO-POTENZA-Black"
    },
    {
        id: 4,
        nombre: "Placa de Video Asrock Radeon RX 6700 XT 12GB GDDR6 Challenger D OC",
        precio: 170000,
        img: AsrockRadeonRX6700XT12GBGDDR6,
        alt: "Asrock-Radeon-RX-6700-XT-12GB-GDDR6"
    }
]

export const getProducto = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve(productos)
        }, 2000)
    })
}