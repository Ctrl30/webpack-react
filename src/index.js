import React from "react";
import { render } from "react-dom";
import { Provider } from "mobx-react";
import { Route,Switch } from 'react-router-dom';
// import { LocaleProvider } from "antd";
import { HashRouter } from "react-router-dom";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import "moment/locale/zh-cn";
import MainLayout from './layouts/MainLayout';
import EnterLayout from './layouts/EnterLayout';

class App extends React.Component {
  render() {
    return (
      <Provider>
        {/* <LocaleProvider locale={zh_CN}> */}
          <HashRouter>
          <Switch>
                <Route path="/main" component={MainLayout} />
                <Route path="/" component={EnterLayout} />
              </Switch>
          </HashRouter>
        {/* </LocaleProvider> */}
      </Provider>
    );
  }
}
render(<App />, document.getElementById("root"));
