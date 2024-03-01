import {Box, Container, Typography, Divider} from '@mui/material';
import PerkCard from './PerkCard';
import {useEffect} from 'react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MainTitleAnimation from '../../../gsap/MainTitleAnimation';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AddchartIcon from '@mui/icons-material/Addchart';

export const centeredStyles = {
    alignItems: 'center',
    textAlign: 'center',
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
}

gsap.registerPlugin(ScrollTrigger);


const perksArray = [{
    title:'Data Visualization & Wrangling',
    Icon:AddchartIcon,
    text:"Transforming raw data into compelling visual stories, I leverage advanced visualization techniques and wrangling skills to unveil insights that drive decision-making. My approach simplifies complex datasets, making them accessible and actionable for all stakeholders.",
},
{
    title : 'Communication & Consumer Engagement',
    text : "Expert in crafting narratives that resonate, I excel in engaging consumers and stakeholders with clear, persuasive communication strategies. By understanding audience needs, I create meaningful connections that enhance brand loyalty and drive engagement.",
    Icon :  RecordVoiceOverIcon,
}   ,
{
    title : 'Machine Learning & Generative AI',
    Icon : PsychologyIcon,
    text : "Pushing the boundaries of innovation, I apply machine learning and generative AI to solve real-world problems, from predictive analytics to creating new content. My work not only anticipates future trends but also sets new standards in automation and creativity."
}
]
const Perks = () => {

    

    useEffect(() => {
        MainTitleAnimation('.h1','.h2')
    }, [])

    return ( <> <Container
        maxWidth='lg'
        sx={{
        margin: '0 auto',
        my: '4em'
    }}>
        <Box sx={centeredStyles}>
            <Typography
                className='h1 t25o0'
                variant='h1'
                sx={{
             
                fontSize: {
                    xs: '2.2em',
                    sm: '2.5em',
                    md: '3em'
                }
            }}
                fontWeight='600'>
                Unlocking Solutions with Purpose and Innovation
            </Typography>
            <Typography
                variant='h2'
                className='secondary h2'
                sx={{
                pt: '1.5em',
                transform: 'translateY(15px)',
                opacity: 0,
                maxWidth: '570px',
                fontSize: {
                    xs: '.8em',
                    sm: '1em'
                }
            }}>
                Driven by a quest to uncover the 'why' behind each challenge, I blend cutting-edge technology with a deep understanding of human and 
                data complexities to craft impactful solutions. My approach prioritizes understanding the root problems to innovate and streamline processes, 
                ensuring every project not only solves immediate issues but also enhances interactions and operations for the long term.
            </Typography>

            <Box
                sx={{
                mt: '3em',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '5%',
                justifyContent: {
                    xs: 'center',
                    sm: 'space-between'
                }
            }}>
                {perksArray.map(perk => {
                    return <PerkCard  key={perk.title} title={perk.title} text={perk.text} Icon={perk.Icon}/>
                })}
            </Box>
        </Box>
    </Container> < Divider /> </>)
}

export default Perks