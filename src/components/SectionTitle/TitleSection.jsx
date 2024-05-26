import React from 'react';

const TitleSection = ({subHeading, heading}) => {
    return (
        <div className='w-3/12 mx-auto'>
            <div className='text-center mt-12 mb-12'>
            <p className='text-yellow-500'>{subHeading}</p>
            <p className='text-3xl border-y-4 py-4'>{heading}</p>
            </div>
        </div>
    );
};

export default TitleSection;