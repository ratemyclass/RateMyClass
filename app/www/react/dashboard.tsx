import * as React from "react";

import { Navbar } from "./navbar";
import { Sidenav } from "./sidenav";
import { HomePanel } from "./homepanel";

interface DashboardProps {}
interface DashboardState { showSideNav: boolean, windowWidth: number }

/**
 * The dashboard component defines a container for the entire viewport of the screen
 */
export class Dashboard extends React.Component<DashboardProps, DashboardState> {
    constructor(props) {
        super(props);

        this.collapseSideNav = this.collapseSideNav.bind(this);
        this.updateWindowWidth = this.updateWindowWidth.bind(this);
        this.composeReview = this.composeReview.bind(this);

        const width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;

        this.state = { showSideNav: true, windowWidth: width }
    }

    /**
     * Hook an event listener to re-render the dashboard when the window width is changed
     */
    componentDidMount() {
        window.addEventListener("resize", this.updateWindowWidth);
    }

    /**
     * Updates the window width state variable when the window is resized
     */
    updateWindowWidth() {
        const width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        this.setState({windowWidth: width});
    }

    /**
     * Toggles the Sidenav collapse
     */
    collapseSideNav() {
        this.setState({showSideNav: !this.state.showSideNav});
    }

    /**
     * Compose a new review to be added to the database
     */
    composeReview() {
        // TODO: Compose a new review
    }

    render() {
        // Hide the Sidenav on tablets and mobile
        const showNav = this.state.showSideNav && this.state.windowWidth > 692;
        return (
            <div className="flex">
                <Sidenav showNav={showNav} />

                <div className="flex flex-column content-section">
                    <Navbar showNav={showNav} collapseSideNav={this.collapseSideNav} composeReview={this.composeReview} />

                    {/* TODO: Toggle between Home, Classes, Professors, Leaderboard, and Search views */}
                    <HomePanel showNav={showNav} />
                </div>
            </div>
        )
    }
}