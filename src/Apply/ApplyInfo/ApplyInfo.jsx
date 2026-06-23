import { Link } from "react-router";
import styled from "styled-components";
import COLOUR_CONSTS from "../../COLOUR_CONSTS";

const ApplyInfoWrapper = styled.div`
    padding: .5em 2em;

    @media only screen and (min-width: 768px) {
        width: 50%;
    }
`

const PageLink = styled(Link)`
    color: ${COLOUR_CONSTS.BLACK};
    cursor: pointer;
    text-decoration: none;
    font-style: italic;

    &:hover,
    &:active,
    &:visited,
    &:focus {
        color: ${COLOUR_CONSTS.BLACK};
        text-decoration: underline;
    }
`

const ApplyInfo = () => {
    return (
        <ApplyInfoWrapper>
            <h2>Apply</h2>

            <p>
                Start your application by filling out the provided form.
            </p>

            <h3>Questions?</h3>

            <p>Check out our <PageLink to='/FAQs' end>FAQ page</PageLink>. If that doesn't answer your question, reach out at landexperts@shaw.ca.</p>
        </ApplyInfoWrapper>
    )
}

export default ApplyInfo;