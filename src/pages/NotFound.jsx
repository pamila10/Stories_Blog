import { Link } from 'react-router-dom'
import Main from '../components/Main'

const NotFound = () => {
  return (
    <Main>
      <h2 className='title'>Page Not Found</h2>
      <span>
          <Link to='/Stories_Blog'>Visit Our Homepage</Link>
      </span>
    </Main>
  )
}

export default NotFound