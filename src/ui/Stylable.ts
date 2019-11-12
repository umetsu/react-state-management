import * as React from "react"

export type Stylable = Readonly<{
  style?: React.CSSProperties
  className?: string
}>
