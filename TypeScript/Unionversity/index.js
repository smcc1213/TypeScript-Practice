"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const studyGroups_1 = require("./studyGroups");
const courses_1 = require("./courses");
function searchEvents(options) {
    const events = options.eventType === 'courses' ? courses_1.default : studyGroups_1.default;
    return events.filter((event) => {
        if (typeof options.query === 'number') {
            return event.id === options.query;
        }
        if (options.query === 'string') {
            return event.keywords.includes(options.query);
        }
    });
}
let searchResults = [];
searchResults.push(searchEvents({ query: 1, eventType: 'courses' }));
let enrolledEvents = [];
function enroll(event) {
    enrolledEvents.push(event);
}
enroll(searchResults[0]);
console.log(enrolledEvents);
