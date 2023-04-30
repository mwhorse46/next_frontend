import { Box, Grid, Typography } from "@mui/material"

import CarouselArray from '../carousel/CarouselArray'

const featuredApartments = [
  { 
    items: [
      { img: "/images/villa/02.png" },
      { img: "/images/villa/02.png" },
      { img: "/images/villa/02.png" },
      { img: "/images/villa/02.png" },
    ],
    title: 'DOWNTOWN DUBAI PENTHOUSE',
    details: 'PENTHOUSE 3 BED 13,00 SQ.FT READY',
    AED: '144,220,00',
  },
  {
    items: [
      { img: "/images/villa/02.png" },
      { img: "/images/villa/02.png" },
      { img: "/images/villa/02.png" },
      { img: "/images/villa/02.png" },
    ],
    title: 'DOWNTOWN DUBAI PENTHOUSE',
    details: 'PENTHOUSE 3 BED 13,00 SQ.FT READY',
    AED: '144,220,00',
  },
  {
    items: [
      { img: "/images/villa/02.png" },
      { img: "/images/villa/02.png" },
      { img: "/images/villa/02.png" },
      { img: "/images/villa/02.png" },
    ],
    title: 'DOWNTOWN DUBAI PENTHOUSE',
    details: 'PENTHOUSE 3 BED 13,00 SQ.FT READY',
    AED: '144,220,00',
  },
  {
    items: [
      { img: "/images/villa/02.png" },
      { img: "/images/villa/02.png" },
      { img: "/images/villa/02.png" },
      { img: "/images/villa/02.png" },
    ],
    title: 'DOWNTOWN DUBAI PENTHOUSE',
    details: 'PENTHOUSE 3 BED 13,00 SQ.FT READY',
    AED: '144,220,00',
  },
  {
    items: [
      { img: "/images/villa/02.png" },
      { img: "/images/villa/02.png" },
      { img: "/images/villa/02.png" },
      { img: "/images/villa/02.png" },
    ],
    title: 'DOWNTOWN DUBAI PENTHOUSE',
    details: 'PENTHOUSE 3 BED 13,00 SQ.FT READY',
    AED: '144,220,00',
  },
]

export const FeaturedVillas = () => {
  return (
    <Box py={{ sm: 16, xs: 2 }} className='featuredApartments' sx={{
      maxWidth: '1400px',
      margin: 'auto',
    }}>
      <Grid container spacing={4} mb={12} width={'100%'} display={{ sm: 'flex', xs: 'none' }}>
        <Grid item xs={12} sm={6} display={'flex'} alignItems={'center'}>
          <Typography variant='h2' sx={{
            fontSize: { sm: 42, xs: 24 },
            maxWidth: { sm: '30%', xs: '100%' },
            fontFamily: 'Cormorant Garamond',
          }}>Featured Apartments</Typography>
        </Grid>
        <Grid item xs={12} sm={6} display={'flex'} alignItems={'center'}>
          <Box display={'flex'} flexDirection={'column'} gap={4}>
            <Typography variant='body2' sx={{
              fontFamily: 'Cormorant Garamond',
            }}>Dilatations International realty is excited to present the listing for this bespoke 4-bedroom Garden Homes villa on Frond N, Plam Jumeirah,</Typography>
            <Typography variant='body2' sx={{
              fontFamily: 'Cormorant Garamond',
            }}>As well as being positioned on one of the exclusive Fronds of Plam Jumeirah, this exceptional Garden Homes villa has been expettly designed and fully customised to crete a dram luxury property.</Typography>
          </Box>
        </Grid>
      </Grid>
      <CarouselArray data={featuredApartments} title="villa" status='villas' />  
    </Box>
  )
}