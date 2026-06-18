import { flushSync } from "react-dom"

export const startViewTransition = (action: () => void) => {
  if (!document.startViewTransition) {
    action()
    return
  }
  document.startViewTransition(() => {
    flushSync(() => action())
  })
}