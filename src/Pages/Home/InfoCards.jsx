import React from 'react';
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardInfo = [
        {
            id: 1,
            title: "Opening Hours",
            description: "Open from 10.00 to 5.00 pm every day",
            bgColor: "bg-primary",
            icon: clock
        },
        {
            id: 2,
            title: "Visit our location",
            description: "Brooklyn, NY 10036, United States",
            bgColor: "bg-accent",
            icon: marker
        },
        {
            id: 3,
            title: "Contact us now",
            description: "+000 123 456789",
            bgColor: "bg-primary",
            icon: phone
        },
    ];


    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-52'>
            {
                cardInfo.map(card => <InfoCard key={card.id} card={card}/>)
            }
        </div>
    );
};

export default InfoCards;