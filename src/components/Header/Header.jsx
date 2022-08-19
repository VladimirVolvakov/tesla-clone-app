// Styles:
import { Container, CustomMenu, LeftMenu, RightMenu, BurgerMenu, CustomCloseButton, CloseButtonWrapper } from "./Header.styles";
// Hook:
import { useState } from "react";

const Header = () => {
  const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState(false);

  const openBurgerMenu = () => setIsBurgerMenuOpened(true);

  const closeBurgerMenu = () => setIsBurgerMenuOpened(false);

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
        <CustomMenu onClick={openBurgerMenu} />
      </RightMenu>
      { isBurgerMenuOpened && (<BurgerMenu>
        <CloseButtonWrapper>
          <CustomCloseButton onClick={closeBurgerMenu} />
        </CloseButtonWrapper>
        <li><a href="#">Model S</a></li>
        <li><a href="#">Model Y</a></li>
        <li><a href="#">Model 3</a></li>
        <li><a href="#">Model X</a></li>
        <li><a href="#">Solar Panels</a></li>
        <li><a href="#">Solar Roofs</a></li>
        <li><a href="#">Accessories</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadster</a></li>
      </BurgerMenu>) }
    </Container>
  );
};

export default Header;
