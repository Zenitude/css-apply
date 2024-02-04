import { useState } from "react";

export default function Footer() {
    const [ year ] = useState(new Date().getFullYear());

    return (
        <footer>
            <p>{year} - CSS Apply</p>
        </footer>
    )
}
