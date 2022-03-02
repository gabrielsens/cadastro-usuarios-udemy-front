import './style.css'

import logo from '../../../assets/imgs/logo.png';

export default function Logo() {
    return (
        <aside className='logo'>
            <a href='/'>
                <img src={logo} alt="Logo" />
            </a>
        </aside>
    )
}