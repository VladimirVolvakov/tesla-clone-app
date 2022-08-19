import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TextItem = styled.div`
  padding-top: 15vh;
  text-align: center;

  h1 {
    margin-bottom: 5px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftButton = styled.div`
  height: 40px;
  width: 256px;
  background-color: rgba(23, 26, 32, 0.8);
  font-size: 12px;
  color: white;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  margin: 8px;
  opacity: 0.85;
  cursor: pointer;
`; 

export const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

export const DownArrow = styled.img`
  height: 40px;
  animation: moveDown infinite 1.5s;
  cursor: pointer;
`;

export const Buttons = styled.div``;