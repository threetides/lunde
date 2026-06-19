import { NavigationMenu } from "@/components/NavigationMenu/NavigationMenu"
import type { FC } from "react"
import "./NavigationMenuDesktop.css"
import { CommonLinks } from "@/features/navigation/components/CommonLinks/CommonLinks"

export const NavigationMenuDesktop: FC = () => {
  return (
    <NavigationMenu orientation="vertical" className="navigation-menu--desktop">
      <CommonLinks />
    </NavigationMenu>
  )
}