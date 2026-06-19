import * as React from "react"
import { Outlet, createRootRoute } from "@tanstack/react-router"
import { TopBar } from "@/features/navigation/components/TopBar/TopBar"
import { NavigationMenuMobile } from "@/features/navigation/components/NavigationMenuMobile/NavigationMenuMobile"
import { NavigationMenuDesktop } from "@/features/navigation/components/NavigationMenuDesktop/NavigationMenuDesktop"
import { SidebarOverview } from "@/features/navigation/components/SidebarOverview/SidebarOverview"
import { getDefaultStore } from "jotai"
import { sidebarOverviewActiveLinkAtom } from "@/features/navigation/navigationAtoms"

export const Route = createRootRoute({
  component: RootComponent,
  beforeLoad: ({ location }) => {
    const store = getDefaultStore()
    store.set(sidebarOverviewActiveLinkAtom, location.hash)
  }
})

function RootComponent() {
  return (
    <React.Fragment>
      <TopBar />
      <NavigationMenuMobile />
      <main>
        <NavigationMenuDesktop />
        <Outlet />
        <SidebarOverview />
      </main>
    </React.Fragment>
  )
}