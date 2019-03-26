/** Defines global Typescript type definitions **/

export interface Review {
    classId: string,
    className: string,
    timestamp: number,
    summary: string,
    teacher: string,
    semester: string,
    workloadRating: number,
    teacherRating: number,
    learnRating: number,
    difficultyRating: number,
    overallRating: number,
    gradeReceived?: string,
    reviewText: string
}

export const sampleReview1 = {
    classId: "CS 589",
    className: "Machine Learning",
    timestamp: 1553551701,
    summary: "Great Class!",
    teacher: "Justin Domke",
    semester: "Spring 2019",
    workloadRating: 3.5,
    teacherRating: 4.5,
    learnRating: 4,
    difficultyRating: 3,
    overallRating: 4,
    gradeReceived: "A",
    reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus dolor et quam vestibulum rutrum. Etiam non tortor consectetur odio accumsan vestibulum sit amet vulputate sem. Aliquam sed quam enim. In at condimentum libero, dictum tincidunt orci. Cras magna mi, ultrices eu viverra at, blandit consequat metus. Pellentesque et feugiat eros. Aenean nec finibus urna. In non lorem lectus. Sed fermentum augue non nisi sagittis feugiat. Quisque et libero ligula. Donec vitae euismod ex, eget mollis nisl. Nam ac velit at ex ullamcorper rhoncus. Nulla eleifend quis ex blandit faucibus. Fusce venenatis mi arcu, et blandit eros pellentesque a. Duis facilisis lectus id quam lobortis, eu gravida justo ornare."
};

export const sampleReview2 = {
    classId: "CS 250",
    className: "Introduction to Computation",
    timestamp: 1552451701,
    summary: "Very Difficult Class",
    teacher: "Marius Minea",
    semester: "Spring 2019",
    workloadRating: 5,
    teacherRating: 4,
    learnRating: 3,
    difficultyRating: 5,
    overallRating: 1,
    gradeReceived: "C",
    reviewText: "Horrible Class. One of the world possible electives you could ever take at UMass."
};