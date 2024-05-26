import React from 'react';
import img from '../../../assets/home/chef-service.jpg'


const BitroBoss = () => {
    return (
        <div className='relative'>
            <img src={img} alt="" />
            <div className='absolute top-1/2 left-1/2 w-[690px] h-[233px] bg-white rounded-lg inset-0 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2'>
                <div>
                <h1 className='text-2xl text-center'>Bistro Boss</h1>
                <p className='px-20 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default BitroBoss;