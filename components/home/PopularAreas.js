import { Box, Grid, Typography } from "@mui/material"
import DCarousel from '../carousel/3dCarousel'

const data =[
  {
      id:1,
      img:"/images/popular/Layer 654.png",
      text1: 'DOWNTOWN DUBAI', 
      text2: 'PENTHOUSE' 
  },
  {
      id:2,
      img:"/images/popular/Layer 661.png",
      text1: 'DOWNTOWN DUBAI', text2: 'PENTHOUSE' 
  },
  {
      id:3,
      img:"/images/popular/Layer 654.png",
      text1: 'DOWNTOWN DUBAI', text2: 'PENTHOUSE' 
  },
  {
      id:4,
      img:"/images/popular/Layer 661.png",
      text1: 'DOWNTOWN DUBAI', text2: 'PENTHOUSE' 
  }
]

export const PopularAreas = () => {

  return (
    <Box pt={{ sm: 12, xs: 2 }} className='popularAreas' sx={{
      maxWidth: '1400px',
      margin: 'auto',
    }}>
      <Grid container spacing={4} width={'100%'}>
        <Grid item md={4} sm={4} xs={12} display={{ sm: 'flex', xs: 'none'}} alignItems={'center'} pr={4}>
          <Box display={'flex'} flexDirection={'column'} gap={4} mt={8} width={{ md: '80%', xs: '100%'}}>
            <Typography variant='h2' sx={{
              fontFamily: 'Cormorant Garamond',
            }}>Popular Areas</Typography>
            <Typography variant='h6' sx={{
              fontFamily: 'Cormorant Garamond',
            }}>As well as being positioned on one of the exclusive Fronds of Palm Jumeirah.</Typography>
            <Typography variant='h6' sx={{
              fontFamily: 'Cormorant Garamond',
            }}>It now features the architectural talents of Chakib Richani, att from the Tabari Gallery and a host of unique touches including Flos lighting and furniture from Minotti, Poltrona Frau, Bocci and Giorgetti.</Typography>
          </Box>
        </Grid>
        <Grid item md={8} sm={8} xs={12} pr={{ sm: 4, xs: 0 }} sx={{
          paddingLeft: { sm: '16px', xs: '0px !important' }
        }}>
          <DCarousel data={data} title={'popular'} />
        </Grid>
      </Grid>
    </Box>
  )
}

