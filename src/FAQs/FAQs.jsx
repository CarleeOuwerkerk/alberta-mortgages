import styled from "styled-components";
import Accordion from "./Accordion/Accordion";
import FAQsList from "./FAQsList";

const FAQsWrapper = styled.div`
    padding: .5em 2em 4em 2em;

    @media only screen and (min-width: 600px) {
        display: flex;
        justify-content: space-around;
        padding: 2em 0 4em 0;
    }

     @media only screen and (min-width: 768px) {
        padding: 2em 2em 4em 2em;
    }
`

const FAQs = () => {
    return (
        <FAQsWrapper>
            <h1>FAQs</h1>
            <Accordion data={FAQsList} />
        </FAQsWrapper>
    )
}

export default FAQs;