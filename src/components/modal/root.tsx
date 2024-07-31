import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface RootProps extends ComponentProps<'div'> {
  children: React.ReactNode
  isOpen: boolean
}
export function Root({ children, isOpen, className, ...props }: RootProps) {
  return (
    <div
      className={twMerge(
        'fixed hidden backdrop-blur-sm flex-col px-5 items-center justify-center inset-0 bg-black/70',
        isOpen && 'flex',
      )}
      {...props}
    >
      <div
        data-open={isOpen}
        className={cn(
          'hidden max-w-[640px] data-[open=true]:block bg-zinc-900 py-5 px-6 rounded-xl data-[open=true]:animate-in data-[open=false]:animate-out data-[open=true]:fade-in-0 data-[open=false]:fade-out-0 data-[open=true]:zoom-in-95 relative shadow-shape',
          className,
        )}
      >
        {children}
      </div>
    </div>
  )
}
