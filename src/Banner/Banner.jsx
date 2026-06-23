import styled from "styled-components"
import COLOUR_CONSTS from "../COLOUR_CONSTS"
import stockHouse3 from '../assets/stockHouse3.jpg'
import stockHouse1 from '../assets/stockHouse1.jpg'

const OverviewSection = styled.div`
    //OPTION 1
    /* background-image: url('https://static.vecteezy.com/system/resources/previews/058/179/245/non_2x/big-modern-luxury-home-exterior-at-sunset-showing-large-garage-and-driveway-photo.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    left: 0;
    right: 0;
    background-position-y: 30%;
    height: 35em;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    background-position-x: 47%; */

     //OPTION 4
    background-image: url('https://plus.unsplash.com/premium_photo-1754258445404-f5d9699409ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    /* background-image: url('https://plus.unsplash.com/premium_photo-1725408141475-a08cc7588b5f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'); */
    background-size: cover;
    background-repeat: no-repeat;
    left: 0;
    right: 0;
    height: 32em;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;

    @media only screen and (min-width: 992px) {
        height: 40em;
    }
`

const BannerContent = styled.div`
    margin-bottom: -.5px;
    padding: .5em 2em;
    background-image: linear-gradient(to top, rgba(12, 40, 25, 0.922) 94%, rgb(218, 225, 234, 0)  99%);

    @media only screen and (min-width: 992px) {
        padding: 1.5em 2em;
    }
`

const Slogan = styled.h2`
    color: ${COLOUR_CONSTS.LIGHT_GREY};
    text-align: center;
    font-weight: 600;
    font-size: 1.75em;
`

const BulletedList = styled.ul`
    color: ${COLOUR_CONSTS.LIGHT_GREY};
    line-height: 26px;

    @media only screen and (min-width: 992px) {
        display: flex;
        justify-content: center;
        gap: 2.25em;
        padding: 0;
    }
`

const Banner = () => {
    return (
        <OverviewSection>
            <BannerContent>
                <Slogan>Your Trusted Path to Homeownership</Slogan>
                <BulletedList>
                    <li>Loans from $30,000 to $1,000,000</li>
                    <li>Up to 70% loan-to-value</li>
                    <li>Financing options from 2 months to 1 year</li>
                </BulletedList>
            </BannerContent>
        </OverviewSection>
    )
}

export default Banner;