import { ThemeProvider } from 'styled-components'
import { mainTheme } from './styles/themes/main'
import { GlobalStyle } from './global'

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <h1>HELLO WORLD</h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
