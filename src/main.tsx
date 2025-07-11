import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './routes'
import { Provider } from 'react-redux'
import { ThemeProvider } from './providers/theme-provider'
import { store } from './redux/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
    </ThemeProvider> 
  </StrictMode>,
)
