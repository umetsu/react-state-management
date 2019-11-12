import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { DetailPage } from "./detail/DetailPage"
import { TopPage } from "./top/TopPage"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/detail"}>
          <DetailPage />
        </Route>
        <Route path={"/"}>
          <TopPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
