import React, { useEffect, useState } from 'react';
import { StyledContainer, StyledPokemonContainer, StyledImage, StyledName, StyledHeight, StyledWeight } from '../../pages/Pokemons/style';
import PokemonContainer from '../../assets/images/pokedex-container2.png'


export default function ListaPokemons() {
    const [pokemons, setPokemons] = useState([]);

    const Requisicao = async () => {
        const endpoints = [];

        try {
            for (let i = 1; i <= 50; i++) {
                endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
            }
            const responses = await Promise.all(
                endpoints.map((endpoint) => fetch(endpoint).then((res) => res.json()))
            );
            setPokemons(responses);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        Requisicao();
    }, []);

    return (
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", marginLeft: "5%" }}>
            {pokemons.map((pokemon, index) => {
                return (
                    <div key={index} style={{ position: "relative", display: "flex", flexDirection: "row", gap: 50 }}>
                        <StyledContainer src={PokemonContainer} />
                        <StyledPokemonContainer>
                            <StyledImage src={pokemon.sprites.front_default} />
                            <StyledName>{pokemon.name}</StyledName>
                            <StyledHeight>{pokemon.height}</StyledHeight>
                            <StyledWeight>{pokemon.weight}</StyledWeight>
                        </StyledPokemonContainer>
                    </div>
                )
            })}
        </div>
    )
}
