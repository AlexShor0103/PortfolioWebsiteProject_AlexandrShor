import React from "react";

function Home() {
    return(
        <div>
            <h1>This is the Home Page</h1>
            <ul>
                <li>
                    <a href="/About"> about</a>
                </li>
                <li>
                    <a href="/Resume"> Resume</a>
                </li>
                <li>
                    <a href="/Projects"> Projects</a>
                </li>
            </ul>
        </div>
    )
}

export default Home;