import React from "react";
import quote from "../../assets/icons/quote.svg";
import Testimonial from "./Testimonial";
import person1 from '../../assets/images/people1.png';
import person2 from '../../assets/images/people2.png';
import person3 from '../../assets/images/people3.png';

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: 'Winson Harry',
            location: 'California',
            img: person1,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            id: 2,
            name: 'Winson Harry',
            location: 'California',
            img: person2,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            id: 3,
            name: 'Winson Harry',
            location: 'California',
            img: person3,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
    ];




  return (
    <div className="mt-20">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-xl text-primary">Testimonial</h4>
          <h2 className="text-4xl">What Our Patients Says</h2>
        </div>
        <div>
          <img src={quote} alt="" className="w-24 md:w-48 "/>
        </div>
      </div>
        <div className="grid md:grid-cols-3 gap-14 mt-20">
        {
            reviews.map(review => <Testimonial key={review.id} review={review}/>)
        }
        </div>
    </div>
  );
};

export default Testimonials;
