import { footerLinks } from "../constants";

export function Footer() {
    return (
        <footer>
            <div className="info">
                <p>
                    More ways to shop: Browse online, visit an Apple Store,
                    or find an authorized Apple reseller near you.
                </p>
                <img src="/logo.svg" />
            </div>
            <hr />
            <div className="links">
                <p>
                    © 2025 Imainigination Software Group.
                    All rights reserved. Designed with care for every user.
                </p>
                <ul>
                    {footerLinks.map(({ label, link }) => (
                        <li key={label}>
                            <a href={link}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}
