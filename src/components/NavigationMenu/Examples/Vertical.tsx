import { NavigationMenu } from "@/components/NavigationMenu/NavigationMenu"
import { Link } from "@tanstack/react-router"
import { ExternalLink } from "lucide-react"

export const Vertical = (
  <NavigationMenu orientation="vertical">
    <NavigationMenu.List>
      <NavigationMenu.Item>
        <NavigationMenu.Link
          icon={ExternalLink}
          render={<Link to="/components/input">Input</Link>}
        />
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link
          icon={ExternalLink}
          render={<Link to="/components/button">Button</Link>}
        />
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link
          icon={ExternalLink}
          render={<Link to="/components/navigation-menu">Navigation menu</Link>}
        />
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link
          icon={ExternalLink}
          render={<Link to="/components/select">Select</Link>}
        />
      </NavigationMenu.Item>
    </NavigationMenu.List>
  </NavigationMenu>
)
