import { useEffect, useState } from "react"
import styled from "styled-components"
import COLOUR_CONSTS from "../COLOUR_CONSTS"
import stockHouse3 from '../assets/stockHouse3.jpg'
import stockHouse1 from '../assets/stockHouse1.jpg'

const OverviewSection = styled.div`
    position: relative;
    width: 100%;
    height: 25em;  //ensure it matches or contains HouseImage height
    overflow: hidden;
    display: flex;
    justify-content: center;
 `

const HouseImage = styled.div`
    background-image: linear-gradient(to bottom, ${COLOUR_CONSTS.LIGHT_GREY} 15%, rgb(218, 225, 234, 0)  40%), url(${stockHouse3});
    // background-image: linear-gradient(to bottom, ${COLOUR_CONSTS.LIGHT_GREY} 15%, rgb(218, 225, 234, 0)  40%), url(${stockHouse1});
    /* height: 35em; */
    /* background-size: contain; */
    background-size: cover;
    background-repeat: no-repeat;
    /* -webkit-mask-image: linear-gradient(to top, black 80%, transparent 20%); */
    /* mask-image: linear-gradient(to top, black 85%, transparent 15%); */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;

    //transform: translateY(${props => -props.offsetY * 0.1}px); /* Parallax movement */
    //transition: transform 0.25s ease-out;

    @media only screen and (min-width: 768px) {
        height: 25em;
        /* height: 45em; */
        /* background-position: 55% 45%; */
    }
`

const Slogan = styled.h2`
    color: #455917;
    /* color: ${COLOUR_CONSTS.GREEN}; */
    text-align: center;
    font-weight: 600;
    z-index: 2;
    font-size: 40px;
    padding: 0 .5em;

    @media only screen and (min-width: 768px) {
        font-size: 46px;
        padding: .25em .5em;
    }
`

const Banner = () => {
    // const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
    // const [offsetY, setOffsetY] = useState(0)

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const section = document.getElementById('overview-section')
    //         if (!section) return

    //         const rect = section.getBoundingClientRect()
    //         const scrollTop = window.scrollY || window.pageYOffset

    //         // Only apply effect when the section is in view
    //         if (rect.top < window.innerHeight && rect.bottom > 0) {
    //             setOffsetY(scrollTop - section.offsetTop)
    //         }
    //     }
    //     window.addEventListener('scroll', handleScroll)
    //     return () => window.removeEventListener('scroll', handleScroll)
    // }, [])

    return (
        <OverviewSection id="overview-section">
            <HouseImage
            // offsetY={offsetY} 
            />
            {/* <Slogan>YOUR TRUSTED PATH TO HOME OWNERSHIP</Slogan> */}
            {/* <Slogan>Your trusted path to homeownership</Slogan> */}
            <Slogan>Your Trusted Path to Homeownership</Slogan>
        </OverviewSection>
    )
}

export default Banner;