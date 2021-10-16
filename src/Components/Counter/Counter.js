const Counter = ({ count, maxCount, difficulty }) => {
  return (
    <div>
      Question {count} of {maxCount} ({difficulty})
    </div>
  );
};

export default Counter;
