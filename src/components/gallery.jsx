import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};


// import React from 'react';
// import { useState } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Star } from 'react-feather';

// const HappyCustomer = (props) => {
//   const [customers] = useState([
//     {
//       name: 'Jonhy Clan',
//       position: 'Customer',
//       avatar: 'https://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/people19.png',
//       message: 'Your service was really awesome. I’m so happy with that.',
//     },
//   ]);

//   return (
//     <div id="portfolio" className="text-center">
//       <div className="container">
//         <div className="section-title">
//           <h2>Gallery</h2>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
//             dapibus leonec.
//           </p>
//         </div>
//         <div className="row">
//           <div className="portfolio-items">
//             <div className="container mx-auto px-4 py-4 happy-customer">
//               <h4 className="text-center text-lg text-gray-900 font-semibold uppercase tracking-wide mb-3">Happy Customer</h4>
//               <Carousel showThumbs={false}>
//                 {customers.map((customer, index) => (
//                   <div key={index} className="carousel-cell">
//                     <div className="rating">
//                       <div className="rating-user">
//                         <img src={customer.avatar} alt="user" className="rating-user--avatar" />
//                         <h4 className="rating-user--name">{customer.name}</h4>
//                         <p className="rating-user--position">{customer.position}</p>
//                       </div>
//                       <div className="rating-rate">
//                         <img className="quate" src="https://i.imgur.com/gZ5HY0U.png" alt="" />
//                         <p className="rating-message">{customer.message}</p>
//                         <div className="rating-star">
//                           {[...Array(5)].map((_, i) => (
//                             <Star key={i} />
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </Carousel>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HappyCustomer;
