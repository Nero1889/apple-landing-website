import {navLinks} from "../constants/index.js";

function NavBar() {
    return (
        <header>
            <nav>
                <img src="/logo.svg" alt="Apple Logo" draggable="false"/>
                <ul>
                    {navLinks.map(({label}) => (
                        <li key={label}>
                            <a href={label}>{label}</a>
                        </li>
                    ))}
                </ul>
                
                <div className="flex-center gap-3">
                    <button>
                        <img src="/search.svg" alt="Search" draggable="false"/>
                    </button>
                    
                    <button>
                        <img src="/cart.svg" alt="Cart" draggable="false"/>
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
