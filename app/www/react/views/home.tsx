import * as React from "react";
import {StatPanel} from "../components/statpanel";
import {ReviewPanel} from "../components/reviewpanel";
import {Review, sampleReview1, sampleReview2} from "../types";

interface PanelProps { showNav: boolean, updateView: (viewNum: number) => void }
interface PanelState { reviews: Review[] }

/**
 * The home panel component defines the home page on the dashboard to the right of the Sidenav
 */
export class Home extends React.Component<PanelProps, PanelState> {
    constructor(props) {
        super(props);

        this.state = {reviews: [sampleReview1, sampleReview2]}
    }

    render() {
        // Set the css class to set the margin depending on whether the side nav is shown
        const centerClass = this.props.showNav ? "center-margin" : "";

        return (
            <div id="centerpanel" className={centerClass}>
                <header className="center-header">
                    <h1>Never Worry About a Class Again.</h1>
                    <p className="description">RateMyClass allows you to achieve agency over your own education</p>
                </header>

                <div className="row">
                    <div className="col-md-3">
                        <StatPanel title="Classes" description="231" statColor="lightgreen" iconClass="fas fa-signal"
                                   onClick={() => this.props.updateView(1)} />
                    </div>
                    <div className="col-md-3">
                        <StatPanel title="Professors" description="105" statColor="lightblue" iconClass="fas fa-signal"
                                   onClick={() => this.props.updateView(3)} />
                    </div>
                    <div className="col-md-3">
                        <StatPanel title="Majors" description="38" statColor="magenta" iconClass="fas fa-signal"/>
                    </div>
                    <div className="col-md-3">
                        <StatPanel title="Reviews" description="582" statColor="yellow" iconClass="fas fa-signal" />
                    </div>
                </div>

                <div className="row recent-reviews">
                    <div className="col-12 recent-title">
                        <p>Recent Reviews</p>
                    </div>
                    <div className="reviews-list">
                        { this.state.reviews.map((r, i) =>
                            <ReviewPanel review={r} key={i}/>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}