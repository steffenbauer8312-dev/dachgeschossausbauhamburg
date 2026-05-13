import { cn } from '../../lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'success' | 'warning'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        variant === 'default' ? 'bg-slate-100 text-slate-700' : '',
        variant === 'success' ? 'bg-green-100 text-green-700' : '',
        variant === 'warning' ? 'bg-amber-100 text-amber-700' : '',
        className
      )}
    >
      {children}
    </span>
  )
}