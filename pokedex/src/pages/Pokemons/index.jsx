import React, { useEffect, useState } from 'react';
import { StyledMain, StyledSection, StyledContainer, StyledPokemonContainer, StyledImage, StyledName, StyledHeight, StyledWeight } from './style';
import PokemonContainer from '../../assets/images/pokedex-container2.png'
import { useSelector } from 'react-redux';
import { rootReducer } from '../../redux/rootReducer';
import { ativacaoPokedex } from '../../redux/PokedexActivation/reducer';
import NavBar from '../../components/NavBar/index';


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

    const { ativado } = useSelector(rootReducer => rootReducer.ativacaoPokedex)
    console.log({ ativado })

    return (
        <>
        <NavBar />
            <StyledMain>
                {pokemons.map((pokemon, index) => {
                    return (
                        <StyledSection key={index}>
                            <StyledContainer src={PokemonContainer} />
                            <StyledPokemonContainer>
                                <StyledImage src={pokemon.sprites.front_default} />
                                <StyledName>{pokemon.name}</StyledName>
                                <StyledHeight>{pokemon.height}</StyledHeight>
                                <StyledWeight>{pokemon.weight}</StyledWeight>
                            </StyledPokemonContainer>
                        </StyledSection>
                    )
                })}
            </StyledMain>
        </>
    )
}
