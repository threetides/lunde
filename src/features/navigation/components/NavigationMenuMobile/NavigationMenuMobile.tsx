import { Animate } from "@/components/Animate/Animate"
import { NavigationMenu } from "@/components/NavigationMenu/NavigationMenu"
import { menuOpenAtom } from "@/features/navigation/navigationAtoms"
import { Link } from "@tanstack/react-router"
import { useAtom } from "jotai"
import { ExternalLink } from "lucide-react"
import type { FC } from "react"
import "./NavigationMenuMobile.css"

export const NavigationMenuMobile: FC = () => {
  const [open, setOpen] = useAtom(menuOpenAtom)

  return (
    <Animate open={open} onOpenChange={setOpen}>
      <Animate.Popup className={"navigation-menu--mobile"}>
        <NavigationMenu orientation="vertical">
          <NavigationMenu.List>
            <h4>Overview</h4>
            <NavigationMenu.Item>
              <NavigationMenu.Link
                icon={ExternalLink}
                render={<Link to="/">Home</Link>}
                onClick={() => setOpen(false)}
              />
            </NavigationMenu.Item>
          </NavigationMenu.List>

          <NavigationMenu.List>
            <h4>Components</h4>
            <NavigationMenu.Item>
              <NavigationMenu.Link
                icon={ExternalLink}
                render={<Link to="/components/navigation-menu">Navigation menu</Link>}
                onClick={() => setOpen(false)}
              />
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu>
      </Animate.Popup>
    </Animate>
  )
}