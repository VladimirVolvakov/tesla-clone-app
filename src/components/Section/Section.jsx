// Styles:
import { ButtonGroup, Buttons, DownArrow, LeftButton, RightButton, TextItem, Wrapper } from "./Section.styles";
// Animation:
import Fade from "react-reveal/Fade";

const Section = ({ id, title, description, backgroundImage, leftButtonText, rightButtonText, downArrowLink }) => {
  return (
    <section id={id}>
      <Wrapper backgroundImage={backgroundImage}>
        <Fade bottom>
          <TextItem>
            <h1>{title}</h1>
            <p>{description}</p>
          </TextItem>
        </Fade>

        <Buttons>
          <Fade bottom>
            <ButtonGroup>
              <LeftButton>{leftButtonText}</LeftButton>

              {rightButtonText && <RightButton>{rightButtonText}</RightButton>}
            </ButtonGroup>
          </Fade>
          <a href={downArrowLink}>
            <DownArrow src="/images/down-arrow.svg" />
          </a>
        </Buttons>
      </Wrapper>
    </section>
  );
};

export default Section;
