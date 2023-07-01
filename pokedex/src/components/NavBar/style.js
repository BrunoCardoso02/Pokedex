import styled from 'styled-components';

const Cabecalho = styled.header`
    position: relative;
    width: 100%;
    height: 12vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
`
const Logo = styled.img`
    position: relative;
    height: 100px;
    width: 300px;
    &:hover {
        cursor: pointer;
    }   
`
const SwitchButton = styled.button`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  background-color: ${(props) => (props.active ? '#2196F3' : '#ccc')};
  border-radius: 34px;
  transition: background-color 0.3s;
  cursor: pointer;
`;

const SwitchSlider = styled.span`
  position: absolute;
  top: 1px;
  left: 2px;
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 50%;
  transition: transform 0.3s;
  transform: ${(props) => (props.active ? 'translateX(26px)' : 'translateX(0)')};
`;

export {Cabecalho, Logo, SwitchButton, SwitchSlider}