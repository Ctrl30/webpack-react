import React, { Component } from "react";
import { Skeleton } from "antd";
const asyncComponent = (importComponent) => {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null,
      };
    }
    async componentDidMount() {
      const { default: component } = await importComponent();

      if (!this.unmount) {
        this.setComponent(component);
      }
    }
    setComponent = (component) => {
      this.setState({
        component,
      });
    };
    render() {
      const Com = this.state.component;
      return Com ? (
        <Com {...this.props} />
      ) : (
        <div>
          <Skeleton active />
          <Skeleton active paragraph={{ rows: 10 }} />
        </div>
      );
    }
  }
  return AsyncComponent;
};
export default asyncComponent;
