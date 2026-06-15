import type { FC, ReactNode } from "react"
import ShikiHighlighter from "react-shiki/web"
import { shikiTheme } from "./shikiTheme"
import "./Example.css"

interface ExampleProps {
  subtitle: string
  ingress?: string
  children?: ReactNode
  code: string
}

export const Example: FC<ExampleProps> = ({ subtitle, ingress, children, code }) => (
  <div className="example">
    <div className="example__ingress">
      <h4>{subtitle}</h4>
      {ingress && <p className="example__ingress">{ingress}</p>}
    </div>
    {children && <div className="example__display">{children}</div>}
    <ShikiHighlighter language="tsx" theme={shikiTheme} className="example__shiki">
      {code}
    </ShikiHighlighter>
  </div>
)