'use client';

import React, {useState, useEffect} from 'react'
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {

    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false);
            }
        }

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

  return (
    <div className='fixed bottom-4 animate-pulse right-4'>
        {isVisible && <FaArrowUp onClick={scrollToTop} className='bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none' />}
    </div>
  )
}

export default ScrollToTop