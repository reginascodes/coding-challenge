# Technical assessment

**This coding challenge is meant to be completed within 2 hours.**

## Assessment

We will be making an assessment based on coding best practices and how you present and explain your work.
Please use this as an opportunity to show how well you understand all aspects of high-quality software development.

In a nutshell, we value:

-   code that is easy to read & understand
-   carefully considered & clean code
-   attention to detail
-   good communication

As a technical challenge, we would like you to complete the following coding challenge that is outlined below.

If you have any questions, please let us know. Good luck! 🍀

# Schedule Pair-Programming Challenge

In this challenge, you will be tasked to **create an algorithm that will automatically schedule a professor's lessons depending on a their availability**.

There is a test script that will be used check the accuracy and robustness of your algorithm afterwards.

This is a **pair-programming exercise**, meaning you, the candidate, will solve the problem while the interviewer guides you. Throughout the challenge, you may be asked to explain your thinking and coding process.

## Requirements

1. In [scheduler.ts](scheduler.ts), your `schedule()` function should receive two arrays, `lessons` and `availabilities`.

    - `lessons` is an array of `Lesson` objects. A `Lesson` has the following required properties:
        - `title` (string)
        - `duration` (number) - a positive whole number that indicates how long the lesson is in minutes
    - `availabilities` is an array of `Availability` objects. An `Availability` has the following required properties:
        - `id` (number) - unique ID of the availability
        - `day` (`Day`) - numbers from 0-6, which indicates the day of the week the professor is available. `0` is for Sunday, `1` is for Monday, `2` is for Tuesday, and so on.
        - `startTime` (string) - indicates the start time of the teacher's availability in 24-hour format (e.g. `"13:00"`).
        - `endTime` (string) - indicates the end time of the teacher's availability in 24-hour format (e.g. `"15:00"`).

2. The output of the algorithm is an array of schedules. There should be a corresponding `Schedule` for each `Availability`. Each `Schedule` should have the following required properties:

    - `availabilityId`: the ID of the availability
    - `lessons` - list of lessons for this specific schedule; it should be left empty if there are no lessons for this schedule.

3. You are required to implement the types `Lesson`, `Availability`, and `Schedule` in [scheduler.ts](scheduler.ts) yourself based on the requirements above above to demonstrate your proficiency in TypeScript. `Day` is already implemented.

4. You are not allowed to install new libraries. You may use the built-in `Date` object in Javascript to process time-related data.

# Example Output

Given the following `lessons`:

```
[
    {
        title: 'JS Basics',
        duration: 90,
    },
    {
        title: 'JS Fundamentals',
        duration: 90,
    },
]
```

and the following `availabilities`:

```
[
    {
        id: 1,
        day: 1,
        startTime: '09:00',
        endTime: '10:00',
    },
    {
        id: 2,
        day: 2,
        startTime: '09:00',
        endTime: '10:00',
    },
    {
        id: 3,
        day: 2,
        startTime: '13:00',
        endTime: '14:00',
    },
]
```

Your algorithm should output the following:

```
[
    {
        "availabilityId": 1,
        "lessons": [
            {
                "title": "JS Basics",
                "duration": 60
            }
        ]
    },
    {
        "availabilityId": 2,
        "lessons": [
            {
                "title": "JS Basics",
                "duration": 30
            },
            {
                "title": "JS Fundamentals",
                "duration": 30
            }
        ]
    },
    {
        "availabilityId": 3,
        "lessons": [
            {
                "title": "JS Fundamentals",
                "duration": 60
            }
        ]
    }
]
```

Note that a single lesson can be scheduled across multiple availabilities.

# Challenge process
## 1. Setup

1. Clone this repository

2. `npm install`

3. `npm test` to run the tests

Together with the interviewer as your guide, implement the code as per the requirements above within the 2-hour time limit.
Good luck! 🍀

