import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <p>-----TEST RATING------</p>
//       <StarRating size={32} maxRating={10} onSetRating={setMovieRating} />
//       <span>This movie was rated {movieRating} stars</span>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />

    <StarRating size={24} color="red" className="test" />
    <StarRating defaultRating={2} color="blue" />

    <Test /> */}
  </React.StrictMode>
);
