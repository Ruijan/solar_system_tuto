// src/routesConfig.ts
import FrontPage from './components/FrontPage';
import React, { Suspense }  from "react";
import {
    LectureComponentType,
    WeekComponents,
} from "./types";


function createLectureImport(week: number, lecture: number): React.LazyExoticComponent<React.FC> {
    return React.lazy(() => import(`./components/weeks/week${week}/Lecture${lecture}`));
}

function createAllLectureImports(week: number): Record<number, React.LazyExoticComponent<React.FC>> {
    return {
        1: createLectureImport(week, 1),
        2: createLectureImport(week, 2),
        3: createLectureImport(week, 3),
    };
}

function createQuestionnaireImport(week: number, lecture: number): React.LazyExoticComponent<React.FC> {
    return React.lazy(() => import(`./components/weeks/week${week}/Lecture${lecture}Questionnaire`));
}

function createAllQuestionnaireImports(week: number): Record<number, React.LazyExoticComponent<React.FC>>{
    return {
        1: createQuestionnaireImport(week, 1),
        2: createQuestionnaireImport(week, 2),
        3: createQuestionnaireImport(week, 3),
    }
}

function createAssignmentInstructionsImport(week: number): React.LazyExoticComponent<React.FC> {
    return React.lazy(() => import(`./components/weeks/week${week}/AssignmentInstructions`));
}

function createWeekImport(week: number): React.LazyExoticComponent<React.FC> {
    return React.lazy(() => import(`./components/weeks/week${week}/Week${week}`));
}

function createAllWeekImports(week: number): WeekComponents {
    return {
        Week: createWeekImport(week),
        lectures: createAllLectureImports(week),
        questionnaires: createAllQuestionnaireImports(week),
        assignment: createAssignmentInstructionsImport(week),
    };
}

const weekComponents: Record<number, WeekComponents> = {};
for (let i = 1; i <= 14; i++) {
    weekComponents[i] = createAllWeekImports(i);
}

export const generateRoutes = () => {
    const routes = [
        { path: '/', element: <FrontPage /> },
    ];

    Object.entries(weekComponents).forEach(([weekNumber, { Week, lectures, questionnaires, assignment }]) => {
        routes.push({ path: `/week${weekNumber}`, element: (
                <Suspense fallback={<div>Loading...</div>}>
            <Week />
            </Suspense>
        )});

        Object.entries(lectures).forEach(([lectureNumber, Lecture]: [string, LectureComponentType]) => {
            routes.push({ path: `/week${weekNumber}/lecture${lectureNumber}`, element: (
                    <Suspense fallback={<div>Loading...</div>}>
                <Lecture />
                </Suspense>
            )});
            routes.push({ path: `/week${weekNumber}/lecture${lectureNumber}/questionnaire`, element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        {React.createElement(questionnaires[parseInt(lectureNumber)])}
                </Suspense>
            )});
        });

        routes.push({ path: `/week${weekNumber}/assignment/instructions`, element: (
                <Suspense fallback={<div>Loading...</div>}>
                    {React.createElement(assignment)}
            </Suspense>
        )});
    });

    return routes;
};
