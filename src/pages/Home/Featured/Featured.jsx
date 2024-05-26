import React from 'react';
import TitleSection from '../../../components/SectionTitle/TitleSection';
import image from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='background-image pt-8 bg-fixed'>
            <TitleSection
             subHeading='check it out.....'
             heading='Featured Menu'
            ></TitleSection>

            <div className='lg:flex justify-center items-center gap-8 py-20 px-36 text-white'>
                <div>
                <img src={image} alt="" />
                </div>
                <div>
                <p >Aug 3, 2024</p>
                <p className='uppercase '>Where can I get some?</p>
                <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ipsum iure modi et aliquam pariatur omnis commodi. Sapiente eius sit repudiandae iure ipsa corporis minima maxime. Assumenda suscipit nihil corrupti.</p>
                <button className='btn btn-outline border-0 border-b-4'>ORDER NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;