import {Box} from '@mui/material'
import type {NextPage} from 'next'
import Experience from '../src/components/Sections/TechTools/TechTools'
import Hero from '../src/components/Sections/Hero/Hero'
import Perks from '../src/components/Sections/Perks/Perks'
import Projects from '../src/components/Sections/Projects/Projects';
import CTA from '../src/components/Sections/CallToAction/CTA'
import {useEffect, useRef} from 'react';
import CursorAnimation from '../src/gsap/CursorAnimation';
import About from '../src/components/Sections/About/About';
import Layout from '../Layout/Layout'

const Home : NextPage = ({projectsArray, iconsArray} : any) => {
    const ball = useRef()

    useEffect(() => {
        if (ball && ball.current) {
            CursorAnimation(ball.current)
        }

    }, [])
    return (
        <Layout desc={`Brian Drewes, a data science professional in New York. From business intelligence analytics to machine learning insights, I can help turn data into business value.`} title='Brian Drewes - Analytcs & ML - Personal Portfolio Website'>

            <Box
                sx={{
                margin: '0 auto',
                color: 'white'
            }}>

                <Hero/>
                <Perks/>
                <Experience iconsArray={iconsArray}/>
                <Projects projectsArray={projectsArray}/>
                <About/>
                <CTA/>

                <Box
                    ref={ball}
                    sx={{
                    display: {
                        xs: 'none',
                        md: 'block'
                    }
                }}
                    className="ball"></Box>

            </Box>
        </Layout>

    )
}

export default Home

export async function getStaticProps() {
    // Hardcoded projects data
    const projectsArray = [
        {
            title: 'Boosting Real Estate Decisions',
            repoUrl: 'https://github.com/briangdrewes/machinelearning_Ames',
            siteUrl: 'https://nycdatascience.com/blog/student-works/machine-learning/boosting-real-estate-decisions/',
            description: 'Employing machine learning, this study enhances real estate purchasing strategies in Ames, Iowa. Through comprehensive data processing and model development, it offers actionable advice on property improvements and investments to maximize returns, demonstrating the utility of data-driven approaches in the real estate market.',
            img: 'https://res.cloudinary.com/dcosauyla/image/upload/v1709300076/DALL_E_2024-02-29_10.50.27_-_Visualize_an_overhead_view_of_a_futuristic_suburban_environment_where_the_housing_market_is_deeply_integrated_with_artificial_intelligence._This_scene_bvlgta.webp', // You can use local images or URLs
        },
        // Add more projects as needed
        {
            title: 'Tackling NFL Defensive Data with R Shiny',
            repoUrl: 'https://github.com/briangdrewes/nflapp',
            siteUrl: 'https://nycdatascience.com/blog/student-works/r-shiny/tackling-nfl-defensive-data-with-r-shiny/',
            description: 'Utilizing R and R Shiny, this application provides in-depth insights into NFL defensive players through player and team trackers, leaderboards, and live play animations. It serves various stakeholders by enabling the evaluation of player performance, identification of team dynamics, and strategic decision-making, with future prospects for AR/VR enhancements.',
            img: 'https://res.cloudinary.com/dcosauyla/image/upload/v1709302038/footballpic_briangdrewes_b0tcya.jpg', // You can use local images or URLs
        },
        {
            title: 'Be a YouTube mrBeast',
            repoUrl: 'https://github.com/briangdrewes/youtuber-analysis',
            siteUrl: 'https://nycdatascience.com/blog/student-works/be-a-youtube-mrbeast/',
            description: `This analysis delves into the factors affecting YouTubers' success, focusing on how content category and geographic location impact subscriber counts and earnings. By analyzing the "Global YouTube Statistics 2023" dataset, it uncovers strategies for increasing visibility and earnings, highlighting the significance of choosing profitable content categories and capitalizing on recent trends.`,
            img: 'https://res.cloudinary.com/dcosauyla/image/upload/v1709302034/youtube_briangdrewes_xgjld8.jpg', // You can use local images or URLs
        },
    ];

    // Hardcoded icons data
    const iconsArray = [
        {
            filter: false,
            svg: 'https://www.svgrepo.com/show/374016/python.svg', // Your SVG content here
            title: 'Python',
            isBackend: false,
        },
        // Add more icons as needed
        {
            filter: false,
            svg: 'https://res.cloudinary.com/dcosauyla/image/upload/v1709243403/dataiku_npwcck.png', // Your SVG content here
            title: 'dataiku',
            isBackend: false,
        },
        {
            filter: false,
            svg: 'https://res.cloudinary.com/dcosauyla/image/upload/v1709243840/chatgpt_jl73bj.png', // Your SVG content here
            title: 'ChatGPT',
            isBackend: false,
        },
        {
            filter: false,
            svg: 'https://www.svgrepo.com/show/354200/postgresql.svg', // Your SVG content here
            title: 'PostgreSQL',
            isBackend: false,
        },
        
        {
            filter: false,
            svg: 'https://res.cloudinary.com/dcosauyla/image/upload/v1709244008/r.ong_cmpb8k.png', // Your SVG content here
            title: 'R',
            isBackend: false,
        },
        {
            filter: false,
            svg: 'https://www.svgrepo.com/show/354428/tableau-icon.svg', // Your SVG content here
            title: 'Tableau',
            isBackend: false,
        },
        {
            filter: false,
            svg: 'https://www.svgrepo.com/show/373589/excel.svg', // Your SVG content here
            title: 'Excel',
            isBackend: false,
        },
        {
            filter: false,
            svg: 'https://www.svgrepo.com/show/349419/javascript.svg', // Your SVG content here
            title: 'JavaScript',
            isBackend: true,
        },
        {
            filter: false,
            svg: 'https://www.svgrepo.com/show/452210/git.svg', // Your SVG content here
            title: 'Git',
            isBackend: true,
        },
        {
            filter: false,
            svg: 'https://www.svgrepo.com/show/448266/aws.svg', // Your SVG content here
            title: 'AWS',
            isBackend: true,
        },
        {
            filter: false,
            svg: 'https://www.svgrepo.com/show/354306/salesforce.svg', // Your SVG content here
            title: 'Salesforce',
            isBackend: true,
        },
        {
            filter: false,
            svg: 'https://www.svgrepo.com/show/354259/react.svg', // Your SVG content here
            title: 'React',
            isBackend: true,
        },
        {
            filter: false,
            svg: 'https://www.svgrepo.com/show/331433/hubspot.svg', // Your SVG content here
            title: 'HubSpot',
            isBackend: true,
        },
        {
            filter: false,
            svg: 'https://www.svgrepo.com/show/448221/docker.svg', // Your SVG content here
            title: 'Docker',
            isBackend: true,
        },



        
    ];

    // No need for try-catch since we are not fetching data from an external source
    return {
        props: {
            projectsArray,
            iconsArray,
        },
    };
}
