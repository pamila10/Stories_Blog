import Main from '../components/Main'
import s from './NewPost.module.scss'

const NewPost = ({
  submitPost, postTitle, setPostTitle, 
  postBody, setPostBody, postImage, setPostImage,
  postImageThumb, setPostImageThumb
}) => {
  return (
    <Main>
      <div className={s.NewPost}>
        <h2 className={s.NewPost_title}>New Post</h2>
        <form className='Form' onSubmit={submitPost}>
          <div className='Form_fieldWrap'>
            <label htmlFor='postTitle' className='Form_label'>Title:</label>
            <input
                id='postTitle'
                className='Form_field'
                name='postTitle'
                type='text'
                required
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
            />
          </div>
          <div className='Form_fieldWrap'>
            <label htmlFor='postImage' className='Form_label'>Image URL:</label>
            <input 
                id='postImage' 
                className='Form_field'
                name='postImage' 
                type='text'
                value={postImage}
                onChange={(e) => setPostImage(e.target.value)}
            />
          </div>
          <div className='Form_fieldWrap'>
            <label htmlFor='postImageThumb' className='Form_label'>Thumbnail URL:</label>
            <input 
                id='postImageThumb' 
                className='Form_field'
                name='postImageThumb' 
                type='text'
                value={postImageThumb}
                onChange={(e) => setPostImageThumb(e.target.value)}
            />
          </div>
          <div className='Form_fieldWrap'>
            <label htmlFor='postBody' className='Form_label'>Post:</label>
            <textarea
                id='postBody'
                className='Form_field Form_field___textarea'
                name='postBody'
                required
                value={postBody}
                onChange={(e) => setPostBody(e.target.value)}
            />
          </div>
          <button type='submit' className='btn btn___submit Form_submitBtn'>Submit</button>
        </form>
      </div>
    </Main>
  )
}

export default NewPost