import { NavLink } from 'react-router-dom';
import { useStudents } from './StudentContext';

function Header() {
    const { favourites } = useStudents();

    return (
        <header className="site-header">
            <div className="header-inner">
                <NavLink className="brand" to="/">
                    <span className="brand-mark">FS</span>
                    <span>Favourite Students</span>
                </NavLink>
                <nav className="nav-links" aria-label="Primary navigation">
                    <NavLink end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/">
                        All students
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/favourites">
                        Favourites <span className="count-badge">{favourites.length}</span>
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;
