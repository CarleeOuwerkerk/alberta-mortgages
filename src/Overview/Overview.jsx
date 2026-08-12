import styled from "styled-components";
import COLOUR_CONSTS from "../COLOUR_CONSTS";

const OverviewContainer = styled.div`
    background-color: #5a5c72;
    color: ${COLOUR_CONSTS.LIGHT_GREY};
    
    @media only screen and (min-width: 768px) {
        display: flex;
        align-items: center;
    }
`

const OverviewText = styled.div`
    padding: .5em 2em;

     @media only screen and (min-width: 768px) {
        flex: 1;
    }
`

const OverviewImage = styled.div`
    background-image: url('https://static.vecteezy.com/system/resources/previews/058/208/854/non_2x/aerial-view-of-a-luxurious-lakeside-mansion-surrounded-by-vibrant-autumn-trees-and-a-tranquil-blue-lake-capturing-nature-s-beauty-photo.jpg');
    background-size: cover;
    background-position-x: 45%;
    background-repeat: no-repeat;
    height: 20em;

    @media only screen and (min-width: 768px) {
        flex: .66;
        margin-top: .5px;
    }
`

const Overview = () => {
    return (
        <OverviewContainer>
            <OverviewText>
                <h2>
                    Having a hard time acquiring bank financing?
                </h2>

                <p>
                    We are Alberta's premier private lender with more than 25 years of experience. With our expertise and quick turnaround, we'll help you navigate the mortgage process. Fast approvals and quick closings are available.
                </p>

                <p>
                    Funds are available now!
                </p >
            </OverviewText>

            <OverviewImage />
        </OverviewContainer>
    )
}

export default Overview;
