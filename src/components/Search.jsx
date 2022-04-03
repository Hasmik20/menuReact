import { useState } from 'react'
import styled from 'styled-components'
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [input, setInput] = useState("")
  const navigate = useNavigate()
  
  const handelChange = (e) => {
    setInput(e.target.value)
  }
  const handelSubmit = (e) => {
    e.preventDefault()
   navigate('/searched/' + input)
  }
    
  return (
    <FormStyle onSubmit={(handelSubmit)}>
      <div>
        <FaSearch/>
        <input
          onChange={handelChange}
          type="text" value={input}
         placeholder="eg.Chocolate"
        />
      </div>
   
   </FormStyle>
  )
}

const FormStyle = styled.form`
  margin: 0rem auto;
  
    div{
       position:relative;
       width:100%;
    }
   input{
    border:none;
    outline:none;
    border-radius:2rem;
    background-color: rgb(105, 98, 98);
    font-size:1rem;
    color:white;
    width:100%;
    padding: 1rem 3rem;
  }
 svg{
   position:absolute;
   top:50%;
   left:0;
   transform:translate(100%, -50%);
   color:white;
   font-size:1.2rem;
 }
  
`
export default Search