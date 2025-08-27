import { $QueryKey, $SessionStatus } from '@/enums'
import { getSession } from '@/services/session'
import { useSession } from '@/store/session'
import { useQuery } from '@tanstack/react-query'
import { type PropsWithChildren, useEffect } from 'react'
import { toast } from 'sonner'
import useCookies from '../hooks/useCookies'

type LoadSessionProviderProps = PropsWithChildren

export const LoadSessionProvider = ({ children }: LoadSessionProviderProps) => {
  const { setSessionStatus, setSession, setIsLoading, session: store } = useSession()
  const { cookies } = useCookies()
  const {
    data: session,
    refetch,
    isPending,
  } = useQuery({
    queryKey: [$QueryKey.session],
    queryFn: getSession,
    enabled: false,
  })

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (cookies.session_token && !store) {
      setIsLoading(isPending)
      refetch()
      if (isPending) setSessionStatus($SessionStatus.loading)

      if (session?.success && session.data) {
        setSession(session.data)
        setSessionStatus($SessionStatus.authenticated)
      }

      if (!session?.success) toast.error(session?.message)
    }
  }, [cookies.session_token, session, setIsLoading, setSessionStatus, setSession, refetch])

  return children
}
