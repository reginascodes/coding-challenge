import { Availability, Lesson, Schedule } from "./scheduler";

export const lessons1: Lesson[] = [
    {
        title: "JS Basics",
        duration: 120,
    },
];

export const availabilities1: Availability[] = [
    {
        id: 1,
        day: 1,
        startTime: "13:00",
        endTime: "16:00",
    },
];

export const schedule1: Schedule[] = [
    {
        availabilityId: 1,
        lessons: [
            {
                duration: 120,
                title: "JS Basics",
            },
        ],
    },
];

export const lessons2: Lesson[] = [
    {
        title: "JS Basics",
        duration: 120,
    },
    {
        title: "JS Fundamentals",
        duration: 60,
    },
];

export const availabilities2: Availability[] = [
    {
        id: 1,
        day: 1,
        startTime: "9:00",
        endTime: "12:00",
    },
];

export const schedule2: Schedule[] = [
    {
        availabilityId: 1,
        lessons: [
            {
                duration: 120,
                title: "JS Basics",
            },
            {
                duration: 60,
                title: "JS Fundamentals",
            },
        ],
    },
];

export const lessons3: Lesson[] = [
    {
        title: "JS Basics",
        duration: 90,
    },
    {
        title: "JS Fundamentals",
        duration: 90,
    },
];

export const availabilities3: Availability[] = [
    {
        id: 1,
        day: 1,
        startTime: "09:00",
        endTime: "10:00",
    },
    {
        id: 2,
        day: 2,
        startTime: "09:00",
        endTime: "10:00",
    },
    {
        id: 3,
        day: 2,
        startTime: "13:00",
        endTime: "14:00",
    },
];

export const schedule3: Schedule[] = [
    {
        availabilityId: 1,
        lessons: [
            {
                title: "JS Basics",
                duration: 60,
            },
        ],
    },
    {
        availabilityId: 2,
        lessons: [
            {
                title: "JS Basics",
                duration: 30,
            },
            {
                title: "JS Fundamentals",
                duration: 30,
            },
        ],
    },
    {
        availabilityId: 3,
        lessons: [
            {
                title: "JS Fundamentals",
                duration: 60,
            },
        ],
    },
];

export const schedule4: Schedule[] = [
    {
        availabilityId: 1,
        lessons: [],
    },
    {
        availabilityId: 2,
        lessons: [],
    },
    {
        availabilityId: 3,
        lessons: [],
    },
];

export const lessons5: Lesson[] = [
    {
        title: "JS Basics",
        duration: 20,
    },
];

export const availabilities5: Availability[] = [
    {
        id: 1,
        day: 1,
        startTime: "11:00",
        endTime: "12:00",
    },
    {
        id: 2,
        day: 2,
        startTime: "11:00",
        endTime: "12:00",
    },
];

export const schedule5: Schedule[] = [
    {
        availabilityId: 1,
        lessons: [
            {
                title: "JS Basics",
                duration: 20,
            },
        ],
    },
    {
        availabilityId: 2,
        lessons: [],
    },
];

export const lessons6: Lesson[] = [
    {
        title: "JS Basics",
        duration: 60,
    },
    {
        title: "JS Foundations",
        duration: 60,
    },
];

export const availabilities6: Availability[] = [
    {
        id: 1,
        day: 1,
        startTime: "11:00",
        endTime: "12:00",
    },
];

export const schedule6: Schedule[] = [
    {
        availabilityId: 1,
        lessons: [
            {
                duration: 60,
                title: "JS Basics",
            },
        ],
    },
];

export const lessons7: Lesson[] = [
    {
        title: "JS Basics",
        duration: 60,
    },
];

export const availabilities7: Availability[] = [
    {
        id: 1,
        day: 1,
        startTime: "11:00",
        endTime: "10:00",
    },
];

export const schedule7: Schedule[] = [
    {
        availabilityId: 1,
        lessons: [],
    },
];
