// import AuthBG from '@/assets/auth_bg.webp'
// import { Arrow } from '@/components/icons'
// import { Link } from '@/components/ui/link'
// import { Routes } from '@/routes'
// import { useSession } from '@/store/session'
// import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  // const { session } = useSession()
  // const navigate = useNavigate()
  // useEffect(() => {
  //   if (session === null) {
  //     navigate(Routes.logIn)
  //   }
  // }, [session, navigate])

  return (
    <div
      className="h-screen bg-gradient-to-br from-[lch(8_13.7_275.28)] to-[lch(8_13.7_275.28)]"
      // style={{
      //   backgroundImage: `url(${AuthBG})`,
      //   backgroundPosition: '0 0%',
      //   backgroundSize: 'cover',
      //   backgroundRepeat: 'no-repeat',
      // }}
    >
      <div className="grid h-full grid-cols-1 px-4">
        <div className="w-full max-w-md m-auto">
          {/* <div className="w-full mb-4">
            <Link href={Routes.home} variant="outline">
              <Arrow direction="left" />
            </Link>
          </div> */}
          <div className="w-full border-2 border-neutral-700 rounded-lg shadow-lg bg-[#232B3B] backdrop-blur-sm shadow-neutral-800/50 p-8">
            <header className="mb-8 text-center">
              <h1 className="text-5xl font-bold text-white">FoodFlow</h1>
            </header>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
