import * as React from "react"
import { Outlet, createRootRoute } from "@tanstack/react-router"
import { TopBar } from "@/features/navigation/components/TopBar/TopBar"
import { NavigationMenuMobile } from "@/features/navigation/components/NavigationMenuMobile/NavigationMenuMobile"
import { NavigationMenuDesktop } from "@/features/navigation/components/NavigationMenuDesktop/NavigationMenuDesktop"
import { SidebarOverview } from "@/features/navigation/components/SidebarOverview/SidebarOverview"

export const Route = createRootRoute({
  component: RootComponent
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