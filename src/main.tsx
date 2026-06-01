import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "@styles/index.css"
import "@styles/reset.css"
import "@styles/tokens.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1>Lunde</h1>
  </StrictMode>
)
