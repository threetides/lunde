import VariantsSource from "@/components/Button/Examples/Variants.tsx?raw"
import SizesSource from "@/components/Button/Examples/Sizes.tsx?raw"
import DisabledSource from "@/components/Button/Examples/Disabled.tsx?raw"
import AnatomySource from "@/components/Button/Examples/Anatomy.tsx?raw"
import { DocumentationPage } from "@/features/documentation/components/DocumentationPage/DocumentationPage"
import { Example } from "@/features/documentation/components/Example/Example"
import { createFileRoute } from "@tanstack/react-router"
import { useSetAtom } from "jotai"
import { sidebarOverviewLinksAtom } from "@/features/navigation/navigationAtoms"
import { useEffect } from "react"
import { codeToHtml } from "shiki"
import { shikiTheme } from "@/features/documentation/components/Example/shikiTheme"
import { Variants } from "@/components/Button/Examples/Variants"
import { Sizes } from "@/components/Button/Examples/Sizes"
import { Disabled } from "@/components/Button/Examples/Disabled"
import {
  APIReference,
  type API
} from "@/features/documentation/components/APIReference/APIReference"

export const Route = createFileRoute("/components/button/")({
  loader: async () => ({
    variants: await codeToHtml(VariantsSource, { lang: "tsx", theme: shikiTheme }),
    sizes: await codeToHtml(SizesSource, { lang: "tsx", theme: shikiTheme }),
    disabled: await codeToHtml(DisabledSource, { lang: "tsx", theme: shikiTheme }),
    anatomy: await codeToHtml(AnatomySource, { lang: "tsx", theme: shikiTheme })
  }),
  component: RouteComponent
})

const links = {
  variants: "variants",
  sizes: "sizes",
  disabled: "disabled",
  anatomy: "anatomy",
  apiReference: "api-reference"
}

const api: API[] = [{ title: "Button", link: "https://base-ui.com/react/components/button" }]

function RouteComponent() {
  const setLinks = useSetAtom(sidebarOverviewLinksAtom)

  useEffect(() => {
    setLinks(links)
  }, [])

  const { variants, sizes, disabled, anatomy } = Route.useLoaderData()

  return (
    <DocumentationPage title="Button">
      <Example
        subtitle="Variants"
        link={links.variants}
        ingress="The 'variant' prop switches between solid, outline, and ghost"
        code={variants}
      >
        {Variants}
      </Example>
      <Example
        subtitle="Sizes"
        link={links.sizes}
        ingress="The 'size' prop switches between small, medium, and large"
        code={sizes}
      >
        {Sizes}
      </Example>
      <Example
        subtitle="Disabled"
        link={links.disabled}
        ingress="Disabled buttons keep their variant but ignore interaction"
        code={disabled}
      >
        {Disabled}
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