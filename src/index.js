import React from "react";
import { render } from "react-dom";
import { Provider } from "mobx-react";
// import { LocaleProvider } from "antd";
import { HashRouter } from "react-router-dom";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import Login from "./routers/login";
import "moment/locale/zh-cn";

class App extends React.Component {
  render() {
    return (
      <Provider>
        {/* <LocaleProvider locale={zh_CN}> */}
          <HashRouter>
            <Login />
          </HashRouter>
        {/* </LocaleProvider> */}
      </Provider>
    );
  }
}
render(<App />, document.getElementById("root"));
