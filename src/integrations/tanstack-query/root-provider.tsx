import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Create a client with better default options
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Prevent background refetches that might cause loading states
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      // Keep data fresh longer
      staleTime: 1000 * 60 * 5, // 5 minutes
      // Keep data in cache longer
      gcTime: 1000 * 60 * 30, // 30 minutes
      // Retry failed requests
      retry: 3,
    },
  },
})
export function getContext() {
  return {
    queryClient,
  }
}

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
