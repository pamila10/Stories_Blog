import { Link } from 'react-router-dom'

const Mailto = ({ mailto, label }) => {
    return (
        <Link to='#' className='link link___dark'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    )
}

export default Mailto