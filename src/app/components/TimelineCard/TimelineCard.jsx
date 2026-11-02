import Image from 'next/image';
import React from 'react';

const TimelineCard = ({entry}) => {
    let img;
    if(entry.medium === 'Call'){
        img = '/call.png'
    }else if(entry.medium === 'Text'){
        img = '/text.png'
    }else if(entry.medium === 'Video'){
        img = '/video.png'
    }

    return (
        <div className='flex gap-4'>
            <Image src={img} alt={entry.medium} width={50} height={50}></Image>
            <p>HEKKKIIIIII</p>
        </div>
    );
};

export default TimelineCard;