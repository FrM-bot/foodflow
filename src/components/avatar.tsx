import { AvatarFallback, AvatarImage, Avatar as AvatarPrimitive } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

export function Avatar({ alt, src, className }: { alt: string; src: string; className?: string }) {
  return (
    <AvatarPrimitive className={cn('cursor-pointer', className)}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{alt?.at(0)?.toLocaleUpperCase() || '?'}</AvatarFallback>
    </AvatarPrimitive>
  )
}
