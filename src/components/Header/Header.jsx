// Styles:
import { Container, CustomMenu, LeftMenu, RightMenu, BurgerMenu, CustomCloseButton, CloseButtonWrapper } from "./Header.styles";
// Hooks:
import { useState } from "react";
import { useSelector } from "react-redux";
// State:
import { selectProduct } from "../../features/product/productSlice";

const Header = () => {
  const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState(false);

  const openBurgerMenu = () => setIsBurgerMenuOpened(true);
  const closeBurgerMenu = () => setIsBurgerMenuOpened(false);

  const products = useSelector(selectProduct);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="Tesla Logo" />
      </a>
      <LeftMenu>
        { products && products.map((product, index) => (
          <a href="#" key={index}>{product}</a>
        )) }
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
        { products && products.map((product, index) => (
          <li><a href="#" key={index}>{product}</a></li>
        )) }
        <li><a href="#">Accessories</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Charging</a></li>
        <li><a href="#">Commercial Energy</a></li>
        <li><a href="#">Utilities</a></li>
        <li><a href="#">Test Drive</a></li>
      </BurgerMenu>) }
    </Container>
  );
};

export default Header;
