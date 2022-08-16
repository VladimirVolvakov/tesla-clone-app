import styled from "styled-components";
// Icon:
import MenuIcon from "@mui/icons-material/Menu";

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
`;

export const LeftMenu = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;

	a {
		font-weight: 600;
		text-transform: uppercase;
		padding: 0 10px;
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
		margin-right: 10px;
	}
`;

export const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;