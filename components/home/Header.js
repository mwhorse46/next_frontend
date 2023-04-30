import { palette } from "@/themes"
import { Box, Button, Grid, Typography, OutlinedInput } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

import Carousel from "../carousel/Carousel";

import icon1 from '../../assets/images/Layer 41.png'
import icon2 from '../../assets/images/Layer 42.png'
import icon3 from '../../assets/images/Layer 43.png'

const contactInfos = [
  { name: 'Area', info: 'Seaside Hills', icon: icon1 },
  { name: 'Location', info: 'Boulevard, MTC+X0', icon: icon2 },
  { name: 'Location', info: 'Boulevard, MTC+X0', icon: icon3 },
]

const header_data =[
  {
    img:'/images/Header.png',
  },
  {
    img:'/images/Header.png',
  },
  {
    img:'/images/Header.png',
  }
]

export const Header = () => {
  return (
    <Box 
      sx={{
        position: 'relative',
        height: { md: '780px', sm: '650px', xs: '460px' },
      }}
    >
      <Carousel data={header_data} title="header" />
      <Box px={{ sm: 4, xs: 2 }} width={'100%'} sx={{
        position: 'absolute',
        top: { sm: '250px', xs: '120px'}
      }}>
        <Box sx={{
          maxWidth: '1400px',
          margin: 'auto',
        }}>
          <Box 
            display={{ xs: 'flex', md: 'none'}} 
            justifyContent={'space-between'} 
            alignItems={'center'} 
            width={'100%'} 
            sx={{
              background: 'white',
              padding: '6px 6px',
              height: '50px',
              borderRadius: '999px',
              margin: { xs: '-50px 0 50px 0 !important', sm: '-100px 0 50px 0 !important', md: '0px 0 0 0 !important'},
            }}
          >
            <OutlinedInput
              placeholder='Area, development...'
              sx={{
                '& fieldset': { border: 'none' },
                '& input': { padding: '8px 14px' },
                fontSize: 16,
                width: '100%',
              }}
            />
            <Button variant="contained" sx={{
              background: palette.common.black,
              padding: '12px 12px !important',
              minWidth: '12px',
              borderRadius: '50% !important',
            }}>
              <SearchIcon sx={{
                color: palette.common.white,
                fontSize: 20,
              }} />
            </Button>
          </Box>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12} mt={{ sm: 8, xs: 0 }}>
              <Typography variant="h1" mb={{ sm: 12, xs: 4 }} sx={{
                maxWidth: { sm: '90%', xs: '100%' },
                fontSize: { lg: 62, md: 50, xs: 32 },
                fontFamily: 'Cormorant Garamond',
              }}>
                Dubai dominates as top choice for UHNW primary residents
              </Typography>
              <Button sx={{
                background: `${palette.common.white} !important`,
                color: palette.common.black,
                borderRadius: '8px !important',
                padding: '8px 32px',
                fontSize: { sm: 16, xs: 14 },
                fontWeight: 600,
              }}>
                Learn More
              </Button>
            </Grid>
            <Grid item md={6} xs={12} display={{ xs: 'none', md: 'flex'}} justifyContent={'end'} 
              sx={{marginLeft: '-16px !important'}}
            >
              <Box sx={{
                width: {sm: '400px', xs: '100%'},
                background: palette.common.white,
                borderRadius: '20px',
              }}>
                {
                  contactInfos.map((item, i) => (
                    <Box key={i} display={'flex'} alignItems={'center'} py={7} px={8} gap={6} sx={{
                      borderBottom: i === 2 ? '' : '2px solid #e0e0e0',
                    }}>
                      <Box component={'img'} src={item.icon.src} alt='' sx={{

                      }} />
                      <Box display={'flex'} flexDirection={'column'} gap={2}>
                        <Typography variant="h3" sx={{
                          color: palette.common.black,
                        }}>
                          {item.name}
                        </Typography>
                        <OutlinedInput
                          placeholder={`${item.info}`}
                          sx={{
                            '& fieldset': { border: 'none' },
                            '& input': { padding: '0px' },
                            fontSize: 18,
                            width: '100%',
                            color: '#7b7b7b !important',
                            fontWeight: 500,
                          }}
                        />
                      </Box>
                    </Box>
                  ))
                }
                <Box display={'flex'} justifyContent={'center'} px={8} py={6}>
                  <Button sx={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px !important'
                  }}>Show More</Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}