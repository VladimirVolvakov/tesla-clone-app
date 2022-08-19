// Components:
import Section from "../Section/Section";
// Styles:
import { Container } from "./Home.styles";

const Home = () => {
  return (
    <Container>
      <Section
        id="model-s"
        title="Model S" 
        description="Order Online for Touchless Delivery"
        backgroundImage="/images/model-s.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section 
        id="model-y"
        title="Model Y" 
        description="Order Online for Touchless Delivery"
        backgroundImage="/images/model-y.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section 
        id="model-3"
        title="Model 3" 
        description="Order Online for Touchless Delivery"
        backgroundImage="/images/model-3.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section 
        id="model-x"
        title="Model X" 
        description="Order Online for Touchless Delivery"
        backgroundImage="/images/model-x.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section 
        id="solar-panels"
        title="Lowest Cost Solar Panels in America" 
        description="Money-back guarantee"
        backgroundImage="/images/solar-panel.jpg"
        leftButtonText="Order now"
        rightButtonText="Learn more"
      />
      <Section 
        id="solar-roofs"
        title="Solar for New Roofs" 
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImage="/images/solar-roof.jpg"
        leftButtonText="Order now"
        rightButtonText="Learn more"
      />
      <Section 
        id="accessories"
        title="Accessories" 
        description=""
        backgroundImage="/images/accessories.jpg"
        leftButtonText="Shop now"
      />
    </Container>
  );
};

export default Home;