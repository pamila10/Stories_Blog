import s from './Title.module.scss'

const Title = ({title, subtitle = ''}) => {
  return (
    <div className={s.Title}>
      <h1 className={s.Title_h1}>{title}</h1>
      <p className={s.Title_subtitle}>{subtitle}</p>
    </div>
  )
}

export default Title