import { NavLink } from 'react-router-dom';

function Header () {
    return (
        <div>
            <br/><NavLink to='/ProductsPage' >ProductsPage</NavLink>
            <br/><NavLink to='/StoragePage' >StoragePage</NavLink>

        </div>
    )
}

export default Header;