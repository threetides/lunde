import { DocumentationPage } from "@/features/documentation/components/DocumentationPage/DocumentationPage"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/components/navigation-menu/")({
  component: RouteComponent
})

function RouteComponent() {
  return <DocumentationPage title="Navigation menu"></DocumentationPage>
}
