import { Animate } from "@/components/Animate/Animate"
import { NavigationMenu } from "@/components/NavigationMenu/NavigationMenu"
import { TopBar } from "@/features/navigation/components/TopBar/TopBar"
import { menuOpenAtom } from "@/features/navigation/navigationAtoms"
import { createFileRoute, Link } from "@tanstack/react-router"
import { useAtom } from "jotai"
import { ExternalLink } from "lucide-react"

export const Route = createFileRoute("/")({
  component: RouteComponent
})

function RouteComponent() {
  const [open, setOpen] = useAtom(menuOpenAtom)

  return (
    <main>
      <TopBar />
      <Animate open={open} onOpenChange={setOpen}>
        <Animate.Popup className={"sidemenu"}>
          <NavigationMenu orientation="vertical">
            <NavigationMenu.List>
              <NavigationMenu.Item>
                <NavigationMenu.Link
                  icon={ExternalLink}
                  render={<Link to="/">Home</Link>}
                  onClick={() => setOpen(false)}
                />
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link
                  href="https://vg.no"
                  target="_blank"
                  icon={ExternalLink}
                  onClick={() => setOpen(false)}
                >
                  VG
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            </NavigationMenu.List>
            <NavigationMenu.List>
              <NavigationMenu.Item>
                <NavigationMenu.Link
                  href="https://komplett.no"
                  target="_blank"
                  icon={ExternalLink}
                  onClick={() => setOpen(false)}
                >
                  Komplett
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link
                  href="https://elkjop.no"
                  target="_blank"
                  icon={ExternalLink}
                  onClick={() => setOpen(false)}
                >
                  Elkjøp
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu>
        </Animate.Popup>
      </Animate>
    </main>
  )
}
