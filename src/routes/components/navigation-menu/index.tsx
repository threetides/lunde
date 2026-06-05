import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/components/navigation-menu/")({
  component: RouteComponent
})

function RouteComponent() {
  return <div>Hello "/components/navigation-menu/"!</div>
}
