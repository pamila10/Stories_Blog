import s from './SearchForm.module.scss'
import cn from 'classnames'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchForm = ({ search, setSearch }) => {

  return (
    <form className={cn(s.Form, s.Form___inline)}>
      <input className={s.Form_control} 
        type='text' placeholder='Search' 
        id='search' value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <span className={s.Form_searchIcon}><AiOutlineSearch /></span>
    </form>
  )
}

export default SearchForm