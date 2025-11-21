import styled from "styled-components"
import COLOUR_CONSTS from "../COLOUR_CONSTS"
import stockHouse3 from '../assets/stockHouse3.jpg'
import stockHouse1 from '../assets/stockHouse1.jpg'

const OverviewSection = styled.div`
    //OPTION 1
    /* background-image: linear-gradient(to top, rgba(0, 50, 7, 0.879) 40%, rgb(218, 225, 234, 0)  45%), url('https://static.vecteezy.com/system/resources/previews/058/179/245/non_2x/big-modern-luxury-home-exterior-at-sunset-showing-large-garage-and-driveway-photo.jpg');
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

    //OPTION 2 
    /* background-image: linear-gradient(to top, rgba(0, 50, 7, 0.879) 40%, rgb(218, 225, 234, 0)  45%), url('https://static.vecteezy.com/system/resources/previews/058/208/854/non_2x/aerial-view-of-a-luxurious-lakeside-mansion-surrounded-by-vibrant-autumn-trees-and-a-tranquil-blue-lake-capturing-nature-s-beauty-photo.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    left: 0;
    right: 0;
    background-position-x: 47%;
    height: 35em;
    display: flex;
    justify-content: flex-end;
    flex-direction: column; */

    //OPTION 3
    /* background-image: linear-gradient(to top, rgba(0, 50, 7, 0.879) 40%, rgb(218, 225, 234, 0)  45%), url('https://www.shutterstock.com/shutterstock/photos/1514333600/display_1500/stock-photo-houses-in-suburb-at-summer-in-the-north-america-luxury-houses-with-nice-landscape-1514333600.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    left: 0;
    right: 0;
    background-position-x: 45%;
    height: 35em;
    display: flex;
    justify-content: flex-end;
    flex-direction: column; */

    /* ::after {
        content: "";
        background: rgba(11, 69, 20, 0.104);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 35em;
    } */

    //OPTION 4
    background-image: linear-gradient(to top, rgba(0, 50, 7, 0.879) 40%, rgb(218, 225, 234, 0)  45%), url('https://plus.unsplash.com/premium_photo-1725408141475-a08cc7588b5f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-size: cover;
    background-repeat: no-repeat;
    left: 0;
    right: 0;
    height: 31em;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
`

const Slogan = styled.h2`
    color: ${COLOUR_CONSTS.LIGHT_GREY};
    text-align: center;
    font-weight: 600;
    font-size: 30px;
    /* margin: 12em 0 0 0; */
`

const BulletedList = styled.ul`
    color: ${COLOUR_CONSTS.LIGHT_GREY};
    line-height: 26px;
    margin: 0 0 2em .5em;
`

const Banner = () => {
    return (
        <OverviewSection>
            <Slogan>YOUR TRUSTED PATH<br />TO HOMEOWNERSHIP</Slogan>
            {/* <Slogan>Your trusted path to homeownership</Slogan> */}
            {/* <Slogan>Your Trusted Path to Homeownership</Slogan> */}
            <BulletedList>
                <li>Loans from $30,000 to $1,000,000</li>
                <li>Up to 70% loan-to-value</li>
                <li>Financing options from 2 months to 1 year</li>
            </BulletedList>
        </OverviewSection>
    )
}

export default Banner;