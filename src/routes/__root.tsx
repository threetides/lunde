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

  // TEMP DIAGNOSTIC — remove once the iOS back-nav bug is understood.
  const [events, setEvents] = React.useState<string[]>([])
  const openRef = React.useRef(open)
  openRef.current = open
  React.useEffect(() => {
    const log = (msg: string) =>
      setEvents((prev) => [`${msg} | open=${openRef.current}`, ...prev].slice(0, 6))
    const onPageShow = (e: PageTransitionEvent) => log(`pageshow persisted=${e.persisted}`)
    const onPopState = () => log("popstate")
    const onVisibility = () => log(`visibility=${document.visibilityState}`)
    window.addEventListener("pageshow", onPageShow)
    window.addEventListener("popstate", onPopState)
    document.addEventListener("visibilitychange", onVisibility)
    return () => {
      window.removeEventListener("pageshow", onPageShow)
      window.removeEventListener("popstate", onPopState)
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [])

  return (
    <React.Fragment>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 99999,
          background: "rgba(0,0,0,0.85)",
          color: "#0f0",
          font: "11px/1.4 monospace",
          padding: "6px 8px",
          pointerEvents: "none",
          whiteSpace: "pre-wrap"
        }}
      >
        {`open=${open} | .sidemenu in DOM=${typeof document !== "undefined" && !!document.querySelector(".sidemenu")} | [data-open]=${typeof document !== "undefined" && !!document.querySelector(".sidemenu[data-open]")}`}
        {"\n" + events.join("\n")}
      </div>
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
