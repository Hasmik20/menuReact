import {Routes, Route} from 'react-router-dom'
import Cuisine from './Cuisine'
import Home from './Home'
import Recipes from './Recipes';

import SearchedPage from './SearchedPage';

const Pages = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
       <Route path="/searched/:search" element={<SearchedPage />} />
       <Route path="/recipes/:name" element={<Recipes /> } />
    </Routes>
  
  
  )
}

export default Pages