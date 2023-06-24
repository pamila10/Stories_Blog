import Main from '../components/Main'
import { Link, useParams } from 'react-router-dom'
import s from './PostPage.module.scss'
import cn from 'classnames'
import Mailto from '../components/Mailto'
import { MdModeEditOutline, MdDelete } from 'react-icons/md'

const Post = ({ posts, postsImg, deletePost }) => {
  const { id } = useParams()
  const post = posts.find((post) => post.id.toString() === id)
  const image = postsImg.find((img) => {
    let imgId = img.id
    if(imgId > 100) {
      imgId = imgId - 4900
      return imgId.toString() === id
    } else {
      return imgId.toString() === id
    }
  })

  return (
    <Main>
      <div className={s.PostPage}>
        <div className={cn('wrap', s.PostPage_wrap)}>
          <article className={s.Article}>
            {post && (
              <>
                <div className={s.Article_author}>
                  <address className={s.Article_authorAddress}>
                    <Link to='/author' className={cn('link', 'link___dark', s.Article_authorName)}>Author name</Link>
                    <Mailto mailto='mailto:no-reply@example.com' label='no-reply@example.com' />
                  </address>
                </div>
                <div className={s.Article_titleBl}>
                  <h1 className={s.Article_title}>{post.title}</h1>
                </div>
                <img
                  className='img img___fluid'
                  src={image ? image.url : ''}
                  alt='post'
                ></img>
                <h4 className={s.Article_text}>{post.body}</h4>
                <Link to={`edit`}>
                  <button className='btn btn___def' title='Edit post'><MdModeEditOutline/></button>
                </Link>
                <button className='btn btn___def' title='Delete Post' 
                  onClick={() => deletePost(post.id)}>
                  <MdDelete/>
                </button>
              </>
            )}
            {!post && (
              <>
                <h2>Post Not Found</h2>
                <p>
                  <Link to='/Stories_Blog'>Visit Our Homepage</Link>
                </p>
              </>
            )}
          </article>
        </div>
      </div>
    </Main>
  )
}

export default Post
