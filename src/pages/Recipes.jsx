import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const Recipes = () => {
  const [details, setDetails] = useState({})
  const [activeClass, setActiveClass] = useState("information")
  let params = useParams()
  
  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const dataDetail = await data.json()
    setDetails(dataDetail)
    console.log(dataDetail)
  }

  useEffect(() => {
    fetchDetails()
  }, [params.name])
  
  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button
          className={activeClass === "information" ? "active" : ""}
          onClick={() => setActiveClass("information")}>Information</Button>
        <Button
          className={activeClass === "ingredients" ? "active" : ""}
          onClick={() => setActiveClass("ingredients")}>Ingredients</Button>
        {
          activeClass === "information" &&
          <div>
          <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
          <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
        </div>
        }
        
        {
          activeClass === "ingredients" && 
          <ul>
          {details.extendedIngredients?.map((item) => (
            <li key={item.id}>
              {item.original}
            </li>
          ))}
        </ul>
       }
        
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  display:flex;
  margin-top:10rem;
  margin-bottom:5rem;
   .active{
   background-color: white;
   color:black;
 }
  h2{
    margin-bottom:2rem;
  }
  li{
    ling-height:2.5rem;
    font-size:1.2rem;
  }
  ul{
    margin-top:2rem;
  }
  p{
    font-size:1.2rem;
  }
 
`
const Button = styled.button`
  padding:1rem 2rem;
color: white;
 background-color: black;
 border:1px solid black;
 margin-right:2rem;
 cursor:pointer;
`

const Info = styled.div`
 margin-left:2rem; 
` 
export default Recipes