import { DocumentationPage } from "@/features/documentation/components/DocumentationPage/DocumentationPage"
import { sidebarOverviewLinksAtom } from "@/features/navigation/navigationAtoms"
import { createFileRoute } from "@tanstack/react-router"
import { useSetAtom } from "jotai"
import { useEffect } from "react"

export const Route = createFileRoute("/")({
  component: RouteComponent
})

const links = {
  whatIsLunde: "what-is-lunde"
}

function RouteComponent() {
  const setLinks = useSetAtom(sidebarOverviewLinksAtom)

  useEffect(() => {
    setLinks(links)
  }, [])

  return (
    <DocumentationPage title="lunde">
      <div className="intro">
        <h4 id={links.whatIsLunde}>What is lunde</h4>
        <p>
          lunde is a design system made by{" "}
          <a href="https://github.com/threetides" target="_blank" rel="noreferrer" className="link">
            threetides
          </a>
          , a personal studio. It's a small React library built on top of{" "}
          <a href="https://base-ui.com" target="_blank" rel="noreferrer" className="link">
            Base UI
          </a>
          . It wraps Base UI's unstyled, accessible primitives in a friendlier API that exposes only
          what most interfaces need, shipped styled and ready to use.
        </p>
        <p>
          Alongside the components, lunde ships a set of CSS tokens for the studio's design
          language: color, spacing, typography, radius, and shadows. The tokens are the foundation
          everything else is built on, so the components stay consistent and easy to theme.
        </p>
        <p>
          Each component is documented by a page that renders live examples next to their source.
          The source is the real code that runs, so what you read is always what you get. Browse the
          components in the sidebar to see them in action.
        </p>
      </div>
    </DocumentationPage>
  )
}