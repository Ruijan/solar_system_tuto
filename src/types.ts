import React from "react";

export type LectureComponentType = React.LazyExoticComponent<React.FC>;
export type QuestionnaireComponentType = React.LazyExoticComponent<React.FC>;
export type AssignmentComponentType = React.LazyExoticComponent<React.FC>;
export type WeekComponentType = React.LazyExoticComponent<React.FC>;

export interface WeekComponents {
    Week: WeekComponentType;
    lectures: Record<number, LectureComponentType>;
    questionnaires: Record<number, QuestionnaireComponentType>;
    assignment: AssignmentComponentType;
}
