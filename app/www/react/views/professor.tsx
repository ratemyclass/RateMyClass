import * as React from "react";
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import {Professor, Review} from "../types";
import {ReviewPanel} from "../components/reviewpanel";
import {StatPanel} from "../components/statpanel";

interface ProfessorProps { showNav: boolean, professors: Professor[] }
interface ProfessorState {}

/**
 * The professor view defines a page containing a list of professors in the database
 */
export class ProfessorView extends React.Component<ProfessorProps, ProfessorState> {
    constructor(props) {
        super(props);
    }

    render() {
        const onProfClick = (name: string) => {
            const profIndex = window.location.href.indexOf('/professors');
            window.location.href = window.location.href.substring(0, profIndex + 11) + "/" + encodeURI(name);
        };
        const navClass = this.props.showNav ? "nav-margin" : "";
        return (
            <div className={`professor-list ${navClass}`}>
                <header className="center-header">
                    <h1>Professors</h1>
                    <p className="description">Choose a filter (coming soon!) or find one below.</p>
                </header>
                <div className="row">
                    { this.props.professors.map((p, i) =>
                        <div key={i} className="col-xl-3 col-lg-4 col-md-6">
                            <StatPanel title={p.name} description={`${p.classes.length} classes`}
                                       statColor="yellow" iconClass="fas fa-user-graduate" onClick={() => onProfClick(p.name)} />
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
