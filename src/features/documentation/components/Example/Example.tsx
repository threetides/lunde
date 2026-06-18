import type { FC, ReactNode } from "react"
import "./Example.css"

interface ExampleProps {
  subtitle: string
  link: string
  ingress?: string
  children?: ReactNode
  code: string
}

export const Example: FC<ExampleProps> = ({ subtitle, link, ingress, children, code }) => (
  <div className="example">
    <div className="example__ingress">
      <h4 id={link}>{subtitle}</h4>
      {ingress && <p className="example__ingress">{ingress}</p>}
    </div>
    {children && <div className="example__display">{children}</div>}
    <div className="example__shiki" dangerouslySetInnerHTML={{ __html: code }} />
  </div>
)