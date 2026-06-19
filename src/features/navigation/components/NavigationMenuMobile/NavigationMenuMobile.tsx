import { Animate } from "@/components/Animate/Animate"
import { NavigationMenu } from "@/components/NavigationMenu/NavigationMenu"
import { menuOpenAtom } from "@/features/navigation/navigationAtoms"
import { useAtom } from "jotai"
import type { FC } from "react"
import { CommonLinks } from "@/features/navigation/components/CommonLinks/CommonLinks"
import "./NavigationMenuMobile.css"

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