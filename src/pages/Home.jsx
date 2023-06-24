import React, { useState } from 'react'
import Main from '../components/Main'
import Title from '../components/Title'
import Section from '../components/Section'
import FeedPosts from '../components/FeedPosts'
import ReactPaginate from 'react-paginate'

const Home = ({ posts, postsImg, searchResults, 
  searchResultsImg, postsPerPage, loading }) => {
  const [itemOffset, setItemOffset] = useState(0)

  const featuredPosts = posts.slice(0, 4)
  const featuredPostsImg = postsImg.slice(0, 4)

  const endOffset = itemOffset + postsPerPage
  
  const currentItems = searchResults.slice(itemOffset, endOffset)
  const currentPostsImg = searchResultsImg.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(searchResults.length / postsPerPage)
  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * postsPerPage) % searchResults.length
    setItemOffset(newOffset)
  }

  return (
    <Main>
      <Title title='Stories Blog' subtitle='Ad ipsum nostrud id excepteur consectetur veniam proident deserunt nulla est labore veniam.' />
        {loading ? (
          <div className='Loader'>
            <div className='Loader_spinner'></div>
          </div>
        ) : (
          <>
            {featuredPosts.length ? (
              <Section title='Latest Stories'>
              <div className='column'>
                  <FeedPosts posts={featuredPosts} postsImg={featuredPostsImg} />
                </div>
              </Section>
            ) : (
              <></>
            )}
            {posts.length ? (
            <Section title='All Stories'>
              <div className='column'>
                <FeedPosts posts={currentItems} postsImg={currentPostsImg} />
              </div>
                <div className='Pagination'>
                <ReactPaginate
                  breakLabel={'...'}
                  nextLabel={'Next'}
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={2}
                  pageCount={pageCount}
                  previousLabel={'Back'}
                  renderOnZeroPageCount={null}
                  containerClassName={'Pagination_list'}
                  activeClassName={'active'}
                />
                </div>
            </Section>
            ) : (
              <p>
                No posts to display.
              </p>
            )}
          </>
        )}
    </Main>
  )
}

export default Home