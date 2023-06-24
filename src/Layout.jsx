import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'

const Layout = ({ search, setSearch, location }) => {
    return (
        <div className='App'>
          <div className='wrap wrap___h100'>
            <Nav search={search} setSearch={setSearch} location={location}/>
            <Outlet />
            <Footer />
          </div>
        </div>
    )
}

export default Layout