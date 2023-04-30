
import { Box, Button, Typography, OutlinedInput, Grid } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { palette } from "@/themes";

export const Subscribe = () => {
  return (
    <Box px={4} sx={{
      maxWidth: '1400px',
      margin: 'auto',
    }}>
      <Grid container spacing={0} mt={{ sm: 12, xs: 8 }}>
        <Grid item md={6} sm={12} gap={2} mb={{ md: 0, xs: 4 }}>
          <Box 
            display={'flex'} 
            flexDirection={'column'} 
            alignItems={{ md: 'start', xs: 'center' }}
          >
            <Typography variant="h2" sx={{
              fontSize: { sm: 36, xs: 28 },
              fontFamily: 'Cormorant Garamond',
            }}>Stay Blingy!</Typography>
            <Typography variant="h3" mt={4} sx={{
              fontWeight: 400,
              fontFamily: '__Roboto_58f936,__Roboto_Fallback_58f936',
              textAlign: { lg: 'center', sm: 'left', xs: 'center'},
              fontSize: 16,
            }}>
              Subscribe to our news letter and get latest market prices
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6} xs={12} display={'flex'} justifyContent={'end'} mt={{ sm: 0, xs: 4 }}>
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={{ md: '70%', xs: '100%' }} sx={{
            background: 'white',  
            padding: '2px',
            height: '56px',
          }}>
            <OutlinedInput
              placeholder='E-mail Address'
              sx={{
                '& fieldset': { border: 'none' },
                '& input': { padding: '12px 14px' },
                fontSize: 16,
                width: '100%',
              }}
            />
            <Button variant="contained" sx={{
              background: palette.common.black,
              padding: '16.5px 28px'
            }}>
              <ArrowForwardIosIcon sx={{
                color: palette.common.white,
                fontSize: 18,
              }} />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
