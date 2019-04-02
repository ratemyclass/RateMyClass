/** Utility functions for performing grade computations **/


export const GRADE_TO_FLOAT = new Map<string, number>([["A", 95], ["A-", 90], ["B+", 87], ["B", 83], ["B-", 80],
    ["C+", 77], ["C", 75], ["C-", 72]]);

/*
 * Consolidates grade data from a grade mapping into a single distribution
 * @param gradeMap {Map<string, object[]>}
 */
export const consolidateGradeData = (gradeMap: Map<string, object[]>): object[] => {
    let data = [];
    [...gradeMap.entries()].forEach(([_, dist]) => {
        dist.forEach(gradeObj => {
            const found = data.find(d => d['name'] === gradeObj['name']);
            if (!found) {
                data.push({'name': gradeObj['name'], 'count': gradeObj['count']});
            } else {
                found['count'] += gradeObj['count'];
            }
        });
    });
    return data;
};

/**
 * Computes the average letter grade, along with the average numerical score and returns them as a tuple
 * @param grades {object[]}
 */
export const computeAverageGrade = (grades: object[]): [string, number] => {
    const gradeCount = grades.reduce((t, gObj) => t + gObj['count'], 0);
    const meanScore = grades.reduce((t, gObj) => t + GRADE_TO_FLOAT.get(gObj['name']) * gObj['count'], 0) / gradeCount;
    let grade;

    switch (true) {
        case meanScore >= 94:
            grade = "A";
            break;
        case meanScore >= 90:
            grade = "A-";
            break;
        case meanScore >= 87:
            grade = "B+";
            break;
        case meanScore >= 83:
            grade = "B";
            break;
        case meanScore >= 80:
            grade = "B-";
            break;
        case meanScore >= 77:
            grade = "C+";
            break;
        case meanScore >= 75:
            grade = "C";
            break;
        default:
            grade = "C-";
    }
    return [grade, meanScore];
};