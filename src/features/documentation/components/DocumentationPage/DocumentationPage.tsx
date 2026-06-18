import { type FC, type ReactNode } from "react"
import "./DocumentationPage.css"

interface DocumentationPageProps {
  title: string
  children: ReactNode
}

export const DocumentationPage: FC<DocumentationPageProps> = ({ title, children }) => {
  return (
    <div className="documentation-page">
      <h1>{title}</h1>
      {children}
    </div>
  )
}