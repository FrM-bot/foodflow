import type { VariantProps } from 'class-variance-authority'
import { Link as ReactRouterLink } from 'react-router-dom'
import type { buttonVariants } from './button'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof buttonVariants> {}

export function Link({ children, variant = 'link', size, ...props }: Props) {
  // const className = cn(buttonVariants({ variant, className: props.className, size }))
  if (props.href?.startsWith('http')) {
    return (
      <a href={props.href} {...props} className={props.className}>
        {children}
      </a>
    )
  }

  return (
    <ReactRouterLink to={props.href || ''} {...props}>
      {children}
    </ReactRouterLink>
  )
}
