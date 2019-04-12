import * as React from "react";
import Select from 'react-select'
import {Course} from "../types";

type FilterOption = { value: string, label: string }

interface FilterProps { placeholder: string, options: FilterOption[], updateFilterValues: (values: string[]) => void }
interface FilterState {}


// TODO: Load these values from the API
export const majorOptions: FilterOption[] = [
    { value: 'CS', label: 'Computer Science' },
    { value: 'MATH', label: 'Mathematics' },
    { value: 'POLISCI', label: 'Political Science' }
];

export const professorOptions: FilterOption[] = [
    { value: 'Arjun Guha', label: 'Arjun Guha' },
    { value: 'Marius Minea', label: 'Marius Minea' },
    { value: 'David Mix Barrington', label: 'David Mix Barrington' }
];

/**
 * A filter defines a dropdown checkbox that allows one to select specific results from a given dataset
 */
export class TextFilterBox extends React.Component<FilterProps, FilterState> {
    constructor(props) {
        super(props);

        this.onSelectItem = this.onSelectItem.bind(this);

    }

    /**
     * Event handler that executes when a new item is selected/deselected in the text filter
     * @param {FilterOption[]} selectedItems
     */
    onSelectItem(selectedItems: FilterOption[]): void {
        this.props.updateFilterValues(selectedItems.map(item => item.value));
    }

    render() {

        return (
            <div className="filter">
                <Select options={this.props.options}
                        placeholder={this.props.placeholder}
                        isMulti
                        onChange={this.onSelectItem}
                        closeMenuOnSelect={false}/>
            </div>
        )
    }
}