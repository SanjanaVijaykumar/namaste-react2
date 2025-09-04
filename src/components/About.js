import WithHOC from "./WithHOC";
import WithoutHOC from "./WithoutHOC";

const AboutComponent = () => {
  return (
    <div>
      <h2>About Component</h2>

      <h4>Without HOC:</h4>
      <WithoutHOC data={'text'}/>

      <h4>With HOC:</h4>
      <WithHOC data={'username'}/>
    </div>
  );
};

export default AboutComponent;
