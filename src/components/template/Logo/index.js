import { Link } from 'react-router-dom';

import './style.css'

import logo from '../../../assets/imgs/logo.png';

export default function Logo() {
    return (
        <aside className='logo'>
            <Link to='/'>
                <img src={logo} alt="Logo" />
            </Link>
        </aside>
    )
}