import { Link } from 'react-router-dom';

import './style.css';

export default function Nav() {
    return (
        <aside className='menu-area'>
            <nav className="menu">
                <Link to="/">
                    <i className='fa fa-home'></i> Início
                </Link>
                <Link to="/users">
                    <i className='fa fa-users'></i> Usuários
                </Link>
            </nav>
        </aside>
    )
}