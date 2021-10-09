const parseStringAsDOM = (string) => {
  const parser = new DOMParser();
  let newString = parser.parseFromString(string, "text/html").body.innerText;
  return newString;
};

export default parseStringAsDOM;
