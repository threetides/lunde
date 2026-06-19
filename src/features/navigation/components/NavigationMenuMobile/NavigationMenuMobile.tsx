import { Animate } from "@/components/Animate/Animate"
import { NavigationMenu } from "@/components/NavigationMenu/NavigationMenu"
import { menuOpenAtom } from "@/features/navigation/navigationAtoms"
import { Link } from "@tanstack/react-router"
import { useAtom } from "jotai"
import { ExternalLink } from "lucide-react"
import type { FC } from "react"
import "./NavigationMenuMobile.css"
import { CommonLinks } from "@/features/navigation/components/CommonLinks/CommonLinks"

export const NavigationMenuMobile: FC = () => {
  const [open, setOpen] = useAtom(menuOpenAtom)

  return (
    <Animate open={open} onOpenChange={setOpen}>
      <Animate.Popup className={"navigation-menu--mobile"}>
        <NavigationMenu orientation="vertical">
          <CommonLinks />
        </NavigationMenu>
      </Animate.Popup>
    </Animate>
  )
}