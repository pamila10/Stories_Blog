import s from './Section.module.scss'

const Section = ({title, children}) => {
  return (
    <section className={s.Section}>
      <h2 className={s.Section_h2}><span>{title}</span></h2>
      {children}
    </section>
  )
}

export default Section