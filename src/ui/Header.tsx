import {
  AppBar,
  createStyles,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core"
import * as React from "react"
import { Stylable } from "./Stylable"

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      flexGrow: 1,
    },
  }),
)

type Props = {} & Stylable

export const Header: React.FC<Props> = React.memo(({ ...props }: Props) => {
  const classes = useStyles()

  return (
    <div {...props}>
      <AppBar position={"static"}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            react-state-management
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
})
