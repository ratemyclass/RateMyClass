import * as React from "react";

interface SidenavProps { collapsed: boolean }
interface SidenavState {}

export class Sidenav extends React.Component<SidenavProps, SidenavState> {
    constructor(props) {
        super(props);
    }

    render() {
        const sidenavClass = this.props.collapsed ? "no-nav" : "sidenav";

        return (
            <div id="sidenav" className={sidenavClass}>
                <div className="sidenav-item sidenav-title">
                    <h4>RateMyClass</h4>
                </div>
                <div className="sidenav-item">
                    <i className="fas fa-home" style={{color: "#9effb8"}}></i>
                    <h5> Home</h5>
                </div>
                <div className="sidenav-item">
                    <i className="fas fa-graduation-cap" style={{color: "#8aaee2"}}></i>
                    <h5> Classes</h5>
                </div>
                <div className="sidenav-item">
                    <i className="fas fa-user-graduate" style={{color: "#d46ce7"}}></i>
                    <h5> Professors</h5>
                </div>
                <div className="sidenav-item">
                    <i className="fas fa-chart-line" style={{color: "#e9f259"}}></i>
                    <h5> Leaderboard</h5>
                </div>
            </div>
        )
    }
}