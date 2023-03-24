import { useState, useEffect } from 'react';

export const useSticky = () => {

    const [stickyNavbar, setStickyNavbar] = useState<string>('nosticky-nav');
    const [offSetNavbar, setOffSetNavbar] = useState<string>('');
    const [stickySubMenu, SetStickySubMenu] = useState<string>('');


    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 54 ? setStickyNavbar('sticky-nav') : setStickyNavbar('nosticky-nav');
            windowHeight > 54 ? setOffSetNavbar('offsetnav') : setOffSetNavbar('');
        }
    };

    const stickSubMenu = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 54 ? SetStickySubMenu('submenu-sticky') : SetStickySubMenu('');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', stickSubMenu);
        return () => window.removeEventListener('scroll', stickSubMenu);
    }, []);


    return {
        stickyNavbar,
        stickySubMenu,
        offSetNavbar
    }
}
