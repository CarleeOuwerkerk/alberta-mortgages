import styled from "styled-components";
import ApplyInfo from "./ApplyInfo/ApplyInfo";
import ApplicationForm from "./Form/Form";
import COLOUR_CONSTS from "../COLOUR_CONSTS";
import { useLocation } from "react-router";
import applyPicture from '../assets/ApplyPicture.avif'

const ApplySection = styled.div`
    background-color: ${COLOUR_CONSTS.GREEN};
    padding-bottom: 1em;

    @media only screen and (min-width: 768px) {
        display: flex;
        padding: 0 .25em 2em .25em;
    }
    
    @media only screen and (min-width: 992px) {
        padding: 0 4em 2em 4em;
    }
`

const ApplyPhoto = styled.div`
    position: relative;
    background-image: url(${applyPicture});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 28em;
    overflow: visible;

     @media only screen and (min-width: 768px) {
        background-position-y: 60%;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 5em;
        background-color: ${COLOUR_CONSTS.GREEN};
        clip-path: polygon(50% 0, 0 100%, 100% 100%);
        transform: translateY(1px);
    }
`

const Rooftop = styled.div`
    width: 100%;
    height: 5em;
    background-color: ${COLOUR_CONSTS.GREEN};
    clip-path: polygon(50% 0, 0 100%, 100% 100%);
    transform: translateY(1px);
`

const Apply = () => {
    let location = useLocation();

    return (
        <>
            {(location.pathname === '/apply') && <ApplyPhoto />}
            {(location.pathname !== '/apply') && <Rooftop />}
            <ApplySection>
                <ApplyInfo />
                <ApplicationForm />
            </ApplySection>
        </>
    )
}

export default Apply;