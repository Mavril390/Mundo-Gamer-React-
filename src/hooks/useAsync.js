import { useState, useEffect } from 'react'

export const useAsync = (asyncFn, dependencies = []) => {
    const [productos, setProductos] = useState()
    const [error, setError] = useState()
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        setCargando(true)

        asyncFn().then(response => {
            setProductos(response)
        }).catch(error => {
            setError(error)
        }).finally(() =>{
            setCargando(false)
        })
        
    }, dependencies)

    return {
        productos,
        error,
        cargando
    }
}
