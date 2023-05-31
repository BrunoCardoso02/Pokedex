import styled from 'styled-components';
import pokedexContainer from '../../assets/images/pokedex-container2.png'

const StyledContainer = styled.div `
    background-image: url(${pokedexContainer});
    background-size: 100%;
    display: flex;
    width: 500px;
    height: 380px;
    background-size: cover;
`;
const StyledPokemonContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const StyledImage = styled.img`
  position: absolute;
  top: 36%;
  transform: translate(-440%, 0);
`;
const StyledName = styled.h2`
  position: absolute;
  top: 32%;
  transform: translate(-170px, 0);
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`;
const StyledHeight = styled.h2`
  position: absolute;
  top: 85%;
  transform: translate(-236px, 0);
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`;
const StyledWeight = styled.h2`
  position: absolute;
  top: 85%;
  transform: translate(-115px, 0);
  color: #fff;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

export {StyledContainer, StyledPokemonContainer, StyledImage, StyledName, StyledHeight, StyledWeight};
