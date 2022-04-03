import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const Category = () => {
  return (
    <List>
      <SLink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={'/cuisine/Japanese'}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
      
    </List>
  )
}

const List = styled.div`
  display:flex;
  justify-content:center;
  margin: 2rem 0;
`
const SLink = styled(NavLink)`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:5rem;
  width:5rem;
  border-radius:50%;
  background-color: rgb(105, 98, 98);
  margin-right:1.5rem;
  cursor:pointer;
  transform:scale(0.8);
  text-align: center;

 h4{
  color: white;
  font-size:0.8rem;
 }
 svg{
   font-size:1.5rem;
   color:white;
   margin-bottom:.5rem;
 }

 &.active{
   background-color: rgb(151, 121, 67);
 }
`
export default Category