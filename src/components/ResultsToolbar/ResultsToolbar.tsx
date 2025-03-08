import { ReactNode } from "react"
import "./ResultsToolbar.css"

type ResultsToolbarProps = {
  children: ReactNode
}

export function ResultsToolbar({ children }: ResultsToolbarProps) {
  return (
    <div className="results-toolbar">
      {children}
    </div>
  )
}