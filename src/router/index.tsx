import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Offline from '../views/Offline'
import Home from '../views/Home'
import NotFound from '../views/404'
import BeerListPage from '../views/BeerList'
import Beer from '../views/Beer'
import Footer from '../components/common/Footer'
import Menu from '../components/common/Menu'

const Router = () => (
  <BrowserRouter>
    <Menu>
      <Offline />
      <Routes>
        <Route index element={<Home />} />
        <Route path="beer">
          <Route index element={<BeerListPage />} />
          <Route path=":id" element={<Beer />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Menu>
  </BrowserRouter>
)

export default Router
