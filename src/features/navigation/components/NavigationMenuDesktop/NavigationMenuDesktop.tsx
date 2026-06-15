import { NavigationMenu } from "@/components/NavigationMenu/NavigationMenu"
import { Link } from "@tanstack/react-router"
import { ExternalLink } from "lucide-react"
import type { FC } from "react"
import "./NavigationMenuDesktop.css"

export const NavigationMenuDesktop: FC = () => {
  return (
    <NavigationMenu orientation="vertical" className="navigation-menu--desktop">
      <NavigationMenu.List>
        <h4>Overview</h4>
        <NavigationMenu.Item>
          <NavigationMenu.Link icon={ExternalLink} render={<Link to="/">Home</Link>} />
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <NavigationMenu.List>
        <h4>Components</h4>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            icon={ExternalLink}
            render={<Link to="/components/navigation-menu">Navigation menu</Link>}
          />
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu>
  )
}