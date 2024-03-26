import { useEffect, useState } from 'react';

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
    });

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: typeof window !== 'undefined' ? window.innerWidth : 0,
                height: typeof window !== 'undefined' ? window.innerHeight : 0,
            });
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    return screenSize;
};

export default useScreenSize;
