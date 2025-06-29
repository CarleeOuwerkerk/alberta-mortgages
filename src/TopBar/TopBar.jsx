import styled, { css } from 'styled-components';
import COLOUR_CONSTS from '../COLOUR_CONSTS';
import { useEffect, useState, useRef } from 'react';
import logo from '../assets/Logo.png'
import { Link } from 'react-router';

const TopBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${COLOUR_CONSTS.DARK_GREEN};
    color: ${COLOUR_CONSTS.LIGHT_GREY};
    padding: 0 1.5em 0 .75em;

    /* transform: ${({ visible }) => (visible ? 'translateY(0)' : 'translateY(-100%)')};
    transition: transform 0.3s ease-in-out; */
    z-index: 1000;
    /* position: ${({ isScrolledToPageTop }) => (isScrolledToPageTop ? 'relative' : 'fixed')}; */
    /* position: fixed; */
    top: 0;
    left: 0;
    right: 0;

    @media only screen and (min-width: 768px) {
        justify-content: flex-start;
    }
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
        /* font-weight: 600; */
        font-size: 18px;

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

const Test = styled.div`
    height: 6em;
`

const Menu = styled.div`
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
    const [menuVisible, setMenuVisible] = useState(true);
    const [hasScrolledPastMenu, setHasScrolledPastMenu] = useState(false);
    const isScrolledToPageTop = window.scrollY === 0;
    const lastScrollYRef = useRef(0);
    const lastTimeRef = useRef(Date.now());
    const topBarRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            const now = Date.now();
            const deltaY = lastScrollYRef.current - currentY;
            const deltaTime = now - lastTimeRef.current;

            const speed = deltaY / deltaTime;

            if (currentY > 80 && !hasScrolledPastMenu) {
                setHasScrolledPastMenu(true);
            }

            if (!hasScrolledPastMenu || currentY <= 0) {
                setMenuVisible(true);
            } else {
                if (deltaY > 0 && speed > 0.3) {
                    setMenuVisible(true);  // scrolling up fast
                } else if (deltaY < 0) {
                    setMenuVisible(false); // scrolling down
                }
            }

            lastScrollYRef.current = currentY;
            lastTimeRef.current = now;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasScrolledPastMenu]);

    return (
        <>
            <TopBarContainer ref={topBarRef} visible={menuVisible} isScrolledToPageTop={isScrolledToPageTop}>
                <Link to='/' end>
                    <img src={logo} alt="Alberta Mortgage Loans Logo" width="200" />
                </Link>

                <TopBarLinks>
                    <Link to='/FAQs' end>FAQs</Link>
                    <Link to='/apply' end>Apply</Link>
                </TopBarLinks>

                <Menu onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <Bar isMenuOpen={isMenuOpen} />
                    <Bar isMenuOpen={isMenuOpen} />
                    <Bar isMenuOpen={isMenuOpen} />
                </Menu>
            </TopBarContainer>
            {/* <Test /> */}
        </>
    )
}

export default TopBar;