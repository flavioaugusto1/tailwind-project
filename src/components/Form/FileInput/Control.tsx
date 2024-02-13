import { ComponentProps } from 'react'

export type ControlProps = ComponentProps<'input'>

export function Control() {
  return <input type="file" id="photo" className="sr-only" />
}
