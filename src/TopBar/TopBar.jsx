import styled from 'styled-components';
import COLOUR_CONSTS from '../COLOUR_CONSTS';

const TopBarContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: ${COLOUR_CONSTS.DARK_GREEN};
    color: ${COLOUR_CONSTS.LIGHT_GREY};
    padding-left: 1.5em;
`

const PageTitle = styled.h1`
    margin-left: .75em;
    text-shadow: -1px -1px 0 ${COLOUR_CONSTS.GREEN}, 1px -1px 0 ${COLOUR_CONSTS.GREEN}, -1px 1px 0 ${COLOUR_CONSTS.GREEN}, 1px 1px 0 ${COLOUR_CONSTS.GREEN};
`

const TopBar = () => {
    return (
        <TopBarContainer>
            {/* <div> */}
            INSERT <br /> LOGO <br /> HERE{/* <img src={logo} alt="Alberta Mortgage Loans Logo" width="60" /> */}
            {/* </div> */}
            <PageTitle>ALBERTA <br /> MORTGAGE <br /> LOANS</PageTitle>
        </TopBarContainer>
    )
}

export default TopBar;