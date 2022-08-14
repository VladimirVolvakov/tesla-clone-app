// Styles:
import { ButtonGroup, Buttons, DownArrow, LeftButton, RightButton, TextItem, Wrapper } from "./Section.styles";

const Section = () => {
  return (
    <Wrapper>
      <TextItem>
        <h1>Model S</h1>
        <p>Order Online for Touchless Delivery</p>
      </TextItem>

      <Buttons>
        <ButtonGroup>
          <LeftButton>
            Custom Order
          </LeftButton>
          <RightButton>
            Existing Inventory
          </RightButton>
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrapper>
  );
};

export default Section;