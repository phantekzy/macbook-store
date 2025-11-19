/* Import section */
import { navLinks } from "../constants";
/* Navigation bar component */
export function NavBar() {
    return (
        <header>
            <nav>
                {/* logo image */}
                <img src="/logo.svg" alt="logo" />
                {/* Navigation lists */}
                <ul>
                    {
                        navLinks.map(({ label }, key) => (
                            <li key={key}>
                                <a href={label}>{label}</a>
                            </li>
                        ))
                    }
                </ul>

                <div className="flex-center gap-3">
                    <button>
                        <img src="/search.svg" alt="search button" />
                    </button>
                    <button>
                        <img src="/cart.svg" alt="cart button" />
                    </button>
                </div>

            </nav>
        </header>
    )
}
