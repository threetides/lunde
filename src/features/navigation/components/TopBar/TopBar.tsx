import type { FC } from "react"
import { Menu } from "lucide-react"
import "./TopBar.css"
import { useAtom } from "jotai"
import { menuOpenAtom } from "@/features/navigation/navigationAtoms"
import { Link } from "@tanstack/react-router"

export const TopBar: FC = () => {
  const [open, setOpen] = useAtom(menuOpenAtom)

  return (
    <div className="topbar">
      <Link to="/">
        <div className="topbar__logo">
          <img src="/favicon.svg" alt="lunde favicon" />
          <h3>lunde</h3>
        </div>
      </Link>
      <button className="topbar__hamburger" onClick={() => setOpen(!open)}>
        <Menu />
      </button>
    </div>
  )
}