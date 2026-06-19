import { Accordion } from "@/components/Accordion/Accordion"
import type { FC } from "react"
import "./APIReference.css"

export type API = {
  title: string
  link: string
}

interface APIReferenceProps {
  api: API[]
  link: string
}

export const APIReference: FC<APIReferenceProps> = ({ api, link }) => {
  return (
    <div className="api-reference">
      <div className="api-reference__ingress">
        <h4 id={link}>API reference</h4>
        <p className="api-reference__ingress">See Base UI for API reference</p>
      </div>
      <Accordion>
        {api.map((item) => {
          return (
            <Accordion.Item key={item.title}>
              <Accordion.Trigger>{item.title}</Accordion.Trigger>
              <Accordion.Panel>
                <a href={item.link} target="_blank" rel="noreferrer" className="link">
                  {item.link}
                </a>
              </Accordion.Panel>
            </Accordion.Item>
          )
        })}
      </Accordion>
    </div>
  )
}