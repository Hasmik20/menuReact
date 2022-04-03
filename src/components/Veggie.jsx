import {useEffect, useState} from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import {Link} from 'react-router-dom'

const Veggie = () => {
  const [vegetable, setVegetable] = useState([])

  const fetchVegetable = async () => {
    //  for localStorage, not fetch everyTime
    const storage = localStorage.getItem('vegetableItem')
    if (storage) {
      setVegetable(JSON.parse(storage))
    } else {
       const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
      const data = await res.json()
      localStorage.setItem("vegetableItem",JSON.stringify(data.recipes))
      setVegetable(data.recipes)
    
    }
   
  
}

  useEffect(() => {
    fetchVegetable()
  }, [])
  return (
    <div>
      <Wrapper>
        <h3>Our Vegetarian Picks</h3>
          
      
       <Splide  options={ {
         perPage:3,
         arrows: false,
        pagination:false,
        gap:"3rem",
          drag: 'free',
        }}>
       
             {
          vegetable.map(item => (
            <SplideSlide key={item.id} >
              <Card >
                <Link to={'/recipes/' + item.id}>
                   <p>{item.title}</p>
                   <img src={item.image} alt={item.title} />
                    <BgColor />
                 </Link>
            </Card>
            </SplideSlide>
           
          ))
        }
 
          </Splide>
      </Wrapper>

    </div>
  )
}

const Wrapper = styled.div`
  margin:4rem 0rem;
 
`

const Card = styled.div`
  min-height:15rem;
  border-radius:2rem;
  overflow: hidden;
  position: relative;
   @media (max-width: 768px) {
   min-height:10rem;
  }
   
 img{
   border-radius:2rem;
   position:absolute;
   top:0;
   width:100%;
   height:100%;
   object-fit:cover
 }
p{
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: 5%;
  transform: translate(-50%, 0);
  width: 100%;
  color: white;
  text-align: center;
  font-size: 1.5vw;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
}

`
const BgColor = styled.div`
 position:absolute;
  width: 100%;
  height:100%;
  background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
  z-index:3;
`


export default Veggie
