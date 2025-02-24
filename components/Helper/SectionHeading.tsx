import React, { ReactNode } from 'react'

// define props type
type Props = {
    children: ReactNode
}

const SectionHeading: React.FC<Props> = ({children}) => {
  return (
    <h1 className='bg-blue-800 w-fit text-center px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl font-bold uppercase -rotate-6'>{children}</h1>
  );
}

export default SectionHeading