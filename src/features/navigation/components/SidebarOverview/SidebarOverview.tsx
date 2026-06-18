import { useState, type FC } from "react"
import { useAtomValue } from "jotai"
import { sidebarOverviewLinksAtom } from "@/features/navigation/navigationAtoms"
import { startViewTransition } from "@/helpers/startViewTransition"
import "./SidebarOverview.css"

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
              onClick={() => startViewTransition(() => setActive(value))}
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