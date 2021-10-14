import { useState } from "react";

// custom hooks useForm
export const useForm = (callback) => {
  const [values, setValues] = useState({});
  return {
    values,
    onChange: (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
    onSubmit: (e) => {
      e.preventDefault();
      callback();
    },
  };
};

// USAGE

// const { values, onChange, onSubmit } = useForm(() => {
//   console.log(values.username);
// });

//     <div>
//       <form onSubmit={onSubmit}>
//         <input type="text" name="username" onChange={onChange} />
//         <input type="submit" value="Submit" />
//       </form>
//     </div>
