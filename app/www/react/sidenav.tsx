import * as React from "react";

interface SidenavProps { showNav: boolean, updateView: (viewNum: number) => void }
interface SidenavState {}

/**
 * The Sidenav component defines the collapsable navigation bar on the left-hand side of the screen
 */
export class Sidenav extends React.Component<SidenavProps, SidenavState> {
    constructor(props) {
        super(props);
    }

    render() {
        // Set the css class to show/hide the sidenav
        const sidenavClass = this.props.showNav ? "sidenav" : "no-nav";

        return (
            <div id="sidenav" className={sidenavClass}>
                <div className="sidenav-item sidenav-title">
                    <h4>RateMyClass</h4>
                </div>
                <div className="sidenav-item" onClick={() => this.props.updateView(0)}>
                    <i className="fas fa-home" style={{color: "#9effb8"}}></i>
                    <h5> Home</h5>
                </div>
                <div className="sidenav-item" onClick={() => this.props.updateView(1)}>
                    <i className="fas fa-graduation-cap" style={{color: "#8aaee2"}}></i>
                    <h5> Classes</h5>
                </div>
                <div className="sidenav-item" onClick={() => this.props.updateView(2)}>
                    <i className="fas fa-user-graduate" style={{color: "#d46ce7"}}></i>
                    <h5> Professors</h5>
                </div>
                <div className="sidenav-item" onClick={() => this.props.updateView(3)}>
                    <i className="fas fa-chart-line" style={{color: "#e9f259"}}></i>
                    <h5> Leaderboard</h5>
                </div>
            </div>
        )
    }
}