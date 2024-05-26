import React, { useEffect, useState } from 'react';
import TitleSection from '../../../components/SectionTitle/TitleSection';
import RecommendCard from './RecommendCard';

const RecommendItems = () => {
    const [recommendItem, setRecommendItem] = useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const recommend = data.filter(item => item.category === 'popular')
            setRecommendItem(recommend)
        })
    },[])
    return (
        <div className='mt-20'>
            <section>
                <TitleSection
                subHeading='---Should Try---'
                heading='CHEF RECOMMENDS'
                ></TitleSection>
            </section>
            <div className='grid lg:grid-cols-3 gap-4'>
                {
                    recommendItem.map(item => <RecommendCard
                    key={item._id}
                    item={item}
                    ></RecommendCard>)
                }
            </div>
        </div>
    );
};

export default RecommendItems;