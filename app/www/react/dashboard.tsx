import * as React from "react";

import { Navbar } from "./navbar";
import {Sidenav} from "./sidenav";
import {CenterPanel} from "./centerpanel";

interface DashboardProps {}
interface DashboardState { showSideNav: boolean }

/**
 * The dashboard component defines a container for the entire viewport of the screen
 */
export class Dashboard extends React.Component<DashboardProps, DashboardState> {
    constructor(props) {
        super(props);

        this.collapseSideNav = this.collapseSideNav.bind(this);

        // TODO: Automatically hide the sidenav if we are on a small screen
        this.state = { showSideNav: true }
    }

    /**
     * Toggles the side nav collapse
     */
    collapseSideNav() {
        // TODO: Add animation to smoothly collapse the sidenav
        this.setState({showSideNav: !this.state.showSideNav});
    }

    render() {
        return (
            <div className="flex">
                <Sidenav collapsed={!this.state.showSideNav} />

                <div className="flex flex-column content-section">
                    <Navbar collapseSideNav={this.collapseSideNav} />
                    <CenterPanel />
                </div>
            </div>
        )
    }
}