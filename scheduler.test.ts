import Scheduler from "./scheduler";
import {
    lessons1,
    lessons2,
    lessons3,
    lessons5,
    lessons6,
    lessons7,
    availabilities1,
    availabilities2,
    availabilities3,
    availabilities5,
    availabilities6,
    availabilities7,
    schedule1,
    schedule2,
    schedule3,
    schedule4,
    schedule5,
    schedule6,
    schedule7,
} from "./data";

describe("Scheduler challenge tests", () => {
    test("Expect scheduler to schedule a lesson", () => {
        expect(
            new Scheduler(lessons1, availabilities1).schedule()
        ).toMatchObject(schedule1);
    });

    test("Expect scheduler to schedule multiple lessons", () => {
        expect(
            new Scheduler(lessons2, availabilities2).schedule()
        ).toMatchObject(schedule2);
    });

    test("Expect scheduler to break up long lessons into multiple days", () => {
        expect(
            new Scheduler(lessons3, availabilities3).schedule()
        ).toMatchObject(schedule3);
    });

    test("Expect scheduler to accept empty lessons", () => {
        expect(new Scheduler([], availabilities3).schedule()).toMatchObject(
            schedule4
        );
    });

    test("Expect scheduler to accept empty availabilities", () => {
        expect(new Scheduler(lessons1, []).schedule()).toMatchObject([]);
    });

    test("Expect scheduler to output no lessons for some availabilities if there's too much availability", () => {
        expect(
            new Scheduler(lessons5, availabilities5).schedule()
        ).toMatchObject(schedule5);
    });

    test("Expect scheduler to output for some lessons to not be scheduled if there's too little availability", () => {
        expect(
            new Scheduler(lessons6, availabilities6).schedule()
        ).toMatchObject(schedule6);
    });

    test("Expect scheduler to ignore invalid startTime and endTime", () => {
        expect(
            new Scheduler(lessons7, availabilities7).schedule()
        ).toMatchObject(schedule7);
    });
});
