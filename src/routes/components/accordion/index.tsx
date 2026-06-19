import SinglePanelSource from "@/components/Accordion/Examples/SinglePanel.tsx?raw"
import MultiplePanelsSource from "@/components/Accordion/Examples/MultiplePanels.tsx?raw"
import AnatomySource from "@/components/Accordion/Examples/Anatomy.tsx?raw"
import { DocumentationPage } from "@/features/documentation/components/DocumentationPage/DocumentationPage"
import { Example } from "@/features/documentation/components/Example/Example"
import { createFileRoute } from "@tanstack/react-router"
import { useSetAtom } from "jotai"
import { sidebarOverviewLinksAtom } from "@/features/navigation/navigationAtoms"
import { useEffect } from "react"
import { codeToHtml } from "shiki"
import { shikiTheme } from "@/features/documentation/components/Example/shikiTheme"
import { SinglePanel } from "@/components/Accordion/Examples/SinglePanel"
import { MultiplePanels } from "@/components/Accordion/Examples/MultiplePanels"

export const Route = createFileRoute("/components/accordion/")({
  loader: async () => ({
    singlePanel: await codeToHtml(SinglePanelSource, { lang: "tsx", theme: shikiTheme }),
    multiplePanels: await codeToHtml(MultiplePanelsSource, { lang: "tsx", theme: shikiTheme }),
    anatomy: await codeToHtml(AnatomySource, { lang: "tsx", theme: shikiTheme })
  }),
  component: RouteComponent
})

const links = {
  singlePanel: "single-panel",
  multiplePanels: "multiple-panels",
  anatomy: "anatomy"
}

function RouteComponent() {
  const setLinks = useSetAtom(sidebarOverviewLinksAtom)

  useEffect(() => {
    setLinks(links)
  }, [])

  const { singlePanel, multiplePanels, anatomy } = Route.useLoaderData()

  return (
    <DocumentationPage title="Accordion">
      <Example
        subtitle="Single panel"
        link={links.singlePanel}
        ingress="Opening a panel closes the other panels"
        code={singlePanel}
      >
        {SinglePanel}
      </Example>
      <Example
        subtitle="Multiple panels"
        link={links.multiplePanels}
        ingress="To keep multiple panels opened at a time, add the 'multiple' prop"
        code={multiplePanels}
      >
        {MultiplePanels}
      </Example>
      <Example
        subtitle="Anatomy"
        link={links.anatomy}
        ingress="The component exposes:"
        code={anatomy}
      />
    </DocumentationPage>
  )
}