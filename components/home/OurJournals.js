import { Box, Typography } from "@mui/material"

import image1 from '../../assets/images/Layer1.png'
import image2 from '../../assets/images/Layer2.png'
import image3 from '../../assets/images/Layer3.png'
import image4 from '../../assets/images/Layer4.png'
import image5 from '../../assets/images/Layer5.png'
import SimilarCarousel from "../carousel/SimilarCarousel"

const propertyItems1= [
  { img: '/images/offPlan/Layer1.png',
    title: 'The Escape:  Cap Karoso',
    details: 'We take a look at Cap Karoso in Sumba, Indonesia.',
    portfolio: 'PORTFOLIO 4 MIN Read',
    date: 'APR 14TH, 2023'
  },
  { img: '/images/offPlan/Layer2.png',
    title: 'The Escape:  Cap Karoso',
    details: 'We take a look at Cap Karoso in Sumba, Indonesia.',
    portfolio: 'PORTFOLIO 4 MIN Read',
    date: 'APR 14TH, 2023'
  },
  { img: '/images/offPlan/Layer3.png',
    title: 'The Escape:  Cap Karoso',
    details: 'We take a look at Cap Karoso in Sumba, Indonesia.',
    portfolio: 'PORTFOLIO 4 MIN Read',
    date: 'APR 14TH, 2023'
  },
  { img: '/images/offPlan/Layer4.png',
    title: 'The Escape:  Cap Karoso',
    details: 'We take a look at Cap Karoso in Sumba, Indonesia.',
    portfolio: 'PORTFOLIO 4 MIN Read',
    date: 'APR 14TH, 2023'
  },
  { img: '/images/offPlan/Layer5.png',
    title: 'The Escape:  Cap Karoso',
    details: 'We take a look at Cap Karoso in Sumba, Indonesia.',
    portfolio: 'PORTFOLIO 4 MIN Read',
    date: 'APR 14TH, 2023'
  },
]

export const OurJournals = () => {
  return (
    <Box py={8} px={0}>
      <Box display={{ sm: 'none', xs: 'block' }}>
        <SimilarCarousel data={propertyItems1} title='ourJournal' />
      </Box>
    </Box>
  )
}