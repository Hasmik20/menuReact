import {useEffect, useState} from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import {Link} from 'react-router-dom'

const Popular = () => {
  const [popular, setPopular] = useState([])

  const fetchData = async () => {
    //  for localStorage, not fetch everyTime
    const storage = localStorage.getItem('popularItem')
    if (storage) {
      setPopular(JSON.parse(storage))
    } else {
       const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
      const data = await res.json()
      localStorage.setItem("popularItem",JSON.stringify(data.recipes))
      setPopular(data.recipes)
    
    }
   
  
}

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>
       <Splide  options={ {
         perPage:4,
         arrows: false,
        pagination:false,
        gap:"3rem",
        drag:'free'
  } }>
            {
          popular.map(item => (
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
  font-size: 1.3vw;
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
export default Popular