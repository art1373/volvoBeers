import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@emotion/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { theme } from './styles/theme'
import { ErrorBoundary } from './components/common'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
    <ErrorBoundary
      fallbackComponent={<div>Something went wrong! check back later!</div>}
    >
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>
)
