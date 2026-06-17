import { useState, type FC } from "react"
import "./SidebarOverview.css"
import { useAtomValue } from "jotai"
import { sidebarOverviewLinksAtom } from "@/features/navigation/navigationAtoms"

export const SidebarOverview: FC = () => {
  const links = useAtomValue(sidebarOverviewLinksAtom)
  const [active, setActive] = useState("")

  if (links !== undefined) {
    return (
      <nav className="sidebar-overview">
        {Object.values(links).map((value) => {
          return (
            <a
              href={`#${value}`}
              onClick={() => setActive(value)}
              {...(active === value && { "data-active": "" })}
            >
              {value.charAt(0).toUpperCase() + value.slice(1).replace("-", " ")}
            </a>
          )
        })}
      </nav>
    )
  }
}