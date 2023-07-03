import React, { useState } from 'react';
import { Cabecalho, Logo, SwitchButton, SwitchSlider } from '../NavBar/style';
import PokemonLogo from '../../assets/images/pokemon-logo.png';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import{ ATIVAR_POKEDEX, ativarPokedex} from '../../redux/actions/index'



export default function NavBar() {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch()

  const {ativado} = useSelector(rootReducer => rootReducer.ativacaoPokedex)
  console.log({ativado})

  const toggleSwitch = () => {
    setIsActive(!isActive);
    dispatch(
      ativarPokedex()
    )
  };


  return (
    <Cabecalho>
      <Logo src={PokemonLogo} alt="" />
      <SwitchButton active={isActive} onClick={toggleSwitch}>
        <SwitchSlider active={isActive} />
      </SwitchButton>
    </Cabecalho>
  );
}
