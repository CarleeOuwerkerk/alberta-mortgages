import styled from "styled-components"
import COLOUR_CONSTS from "../COLOUR_CONSTS"
import housesSketch from '../assets/housesSketchLightGrey.png'

const DisclosuresWrapper = styled.div`
    background-color: ${COLOUR_CONSTS.DARKEST_GREEN};
    height: 8em;
    padding: 1em;
    color: ${COLOUR_CONSTS.LIGHT_GREY};

    background-image: url(${housesSketch});
    background-size: 10em;
    background-repeat: repeat-x;
    background-position: bottom;
`

const Disclosures = () => {
    return (
        <DisclosuresWrapper>ADD DISCLOSURES HERE</DisclosuresWrapper>
    )
}

export default Disclosures;