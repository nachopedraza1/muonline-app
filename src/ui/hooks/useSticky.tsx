import { useState, useEffect } from 'react';

export const useSticky = () => {

    const [stickyClassSub, setstickyClassSub] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 54 ? setstickyClassSub('submenu-sticky') : setstickyClassSub('');
        }
    };

    return {
        stickyClassSub,
    }
}
