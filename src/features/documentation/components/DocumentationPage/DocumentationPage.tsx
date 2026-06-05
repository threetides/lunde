import type { FC } from "react"
import "./DocumentationPage.css"
interface DocumentationPageProps {
  title: string
}

export const DocumentationPage: FC<DocumentationPageProps> = ({ title }) => {
  return (
    <div className="documentation-page">
      <h1>{title}</h1>
    </div>
  )
}
