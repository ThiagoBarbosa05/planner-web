import React from 'react'

interface RootProps {
  children: React.ReactNode
}
export function Root({ children }: RootProps) {
  return (
    <div className="absolute backdrop-blur-sm flex flex-col px-5 items-center justify-center inset-0 bg-black/70">
      <div
        data-open={false}
        className="bg-zinc-900 py-5 px-6 rounded-xl data-[open=true]:animate-in data-[open=false]:animate-out data-[open=true]:fade-in-0 data-[open=false]:fade-out-0 data-[open=true]:zoom-in-95 relative shadow-shape"
      >
        {children}
      </div>
    </div>
  )
}
