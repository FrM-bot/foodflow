import AuthBG from '@/assets/auth_bg.webp'
import { Arrow } from '@/components/icons'
import { Link } from '@/components/ui/link'
import { Routes } from '@/routes'
import { useSession } from '@/store/session'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function AuthLayout() {
  const { session } = useSession()
  const navigate = useNavigate()
  useEffect(() => {
    if (session === null) {
      navigate(Routes.logIn)
    }
  }, [session, navigate])

  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: `url(${AuthBG})`,
        backgroundPosition: '0 0%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="grid h-full grid-cols-1 px-4">
        <div className="w-full max-w-md m-auto">
          <div className="w-full mb-4">
            <Link href={Routes.home} variant="outline">
              <Arrow direction="left" />
            </Link>
          </div>
          <div className="w-full p-5 border-2 border-black rounded-lg shadow-lg bg-white/80 backdrop-blur-sm">
            <header className="mb-8 text-center">
              <h1 className="text-5xl font-bold text-primary">ChatBot</h1>
            </header>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
