import { Link } from '@/components/ui/link'
import { Routes } from '@/routes'
import { IconPizza } from '@tabler/icons-react'
import { SignUpForm } from './form.component'

export default function SignUpPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-md flex-col gap-6">
        <Link href={Routes.home} className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <IconPizza className="!size-5 text-black" />
          </div>
          Foodflow
        </Link>
        <SignUpForm />
      </div>
    </div>
  )
}
