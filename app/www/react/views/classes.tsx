import * as React from "react";
import 'react-circular-progressbar/dist/styles.css';

import {Course, Professor, Review} from "../types";
import {StatPanel} from "../components/statpanel";

interface ClassesProps { showNav: boolean, classes: Course[] }
interface ClassesState {}

/**
 * The classes view defines a page containing a list of classes in the database
 */
export class ClassesView extends React.Component<ClassesProps, ClassesState> {
    constructor(props) {
        super(props);
    }

    render() {
        const onClassClick = (name: string) => {
            const classIndex = window.location.href.indexOf('/classes');
            window.location.href = window.location.href.substring(0, classIndex + 8) + "/" + encodeURI(name);
        };
        const navClass = this.props.showNav ? "nav-margin" : "";
        return (
            <div className={`classes-list ${navClass}`}>
                <header className="center-header">
                    <h1>Classes</h1>
                    <p className="description">Choose a filter (coming soon!) or find one below.</p>
                </header>
                <div className="row">
                    { this.props.classes.map((c, i) =>
                        <div key={i} className="col-xl-3 col-lg-4 col-md-6">
                            <StatPanel title={c.id} description={`${c.semesters.length} semesters`}
                                       statColor="lightblue" iconClass="fas fa-book" onClick={() => onClassClick(c.id)} />
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
