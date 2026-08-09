import { NavigationMenu } from "@/components/NavigationMenu/NavigationMenu"
import { menuOpenAtom } from "@/features/navigation/navigationAtoms"
import { Link } from "@tanstack/react-router"
import { useSetAtom } from "jotai"
import { ExternalLink } from "lucide-react"
import type { FC } from "react"

export const CommonLinks: FC = () => {
  const setOpen = useSetAtom(menuOpenAtom)

  return (
    <div className="common-links">
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
            render={<Link to="/components/accordion">Accordion</Link>}
            onClick={() => setOpen(false)}
          />
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            icon={ExternalLink}
            render={<Link to="/components/button">Button</Link>}
            onClick={() => setOpen(false)}
          />
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            icon={ExternalLink}
            render={<Link to="/components/navigation-menu">Navigation menu</Link>}
            onClick={() => setOpen(false)}
          />
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </div>
  )
}