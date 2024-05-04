'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {LuSettings,BsCart3} from '../../assets/icons/icons'
import Image from 'next/image';
import { usePathname } from 'next/navigation'

export default function Navbar(props) {
    let { navClass, navJustify } = props;
    let [isMenu, setisMenu] = useState(false);

    let [manu , setManu] = useState('');
    let pathname = usePathname();

    useEffect(()=>{
        setManu(pathname)

        function windowScroll() {
            const navbar = document.getElementById("topnav");
            if (
                document.body.scrollTop >= 50 ||
                document.documentElement.scrollTop >= 50
            ) {
                if (navbar !== null) {
                    navbar?.classList.add("nav-sticky");
                }
            } else {
                if (navbar !== null) {
                    navbar?.classList.remove("nav-sticky");
                }
            }
        }
        window.addEventListener("scroll", windowScroll);
        window.scrollTo(0, 0)
        return () => {
            window.removeEventListener('scroll', windowScroll);
        };

    },[setManu])


    const toggleMenu = () => {
        setisMenu(!isMenu);
        if (document.getElementById("navigation")) {
            const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
            anchorArray.forEach(element => {
                element.addEventListener('click', (elem) => {
                    const target = elem.target.getAttribute("href")
                    if (target !== "") {
                        if (elem.target.nextElementSibling) {
                            var submenu = elem.target.nextElementSibling.nextElementSibling;
                            submenu.classList.toggle('open');
                        }
                    }
                })
            });
        }
    };


    return (
        <nav id="topnav" className={`defaultscroll ${navClass === "nav-light" ? '' : navClass === "nav-sticky" ?
        'bg-white dark:bg-slate-900' : ''}`}>
        <div className="container relative">
            {
                navClass === "nav-light" ?
                    <Link className="logo" href="/">
                        <span className="inline-block dark:hidden">
                            <Image src='/images/logo-dark.png' className="l-dark" width={138} height={24}  alt="" />
                            <Image src='/images/logo-light.png' className="l-light" width={138} height={24} alt="" />
                        </span>
                        <Image src='/images/logo-light.png' width={138} height={24} className="hidden dark:inline-block" alt="" />
                    </Link>
                    :
                    <Link className="logo" href="/">
                        <Image src='/images/logo-dark.png' width={138} height={24} className="inline-block dark:hidden" alt="" />
                        <Image src='/images/logo-light.png' width={138} height={24} className="hidden dark:inline-block" alt="" />
                    </Link>
            }

            <div className="menu-extras">
                <div className="menu-item">
                    <Link href="#" className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                        <div className="lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </Link>
                </div>
            </div>

            <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>
                <ul className={`navigation-menu ${navClass} ${navJustify}`}>
                    <li className={manu === "/" || "" ? "active" : ""}><Link href="/" className="sub-menu-item">Home</Link></li>
                    <li className={manu === "/about-us" || "" ? "active" : ""}><Link href="/about-us" className="sub-menu-item">About Us</Link></li>
                    <li className={manu === "/services" || "" ? "active" : ""}><Link href="/services" className="sub-menu-item">Services</Link></li>
                    <li className={manu === "/careers" || "" ? "active" : ""}><Link href="/careers" className="sub-menu-item">Careers</Link></li>
                    <li className={manu === "/contact" || "" ? "active" : ""}><Link href="/contact" className="sub-menu-item">Contact</Link></li>
                </ul>
            </div>
        </div >
    </nav >
    )
}
