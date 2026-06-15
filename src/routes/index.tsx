import { DocumentationPage } from "@/features/documentation/components/DocumentationPage/DocumentationPage"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <DocumentationPage title="lunde">
      <p>Hei lunde</p>
    </DocumentationPage>
  )
}