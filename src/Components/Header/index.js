import React, { useEffect, useState, useRef } from 'react';

export default function Header({scrollY, scrollToSection, contactOnScreen, newSectionOnScreen, aboutOnScreen}) {

    return (
        <header className={`sticky-header ${scrollY > 0 ? 'sticky' : ''}`}>
            <nav>
                <ul>
                    <li onClick={() => scrollToSection('about')} style={{
                        fontWeight: aboutOnScreen ? "bold" : "normal",
                    }}>About</li>
                    <li onClick={() => scrollToSection('contact')} style={{
                        fontWeight: contactOnScreen ? "bold" : "normal",
                    }}>Contact</li>
                    <li onClick={() => scrollToSection('newSec')} style={{
                        fontWeight: newSectionOnScreen ? "bold" : "normal",
                    }}>New</li>


                </ul>

            </nav>
        </header>

    )
}
