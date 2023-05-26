import React, { useEffect, useState } from 'react'

export default function ListaPokemons() {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        const Requisicao = () => {
            const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'
            fetch(url)
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    setPokemons(data)
                    console.log(pokemons)
                })
        }
        Requisicao()
    }, []);

    return (
        <>

        </>
    )
}
