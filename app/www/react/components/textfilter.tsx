import * as React from "react";
import Select from 'react-select'

interface FilterProps { placeholder: string }
interface FilterState {}


// TODO: Load these values from the API
const majorOptions = [
    { value: 'Computer Science', label: 'Computer Science' },
    { value: 'Mathematics', label: 'Mathematics' },
    { value: 'Political Science', label: 'Political Science' }
];

/**
 * A filter defines a dropdown checkbox that allows one to select specific results from a given dataset
 */
export class TextFilterBox extends React.Component<FilterProps, FilterState> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="filter">
                <Select options={majorOptions}
                        placeholder={this.props.placeholder}
                        isMulti
                        closeMenuOnSelect={false}/>
            </div>
        )
    }
}