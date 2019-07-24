import React from 'react';

import country from './country';
 
import Background from '../images/1.jpg';
import Background2 from '../images/2.jpg';
import Background3 from '../images/3.jpeg';
import Background4 from '../images/4.jpeg';
import Background5 from '../images/5.jpeg';
import { type } from 'os';

var sectionStyle1 = {
  // width: "100%",
  // height: "25%",
  backgroundImage: `url(${Background}) `,
   
};
var sectionStyle2 = {
    // width: "50px",
    // height: "50px",
    backgroundImage: `url(${Background2})`
  };
  var sectionStyle3 = {
    // width: "50px",
    // height: "50px",
    backgroundImage: `url(${Background3})`
  };
  var sectionStyle4 = {
    // width: "50px",
    // height: "50px",
    backgroundImage: `url(${Background4})`
  };
//   var sectionStyle5 = {
//     width: "100%",
//     height: "400px",
//     backgroundImage: `url(${Background5})`
//   };

var listyle={
    listStyleType: `none`
}
function NumberList(props) {
    const listItems = numbers.map((number) =>
      <li>{number}</li>
    );
    return (
        <div class="flex-container-countries">
      <div style={sectionStyle1} class="country"> 
      <h1 class="cntry-name">Italy </h1>
      <p class="img-description">Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins. Other major cities include Florence, with Renaissance masterpieces such as Michelangelo’s "David" and Brunelleschi's Duomo; Venice, the city of canals; and Milan, Italy’s fashion capital</p>
      </div>
      <div style={sectionStyle2} class="country"> <h1 class="cntry-name">Rome </h1>
      <p class="img-description">Italy’s capital, as the home of three thousand years of Western history, has an incredible wealth of ancient sites blended with modern sounds. The streets still brim with that lively spirit that drove the city to become the center of the world: butchers loudly chat with passers-by, construction workers walk past Roman ruins, and teenagers zip their mopeds over the cobblestone. </p>
      </div>
      <div style={sectionStyle3} class="country"> <h1 class="cntry-name">New York </h1>
      <p class="img-description">The City, Gotham, The Big Apple; no matter what you call it, New York City is one of the foremost icons in our world’s culture. It’s a place where dreams are made—a city of grit, glitz, and glamour that’s become the icon of America. If you can make it here, you can make it anywhere. </p></div>
      <div style={sectionStyle4} class="country">  <h1 class="cntry-name">London </h1>
      <p class="img-description">A travel plan that only includes mainland Europe misses out on one unforgettable destination whose diversity rivals the entire rest of the continent. Today’s London is a huge amalgamation of cultures from the former British Empire. Ethnic Britons make up a minority of the city’s population, so it’s the immigrants who are continually injecting a liveliness into the ancient city. </p></div>
      </div>
    );
  }
  
  const numbers = [1, 2, 3, 4, 5];
  export default NumberList;