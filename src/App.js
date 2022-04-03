import './App.css';
import { useEffect } from 'react'
import {BrowserRouter,Link} from 'react-router-dom'
import Pages from './pages/Pages';
import Category from './components/Category';
import Search from './components/Search';
import { GiForkKnifeSpoon } from "react-icons/gi";
import styled from 'styled-components';
import Footer from './components/Footer';
import { BsEmojiSmileUpsideDown } from "react-icons/bs";

function App() {
 
  
  return (
    <div className="App">
      <BrowserRouter >
        <Nav>
          <GiForkKnifeSpoon />
          <Logo to={'/'} > what cook today 
            <BsEmojiSmileUpsideDown />
            </Logo >
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
      <Footer />
    </div>
  );
}
const Logo = styled(Link)`
text-decoration:none;
font-size:1rem;
margin-left:1rem;
font-family: 'Send Flowers', cursive;
 `
const Nav = styled.div`
padding: 4rem 0rem;
 display:flex;
 justify-content:flex-start;
 align-item:center;
 svg{
   font-size:1.8rem;
   margin-left:.5rem;
 }
`
export default App;
