"use strict";
import React, {Component} from "react"
import PropTypes from "prop-types"

// TODO replace "../../package" with "package" when IDE can trace webpack.config.resolve.alias.
import {Wrapper} from "../../package"

import "./styles.css";


export class App extends Component {

  static propTypes = {
    children: PropTypes.node
  };

  render() {
    const {children} = this.props;

    return (
      <Wrapper className="app">
        <div>
          {children}
        </div>
      </Wrapper>
    )
  }
}
