import { createTheme } from '@mui/material/styles'

const createTypographySystem = () => {
  return {
    body1: {
      fontSize: 18,
      fontStyle: 'normal',
      textTransform: 'initial',
      fontWeight: 400,
    },
    body2: {
      fontSize: '16px',
      fontWeight: 400,
      color: '#c9c9c9 !important',
    },
    h1: {
      fontSize: 62,
      fontWeight: 500,
    },
    h2: {
      fontSize: 42,
      fontWeight: 600,
    },
    h3: {
      fontSize: 18,
      fontWeight: 600,
    },
    h4: {
      fontSize: 16,
      fontWeight: 400,
    },
    h5: {
      fontSize: 15,
    },
    h6: {
      fontSize: 14,
    }
  }
}

const createPaletteSystem = () => ({
  common: {
    black: '#000',
    white: '#FFFFFF',
  },
  primary: {
    dark: '#513F01 !important',
    light: '#CA9F02',
    main: '#FFFFFF',
  },
  secondary: {
    main: '#3ffefd',
  },
  text: {
    disabled: '#596673',
    primary: '#090A0C',
    secondary: '#596673',
  },
})
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'black',
          },
          background: 'black !important',
          color: 'white',
          borderRadius: '0px !important',
          textTransform: 'initial',
          fontSize: 16,
        },
      },
      variants: [
        {
          props: { variant: 'contained'},
          style: {
            
          },
        },
        {
          props: { variant: 'outlined'},
          style: {
            '&:hover': {
              color: 'white',
            },
          },
        },
      ],
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
          color: 'white'
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          marginLeft: '0px !important',
        },
      },
    },
  },
  palette: createPaletteSystem(),
  spacing: 4,
  typography: createTypographySystem(),
})

export default theme
export const palette = theme.palette
