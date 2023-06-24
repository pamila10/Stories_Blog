import Main from '../components/Main'
import s from './Author.module.scss'
import cn from 'classnames'
import ava from './../assets/img/ava.png'

const Author = () => {
  return (
    <Main>
      <div className={s.AuthorPage}>
        <div className={cn('wrap', s.AuthorPage_wrap)}>
          <div className={s.AuthorPage_titleBl}>
            <h1 className={s.AuthorPage_title}>About author</h1>
          </div>
          <i>Aliquip dolore aliquip occaecat eu nulla fugiat proident.</i>
          <p className={s.AuthorPage_text}>
            Tempor laborum sit veniam excepteur consequat magna tempor mollit aliquip adipisicing cupidatat do laboris non. Officia consectetur aliquip irure aliqua non aliqua sit consequat laborum aliqua sunt ipsum tempor. Reprehenderit aute id dolor Lorem aliqua culpa et nostrud elit laborum sit voluptate dolore deserunt. Non ut sint cupidatat laboris ea nostrud est consectetur consequat exercitation ex Lorem commodo.
          </p>
        </div>
        <div className={cn('wrap', s.AuthorPage_wrap, s.AuthorPage_wrap___sm)}>
          <img className='img' src={ava} alt='ava' />
        </div>
      </div>
    </Main>
  )
}

export default Author