import { type FC, type ReactNode } from "react"
import "./DocumentationPage.css"
import { useLocation } from "@tanstack/react-router"
interface DocumentationPageProps {
  title: string
  children: ReactNode
}

export const DocumentationPage: FC<DocumentationPageProps> = ({ title, children }) => {
  const { pathname } = useLocation()

  return (
    <div className="documentation-page" data-scroll-restoration-id={pathname}>
      <h1>{title}</h1>
      {children}
    </div>
  )
}