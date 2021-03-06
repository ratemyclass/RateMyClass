import * as React from "react";
import 'react-circular-progressbar/dist/styles.css';

import {Professor, Review} from "../types";
import {ReviewPanel} from "../components/reviewpanel";
import {TextPill} from "../components/textpill";

interface ProfessorProfileProps { showNav: boolean, professor: Professor, reviews: Review[] }
interface ProfessorProfileState {}

/**
 * The professor view defines a page containing information about a specific professor
 */
export class ProfessorProfile extends React.Component<ProfessorProfileProps, ProfessorProfileState> {
    constructor(props) {
        super(props);

    }


    render() {
        const navClass = this.props.showNav ? "nav-margin" : "";
        return (
            <div className={`professor ${navClass}`}>
                <div className="row">
                    <div className="col-lg-3">
                        <ProfilePanel professor={this.props.professor} />
                    </div>
                    <div className="col-lg-9">
                        <div className="professor-reviews">
                            <div className="col-12 recent-title">
                                <p>Recent Reviews</p>
                            </div>
                            { this.props.reviews.map((r, i) =>
                                <ReviewPanel key={i} review={r} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

interface ProfileProps { professor: Professor }

/** Functional component that renders a professor's profile panel **/
const ProfilePanel = (props: ProfileProps) => {
    const makeOnClick = (className: string) => () => {
        window.location.href = window.location.origin + "/classes/" + encodeURI(className);
    };

    return (
        <div className="professor-info">
            <p className="professor-name">{props.professor.name}</p>
            <img className="professor-pic" src="/static/img/person.png" />
            <p className="classes-header">Classes Taught</p>
            <div className="flex pill-container">
                { props.professor.classes.map((c,i) =>
                    <TextPill key={i} text={c} color="lightblue" onClick={makeOnClick(c)} />
                )}
            </div>
        </div>
    );
};