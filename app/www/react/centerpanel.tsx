import * as React from "react";
import {StatPanel} from "./statpanel";

interface PanelProps {}
interface PanelState {}

/**
 * The center panel component defines the inner display elements within the dashboard
 */
export class CenterPanel extends React.Component<PanelProps, PanelState> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="centerpanel">
                <header className="center-header">
                    <h1>Never Worry About a Class Again.</h1>
                    <p className="description">RateMyClass allows your to achieve agency over your own education</p>
                </header>

                <div className="row">
                    <div className="col-md-3">
                        <StatPanel title="Classes" description="231"/>
                    </div>
                    <div className="col-md-3">
                        <StatPanel title="Professors" description="105"/>
                    </div>
                    <div className="col-md-3">
                        <StatPanel title="Majors" description="38"/>
                    </div>
                    <div className="col-md-3">
                        <StatPanel title="Reviews" description="582"/>
                    </div>
                </div>
            </div>
        )
    }
}