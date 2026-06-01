import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { TopBar } from "@/features/navigation/components/TopBar/TopBar"
import "@/styles/index.css"
import "@/styles/reset.css"
import "@/styles/tokens.css"
import "@/styles/lunde.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TopBar />
  </StrictMode>
)
