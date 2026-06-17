import { atom } from "jotai"

export const menuOpenAtom = atom<boolean>(false)
export const sidebarOverviewLinksAtom = atom<Record<string, string>>()