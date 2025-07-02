import styled from "styled-components";
import COLOUR_CONSTS from "../COLOUR_CONSTS";
import calgary from '../assets/calgary.jpg';

const OverviewContainer = styled.div`
    padding: .5em 0;
    background-color: #5a5c72;
    color: ${COLOUR_CONSTS.LIGHT_GREY};
    // background-color: #acbd29;
    // background-color: #8a9f1c;
    
    @media only screen and (min-width: 768px) {
        display: flex;
    }
`

const OverviewText = styled.div`
    padding: .5em 2em;
`

const OverviewImage = styled.img`
    width: 33%;
    margin: 2em 0;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
`

const Overview = () => {
    return (
        <OverviewContainer>
            <OverviewText>
                <h2>
                    Having a hard time acquiring bank financing?
                </h2>

                <p>
                    We are Alberta's premier private lender with more than 25 years of experience. With our expertise and quick turnaround, we'll help you navigate the loan process. Fast approvals and quick closings are available.
                </p>

                <p>
                    Funds are available now!
                </p >
            </OverviewText>
            <OverviewImage src={calgary} alt='dowtown' />
        </OverviewContainer>
    )
}

export default Overview;
