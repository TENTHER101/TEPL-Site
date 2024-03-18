import React from "react";
import "./Docs.css";

const codesnip = `OUTPUT "Enter a number: " AWAIT
INPUT EXPECTING NUM 
SET num TO INPUT
IF num % 2 == 0? THEN 
    OUTPUT num+" is an even number!" 
ELSE THEN
    OUTPUT num+" is an odd number!" 
END IF`;

function Docs() {
    return (
        <section class="docs-section">
            <div class="container">
                <h1 class="main-title">TEPL Documentation</h1>

                <div class="warning">
                    <p>
                        ⚠️ This interpreter is currently in development, so it
                        might have breaking changes with each update.
                    </p>
                </div>

                <div class="feedback">
                    <p>
                        💬 Got some questions? Ask it                <a href="https://github.com/TENTHER101/TEPL/discussions/categories/q-a">here</a>                    and we'll be glad to respond!
                    </p>
                </div>

                <pre class="code-sample">
                    <code>{codesnip}</code>
                </pre>

                <p class="main-info">
                    TEPL is a scripting programming language in development that
                    strives to make coding simple, easy, and fun to learn. It
                    comes with many features, including:
                </p>

                <div class="toc">
                    <h2 class="toc-title">Table of Contents</h2>
                    <ul class="toc-list">
                        <li>
                            <a href="#intro">Introduction</a>
                        </li>
                        <li>
                            <a href="#install">Installation</a>
                        </li>
                        <li>
                            <a href="#files-and-the-code-panel">
                                Files and the Code Panel
                            </a>
                        </li>
                        <li>
                            <a href="#output">OUTPUT</a>
                        </li>
                    </ul>
                </div>
                <div id="intro" class="section-content">
                    <h3>Introduction</h3>
                    <p>
                        Welcome fellow programmers or soon-to-be programmers!
                        This guide aims to thoroughly explain how TEPL works.
                        TEPL is a basic programming language with many features
                        designed to teach the basic concepts of programming. It
                        is especially useful for beginners and teachers looking
                        to introduce programming in a clear and simple manner.
                    </p>
                </div>

                <div id="install" class="section-content">
                    <h3>Installation</h3>
                    <p>
                        If you wish to view the source code and edit it,
                        download the <code>lexer.py</code>,
                        <code>parser.py</code>, <code>interpreter.py</code>, and
                        <code>main.py</code> files. You can also download the
                        executable file
                        <a href="https://tepl.vercel.app/download.html">here</a>
                        .
                    </p>
                    <pre>pip install -r requirements.txt</pre>
                    <p>
                        To start the program, run the <code>main.py</code> file.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Docs;
