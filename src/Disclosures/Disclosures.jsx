import styled from "styled-components"
import COLOUR_CONSTS from "../COLOUR_CONSTS"

const DisclosuresWrapper = styled.div`
    background-color: ${COLOUR_CONSTS.DARK_GREEN};
    height: 5em;
    display: flex;
    align-items: center;
    padding: 1em;
    color: ${COLOUR_CONSTS.LIGHT_GREY};
`

const Disclosures = () => {
    return (
        <DisclosuresWrapper>ADD DISCLOSURES HERE</DisclosuresWrapper>
    )
}

export default Disclosures;