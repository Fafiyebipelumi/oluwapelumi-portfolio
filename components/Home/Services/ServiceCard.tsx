import React from 'react'

// efine Props Type
type Props = {
        service: {
        id: number;
        title: string;
        description: string;
        icon: string;
    }
}

const ServiceCard: React.FC<Props> = ({service}) => {
  return (
    <div className='shadow-2xl p-6 rounded-lg bg-[#814ced]'>
        <h1 className='mt-4 text-lg font-bold text-gray-100'>{service.title}</h1>
        <p className='mt-3 text-sm text-white text-opacity-80'>{service.description}</p>
    </div>
  )
}

export default ServiceCard