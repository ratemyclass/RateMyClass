import * as React from "react";

import { Dashboard } from "./dashboard";

interface ContainerProps {}
interface ContainerState {}

/**
 * Container class wrapping all React components. Useful for applying global styles
 */
export class Container extends React.Component<ContainerProps, ContainerState> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="container">
                <Dashboard />
            </div>
        )
    }
}