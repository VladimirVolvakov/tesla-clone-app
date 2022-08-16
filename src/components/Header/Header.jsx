// Styles:
import { Container, CustomMenu, LeftMenu, RightMenu } from "./Header.styles";

const Header = () => {
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="Tesla Logo" />
      </a>
      <LeftMenu>
        <a href="#">Model S</a>
        <a href="#">Model Y</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
      </LeftMenu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu />
      </RightMenu>  
    </Container>
  );
};

export default Header;
