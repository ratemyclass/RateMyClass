/** Defines global Typescript type definitions **/

export interface Review {
    classId: string,
    className: string,
    timestamp: number,
    summary: string,
    professor: string,
    semester: string,
    workloadRating: number,
    professorRating: number,
    learnRating: number,
    difficultyRating: number,
    overallRating: number,
    gradeReceived?: string,
    reviewText: string
}

export interface Professor {
    name: string,
    classes: string[],
    avgRating: number,
    avgGrade: string
}

export interface Course {
    id: string,
    name: string,
    semesters: string[],
    taughtBy: Set<string>,
    avgRating: number,
}

export const sampleReview1 = {
    classId: "CS 589",
    className: "Machine Learning",
    timestamp: 1553551701,
    summary: "Great Class!",
    professor: "Justin Domke",
    semester: "Spring 2019",
    workloadRating: 3.5,
    professorRating: 4.5,
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
    professor: "Marius Minea",
    semester: "Spring 2019",
    workloadRating: 5,
    professorRating: 4,
    learnRating: 3,
    difficultyRating: 5,
    overallRating: 1,
    gradeReceived: "C",
    reviewText: "Horrible Class. One of the world possible electives you could ever take at UMass."
};

export const sampleProf1 = {
    name: "David Mix Barrington",
    classes: ["CS 250", "CS 501", "CS 575"],
    avgRating: 3.4,
    avgGrade: "B"
};

export const sampleProf2 = {
    name: "Tim Richards",
    classes: ["CS 187", "CS 230", "CS 377"],
    avgRating: 4.3,
    avgGrade: "A-"
};

export const sampleProf3 = {
    name: "Marius Minea",
    classes: ["CS 250", "CS 311", "CS 501"],
    avgRating: 3.2,
    avgGrade: "B-"
};

export const sampleProf4 = {
    name: "Arjun Guha",
    classes: ["CS 220"],
    avgRating: 4.1,
    avgGrade: "A-"
};

export const sampleCourse1 = {
    id: "CS 311",
    name: "Introduction to Algorithms",
    semesters: ["Spring 2019", "Fall 2018", "Spring 2018"],
    taughtBy: new Set<string>(["Marius Minea", "David Mix Barrington"]),
    avgRating: 3.45
};

export const sampleCourse2 = {
    id: "CS 575",
    name: "Combinatorics and Graph Theory",
    semesters: ["Fall 2018", "Fall 2016"],
    taughtBy: new Set<string>(["David Mix Barrington"]),
    avgRating: 4
};

export const sampleCourse3 = {
    id: "CS 250",
    name: "Introduction to Computation",
    semesters: ["Spring 2019", "Fall 2018", "Spring 2018"],
    taughtBy: new Set<string>(["Marius Minea", "David Mix Barrington"]),
    avgRating: 2
};

export const sampleCourse4 = {
    id: "CS 220",
    name: "Programming Methodology",
    semesters: ["Spring 2019", "Fall 2017", "Spring 2016"],
    taughtBy: new Set<string>(["Arjun Guha"]),
    avgRating: 5
};

export const sampleCourse5 = {
    id: "CS 501",
    name: "Formal Language Theory",
    semesters: ["Spring 2019", "Spring 2018", "Spring 2017"],
    taughtBy: new Set<string>(["David Mix Barrington"]),
    avgRating: 3
};

export const sampleCourse6 = {
    id: "CS 187",
    name: "Programming With Data Structures",
    semesters: ["Spring 2019", "Fall 2018", "Spring 2018", "Fall 2017", "Spring 2017", "Fall 2016"],
    taughtBy: new Set<string>(["Tim Richards", "David Mix Barrington"]),
    avgRating: 2.3
};

export const sampleCourse7 = {
    id: "CS 230",
    name: "Computer Systems Principles",
    semesters: ["Spring 2019", "Fall 2018", "Spring 2018", "Fall 2016"],
    taughtBy: new Set<string>(["Tim Richards"]),
    avgRating: 3
};

export const sampleCourse8 = {
    id: "CS 377",
    name: "Operating Systems",
    semesters: ["Spring 2019", "Fall 2015"],
    taughtBy: new Set<string>(["Tim Richards"]),
    avgRating: 3
};