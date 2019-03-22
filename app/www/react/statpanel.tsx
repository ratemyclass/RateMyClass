import * as React from "react";

interface StatPanelProps { title: string, description: string }
interface StatPanelState {}

/**
 * A stat panel defines a small, self-contained panel intended to display a statistic on the dashboard
 */
export class StatPanel extends React.Component<StatPanelProps, StatPanelState> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="statpanel">
                <div className="stat-title">
                    <p>{this.props.title}</p>
                </div>
                <div className="stat-body">
                    {/*<img src={}*/}
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}