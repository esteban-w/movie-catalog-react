import { ReactNode } from "react"

type MainBodyProps = {
  children: ReactNode
}

export function MainBody({ children }: MainBodyProps) {
  return (
    <main>
      {children}
    </main>
  )
}   