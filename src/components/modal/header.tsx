interface HeaderProps {
  children: React.ReactNode
}

export function Header({ children }: HeaderProps) {
  return <header className="flex flex-col gap-2">{children}</header>
}
