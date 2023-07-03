import React, { useEffect, useState } from 'react';
import { StyledMain, StyledSection, StyledContainer, StyledPokemonContainer, StyledImage, StyledName, StyledHeight, StyledWeight } from './style';
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


    return (
        <>
            <NavBar />
            <StyledMain>
                {pokemons.map((pokemon, index) => (
                    <StyledSection key={index}>
                        <StyledContainer isInactive={!ativado} />
                        <StyledPokemonContainer >
                            <StyledImage src={pokemon.sprites.front_default} isInactive={!ativado} />
                            <StyledName isInactive={!ativado}>{pokemon.name}</StyledName>
                            <StyledHeight isInactive={!ativado}>{pokemon.height}</StyledHeight>
                            <StyledWeight isInactive={!ativado}>{pokemon.weight}</StyledWeight>
                        </StyledPokemonContainer>
                    </StyledSection>
                ))}
            </StyledMain>
        </>
    );

}
