import { ReactNode } from "react"

type MainHeaderProps = {
  children: ReactNode
}

export function MainHeader({ children }: MainHeaderProps) {
  return (
    <header>
      {children}
    </header>
  )
}   