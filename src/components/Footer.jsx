import s from './Footer.module.scss'

const Footer = () => {
  const today = new Date()
  return (
    <footer className={s.Footer}>
      <div className='container'>
        <div className={s.Footer_wrap}>
          <p className={s.Footer_copy}>Copyright &copy; {today.getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer