import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const fonts = {
  fonts: {
    heading: `"Poppins", sans-serif;`,
    body: `"Poppins", sans-serif;`,
    mono: `"Fira Code", monospace`,
  },
}

export const theme = extendTheme({
  ...fonts,
  config,
})

export default theme
