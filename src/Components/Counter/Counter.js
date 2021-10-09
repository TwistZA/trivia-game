const Counter = ({ count, maxCount }) => {
  console.log(count);
  return (
    <div>
      Question {count} of {maxCount}
    </div>
  );
};

export default Counter;
