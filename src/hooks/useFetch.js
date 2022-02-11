import { useEffect, useState } from 'react'

function useFetch(url) {

    const [loading, setLoading]=useState(true);
    const [datos, setDatos]=useState(null);

    useEffect(()=>{
        (async ()=>{
            try {
                const respuesta=await fetch(url);
                const resultado=await respuesta.json();
                setDatos(resultado);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        })();
    },[url]);

    return {loading,datos}
};

export default useFetch;
