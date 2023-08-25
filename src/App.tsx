import { ThemeProvider } from 'styled-components'
import { mainTheme } from './styles/themes/main'
import { GlobalStyle } from './global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
