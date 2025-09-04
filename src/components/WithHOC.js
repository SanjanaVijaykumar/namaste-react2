import WithoutHOC from "./WithoutHOC";

// HOC that adds label
function withLabel(WithoutHOC) {
  return (props) => {
    return (
      <div>
        <div><label>{'Username'}</label></div>
        <WithoutHOC {...props} />
      </div>
    );
  };
}

// Wrap WithoutHOC with HOC
const WithHOC = withLabel(WithoutHOC);

export default WithHOC;
