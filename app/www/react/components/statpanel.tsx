import * as React from "react";

interface StatPanelProps { title: string, description: string, subtitle?: string, statColor: string, iconClass: string,
                           onClick?: () => void }
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
            <div className="statpanel" onClick={this.props.onClick}>
                <div className="stat-title">
                    <p>{this.props.title}</p>
                </div>
                <div className="stat-body">
                    <i className={`${this.props.iconClass} ${this.props.statColor}`}></i>
                    <p className={`stat-description ${this.props.statColor} with-bg`}>{this.props.description}</p>
                </div>
            </div>
        )
    }
}