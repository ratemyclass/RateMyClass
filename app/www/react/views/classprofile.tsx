import * as React from "react";
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from "recharts";

import {Course, Review, sampleReview1, sampleReview2} from "../types";
import {ReviewPanel} from "../components/reviewpanel";
import {computeAverageGrade, consolidateGradeData} from "../util/grades";

interface ClassProfileProps { showNav: boolean, class: Course }
interface ClassProfileState { reviews: Review[], selectedSemester: string, semesterGrades: Map<string, object[]> }


/**
 * The class profile defines a page containing information about a specific course
 */
export class ClassProfile extends React.Component<ClassProfileProps, ClassProfileState> {
    constructor(props) {
        super(props);

        this.onSemesterChange = this.onSemesterChange.bind(this);
        this.makeFakeData = this.makeFakeData.bind(this);

        // TODO: Setup an API request in the componentDidMount method to obtain reviews
        this.state = {reviews: [sampleReview1, sampleReview2], selectedSemester: "All semesters",
                      semesterGrades: new Map<string, object[]>(this.props.class.semesters.map((s) => [s, this.makeFakeData()] as [string, object[]]))}

    }

    /**
     * Executes when a new value in the semester dropdown box is clicked
     */
    private onSemesterChange(e): void {
        this.setState({selectedSemester: e.target.value});
    }

    // TODO: Replace this by fetching real data using the API
    private makeFakeData(): object[] {
        const getRand = (n: number) => {
            return Math.floor(Math.random() * n);
        };
        return [{name: 'A', count: getRand(12)}, {name: 'A-', count: getRand(18)}, {name: 'B+', count: getRand(34)},
            {name: 'B', count: getRand(23)}, {name: 'B-', count: getRand(27)}, {name: 'C+', count: getRand(75)},
            {name: 'C', count: getRand(22)}, {name: 'C-', count: getRand(38)}];
    }

    render() {
        const gradeMap = this.state.semesterGrades;
        const navClass = this.props.showNav ? "nav-margin" : "";
        const data = this.state.selectedSemester === "All semesters" ? consolidateGradeData(gradeMap) : gradeMap.get(this.state.selectedSemester);
        const [grade, meanScore] = computeAverageGrade(data);
        return (
            <div className={`class-profile ${navClass}`}>
                <div className="row class-info">
                    <div className="col-sm-12">
                        <p className="description class-name">{this.props.class.name} ({this.props.class.id})</p>
                        <div className="row class-body">
                            <div className="col-lg-3">
                                {/* Use a 3rd order polynomial to fit A at 100%, B at 75%, and C at 50% */}
                                <CircularProgressbar
                                    percentage={-44.2982 + 0.1608*meanScore + 0.0146*meanScore**2}
                                    text={grade}
                                    initialAnimation={true}
                                    styles={{path: {stroke: "green"}, text: {fill: "green"}}}
                                />
                                <p className="description avg-grade">Average Grade</p>
                                <select className="form-control semester-dropdown" value={this.state.selectedSemester}
                                        onChange={this.onSemesterChange}>
                                    <option value="All semesters">All semesters</option>

                                    { this.props.class.semesters.map((s,i) =>
                                        <option key={i} value={s}>{s}</option>
                                    )}

                                </select>
                            </div>
                            <div className="col-lg-9">
                                <p className="description dist-title">
                                    Estimated Grade Distribution ({this.state.selectedSemester})
                                </p>
                                {/* Show histogram of class distribution */}
                                <ResponsiveContainer height={300} width="100%">
                                    <BarChart data={data} margin={{top: 15, right: 0, left: 0, bottom: 5}}>
                                        <XAxis dataKey="name"/>
                                        <YAxis/>
                                        <Tooltip/>
                                        <Legend />
                                        <Bar dataKey="count" fill="#8aaee2" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="class-reviews">
                                <div className="col-12 recent-title">
                                    <p>Reviews</p>
                                </div>
                                { this.state.reviews.map((r, i) =>
                                    <ReviewPanel key={i} review={r} />
                                )}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}