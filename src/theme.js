import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    colors: {
      blueCake: '#9AC9FB',
    },
  config: {
    initialColorMode: "light"
  }
})

export default theme