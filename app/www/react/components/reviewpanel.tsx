import * as React from "react";
import * as moment from 'moment';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { Review } from "../types";

interface ReviewPanelProps { review: Review }
interface ReviewPanelState {}

/**
 * A review panel defines a self-contained panel containing the content of a single review for a class
 */
export class ReviewPanel extends React.Component<ReviewPanelProps, ReviewPanelState> {
    constructor(props) {
        super(props);

        this.getOverallRatingColor = this.getOverallRatingColor.bind(this);
    }

    /**
     * Retrieves the stroke color of the overall rating wheel based on the overall rating
     */
    private getOverallRatingColor(): string {
        const rating = this.props.review.overallRating;
        switch (true) {
            case rating >= 4:
                return "green";
            case rating >= 3:
                return "yellow";
            case rating >= 2:
                return "orange";
            case rating >= 1:
                return "red";
            default:
                return "black"; // Shouldn't ever happen
        }
    }

    render() {
        const ratingColor = this.getOverallRatingColor();
        return (
            <div className="review-panel">
                <div className="row review-body">
                    <div className="col-md-3 review-stats">
                        <div className="review-classid">
                            <p>{this.props.review.classId}</p>
                        </div>
                        <div className="overall-rating">
                            <CircularProgressbar
                                percentage={this.props.review.overallRating/5.0 * 100}
                                text={`${this.props.review.overallRating}/5`}
                                initialAnimation={true}
                                styles={{path: {stroke: ratingColor}, text: {fill: ratingColor}}}
                            />
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <RatingStars title="Workload" rating={this.props.review.difficultyRating}/>
                            </div>
                            <div className="col-lg-6">
                                <RatingStars title="Teaching" rating={this.props.review.professorRating}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <RatingStars title="Learning" rating={this.props.review.learnRating}/>
                            </div>
                            <div className="col-lg-6">
                                <RatingStars title="Difficulty" rating={this.props.review.difficultyRating}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 review-content">
                        <div className="row review-content-header">
                            <div className="col-sm-3 review-datum">
                                <p className="review-title">Semester</p>
                                <p>{this.props.review.semester}</p>
                            </div>
                            <div className="col-sm-3 review-datum">
                                <p className="review-title">Professor</p>
                                <p>{this.props.review.professor}</p>
                            </div>
                            <div className="col-sm-3 review-datum">
                                <p className="review-title">Grade Received</p>
                                <p>{this.props.review.gradeReceived}</p>
                            </div>
                            <div className="col-sm-3 col-4 review-timestamp">
                                <p>{moment.unix(this.props.review.timestamp).fromNow()}</p>
                            </div>
                        </div>
                        <div>
                            <p className="review-text">{this.props.review.reviewText}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

interface StarProps {title: string, rating: number}

/** Functional component that renders a set of rating stars **/
const RatingStars = (props: StarProps) => {
    const numHighlighted = Math.ceil(props.rating);
    return (
        <div className="rating-stars">
            <p className="star-title">{props.title}</p>
            <div className="star-row">
                {/* Highlight up to ceil(rating) stars */}
                { [...Array(numHighlighted)].map((_, i) =>
                    <i key={i} className="fas fa-star star-filled"></i>
                )}
                {/* Leave 5 - ceil(rating) stars greyed-out */}
                { [...Array(5 - numHighlighted)].map((_, i) =>
                    <i key={i} className="fas fa-star star-unfilled"></i>
                )}
            </div>
        </div>
    );
};