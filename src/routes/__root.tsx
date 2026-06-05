import * as React from "react"
import { Link, Outlet, createRootRoute } from "@tanstack/react-router"
import { TopBar } from "@/features/navigation/components/TopBar/TopBar"
import { Animate } from "@/components/Animate/Animate"
import { NavigationMenu } from "@/components/NavigationMenu/NavigationMenu"
import { useAtom } from "jotai"
import { menuOpenAtom } from "@/features/navigation/navigationAtoms"
import { ExternalLink } from "lucide-react"

export const Route = createRootRoute({
  component: RootComponent
})

function RootComponent() {
  const [open, setOpen] = useAtom(menuOpenAtom)

  return (
    <React.Fragment>
      <TopBar />
      <Animate open={open} onOpenChange={setOpen}>
        <Animate.Popup className={"sidemenu"}>
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
      <Outlet />
    </React.Fragment>
  )
}
