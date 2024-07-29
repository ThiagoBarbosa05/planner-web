interface TitleProps {
  children: React.ReactNode
}

export function Title({ children }: TitleProps) {
  return (
    <h4 className="text-lg font-semibold mb-5 text-zinc-100">{children}</h4>
  )
}
