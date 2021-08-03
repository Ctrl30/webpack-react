import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AsyncComponent from '../utils/AsyncComponent';

const Entry = AsyncComponent(() => import('../pages/enter') );

interface Props {
  
}
interface State {
  
}

export default class MainLayout extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div>
         <Route exact path='/' component={Entry}  />
      </div>
    )
  }
}
