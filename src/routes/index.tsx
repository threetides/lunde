import { Animate } from "@/components/Animate/Animate"
import { NavigationMenu } from "@/components/NavigationMenu/NavigationMenu"
import { TopBar } from "@/features/navigation/components/TopBar/TopBar"
import { menuOpenAtom } from "@/features/navigation/navigationAtoms"
import { createFileRoute } from "@tanstack/react-router"
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
                <NavigationMenu.Link href="https://nrk.no" target="_blank" icon={ExternalLink}>
                  NRK
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link href="https://vg.no" target="_blank" icon={ExternalLink}>
                  VG
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            </NavigationMenu.List>
            <NavigationMenu.List>
              <NavigationMenu.Item>
                <NavigationMenu.Link href="https://komplett.no" target="_blank" icon={ExternalLink}>
                  Komplett
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link href="https://elkjop.no" target="_blank" icon={ExternalLink}>
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
