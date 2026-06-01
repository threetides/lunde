import type { FC } from "react"
import "./TopBar.css"

export const TopBar: FC = () => {
  return (
    <div className="topbar">
      <div className="topbar__logo">
        <img src="/favicon.svg" alt="lunde favicon" />
        <h3>lunde</h3>
      </div>
    </div>
  )
}
