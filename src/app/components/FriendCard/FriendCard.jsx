import Image from "next/image";
import React from "react";

const FriendCard = ({ friend }) => {
    let bg_color;
    if(friend.status==='overdue'){
        bg_color='bg-red-600'
    }else if(friend.status==='almost due'){
        bg_color = 'bg-orange-400'
    }else{
        bg_color='bg-green-800'
    }
	return (
		<div className="flex flex-col justify-center items-center transform-transition duration-300 hover:scale-102 border border-gray-100 px-8 py-8 h-full rounded-3xl shadow-lg space-y-1">
			<div className="avatar">
				<div className="w-24 rounded-full">
					<Image
						alt={friend.name}
						src={friend.picture}
                        height={50}
                        width={50}
                        // className='w-auto h-12'
					/>
				</div>
			</div>
            <p className='text-center font-semibold text-xl w-full'>{friend.name}</p>
            <p className='text-gray-600'>{friend.days_since_contact}d ago</p>
            <div className='flex gap-2'>
                {
                    friend.tags.map((tag,index) => <p key={index} className='px-3 py-1 text-green-800 bg-green-300 rounded-full text-black'>
                        {tag}
                    </p>)
                }
            </div>
            <p className={`${bg_color} text-white px-3 py-1 rounded-full`}>{friend.status}</p>
		</div>
	);
};

export default FriendCard;
