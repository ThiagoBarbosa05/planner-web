interface DescriptionProps {
  children: React.ReactNode
}

export function Description({ children }: DescriptionProps) {
  return <p className="text-sm text-zinc-400 leading-5">{children}</p>
}
