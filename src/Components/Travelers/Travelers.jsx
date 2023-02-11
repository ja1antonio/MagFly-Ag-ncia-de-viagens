import React from 'react';

// imported Destination images
import ImgParis from '../../assets/Paris.jpg';
import ImgQuadri from '../../assets/mont.jpg';
import ImgMortal from '../../assets/riodejaneiro.jpg';
import ImgNewYork from '../../assets/Newyork.jpg';

// imported Traveler images
import travelersOne from '../../assets/travelerOne.jpg';
import travelersTwo from '../../assets/travelerTwo.jpg';
import travelersthree from '../../assets/travelerthree.jpg';
import travelersFour from '../../assets/travelerfour.jpg';

//Array method called Map diplay all the data

const travelers = [
  {
    id: 1,
    destinationImage: ImgMortal,
    travelerImage: travelersOne,
    travelerName: 'João Antônio',
    socialLink: '@ja1_antonio',
  },

  {
    id: 2,
    destinationImage: ImgQuadri,
    travelerImage: travelersTwo,
    travelerName: 'Thiago Finch',
    socialLink: '@thiagofinch',
  },
  {
    id: 3,
    destinationImage: ImgParis,
    travelerImage: travelersthree,
    travelerName: 'Josh e Lana',
    socialLink: '@casal_paris',
  },
  {
    id: 4,
    destinationImage: ImgNewYork,
    travelerImage: travelersFour,
    travelerName: 'Statue of Liberty',
    socialLink: '@newyorkphotos',
  },
];

const Travelers = () => {
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2>Top travelers of this month</h2>

        <div className="travelersContainer grid">
          {travelers.map(
            ({
              id,
              destinationImage,
              travelerImage,
              travelerName,
              socialLink,
            }) => {
              return (
                /* SINGLE TRAVELERS CARD */
                <div key={id} className="singleTraveler">
                  <img src={destinationImage} className="destinationImage" />

                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img src={travelerImage} className="travelerImage" />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Travelers;
