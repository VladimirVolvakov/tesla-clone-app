// Styles:
import { ButtonGroup, LeftButton, RightButton, TextItem, Wrapper } from "./Section.styles";

const Section = () => {
  return (
    <Wrapper>
      <TextItem>
        <h1>Model S</h1>
        <p>Order Online for Touchless Delivery</p>
      </TextItem>

      <ButtonGroup>
        <LeftButton>
          Custom Order
        </LeftButton>
        <RightButton>
          Existing Inventory
        </RightButton>
      </ButtonGroup>
    </Wrapper>
  );
};

export default Section;