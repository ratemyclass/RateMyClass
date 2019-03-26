import * as React from "react";

interface NavbarProps { showNav: boolean, collapseSideNav: () => void, composeReview: () => void }
interface NavbarState {}

export class Navbar extends React.Component<NavbarProps, NavbarState> {
    constructor(props) {
        super(props);
    }

    render() {
        const navClass = this.props.showNav ? "nav-margin" : "";
        return (
            <nav className={`navbar navbar-expand-lg ${navClass}`}>
                <button className="btn" onClick={this.props.collapseSideNav}><i className="fas fa-bars"></i></button>
                <input id="search-bar" className={`form-control ${navClass}`} type="search" placeholder="Search by class or professor" />
                <button className={`btn compose-btn ${navClass}`} onClick={this.props.composeReview}><i className="far fa-edit"></i></button>
            </nav>
        )
    }
}