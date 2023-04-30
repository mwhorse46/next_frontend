import { Box, Grid, Typography } from '@mui/material'
import { palette } from '@/themes'
import {
  Header,
  FeaturedApartments,
  PopularAreas,
  DowntownDubai,
  FeaturedVillas,
  OurJournals,
  OffPlanProperties,
  Subscribe,
} from '../../components/home'
import Footer from '@/components/footer/Footer'
import { useState } from 'react'

const villas = [
  { text: "Editor's picks", value: "picks" },
  { text: "New to market", value: "market" },
  { text: "Price reductions", value: "price" },
]

export default function HomePage () {
  const [ properties, setProperties ] = useState('apartments')
  const [ villasStatus, setVillasStatus ] = useState(0);
  
  return (
    <Box sx={{
      background: palette.common.black,
    }}>
      <Header />
      <Box 
        display={{ sm: 'none', xs: 'block' }} 
        mt={{ sm: 0, xs: 16}} 
        px={{ sm: 0, xs: 4}}
      >
        <Typography display={{sm: 'none', xs: 'block'}} variant='h2' sx={{
          fontSize: 24,
          maxWidth: '100%'
        }}>Featured Properties</Typography>
        <Box display={{ sm: 'none', xs: 'flex'}} alignItems={'center'} my={4}>
          <Typography 
            variant='h4' 
            sx={{
              fontSize: 16,
              maxWidth: '100%',
              opacity: properties === 'apartments' ? 1 : 0.7, 
              zIndex: 100
            }}
            onClick={()=>setProperties('apartments')}
          >Apartments</Typography>
          <Typography 
            variant='h4' ml={8} 
            sx={{
              fontSize: 16,
              maxWidth: '100%',
              opacity: properties === 'popular' ? 1 : 0.7, 
              zIndex: 100
            }}
            onClick={()=>setProperties('popular')}
          >Popular Areas</Typography>
        </Box>
        { properties === 'apartments' && <FeaturedApartments />  }
        { properties === 'popular' && <PopularAreas />  }
      </Box>
      <Box display={{ sm: 'block', xs: 'none' }}>
        <FeaturedApartments />
        <PopularAreas />
      </Box>
      <DowntownDubai />


      <Box display={{ sm: 'none', xs: 'block' }} mt={4} pt={8} px={4} sx={{
        borderTop: '2px solid #292929',
      }}>
        <Typography display={{sm: 'none', xs: 'block'}} variant='h2' sx={{
          fontSize: 24,
          maxWidth: '100%'
        }}>Featured Villas</Typography>
        <Box display={{ sm: 'none', xs: 'flex'}} alignItems={'center'} my={4}>
          {
            villas.map((item, i) => (
              <Typography 
                key={i}
                variant='h4'
                mr={2}
                sx={{
                  fontSize: 13,
                  maxWidth: '100%',
                  opacity: villasStatus === i ? 1 : 0.7, 
                  zIndex: 100
                }}
                onClick={()=>setVillasStatus(i)}
              >{item.text}</Typography>
            ))
          }
        </Box>
        <FeaturedVillas />
      </Box>

      <Box display={{ sm: 'none', xs: 'block' }} mt={4} pt={8} px={4} sx={{
        borderTop: '2px solid #292929',
        borderBottom: '2px solid #292929',
      }}>
        <Typography display={{sm: 'none', xs: 'block'}} variant='h2' sx={{
          fontSize: 24,
          maxWidth: '100%'
        }}>Our Journals</Typography>
        <OurJournals />
      </Box>

      <OffPlanProperties />
      <Subscribe />
      <Footer />
    </Box>
  )
}