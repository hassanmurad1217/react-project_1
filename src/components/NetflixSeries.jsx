import seriesData from "../api/seriesData.json";
import {SeriesCard } from "./SeriesCard.jsx";


const NetflixSeries = () => {
    return (
        <ul className="grid grid-three-cols ">

            {seriesData.map((curElem) => {
                return <SeriesCard key={curElem.id} data={curElem} />
            })}
          
        </ul>
    )
};
export default NetflixSeries;

// export const Header = () => {
//     return <h1>Beast NetflixSeries</h1>;
// }    

// export const Footer = () => {
//     return <h3>Make shore to leave review</h3>;
// }