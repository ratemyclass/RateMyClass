import * as React from "react";
import {StatPanel} from "./statpanel";
import {ReviewPanel} from "./reviewpanel";
import {Review, sampleReview1, sampleReview2} from "./types";

interface PanelProps { showNav: boolean }
interface PanelState { reviews: Review[] }

/**
 * The center panel component defines the inner display elements within the dashboard
 */
export class CenterPanel extends React.Component<PanelProps, PanelState> {
    constructor(props) {
        super(props);

        this.state = {reviews: [sampleReview1, sampleReview2]}
    }

    render() {
        const centerClass = this.props.showNav ? "center-margin" : "";
        return (
            <div id="centerpanel" className={centerClass}>
                <header className="center-header">
                    <h1>Never Worry About a Class Again.</h1>
                    <p className="description">RateMyClass allows you to achieve agency over your own education</p>
                </header>

                <div className="row">
                    <div className="col-md-3">
                        <StatPanel title="Classes" description="231" statColor="lightgreen" />
                    </div>
                    <div className="col-md-3">
                        <StatPanel title="Professors" description="105" statColor="lightblue" />
                    </div>
                    <div className="col-md-3">
                        <StatPanel title="Majors" description="38" statColor="magenta" />
                    </div>
                    <div className="col-md-3">
                        <StatPanel title="Reviews" description="582" statColor="yellow" />
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