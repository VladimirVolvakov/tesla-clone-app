// Styles:
import { ButtonGroup, Buttons, DownArrow, LeftButton, RightButton, TextItem, Wrapper } from "./Section.styles";

const Section = ({title, description, backgroundImage, leftButtonText, rightButtonText}) => {
  return (
    <Wrapper backgroundImage={backgroundImage}>
      <TextItem>
        <h1>{title}</h1>
        <p>{description}</p>
      </TextItem>

      <Buttons>
        <ButtonGroup>
          <LeftButton>
            {leftButtonText}
          </LeftButton>

          { rightButtonText && (
            <RightButton>
              {rightButtonText}
            </RightButton>
          )}
          
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrapper>
  );
};

export default Section;