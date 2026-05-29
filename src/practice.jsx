// const App = () => {
//     return (
//     <div>
//         <div>
//             <img src="got.AVIF" alt="got.AVIF" width="40%" height="40%"/>
//         </div>
//          <h2>Name : Queen of Tears</h2>
//          <h3>Rating : 8.2</h3>
//          <p>Summary : sdfghjkl;rtyuiopcvbnm,dfghjklcvbdfghjertyuioxcvbnmdftyuixcvsdfghjkertyuioasdfghjkl;xcvbnm,ertyuiosdfghxcv</p>
//     </div>
//     )
// }; Tutorial #5

// const App = () => {
//         return (
//         <div>
//             <NetflixSeries />
//             <NetflixSeries />
//             <NetflixSeries />
//             <NetflixSeries />
//             <NetflixSeries />
//         </div>
//         )
//     };

// const NetflixSeries = () => {
//     return (
//         <div>
//             <div>
//                 <img src="got.AVIF" alt="got.AVIF" width="40%" height="40%"/>
//             </div>
//              <h2>Name : Queen of Tears</h2>
//              <h3>Rating : 8.2</h3>
//              <p>Summary : sdfghjkl;rtyuiopcvbnm,dfghjklcvbdfghjertyuioxcvbnmdftyuixcvsdfghjkertyuioasdfghjkl;xcvbnm,ertyuiosdfghxcv</p>
//         </div>
//     )
// }; Tutorial # 6

// const App = () => {
//         return (
//         <>
//             <NetflixSeries />
//             <NetflixSeries />
//             <NetflixSeries />
//             <NetflixSeries />
//             <NetflixSeries />
//         </>
//         )
//     };

// const NetflixSeries = () => {
//     return (
//         <div>
//             <div>
//                 <img src="got.AVIF" alt="got.AVIF" width="40%" height="40%"/>
//             </div>
//              <h2>Name : Queen of Tears</h2>
//              <h3>Rating : 8.2</h3>
//              <p>Summary : sdfghjkl;rtyuiopcvbnm,dfghjklcvbdfghjertyuioxcvbnmdftyuixcvsdfghjkertyuioasdfghjkl;xcvbnm,ertyuiosdfghxcv</p>
//         </div>
//     )
// }; Tutorial #7

// const App = () => {
//         return (
//         <>
//             <NetflixSeries />
//             <NetflixSeries />
//             <NetflixSeries />
//             <NetflixSeries />
//             <NetflixSeries />
//         </>
//         )
//     };

// const NetflixSeries = () => {
//     const name = "Queen of Tears";
//     const rating = "8.2";
//     const summary = "sdfghjkl;rtyuiopcvbnm,dfghjklcvbdfghjertyuioxcvbnmdftyuixcvsdfghjkertyuioasdfghjkl;xcvbnm,ertyuiosdfghxcv";
//     const returnGenra = () => {
//         const genre = "RomCom";
//         return genre;
//     }

//     return (
//         <div>
//             <div>
//                 <img src="got.AVIF" alt="got.AVIF" width="40%" height="40%"/>
//             </div>
//              <h2>Name : {name} </h2>
//              <h3>Rating : {5+3.2} </h3>
//              <p>Summary : {summary} </p>
//              <p>Genre : {returnGenra()}</p>
//         </div>
//     )
// }; Tutorial # 8

// const App = () => {
//     return (
//         <>
//             <NetflixSeries />
//             <NetflixSeries />
//             <NetflixSeries />
//             <NetflixSeries />
//             <NetflixSeries />
//         </>
//     )
// };

// const NetflixSeries = () => {
//     const name = "Queen of Tears";
//     const rating = "8.2";
//     const summary = "sdfghjkl;rtyuiopcvbnm,dfghjklcvbdfghjertyuioxcvbnmdftyuixcvsdfghjkertyuioasdfghjkl;xcvbnm,ertyuiosdfghxcv";
//     const returnGenra = () => {
//         const genre = "RomCom";
//         return genre;
//     }

//     const age=18;
//     // let canWatch="Not Available";
//     // if (age>=18) canWatch="Watch Now";

//     const canWatch = () => {
//         if(age>=18) return "Watch Now"
//         return "Not Available"
//     }

//     return (
//         <div>
//             <div>
//                 <img src="got.AVIF" alt="got.AVIF" width="40%" height="40%" />
//             </div>
//             <h2>Name : {name} </h2>
//             <h3>Rating : {5 + 3.2} </h3>
//             <p>Summary : {summary} </p>
//             <p>Genre : {returnGenra()}</p>

//             {/* <button> {age>= 18 ? "Watch Now" : "Not Available"} </button> */}
//             {/* <button>{canWatch}</button> */}

//             <button>{canWatch()}</button>
//         </div>
//     )
// }; Tutorial # 9

// import seriesData from "../api/seriesData.json";
// import {SeriesCard } from "./SeriesCard.jsx";

// const NetflixSeries = () => {
//     return (
//         <ul>

//             {seriesData.map((curElem) => {
//                 return <SeriesCard key={curElem.id} curElem={curElem} />
//             })}

//         </ul>
//     )
// };
// export default NetflixSeries;

// export const Header = () => {
//     return <h1>Beast NetflixSeries</h1>;
// }

// export const Footer = () => {
//     return <h3>Make shore to leave review</h3>;
// }

// [
//     {
//         "name" : "Queen of Tears",
//         "id" : "queenOftears",
//         "img_url" : "/got.AVIF",
//         "rating" : "8.9",
//         "description" : "Queen of Tears is a romantic Korean drama about a struggling married couple rediscovering love while facing family pressure, heartbreak, misunderstandings, sacrifice, and emotional challenges together.",
//         "cast" : ["Kim Soo-hyun" , " Kim Ji-won"],
//         "genere" : ["Romance", "Comeady" , "Drama"],
//         "watch_url" : "https://www.imdb.com/title/tt27668559/"
//     },
//     {
//         "name" : "Lovely Runner",
//         "id" : "lovelyRunner",
//         "img_url" : "/Lovely_runner.jpeg",
//         "rating" : "8.5",
//         "description" : "Lovely Runner is a romantic Korean drama about a young woman who falls in love with a man who is a runner. The series combines romance, comedy, and emotional moments with strong performances, beautiful visuals, and heartfelt storytelling.",
//         "cast" : ["Kim Soo-hyun" , " Kim Ji-won"],
//         "genere" : ["Romance", "Comedy" , "Drama"],
//         "watch_url" : "https://www.viki.com/tv/40466c-lovely-runner#episodes"
//     },
//     {
//         "name" : "Phantom Lawyer",
//         "id" : "phantomLawyer",
//         "img_url" : "/phantom_lawyer.webp",
//         "rating" : "8.5",
//         "description" : "Phantom Lawyer is a legal drama about a lawyer who uses his skills to help the poor and the wronged. The series combines legal drama, suspense, and emotional moments with strong performances, beautiful visuals, and heartfelt storytelling.",
//         "cast" : ["Kim Soo-hyun" , " Kim Ji-won"],
//         "genere" : ["Legal", "Drama"],
//         "watch_url" : "https://www.viki.com/tv/40466c-phantom-lawyer#episodes"
//     },
//     {
//         "name" : "Squid Game",
//         "id" : "squidGame",
//         "img_url" : "/squid_game.jpg",
//         "rating" : "8.5",
//         "description" : "Squid Game is a survival drama about a group of people who are forced to play a game of survival. The series combines survival drama, suspense, and emotional moments with strong performances, beautiful visuals, and heartfelt storytelling.",
//         "cast" : ["Kim Soo-hyun" , " Kim Ji-won"],
//         "genere" : ["Survival", "Drama"],
//         "watch_url" : "https://www.viki.com/tv/40466c-squid-game#episodes"
//     },
//     {
//         "name" : "Stranger Things",
//         "id" : "strangerThings",
//         "img_url" : "/stranger_things.jpg",
//         "rating" : "8.5",
//         "description" : "Stranger Things is a science fiction drama about a group of people who are sent to a remote island to investigate a mysterious signal. The series combines science fiction drama, suspense, and emotional moments with strong performances, beautiful visuals, and heartfelt storytelling.",
//         "cast" : ["Kim Soo-hyun" , " Kim Ji-won"],
//         "genere" : ["Science Fiction", "Drama"],
//         "watch_url" : "https://www.viki.com/tv/40466c-stranger-things#episodes"
//     }
// ]

// export const SeriesCard = (props) => {
//     return (
//         <li>
//                     <div>
//                         <img src={props.curElem.img_url} alt={props.curElem.name} width="40%" height="40%" />
//                     </div>
//                     <h2>Name : {props.curElem.name} </h2>
//                     <h3>Rating : {props.curElem.rating} </h3>
//                     <p>Description : {props.curElem.description} </p>
//                     <p>Genre : {props.curElem.genere.join(", ")}</p>
//                     <p>Cast : {props.curElem.cast.join(", ")}</p>
//                     <a href={props.curElem.watch_url} target="_blank">
//                         <button>Watch Now</button>
//                     </a>
//                 </li>
//     )
// } Tutorial # 12

// import seriesData from "../api/seriesData.json";
// import {SeriesCard } from "./SeriesCard.jsx";

// const NetflixSeries = () => {
//     return (
//         <ul>

//             {seriesData.map((curElem) => {
//                 return <SeriesCard key={curElem.id} data={curElem} />
//             })}

//         </ul>
//     )
// };
// export default NetflixSeries;

// export const SeriesCard = ({data}) => {
//     const {name, img_url, rating, description, genere, cast, watch_url} = data;
//     return (
//         <li>
//             <div>
//                 <img src={img_url} alt={name} width="40%" height="40%" />
//             </div>
//             <h2>Name : {name} </h2>
//             <h3>Rating : {rating} </h3>
//             <p>Description : {description} </p>
//             <p>Genre : {genere.join(", ")}</p>
//             <p>Cast : {cast.join(", ")}</p>
//             <a href={watch_url} target="_blank">
//                 <button>Watch Now</button>
//             </a>
//         </li>
//     )
// } Tutorial # 13

// export const SeriesCard = ({data}) => {
//     const {name, img_url, rating, description, genere, cast, watch_url} = data;
//     const btn_style ={
//         padding: "1.2rem 2.4rem",
//         border : "none",
//         fontSize : "1.6rem",
//         backgroundColor : "var(--btn-hover-bg-color)",
//         color : "var(--bg-color)",
//     }
//     const h3_font ={
//         fontSize: "1.6rem",
//     }
//     return (
//         <li className="card">
//             <div>
//                 <img src={img_url} alt={name} width="100%" height="40%" />
//             </div>

//             <div className="card-content">
//             <h2>Name : {name} </h2>
//             <h3 style={ h3_font}>Rating : {rating} </h3>

//             <p >Description : {description} </p>
//             <p>Genre : {genere.join(", ")}</p>
//             <p>Cast : {cast.join(", ")}</p>
//             <a href={watch_url} target="_blank">
//                 <button style={btn_style}>Watch Now</button>
//             </a>
//             </div>
//         </li>
//     )
// }

/* This file contains global CSS styles that apply to the entire application. It allows us to define styles once and have them applied globally, affecting all components */

// * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     font-family: "Urbanist", sans-serif;
//   }

//   html {
//     font-size: 62.5%;
//   }

//   h1,
//   h2,
//   h3,
//   h4,
//   h5,
//   h6 {
//     color: var(--heading-color);
//     font-family: "Poppins", sans-serif;
//     font-weight: 900;
//   }

//   h1 {
//     font-size: 3.2rem;
//   }

//   p,
//   li,
//   a,
//   label {
//     font-size: 1.8rem;
//     letter-spacing: 0.1rem;
//     color: var(--para-color);
//     line-height: 1.5;
//     font-weight: 400;
//   }

//   li {
//     list-style: none;
//   }

//   a {
//     text-decoration: none;
//   }

//   /* theme */

//   :root {
//     --main-color: #0062ff;
//     --supporting-color: #ebf3fe;

//     --font-color: #424242;
//     --bg-color: #ffffff;
//     --heading-color: #000a19;
//     --hero-heading-color: #003b99;
//     --white-color: #ffffff;
//     --para-color: #504e4d;

//     --btn-hover-bg-color: #003b99;

//     --btn-box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
//   }

//   /* layout */

//   .container {
//     max-width: 142rem;
//     margin: 0 auto;
//     padding: 9.6rem 2.4rem;
//   }

//   .grid {
//     display: grid;
//     gap: 9.6rem;
//   }

//   .grid-two-cols {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   .grid-three-cols {
//     grid-template-columns: repeat(3, 1fr);
//   }
// .card {
//   box-shadow:
//     rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
//     rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
// }
// .card-content{
//   padding: 3.2rem 1.2rem;
//   display: flex;
//   flex-direction: column;
//   gap: 1.2rem;
// } Tutorial #18

// export const SeriesCard = ({data}) => {
//     const {name, img_url, rating, description, genere, cast, watch_url} = data;

//     // css styles
//     const btn_style ={
//         padding: "1.2rem 2.4rem",
//         border : "none",
//         fontSize : "1.6rem",
//         backgroundColor : `${rating >= 8.5 ? "#f7dc6f" : "#7dcea0"}`,
//         color : "var(--bg-color)",
//         fontWeight : "bold",
//         cursor : "pointer",
//     }
//     const ratingClass = rating >= 8.5 ? "super_hit" : "average"

//     return (
//         <li className="card">
//             <div>
//                 <img src={img_url} alt={name} width="100%" height="40%" />
//             </div>

//             <div className="card-content">
//             <h2>Name : {name} </h2>

//             <h3>
//                     Rating : <span className={`rating  ${ratingClass}`}>{rating}</span>
//             </h3>

//             <p >Description : {description} </p>
//             <p>Genre : {genere.join(", ")}</p>
//             <p>Cast : {cast.join(", ")}</p>
//             <a href={watch_url} target="_blank">
//                 <button style={btn_style}>Watch Now</button>
//             </a>
//             </div>
//         </li>
//     )
// }

/* This file contains global CSS styles that apply to the entire application. It allows us to define styles once and have them applied globally, affecting all components */

// * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     font-family: "Urbanist", sans-serif;
//   }

//   html {
//     font-size: 62.5%;
//   }

//   h1,
//   h2,
//   h3,
//   h4,
//   h5,
//   h6 {
//     color: var(--heading-color);
//     font-family: "Poppins", sans-serif;
//     font-weight: 900;
//   }

//   h1 {
//     font-size: 3.2rem;
//   }

//   p,
//   li,
//   a,
//   label {
//     font-size: 1.8rem;
//     letter-spacing: 0.1rem;
//     color: var(--para-color);
//     line-height: 1.5;
//     font-weight: 400;
//   }

//   li {
//     list-style: none;
//   }

//   a {
//     text-decoration: none;
//   }

//   /* theme */

//   :root {
//     --main-color: #0062ff;
//     --supporting-color: #ebf3fe;

//     --font-color: #424242;
//     --bg-color: #ffffff;
//     --heading-color: #000a19;
//     --hero-heading-color: #003b99;
//     --white-color: #ffffff;
//     --para-color: #504e4d;

//     --btn-hover-bg-color: #003b99;

//     --btn-box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
//   }

//   /* layout */

//   .container {
//     max-width: 142rem;
//     margin: 0 auto;
//     padding: 9.6rem 2.4rem;
//   }

//   .grid {
//     display: grid;
//     gap: 9.6rem;
//   }

//   .grid-two-cols {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   .grid-three-cols {
//     grid-template-columns: repeat(3, 1fr);
//   }
// .card {
//   box-shadow:
//     rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
//     rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
// }
// .card-content{
//   padding: 3.2rem 1.2rem;
//   display: flex;
//   flex-direction: column;
//   gap: 1.2rem;
// }
// .super_hit{
//   background-color: yellow;
// }
// .average{
//   background-color: green;
// }
// .rating{
//   padding: 0.3rem 1.8rem;
//   color: #000;
//   margin-left: 1.2rem;
//   border-radius: 100rem;

// }Tutorial # 19

// import NetflixSeries from "./components/NetflixSeries";
// // import "./components/Netflix.css";
// import styles from "./components/Netflix.module.css";
// const App = () => {
//     return (
//         <section className="container">
//             <h1 className={styles["card-heading"]}>List of Best Netflix Series</h1>
//                     <NetflixSeries />
//         </section>

//     )
// };

// export default App

// import styles from "./Netflix.module.css";
// export const SeriesCard = ({data}) => {
//     const {name, img_url, rating, description, genere, cast, watch_url} = data;

//     // css styles
//     const btn_style ={
//         padding: "1.2rem 2.4rem",
//         border : "none",
//         fontSize : "1.6rem",
//         backgroundColor : `${rating >= 8.5 ? "#f7dc6f" : "#7dcea0"}`,
//         color : "var(--bg-color)",
//         fontWeight : "bold",
//         cursor : "pointer",
//     }
//     const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average

//     return (
//         <li className={styles.card}>
//             <div>
//                 <img src={img_url} alt={name} width="100%" height="40%" />
//             </div>

//             <div className={styles["card-content"]}>
//             <h2>Name : {name} </h2>

//             <h3>
//                     Rating : <span className={` ${styles.rating}  ${ratingClass}`}>{rating}</span>
//             </h3>

//             <p >Description : {description} </p>
//             <p>Genre : {genere.join(", ")}</p>
//             <p>Cast : {cast.join(", ")}</p>
//             <a href={watch_url} target="_blank">
//                 <button style={btn_style}>Watch Now</button>
//             </a>
//             </div>
//         </li>
//     )
// }

// .card-heading {
//     margin-bottom: 3.2rem;
// }

// .card {
//     box-shadow:
//         rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
//         rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
// }

// .card-content {
//     padding: 3.2rem 1.2rem;
//     display: flex;
//     flex-direction: column;
//     gap: 1.2rem;
// }

// .super_hit {
//     background-color: yellow;
// }

// .average {
//     background-color: green;
// }

// .rating {
//     padding: 0.3rem 1.8rem;
//     color: #000;
//     margin-left: 1.2rem;
//     border-radius: 100rem;

// } Tutprial #20

// import styles from "./Netflix.module.css";
// import styled from 'styled-components';
// export const SeriesCard = ({data}) => {
//     const {name, img_url, rating, description, genere, cast, watch_url} = data;

// "css styles"

// const WatchButtonStyle = styled.button({
//     padding: "1.2rem 2.4rem",
//     border : "none",
//     fontSize : "1.6rem",
//     backgroundColor : `${rating >= 8.5 ? "#f7dc6f" : "#7dcea0"}`,
//     color : "var(--bg-color)",
//     fontWeight : "bold",
//     cursor : "pointer",
// })

//     const WatchButtonStyle = styled.button`
//         padding: 1.2rem 2.4rem;
//         border : none;
//         font-size : 1.6rem;
//         background-color: ${(props) => props.rating >= 8.5 ? "#f7dc6f" : "#7dcea0"};
//         color : var(--bg-color)
//         font-weight : bold
//         cursor : pointer
//     `

//     // const btn_style ={}
//     const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average

//     return (
//         <li className={styles.card}>
//             <div>
//                 <img src={img_url} alt={name} width="100%" height="40%" />
//             </div>

//             <div className={styles["card-content"]}>
//             <h2>Name : {name} </h2>

//             <h3>
//                     Rating : <span className={` ${styles.rating}  ${ratingClass}`}>{rating}</span>
//             </h3>

//             <p >Description : {description} </p>
//             <p>Genre : {genere.join(", ")}</p>
//             <p>Cast : {cast.join(", ")}</p>
//             <a href={watch_url} target="_blank">
//                 <WatchButtonStyle rating={rating} >Watch Now</WatchButtonStyle>
//             </a>
//             </div>
//         </li>
//     )
// } Tutorial # 21

// bun install tailwindcss @tailwindcss/vite
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss(),
//   ],
// }) Tutorial #22

// .main-div {
//     height: 80vh;
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .g-div {
//     width: 100rem;
//     height: 50rem;
//     border: 1rem solid #000;
//     background-color: #85c1e9;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .p-div {
//     width: 80rem;
//     height: 30rem;
//     border: 1rem solid #000;
//     background-color: #82e0aa;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .c-div {
//     width: 60rem;
//     height: 10rem;
//     border: 1rem solid #000;
//     background-color: #f7dc6f;
//     font-size: 2rem;
//   }

//   .events-handling {
//     display: flex;
//     justify-content: center;
//     gap: 1.2rem;
//   }

//   .container h2 {
//     text-align: center;
//     font-size: 3.2rem;
//     margin-bottom: 3.2rem;
//   }

//   button {
//     font-size: 2rem;
//     padding: 1.2rem 2.4rem;
//     background-color: #82e0aa;
//   }

//   button:nth-child(even) {
//     font-size: 2rem;
//     padding: 1.2rem 2.4rem;
//     background-color: #82e0aa;
//   }

//   button:nth-child(odd) {
//     font-size: 2rem;
//     padding: 1.2rem 2.4rem;
//     background-color: #f7dc6f;
//   }

//   Our actual React JS code
//   import "./EV.css";

//   export const EventHandling = () => {
//     //   function handleButtonClick() {
//     //     alert("Hey I am onClick Event");
//     //   }

//     const handleButtonClick = (event) => {
//       console.log(event);
//       console.log(event.target);
//       console.log(event.type); // "click"
//       alert("Hey I am onClick Event");
//     };

//     const handleWelcomeUser = (user) => {
//       console.log(`Hey ${user}, Welcome`);
//     };

//     return (
//       <>
//         {/* // ?  Function Components with Named Functions - Subscribe to Thapa Technical Youtube Channel  */
//         /* Remember how we haven't called this function, if you call this function here  then it will run without even clicking. You just need to pass reference and not call here. */}
//         <button onClick={handleButtonClick}>click Me</button>
//         <br />
//         {/* In React, event handlers receive the event object as an argument by default. However, when you use an arrow function directly in the onClick attribute without passing the event explicitly, React doesn't pass the event object to your handler function. This is because the arrow function creates a new function and calls your handler without passing any arguments. */}
//         <button onClick={(event) => handleButtonClick(event)}>click Me 2 </button>
//         <br />
//         {/* /* //? Inline Event Handlers} */}
//         <button onClick={(event) => console.log(event)}>Inline Function</button>
//         <br />
//         {/* //? Function Components with Inline Arrow Functions */}
//         <button onClick={() => alert("Hey I am inline evnt function")}>
//           Inline Arr fun
//         </button>
//         {/* {/* //? Passing Arguments to Event Handlers } */}
//         {/* <button onClick={handleWelcomeUser("vinod")}>click Me</button> */}
//         <button onClick={() => handleWelcomeUser("vinod")}>click Me</button>
//         <button onClick={() => handleWelcomeUser("Ram")}>click Me</button>
//       </>
//     );
//   }; Tutorial #23

// export const EventProps = () => {
//     const HandleWelcomeUser = (user) => {
//       alert(`Hey ${user}`);
//     };

//     const handleHover = () => {
//       alert(`Thanks for hovering me`);
//     };

//     return (
//       <>
//         <WelcomeUser
//           onClick={() => HandleWelcomeUser("Hassan")}
//           onMouseEnter={handleHover}
//         />
//       </>
//     );
//   };

//   const WelcomeUser = (props) => {
//     const handleGreatings = () => {
//       console.log(`Hey user, Welcome`);
//       props.onClick();
//     };
//     return (
//       <>
//         <button onClick={props.onClick}>Click</button>
//         <button onClick={props.onMouseEnter}>Hover Me</button>
//         <button onClick={handleGreatings}>Greatings</button>
//       </>
//     );
//   }; Tutorial # 24

// import "./EV.css";
// export const EventPropagation = () => {
//   const handleGrandParent = () => {
//     console.log("GrandParent clicked");
//   };

//   const handleParentClick = () => {
//     console.log("Parent clicked");
//   };

//   const handleChildClick = (event) => {
//     console.log(event);
//     event.stopPropagation();
//     console.log("Child clicked");
//   };
//   return (
//     <section className="main-div">
//       <div className="g-div" onClickCapture={handleGrandParent}>
//         <div className="p-div" onClickCapture={handleParentClick}>
//           <button className="c-div" onClickCapture={handleChildClick}>
//             Child Div
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }; Tutorial # 25

// import { useState } from "react";
// export const State = () => {
//   //   let value = 0;
//   //   const handleButtonClick = () => {
//   //     value++;
//   //     console.log(value);
//   //   };
//   //   let array = useState();
//   //   console.log(array);
//   const [count, setCount] = useState(0);
//   console.log("Parent Component rendered");
//   const handleButtonClick = () => {
//     setCount(() => count + 1);
//   };
//   return (
//     <>
//       <div className="main-div">
//         <h1>{count}</h1>
//         <button onClick={handleButtonClick}>Increment</button>
//       </div>
//       <ChildComponent count={count} />
//     </>
//   );
// };

// function ChildComponent({ count }) {
//   console.log("Child Component rendered");
//   return (
//     <div className="main-div">
//       <h2> Child Component - {count} </h2>
//     </div>
//   );
// } Tutorial # 26 & 27

// import { useState } from "react";
// import "./EV.css";

// export const DerivedState = () => {
//   const [users, setUsers] = useState([
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 },
//     { name: "Angles", age: 45 },
//   ]);

//   // Derived state: count of users
//   console.log(users);
//   const userCount = users.length;
//   // Derived state: average age of users
//   const averageAge =
//     users.reduce((accum, curElem) => accum + curElem.age, 0) / userCount;

//   return (
//     <div className="main-div">
//       <h1>Users List</h1>
//       <ul>
//         {users.map((user, index) => (
//           <li key={index}>
//             {user.name} - {user.age} years old
//           </li>
//         ))}
//       </ul>
//       <p>Total Users: {userCount}</p>
//       <p>Average Age: {averageAge}</p>
//     </div>
//   );
// }; Tutorial # 30

// import { useState } from "react";

// export const LiftingState = () => {
//   const [inputValue, setInputValue] = useState("");
//   return (
//     <>
//       <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
//       <DisplayComponent inputValue={inputValue} />
//     </>
//   );
// };

// const InputComponent = ({ inputValue, setInputValue }) => {
//   return (
//     <>
//       <input
//         type="text"
//         placeholder="enter your name"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       ></input>
//     </>
//   );
// };

// const DisplayComponent = ({ inputValue }) => {
//   return <p>The current input value is: {inputValue} </p>;
// }; Tutorial # 31
