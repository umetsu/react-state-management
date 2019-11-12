import * as React from "react"
import { Header } from "../Header"
import { Stylable } from "../Stylable"

type Props = {} & Stylable

export const TopTemplate: React.FC<Props> = React.memo(
  ({ ...props }: Props) => {
    return (
      <div {...props}>
        <Header />
      </div>
    )
  },
)
