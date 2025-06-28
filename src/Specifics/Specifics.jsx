import styled from "styled-components";
import COLOUR_CONSTS from "../COLOUR_CONSTS";

const SpecificsSection = styled.div`
    padding: .5em 2em;
    background-color: ${COLOUR_CONSTS.LIGHT_GREY};
    /* background-color: ${COLOUR_CONSTS.LIGHT_GREEN}; */
    /* background-color: #cdd78f; */
`

const Specifics = () => {
    return (
        <SpecificsSection>
            Let us help you with
            <ul>
                <li>first and second mortgages</li>
                <li>divorce settlements</li>
                <li>debt consolidation</li>
                <li>new home construction</li>
                <li>renovations</li>
                <li>bridge financing</li>
            </ul>

            <p>
                We offer mortgage loans up to 70% LTV (Loan - To - Value) of property with no application fees. We do not offer personal loans.
            </p>

            <p>
                Send an email today to landexperts@shaw.ca for a free quote.
            </p>
        </SpecificsSection>
    )
}

export default Specifics;