import './App.scss'
import Home from './pages/Home'
import PostPage from './pages/PostPage'
import Author from './pages/Author'
import NotFound from './pages/NotFound'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Layout from './Layout'
import { useState, useEffect } from 'react'
import api from './api/posts'
import NewPost from './components/NewPost'
import { nanoid } from 'nanoid'
import EditPost from './components/EditPost'

function App() {
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])
  const [postsImg, setPostsImg] = useState([])
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [searchResultsImg, setSearchResultsImg] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postImage, setPostImage] = useState('')
  const [postImageThumb, setPostImageThumb] = useState('')
  const [postBody, setPostBody] = useState('')
  const [editTitle, setEditTitle] = useState('')
  const [editPostImage, setEditPostImage] = useState('')
  const [editPostImageThumb, setEditPostImageThumb] = useState('')
  const [editBody, setEditBody] = useState('')

  let location = useLocation()
  const navigate = useNavigate()

  const getPosts = async (page, limit) => {
    try {
      function getPost() {
        return api.get(`/posts?_limit=${limit}&_start=${page}`)
      }
      
      function getPhoto() {
        return api.get(`/photos?_limit=${limit}&_start=${page}`)
      }
      
      const [postsList, photosList] = await Promise.all([getPost(), getPhoto()])

      let posts = postsList.data
      let photos = photosList.data

      setLoading(false)
      setPosts(posts)
      setPostsImg(photos)
    } catch (err) {
      setLoading(false)
      if (err.postsList) {
        console.log(err.postsList.status)
      } else if (err.photosList) {
        console.log(err.photosList.status)
      } else {
        console.log(`Error: ${err.message}`)
      }
    }
  }
 
  useEffect(() => {
    getPosts(0, 100)
  }, [])

  useEffect(() => {
    const filteredResults = posts.filter((post) =>
      ((post.title).toLowerCase()).includes(search.toLowerCase())
    )

    let filteredResultsImg = []
    filteredResults.map((post) => {
      let item = postsImg.filter((img) => {
        let res = img.id === post.id
        return res
      })
      return filteredResultsImg.push(item[0])
    })

    setSearchResults(filteredResults)
    setSearchResultsImg(filteredResultsImg)
    
  }, [posts, search, postsImg])

  const submitPost = async (e) => {
    e.preventDefault()
    const id = nanoid()
    const newPost = { id: id, title: postTitle, body: postBody }
    const newImg = { id: id, url: postImage, thumbnailUrl: postImageThumb }

    if(!postTitle || !postBody) {
      return false
    }

    try {
      function sendPost() {
        return api.post('/posts', newPost)
      }
      
      function sendPhoto() {
        return api.post(`/photos`, newImg)
      }
      
      const [newPostText, newPhoto] = await Promise.all([sendPost(), sendPhoto()])
      const allPosts = [newPostText.data, ...posts]
      const allImages = [newPhoto.data, ...postsImg]

      setPosts(allPosts)
      setPostsImg(allImages)
      setPostTitle('')
      setPostImage('')
      setPostImageThumb('')
      setPostBody('')

      navigate('/')
    } catch (err) {
      console.log(`Error: ${err.message}`)
    }
  }

  const editPost = async (id) => {

    const updatedPost = { id: id, title: editTitle, body: editBody }
    const updatedImage = { id: id, url: editPostImage, thumbnailUrl: editPostImageThumb}
    
    if(!editTitle) {
      return false
    }

    try {
      function editPost() {
        return api.put(`/posts/${id}`, updatedPost)
      }
      
      function editPhoto() {
        return api.put(`/photos/${id}`, updatedImage)
      }
      
      const [editedPost, editedPhoto] = await Promise.all([editPost(), editPhoto()])
      
      setPosts(posts.map(post => post.id === id ? { ...editedPost.data } : post))
      setPostsImg(postsImg.map(img => img.id === id ? { ...editedPhoto.data } : img))
      
      setEditTitle('')
      setPostImage('')
      setPostImageThumb('')
      setEditBody('')

      navigate(`/post/${id}`)
    } catch (err) {
      console.log(`Error: ${err.message}`)
    }
  }

  const deletePost = async (id) => {
    try {
      function deletePost() {
        return api.delete(`/posts/${id}`)
      }
      
      function deletePhoto() {
        return api.delete(`/photos/${id}`)
      }

      const postsList = posts.filter(post => post.id !== id)
      const imagesList = postsImg.filter(img => img.id !== id)

      setPosts(postsList)
      setPostsImg(imagesList)

      await Promise.all([deletePost(), deletePhoto()])
      navigate('/')
    } catch (err) {
      console.log(`Error: ${err.message}`)
    }
  }

  return (
    <Routes>
      <Route path='/' element={<Layout 
        search={search} setSearch={setSearch} location={location} />}>
        <Route index element={
          <Home loading={loading} posts={posts} searchResults={searchResults} 
          postsImg={postsImg} searchResultsImg={searchResultsImg}
          postsPerPage={12} />
        } />
        <Route path='post'>
          <Route index element={<NewPost
            submitPost={submitPost}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
            postImage={postImage}
            setPostImage={setPostImage}
            postImageThumb={postImageThumb}
            setPostImageThumb={setPostImageThumb}
          />} />
          <Route path=':id/edit' element={<EditPost
            posts={posts}
            postsImg={postsImg}
            editPost={editPost}
            editTitle={editTitle}
            setEditTitle={setEditTitle}
            editPostImage={editPostImage}
            setEditPostImage={setEditPostImage}
            editPostImageThumb={editPostImageThumb}
            setEditPostImageThumb={setEditPostImageThumb}
            editBody={editBody}
            setEditBody={setEditBody}
          />} />
          <Route path=':id' element={<PostPage
            posts={posts} postsImg={postsImg} 
            deletePost={deletePost} 
            />} />
        </Route>
        <Route path='author' element={<Author />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
