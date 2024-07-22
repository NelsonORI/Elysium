import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <div className="d-flex flex-row">
            <NavLink to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '20px', padding: '10px' }}>
                <h4>Trending</h4>
            </NavLink>
            <NavLink to="/Movies" style={{ textDecoration: 'none', color: 'white', fontSize: '20px', padding: '10px' }}>
                <h4>Movies</h4>
            </NavLink>
            <NavLink to="/TvShow" style={{ textDecoration: 'none', color: 'white', fontSize: '20px', padding: '10px' }}>
                <h4>Tv shows</h4>
            </NavLink>
        </div>
    );
}

export default Navigation;
