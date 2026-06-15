import { Horizontal } from "@/components/NavigationMenu/Examples/Horizontal"
import { Vertical } from "@/components/NavigationMenu/Examples/Vertical"
import HorizontalSource from "@/components/NavigationMenu/Examples/Horizontal.tsx?raw"
import VerticalSource from "@/components/NavigationMenu/Examples/Vertical.tsx?raw"
import { DocumentationPage } from "@/features/documentation/components/DocumentationPage/DocumentationPage"
import { Example } from "@/features/documentation/components/Example/Example"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/components/navigation-menu/")({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <DocumentationPage title="Navigation menu">
      <Example subtitle="Horizontal layout" code={HorizontalSource}>
        {Horizontal}
      </Example>
      <Example subtitle="Vertical layout" code={VerticalSource}>
        {Vertical}
      </Example>
    </DocumentationPage>
  )
}
