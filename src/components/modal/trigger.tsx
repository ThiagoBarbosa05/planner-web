import { Button } from '../ui/button'

interface TriggerProps {
  children: React.ReactNode
  variant: 'default' | 'primary'
}

export function Trigger({ children, variant }: TriggerProps) {
  return <Button variant={variant}>{children}</Button>
}
