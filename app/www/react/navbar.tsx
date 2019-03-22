import * as React from "react";

interface NavbarProps { collapseSideNav: () => void }
interface NavbarState {}

export class Navbar extends React.Component<NavbarProps, NavbarState> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <button className="btn" onClick={this.props.collapseSideNav}><i className="fas fa-bars"></i></button>
                <input id="search-bar" className="form-control" type="search" placeholder="Search by class or professor" />
            </nav>
        )
    }
}