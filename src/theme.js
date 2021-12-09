import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    colors: {
      blueLight: '#9AC9FB',
      yellowLight: '#FFF2A4',
    },
  config: {
    initialColorMode: "light"
  }
})

export default theme