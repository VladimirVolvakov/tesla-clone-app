import styled from "styled-components";
// Icon:
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';

export const Container = styled.div`
  min-height: 60px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 8;
`;

export const LeftMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 15px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 15px;
  }
`;

export const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

export const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: white;
  list-style: none;
  width: 300px;
  padding: 20px;
  z-index: 10;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

export const CustomCloseButton = styled(CloseIcon)`
  cursor: pointer;
`;

export const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 260px;
`;
