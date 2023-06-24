import Card from './Card'

const FeedPosts = ({posts, postsImg}) => {

  return (
    <>
      {posts && posts.map((post, i) => (
        <Card key={post.id} post={post} image={postsImg[i]} />
      ))}
    </>
  )
}

export default FeedPosts