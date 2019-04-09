import * as React from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

interface RangeFilterProps { placeholder: string }
interface RangeFilterState { toggled: boolean, bottomValue: number, topValue: number, applyFilter: boolean }

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

/**
 * A range filter defines a dropdown that allows one to select a range of ordinal values from a given set
 */
export class RangeFilterBox extends React.Component<RangeFilterProps, RangeFilterState> {
    constructor(props) {
        super(props);

        this.onSliderChanged = this.onSliderChanged.bind(this);

        this.state = {toggled: false, bottomValue: 1, topValue: 5, applyFilter: false};
    }

    /**
     * Event handler that executes when an endpoint of the range slider is changed
     *
     * @param {[number, number]} newValues
     */
    onSliderChanged(newValues: [number, number]): void {
        this.setState({topValue: newValues[1], bottomValue: newValues[0]});
    }

    render() {
        const toggleView = () => this.setState({toggled: !this.state.toggled});
        const toggleFilter = () => {
            this.setState({applyFilter: !this.state.applyFilter});
            toggleView();
        };

        const toggleClass = this.state.toggled ? "toggled" : "";
        const filterText = this.state.applyFilter ? `Between ${this.state.bottomValue} and ${this.state.topValue} stars` : this.props.placeholder;
        return (
            <div className="filter">
                <div className={`selectbox ${toggleClass}`} onClick={toggleView}>
                    <div>
                        <div className="select-inner">{filterText}</div>
                    </div>
                    <div className="select-drop">
                        <span className="select-bar"></span>
                        <div className="drop-bar">
                            <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-19bqh2r">
                                <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                {this.state.toggled &&
                    <div className="range-container">
                        <p className="range-label">Between</p>
                        <Range min={1} max={5} defaultValue={[1,5]}
                               value={[this.state.bottomValue, this.state.topValue]}
                               marks={{ 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 }} tipFormatter={value => `${value}/5`}
                               onChange={this.onSliderChanged} />
                        <div className="range-buttons">
                            <button className="btn btn-round" onClick={toggleView}>Cancel</button>
                            <button className="btn btn-round" onClick={toggleFilter}>
                                {this.state.applyFilter ? "Unapply" : "Apply"}
                            </button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}