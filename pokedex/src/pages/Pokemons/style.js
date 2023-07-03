import styled from 'styled-components';
import pokedexContainer2 from '../../assets/images/pokedex-container2.png'
import pokedexContainer1 from '../../assets/images/pokedex-container1.jpg'

const StyledMain = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 5%;
  margin-top: 0.5%;
`;

const StyledSection = styled.section `
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

const StyledContainer = styled.div`
  background-image: url(${props => props.isInactive ? pokedexContainer1 : pokedexContainer2});
  background-size: 100%;
  display: flex;
  width: ${props => props.isInactive ? "300px" : "500px"};
  height: ${props => props.isInactive ? "450px" : "380px"};
  background-size: cover;
  margin-top: ${props => props.isInactive ? "20px" : "auto"};;
  border-radius: 10px;
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
  top: (${props => props.isInactive ? "30%" : "36%"});
  transform: translate(${props => props.isInactive ? "-200%, 0" : "-440%, 0"});
  opacity: ${props => props.isInactive ? '0' : 'auto'};
`;

const StyledName = styled.h2`
  position: absolute;
  top: 29.4%;
  transform: translate(-170px, 0); 
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  opacity: ${props => props.isInactive ? '0' : 'auto'};
`;
const StyledHeight = styled.h2`
  position: absolute;
  top: 85%;
  transform: translate(-236px, 0);
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  opacity: ${props => props.isInactive ? '0' : 'auto'};
`;
const StyledWeight = styled.h2`
  position: absolute;
  top: 85%;
  transform: translate(-115px, 0);
  color: #fff;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  opacity: ${props => props.isInactive ? '0' : 'auto'};
`;

export { StyledMain, StyledSection, StyledContainer, StyledPokemonContainer, StyledImage, StyledName, StyledHeight, StyledWeight };
