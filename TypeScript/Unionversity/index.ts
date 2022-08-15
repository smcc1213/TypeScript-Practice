import studyGroups from "./studyGroups"
import courses from "./courses"

type Course = {
    id: number;
    studyGroupId: number, 
    title: string,
    keywords: string[],
    eventType: string
}

type StudyGroup = {
    id: number;
    courseId: number, 
    title: string,
    keywords: string[],
    eventType: string
}

type SearchEventsOptions = {
    query: string | number,
    eventType: number | string
}

function searchEvents(options: SearchEventsOptions) {
    const events: (Course | StudyGroup)[] = options.eventType === 'courses' ? courses : studyGroups;

    return events.filter((event: Course | StudyGroup) => {
        if (typeof options.query === 'number') {
            return event.id === options.query;
        }
        if (options.query === 'string') {
            return event.keywords.includes(options.query);
        }
    });
}


let searchResults = []; 

searchResults.push(searchEvents({query: 1, eventType: 'courses'}));

let enrolledEvents: (Course| StudyGroup)[] = [];

function enroll(event: Course | StudyGroup){
    enrolledEvents.push(event);
}



enroll(searchResults[0]);

console.log(enrolledEvents);





