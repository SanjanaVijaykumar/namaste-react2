// A simple input component without label
const WithoutHOC = ({data}) => {
  return <input type="text" placeholder={`Enter ${data}`} />;
};

export default WithoutHOC;
