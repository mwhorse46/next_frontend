import { palette } from "@/themes"
import { Box, Button, Grid, Typography } from "@mui/material"
import DCarousel from "../carousel/3dCarousel"
import { useState } from "react"

const data = [
  { img: '/images/Header.png', concept: 651, number: '01' },
  { img: '/images/03.png', concept: 216, number: 'PENTHOUSE' },
  { img: '/images/Header.png', concept: 651, number: 'PENTHOUSE' },
  { img: '/images/Header.png', concept: 621, number: 'PENTHOUSE' },
  { img: '/images/Header.png', concept: 651, number: 'PENTHOUSE' },
]

const items = [
  { title: 'SQ.FT', text: '13,000 SQ.FT' },
  { title: 'PRICE', text: '144,220 AED' },
  { title: 'BATHROOMS', text: '4 ROOMS' },
  { title: 'BEDROOMS', text: '8 ROOMS' },
]

export const DowntownDubai = () => {
  const [ selectedBg, setSelectedBg ] = useState(0)

  return (
    <Box 
      display={{ sm: 'flex', xs: 'none' }} 
      justifyContent={'space-between'} 
      alignItems={'center'}
      className='downtown'
      mt={16} px={{ sm: 8, xs: 4 }} 
      sx={{
        backgroundImage: `url(${data[selectedBg].img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: { md: '650px', xs: '580px'},
        position: 'relative',
      }}
    >
      <Box width={'100%'} mt={8} sx={{
        maxWidth: '1400px',
        margin: 'auto',
      }}>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12} mt={{ md: 38, xs: 12 }}>
            <Typography variant="h3" mb={4} sx={{
              fontSize: 18, 
              fontFamily: 'Cormorant Garamond',
            }}>Modern Architecture</Typography>
            <Typography variant="h1" mb={8} sx={{
              maxWidth: { md: '90%', xs: '100%' },
              fontSize: { sm: 42, xs: 36 },
              fontFamily: 'Cormorant Garamond',
              fontWeight: 600,
            }}>
              DOWNTOWN DUBAI VILLA
            </Typography>
            <Button sx={{
              background: `${palette.common.white} !important`,
              color: palette.common.black,
              fontSize: 14,
              fontWeight: 500,
              borderRadius: '999px !important',
              padding: '14px 32px',
            }}>
              VIEW DETAILS
            </Button>
            <Grid container spacing={2} p={8} mt={{ sm: 28, xs: 12 }} width={{ sm: '80%', xs: '100%' }} sx={{
              background: '#312f2f',
              opacity: 0.7,
            }}>
              {
                items.map((item, i) => (
                  <Grid item sm={3} xs={6} key={i}>
                    <Typography variant="h4" mb={2}>{item.title}</Typography>
                    <Typography variant="h6" sx={{
                      fontWeight: 600,
                    }}>{item.text}</Typography>
                  </Grid>
                ))
              }
            </Grid>
          </Grid>
          <Grid item md={6} xs={12} display={{ lg: 'flex', md: 'none', xs: 'none', sm: 'none' }} justifyContent={'end'}>
            <Box sx={{
              width: { lg: '540px', md: '400px' },
              marginBottom: '-45px !important',
              position: 'absolute',
              right: 0,
              bottom: 0,
            }}>
              <DCarousel data={data} title='downtown' setSelectedBg={setSelectedBg}/>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}