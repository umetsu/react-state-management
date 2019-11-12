import { Typography } from "@material-ui/core"
import * as React from "react"
import { Link } from "react-router-dom"
import { Stylable } from "../Stylable"

type Props = {} & Stylable

export const TopPage: React.FC<Props> = React.memo(({ ...props }: Props) => (
  <div {...props}>
    <Typography>Top Page</Typography>
    <Link to={"/detail"}>to detail page</Link>
  </div>
))
