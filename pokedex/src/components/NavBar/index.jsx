import React, { useState } from 'react';
import { Cabecalho, Logo, SwitchButton, SwitchSlider } from '../NavBar/style';
import PokemonLogo from '../../assets/images/pokemon-logo.png';

export default function NavBar() {
  const [isActive, setIsActive] = useState(false);

  const toggleSwitch = () => {
    setIsActive(!isActive);
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
