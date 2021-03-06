import React from "react";
import "./Snackbar.css";

const Snackbar = ({ snack }) => {
  console.log(`Snack color is ${snack.color}`);
  return (
    <div
      id="snackbar"
      className={snack.enabled ? "show" : ""}
      style={{ backgroundColor: snack.color }}
    >
      {snack.text}
    </div>
  );
};

export default Snackbar;

//USAGE

// const [snack, setSnack] = useState({ enabled: false, text: "" });

// const showSnackBar = (text) => {
//   //show and hide snackbar
//   setSnack({ enabled: true, text: text });
//   setTimeout(() => {
//     setSnack({ enabled: false, text: "" });
//   }, 3000);
// };

// const handleClick = () => {
//   if (xxxxxxx) {
//     showSnackBar("GOOD");
//   } else {
//     showSnackBar("BAD");
//   }
// };
