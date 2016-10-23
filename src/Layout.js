import { Button, Layout, Panel } from 'react-toolbox'
import React, { Component } from 'react'
import { MenuIcon } from './icons.js'
import Sidebar from './Sidebar.js'
import styles from './styles.sass'
import Map from './Map.js'
import If from './If.js'

export default class LayoutTest extends React.Component {
    componentWillMount() {
      this.setState({
        sidebarPinned: false
      })
    }

    toggleSidebar() {
        this.setState({ sidebarPinned: !this.state.sidebarPinned })
    }

    render() {
        return (
            <Layout>
                <Panel>
                    <div className={styles.controlPane}>
                      <If condition={!this.state.sidebarPinned}>
                        <Button raised onClick={() => this.toggleSidebar()}>
                          <MenuIcon />
                        </Button>
                      </If>
                    </div>
                    <div className={styles.mapPane}>
                        <Map />
                    </div>
                </Panel>
                <Sidebar onCloseButtonClick={() => this.toggleSidebar()} sidebarPinned={this.state.sidebarPinned} />
            </Layout>
        )
    }
}
