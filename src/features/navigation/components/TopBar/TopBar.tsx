import type { FC } from "react"
import { Menu } from "lucide-react"
import "./TopBar.css"
import { useAtom } from "jotai"
import { menuOpenAtom } from "@/features/navigation/navigationAtoms"

export const TopBar: FC = () => {
  const [open, setOpen] = useAtom(menuOpenAtom)

  return (
    <div className="topbar">
      <div className="topbar__logo">
        <img src="/favicon.svg" alt="lunde favicon" />
        <h3>lunde</h3>
      </div>
      <button className="topbar__hamburger" onClick={() => setOpen(!open)}>
        <Menu />
      </button>
    </div>
  )
}
