import React, { useMemo, useState } from 'react'

import ThemePicker from '../ThemePicker/ThemePicker'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

export enum ThemeType {
  Light = 'light',
  Dark = 'dark'
}
interface IThemeProvider {
  children?: React.ReactNode
}

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

const ThemeHandler: React.FC<IThemeProvider> = ({ children }: IThemeProvider) => {
  const [mode, setMode] = useState<ThemeType>(ThemeType.Light)
  const colorMode = useMemo(() => ({
    toggleColorMode: (): void => {
      setMode((prevMode) => (prevMode === ThemeType.Light ? ThemeType.Dark : ThemeType.Light))
    }
  }), []
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode
        },
        transitions: {
          duration: {
            enteringScreen: 250,
            leavingScreen: 197
          }
        }
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ThemePicker />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default ThemeHandler
