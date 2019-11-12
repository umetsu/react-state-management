import { Typography } from "@material-ui/core"
import * as React from "react"
import { Stylable } from "../Stylable"

type Props = {} & Stylable

export const DetailPage: React.FC<Props> = React.memo(({ ...props }: Props) => (
  <div {...props}>
    <Typography>Detail Page</Typography>
  </div>
))
