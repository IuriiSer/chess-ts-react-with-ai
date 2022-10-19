import React, { useContext } from 'react'

import { ColorModeContext, ThemeType } from '../ThemeHandler/ThemeHandler'

import { useTheme } from '@mui/material/styles'
import { Fab, IconButton } from '@mui/material'
import { Brightness4 as Brightness4Icon, Brightness7 as Brightness7Icon } from '@mui/icons-material'
import Zoom from '@mui/material/Zoom'

const ThemePicker: React.FC = () => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)
  const isDarkMode = theme.palette.mode === ThemeType.Dark

  const value: number = isDarkMode ? 0 : 1

  console.log('file: ThemePicker.tsx ~ line 15 ~ theme', theme)
  console.log('file: ThemePicker.tsx ~ line 16 ~ colorMode', colorMode)

  const fabs = [
    {
      icon: <Brightness4Icon />,
      label: ThemeType.Light
    },
    {
      icon: <Brightness7Icon />,
      label: ThemeType.Dark
    }
  ]

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  }

  return (
  <Fab
    sx={{
      position: 'fixed',
      bottom: (theme) => theme.spacing(2),
      right: (theme) => theme.spacing(2)
    }}
  >
   {fabs.map((fab, index) => (
     <Zoom
       key={fab.label}
       in={index === value}
       timeout={transitionDuration}
       style={{
         transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`
       }}
       >
       <IconButton sx={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }} onClick={colorMode.toggleColorMode} color='inherit'>
         {fab.icon}
       </IconButton>
     </Zoom>
   ))}
  </Fab>
  )
}

export default ThemePicker

// <Container sx={{ display: 'flex' }}>
//   {fabs.map((fab, index) => (
//     <Zoom
//       key={fab.label}
//       in={index === value}
//       timeout={transitionDuration}
//       style={{
//         transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`
//       }}
//       >
//       <IconButton onClick={colorMode.toggleColorMode} color='inherit'>
//         {fab.icon}
//       </IconButton>
//     </Zoom>
//   ))}
// </Container>
