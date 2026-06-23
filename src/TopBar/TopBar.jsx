import styled, { css } from 'styled-components';
import COLOUR_CONSTS from '../COLOUR_CONSTS';
import { useRef, useState } from 'react';
import logo from '../assets/AMSLogo.png'
import { Link } from 'react-router';
import Menu from './Menu/Menu';

const TopBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${COLOUR_CONSTS.DARK_GREEN};
    color: ${COLOUR_CONSTS.LIGHT_GREY};
    padding: 0 1.5em 0 1.5em;
    z-index: 1000;
    top: 0;
    left: 0;
    right: 0;

    @media only screen and (min-width: 768px) {
        justify-content: flex-start;
    }
`

const LogoHomeLink = styled(Link)`
    display: flex;
    align-items: center;
    height: 5.5em;
`

const TopBarLinks = styled.div`
    @media only screen and (max-width: 768px) {
        display: none;
    }

    @media only screen and (min-width: 768px) {
        width: 5em;
        margin-left: 1em;
        display: flex;
        justify-content: space-between;

        a {
            color: ${COLOUR_CONSTS.LIGHT_GREY};
            text-decoration: none;

            &:hover,
            &:active,
            &:visited,
            &:focus {
            color: ${COLOUR_CONSTS.LIGHT_GREY};
            text-decoration: none;

            &:hover {
                font-weight: 600;
            }
        }
    }
    }
`

const MenuIcon = styled.div`
    display: inline-block;
    cursor: pointer;
    right: 0;

    @media only screen and (min-width: 768px) {
        display: none;
    }
`

const Bar = styled.div`
    width: 35px;
    height: 5px;
    background-color: ${COLOUR_CONSTS.LIGHT_GREY};
    margin: 6px 0;
    transition: 0.4s;

   ${({ isMenuOpen }) =>
        isMenuOpen &&
        css`
      &:nth-child(1) {
        transform: translate(0, 11px) rotate(-45deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: translate(0, -11px) rotate(45deg);
      }
    `}
`

const TopBar = () => {
    const isScrolledToPageTop = window.scrollY === 0;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuIconRef = useRef(null);

    return (
        <TopBarContainer isScrolledToPageTop={isScrolledToPageTop}>
            <LogoHomeLink to='/' end>
                <img src={logo} alt="Alberta Mortgage Solutions Logo" width="215" />
            </LogoHomeLink>

            <TopBarLinks>
                <Link to='/FAQs' end>FAQs</Link>
                <Link to='/apply' end>Apply</Link>
            </TopBarLinks>

            <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)} ref={menuIconRef}>
                <Bar isMenuOpen={isMenuOpen} />
                <Bar isMenuOpen={isMenuOpen} />
                <Bar isMenuOpen={isMenuOpen} />
            </MenuIcon>

            {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} menuIconRef={menuIconRef} />}
        </TopBarContainer>
    )
}

export default TopBar;