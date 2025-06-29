import styled from "styled-components";
import Accordion from "./Accordion/Accordion";
import FAQsList from "./FAQsList";

const FAQsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 2em;
`

const FAQs = () => {
    return (
        <FAQsWrapper>
            FAQs
            <Accordion data={FAQsList} />
        </FAQsWrapper>
    )
}

export default FAQs;