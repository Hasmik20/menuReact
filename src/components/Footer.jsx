import styled from "styled-components";

const Footer = () => {
 
  return (  
    <FooterStyle>
    <p>&copy; 2022, <i>  Aghayan Design Center</i></p>
  </FooterStyle>
  );
}
 
const FooterStyle = styled.footer`
  width: 100%;
  text-align:center;
  padding-bottom: 15px;
 `
export default Footer;