import styled from "styled-components";
import ApplyInfo from "./ApplyInfo/ApplyInfo";
import ApplicationForm from "./Form/Form";
import COLOUR_CONSTS from "../COLOUR_CONSTS";

const ApplySection = styled.div`
    background-color: ${COLOUR_CONSTS.GREEN};

    @media only screen and (min-width: 768px) {
        display: flex;
    }
`

const Rooftop = styled.div`
    margin-bottom: -.1%;
    width: 100%;
    height: 5em;
    background-color: ${COLOUR_CONSTS.GREEN};
    clip-path: polygon(50% 0, 0 100%, 100% 100%);

    @media only screen and (min-width: 768px) {
        margin-bottom: -.1%;
    }
`

const Apply = () => {
    return (
        <>
            <Rooftop />
            <ApplySection>
                <ApplyInfo />
                <ApplicationForm />
            </ApplySection>
        </>
    )
}

export default Apply;