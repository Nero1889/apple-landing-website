import {footerLinks} from "../constants/index.js";

function Footer() {
    return (
        <footer>
            <div className="info">
                <p>More ways to shop: Find an Apple Store or other retailer near you.
                Or call 000800 040 1966.</p>
                <img src="/logo.svg" alt ="Apple logo" draggable="false"/>
            </div>

            <hr/>

            <div className="links">
                <p>Alexis Luna - Copyright © 2024 Apple Inc. All rights reserved.</p>
                <ul>
                    {footerLinks.map(({label, link}) => (
                        <li key={label}>
                            <a href={link}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}
export default Footer;
