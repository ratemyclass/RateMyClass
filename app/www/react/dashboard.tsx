import * as React from "react";

import { Navbar } from "./components/navbar";
import { Sidenav } from "./components/sidenav";
import { Home } from "./views/home";
import {ProfessorProfile} from "./views/professorprofile";
import {
    Course,
    Professor,
    sampleCourse1,
    sampleCourse2,
    sampleCourse3,
    sampleCourse4,
    sampleCourse5,
    sampleCourse6,
    sampleCourse7,
    sampleCourse8,
    sampleProf1,
    sampleProf2,
    sampleProf3,
    sampleProf4,
    sampleReview1,
    sampleReview2
} from "./types";
import {ProfessorView} from "./views/professor";
import {ClassesView} from "./views/classes";
import {ClassProfile} from "./views/classprofile";

interface DashboardProps { currentView: number }
interface DashboardState { showSideNav: boolean, windowWidth: number, currentView: number }

/**
 * The dashboard component defines a container for the entire viewport of the screen
 */
export class Dashboard extends React.Component<DashboardProps, DashboardState> {
    constructor(props) {
        super(props);

        this.collapseSideNav = this.collapseSideNav.bind(this);
        this.updateWindowWidth = this.updateWindowWidth.bind(this);
        this.composeReview = this.composeReview.bind(this);
        this.updateView = this.updateView.bind(this);

        console.log(this.props.currentView);

        const width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;

        // currentView = 0 is the home page
        this.state = { showSideNav: true, windowWidth: width, currentView: this.props.currentView }
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

    /**
     * Updates the current view with the specified view number
     * @param {number} viewNum
     */
    updateView(viewNum: number): void {
        // TODO: Fix this workaround that sets the URL based on which tab was clicked. This should ideally use routing instead
        switch (viewNum) {
            case 0:
                window.history.pushState("", "", "/");
                break;
            case 1:
                window.history.pushState("", "", "/classes");
                break;
            case 3:
                window.history.pushState("", "", "/professors");
                break;
            default:
                break;
        }
        this.setState({currentView: viewNum});
    }

    /**
     * Renders the content of the current view within the dashboard
     */
    private renderCurrentView(): JSX.Element {
        // TODO: Consolidate this into a single declaration
        const sampleProfs: Professor[] = [sampleProf1, sampleProf2, sampleProf3, sampleProf4];
        const sampleCourses: Course[] = [sampleCourse1, sampleCourse2, sampleCourse3, sampleCourse4, sampleCourse5, sampleCourse6, sampleCourse7, sampleCourse8];
        const showNav = this.state.showSideNav && this.state.windowWidth > 692;
        switch (this.state.currentView) {
            case 0:
                return <Home showNav={showNav} updateView={this.updateView} />;
            case 1:
                return <ClassesView showNav={showNav} classes={sampleCourses} />;
            case 2:
                const decodedclass = decodeURI(window.location.pathname.substring(window.location.pathname.lastIndexOf('/')+1));
                return <ClassProfile showNav={showNav} class={sampleCourses.find(c => c.id === decodedclass)} />;
            case 3:
                return <ProfessorView showNav={showNav} professors={[sampleProf1, sampleProf2, sampleProf3, sampleProf4]} />;
            case 4:
                const decodedProf = decodeURI(window.location.pathname.substring(window.location.pathname.lastIndexOf('/')+1));
                return <ProfessorProfile showNav={showNav} professor={sampleProfs.find(p => p.name === decodedProf)}
                                         reviews={[sampleReview1, sampleReview2]} />;
            default:
                throw new Error("View Not Found");
        }
    }


    render() {
        // Hide the Sidenav on tablets and mobile
        const showNav = this.state.showSideNav && this.state.windowWidth > 692;
        return (
            <div className="flex">
                <Sidenav showNav={showNav} updateView={this.updateView} />

                <div className="flex flex-column content-section">
                    <Navbar showNav={showNav} collapseSideNav={this.collapseSideNav} composeReview={this.composeReview} />

                    { this.renderCurrentView() }
                </div>
            </div>
        )
    }
}