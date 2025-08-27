import { LoadSessionProvider } from '@/context/session.provider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'
import { AppRouter } from './routes'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadSessionProvider>
        <AppRouter />
        <Toaster position="bottom-right" />
      </LoadSessionProvider>
    </QueryClientProvider>
  )
}

export default App
