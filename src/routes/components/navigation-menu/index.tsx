import { Horizontal } from "@/components/NavigationMenu/Examples/Horizontal"
import { Vertical } from "@/components/NavigationMenu/Examples/Vertical"
import HorizontalSource from "@/components/NavigationMenu/Examples/Horizontal.tsx?raw"
import VerticalSource from "@/components/NavigationMenu/Examples/Vertical.tsx?raw"
import AnatomySource from "@/components/NavigationMenu/Examples/Anatomy.tsx?raw"
import { DocumentationPage } from "@/features/documentation/components/DocumentationPage/DocumentationPage"
import { Example } from "@/features/documentation/components/Example/Example"
import { createFileRoute } from "@tanstack/react-router"
import { useSetAtom } from "jotai"
import { sidebarOverviewLinksAtom } from "@/features/navigation/navigationAtoms"
import { useEffect } from "react"
import { codeToHtml } from "shiki"
import { shikiTheme } from "@/features/documentation/components/Example/shikiTheme"
import {
  APIReference,
  type API
} from "@/features/documentation/components/APIReference/APIReference"

export const Route = createFileRoute("/components/navigation-menu/")({
  loader: async () => ({
    horizontal: await codeToHtml(HorizontalSource, { lang: "tsx", theme: shikiTheme }),
    vertical: await codeToHtml(VerticalSource, { lang: "tsx", theme: shikiTheme }),
    anatomy: await codeToHtml(AnatomySource, { lang: "tsx", theme: shikiTheme })
  }),
  component: RouteComponent
})

const links = {
  horizontalLayout: "horizontal-layout",
  verticalLayout: "vertical-layout",
  anatomy: "anatomy",
  apiReference: "api-reference"
}

const api: API[] = [
  { title: "NavigationMenu", link: "https://base-ui.com/react/components/navigation-menu#root" },
  { title: "List", link: "https://base-ui.com/react/components/navigation-menu#list" },
  { title: "Item", link: "https://base-ui.com/react/components/navigation-menu#item" },
  { title: "Link", link: "https://base-ui.com/react/components/navigation-menu#link" }
]

function RouteComponent() {
  const setLinks = useSetAtom(sidebarOverviewLinksAtom)

  useEffect(() => {
    setLinks(links)
  }, [])

  const { horizontal, vertical, anatomy } = Route.useLoaderData()

  return (
    <DocumentationPage title="Navigation menu">
      <Example
        subtitle="Horizontal layout"
        link={links.horizontalLayout}
        ingress="The component is oriented horizontal by default"
        code={horizontal}
      >
        {Horizontal}
      </Example>
      <Example
        subtitle="Vertical layout"
        link={links.verticalLayout}
        ingress="To orient the component vertically, add the orientation prop and set it to 'vertical'"
        code={vertical}
      >
        {Vertical}
      </Example>
      <Example
        subtitle="Anatomy"
        link={links.anatomy}
        ingress="The component exposes:"
        code={anatomy}
      />
      <APIReference api={api} link={links.apiReference} />
    </DocumentationPage>
  )
}