import { Link } from 'react-router-dom'
import s from './Card.module.scss'

const Card = ({post, image}) => {

  return (
        <div className={s.Card}>
          <Link to={`post/${post.id}`}>
            <img className='img img___fluid' src={image ? image.thumbnailUrl : ''} alt='post' />
          </Link>
          <div className={s.Card_block}>
            <h3 className={s.Card_title}>
              <Link to={`post/${post.id}`} className='link'>{post.title}</Link>
            </h3>
            <h4 className={s.Card_text}>{post.body}</h4>
          </div>
        </div>
  )
}

export default Card