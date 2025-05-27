import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Container } from '@/components/ui/container'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  // useAuth()

  return (
    <>
      <Header />
      <Container component="main" className="min-h-[80dvh] my-4 px-4 sm:px-6 lg:px-8">
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}
