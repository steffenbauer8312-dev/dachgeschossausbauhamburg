import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 disabled:pointer-events-none disabled:opacity-50',
          variant === 'primary' ? 'bg-amber-500 text-white hover:bg-amber-600' : '',
          variant === 'secondary' ? 'bg-slate-800 text-white hover:bg-slate-700' : '',
          variant === 'outline' ? 'border border-slate-300 bg-transparent hover:bg-slate-100' : '',
          size === 'sm' ? 'px-3 py-1.5 text-sm' : '',
          size === 'md' ? 'px-5 py-2.5 text-base' : '',
          size === 'lg' ? 'px-8 py-3 text-lg' : '',
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'
export { Button }