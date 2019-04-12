import * as React from "react";
import 'react-circular-progressbar/dist/styles.css';

import {Course, Professor, Review} from "../types";
import {StatPanel} from "../components/statpanel";
import {majorOptions, professorOptions, TextFilterBox} from "../components/textfilter";
import {RangeFilterBox} from "../components/rangefilter";

type CourseFilter = (c: Course) => boolean

interface ClassesProps { showNav: boolean, classes: Course[] }
interface ClassesState { majorFilter: CourseFilter, profFilter: CourseFilter, ratingFilter: CourseFilter }

/**
 * The classes view defines a page containing a list of classes in the database
 */
export class ClassesView extends React.Component<ClassesProps, ClassesState> {
    constructor(props) {
        super(props);

        this.makeUpdateFilter = this.makeUpdateFilter.bind(this);
        const defaultFilter = (c: Course) => true;

        this.state = {majorFilter: defaultFilter, profFilter: defaultFilter, ratingFilter: defaultFilter }
    }

    /**
     * Generates a function that updates the specified filter with the given predicate
     * @param {keyof ClassesState} filterType
     */
    makeUpdateFilter(filterType: keyof ClassesState): (filterValues: (string|number)[]) => void {
        let newFilter = (c: Course) => true;
        if (filterType === "majorFilter") {
            return (filterValues: string[]) => {
                if (filterValues.length > 0) {
                    newFilter = (c: Course) => filterValues.map(fv => c.id.indexOf(fv) >= 0).some(v => v);
                }
                this.setState({majorFilter: newFilter});
            };
        }
        if (filterType === "profFilter") {
            return (filterValues: string[]) => {
                if (filterValues.length > 0) {
                    newFilter = (c: Course) => filterValues.map(fv => c.taughtBy.has(fv)).some(v => v);
                }
                this.setState({profFilter: newFilter});
            };
        }
        if (filterType === "ratingFilter") {
            return (filterValues: number[]) => {
                this.setState({ratingFilter: (c: Course) => filterValues[0] <= c.avgRating && c.avgRating <= filterValues[1]});
            };
        }
    }

    render() {
        const compoundFilter = (c: Course) => {
            return this.state.majorFilter(c) && this.state.profFilter(c) && this.state.ratingFilter(c);
        };
        const onClassClick = (name: string) => {
            const classIndex = window.location.href.indexOf('/classes');
            window.location.href = window.location.href.substring(0, classIndex + 8) + "/" + encodeURI(name);
        };
        const navClass = this.props.showNav ? "nav-margin" : "";

        return (
            <div className={`classes-list ${navClass}`}>
                <header className="center-header">
                    <h1>Classes</h1>
                    <p className="description">Choose a filter or find one below.</p>
                </header>
                <div className="row filter-row">
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <TextFilterBox placeholder="Filter by major" options={majorOptions}
                                       updateFilterValues={this.makeUpdateFilter('majorFilter')} />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <TextFilterBox placeholder="Filter by professor" options={professorOptions}
                                       updateFilterValues={this.makeUpdateFilter('profFilter')} />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <RangeFilterBox updateFilterValues={this.makeUpdateFilter('ratingFilter')} />
                    </div>
                </div>
                <div className="row">
                    { this.props.classes.filter(compoundFilter).map((c, i) =>
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
