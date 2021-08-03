import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AsyncComponent from '../utils/AsyncComponent';

const Entry = AsyncComponent(() => import('../pages/enter') );
const EventDemo = AsyncComponent(() => import('../pages/event-demo') );

interface Props {
  
}
interface State {
  
}

export default class EnterLayout extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div>
         <Route exact path='/' component={Entry}  />
         <Route exact path='/event' component={EventDemo}  />
      </div>
    )
  }
}
