import React from "react";
import "./Help.css";

function Help() {
    return (
        <section className="help-section">
            <div className="container">
                <h1 className="main-title">Help Page</h1>
                <div className="toc">
                    <h2 className="centeredtext">Table of contents:</h2>
                    <ul className="toc-list">
                        <li className="toc-item">
                            <a href="/docs" className="toc-link">
                                Documentation
                            </a>
                        </li>
                        <li className="toc-item">
                            <a
                                href="https://github.com/TENTHER101/TEPL/discussions"
                                className="toc-link"
                            >
                                Community
                            </a>
                        </li>
                        <li className="toc-item">
                            <a href="#Tutorials" className="toc-link">
                                Tutorials
                            </a>
                        </li>
                        <li className="toc-item">
                            <a href="#FAQ" className="toc-link">
                                FAQ
                            </a>
                        </li>
                        <li className="toc-item">
                            <a href="/about#contact-us" className="toc-link">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Help;
