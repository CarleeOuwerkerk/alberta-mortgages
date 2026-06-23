import { useEffect, useRef } from "react";
import { Link } from "react-router";
import styled from "styled-components";
import COLOUR_CONSTS from "../../COLOUR_CONSTS";

const MenuContainer = styled.div`
    position: fixed;
    top: 5.5em;
    width: 18em;
    right: 0;
    height: 100%;
    background-color: ${COLOUR_CONSTS.DARK_GREEN};
    z-index: 999;
    opacity: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-top: 1em;
`

const MenuItem = styled(Link)`
    padding: .5em 2em;
    color: ${COLOUR_CONSTS.LIGHT_GREY};
    text-decoration: none;
    font-size: 22px;

    &:hover,
    &:active,
    &:visited,
    &:focus {
        color: ${COLOUR_CONSTS.LIGHT_GREY};
        text-decoration: none;
        font-weight: 600;
    }
`

const Menu = ({ setIsMenuOpen, menuIconRef }) => {
    const menuRef = useRef(null);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                !menuRef.current?.contains(event.target) &&
                !menuIconRef.current?.contains(event.target)
            ) {
                setIsMenuOpen(false);
            }
        };

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <MenuContainer ref={menuRef}>
            <MenuItem to='/FAQs' end onClick={() => setIsMenuOpen(false)}>FAQs</MenuItem>
            <MenuItem to='/apply' end onClick={() => setIsMenuOpen(false)}> Apply</MenuItem>
        </MenuContainer >
    )
}

export default Menu;