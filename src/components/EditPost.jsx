import React, { useEffect } from 'react'
import Main from '../components/Main'
import { Link, useParams } from 'react-router-dom'
import s from './EditPost.module.scss'

const EditPost = ({ posts, postsImg, editPost, editTitle, 
  editPostImage, setEditPostImage, 
  editPostImageThumb, setEditPostImageThumb, 
  setEditTitle, editBody, setEditBody}) => {
  const { id } = useParams()
  const post = posts.find((post) => post.id.toString() === id)
  const photo = postsImg.find((photo) => photo.id.toString() === id)

  useEffect(() => {
    if (post) {
      setEditTitle(post.title)
      setEditBody(post.body)
    }
  }, [post, setEditTitle, setEditBody])


  useEffect(() => {
    if (photo) {
      setEditPostImage(photo.url)
      setEditPostImageThumb(photo.thumbnailUrl)
    }
  }, [photo, setEditPostImage, setEditPostImageThumb])

  return (
    <Main>
      {post && (
        <>
          <div className={s.EditPost}>
            <h2 className={s.EditPost_title}>Edit Post</h2>
            <form className='Form' onSubmit={(e) => e.preventDefault()}>
              <div className='Form_fieldWrap'>
                <label htmlFor='postTitle' className='Form_label'>Title:</label>
                <input
                    id='postTitle'
                    className='Form_field'
                    type='text'
                    required
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                />
              </div>
              <div className='Form_fieldWrap'>
                <label htmlFor='postImage' className='Form_label'>Image URL:</label>
                <input 
                    id='postImage'
                    className='Form_field'
                    name='postImage' 
                    type='text'
                    value={editPostImage}
                    onChange={(e) => setEditPostImage(e.target.value)}
                />
              </div>
              <div className='Form_fieldWrap'>
                <label htmlFor='postImageThumb' className='Form_label'>Thumbnail URL:</label>
                <input 
                    id='postImageThumb'
                    className='Form_field'
                    name='postImageThumb' 
                    type='text'
                    value={editPostImageThumb}
                    onChange={(e) => setEditPostImageThumb(e.target.value)}
                />
              </div>
              <div className='Form_fieldWrap'>
                <label htmlFor='postBody' className='Form_label'>Post:</label>
                <textarea
                    id='postBody'
                    className='Form_field Form_field___textarea'
                    required
                    value={editBody}
                    onChange={(e) => setEditBody(e.target.value)}
                />
              </div>
                <button type='submit' 
                  onClick={() => editPost(post.id)}
                  className='btn btn___submit Form_submitBtn'
                  >Submit</button>
            </form>
          </div>
        </>
      )}
      {!post &&
          <>
              <h2>Post Not Found</h2>
              <p>
                  <Link to='/'>Visit Our Homepage</Link>
              </p>
          </>
      }
    </Main>
  )
}

export default EditPost
