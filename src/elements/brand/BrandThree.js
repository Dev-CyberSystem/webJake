import React from 'react';

const BrandList = [
    {
        image: './images/brand/logoJake.png'
    },
    {
        image: './images/brand/logoWcl.png'
    },
    {
        image: './images/brand/logoPorter.png'
    },
    {
        image: './images/brand/logoTbc.png'
    },
    {
        image: './images/brand/logoBanking.png'
    },
    {
        image: './images/brand/logoMinera.png'
    },
    {
        image: './images/brand/logoGalicia.png'
    },
   
   
  
]

const BrandThree = ({brandStyle}) => {
    return (
        <ul className={`brand-list ${brandStyle}`}>
            {BrandList.map((data, index) => (
                <li key={index}>
                    <a><img src={`${data.image}`} alt="Brand Image" /></a>
                </li>
            ))}
        </ul>
    )
}

export default BrandThree;
