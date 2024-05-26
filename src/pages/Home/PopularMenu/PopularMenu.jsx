import React, { useEffect, useState } from 'react';
import TitleSection from '../../../components/SectionTitle/TitleSection';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setItems(popularItems);
            })
    }, [])


    return (
        <div>
            <section className='mb-12'>
                <TitleSection
                    subHeading='Popular Items'
                    heading='From Our Menu'
                ></TitleSection>

                <div className='grid lg:grid-cols-2 gap-10 '>
                    {
                        items.map(item => <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                    }
                </div>
                <div className="card-actions mt-12 flex justify-center">
                        <button className="btn btn-outline border-0 border-b-4 uppercase">Add to cart</button>
                    </div>
            </section>
                    <div className='h-[140px] w-full bg-black flex items-center justify-center'>
                        <h1 className='text-white text-center font-bold text-2xl'>Call Us: +88 019234567891 </h1>
                    </div>
        </div>
    );
};

export default PopularMenu;