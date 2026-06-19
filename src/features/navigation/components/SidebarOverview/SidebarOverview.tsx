import { type FC } from "react"
import { useAtom, useAtomValue } from "jotai"
import {
  sidebarOverviewActiveLinkAtom,
  sidebarOverviewLinksAtom
} from "@/features/navigation/navigationAtoms"
import { startViewTransition } from "@/helpers/startViewTransition"
import { Link } from "@tanstack/react-router"
import "./SidebarOverview.css"

export const SidebarOverview: FC = () => {
  const links = useAtomValue(sidebarOverviewLinksAtom)
  const [active, setActive] = useAtom(sidebarOverviewActiveLinkAtom)

  if (links !== undefined) {
    const values = Object.values(links)
    const resolvedActive = active === "" || active === undefined ? values[0] : active

    return (
      <nav className="sidebar-overview">
        <h4>On this page</h4>
        {values.map((value) => {
          return (
            <Link
              key={value}
              to={"."}
              hash={value}
              onClick={() => startViewTransition(() => setActive(value))}
              {...(resolvedActive === value && { "data-active": "" })}
            >
              {value.charAt(0).toUpperCase() + value.slice(1).replaceAll("-", " ")}
            </Link>
          )
        })}
      </nav>
    )
  }
}