type Day = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type Lesson = {
    title: string,
    duration: number,
};

export type Availability = {
    id: number,
    day: Day,
    startTime: string,
    endTime: string
};

export type Schedule = {
    availabilityId: number,
    lessons: Lesson[],
};

class Scheduler {
    lessons: Lesson[]
    availabilities: Availability[]

    getDurationInMins(start:string, end: string) {
        // add arbitrary date to use Date functions
        const startSeconds:number = new Date().getTime() - new Date('March 27, 1999 ' + start).getTime();
        const endSeconds:number = new Date().getTime() - new Date('March 27, 1999 ' + end).getTime();

        // startDate - endDate since startDate.getTime() has more seconds
        const duration:number = (startSeconds - endSeconds) / 60000
        return duration
    }
    
    constructor(lessons: Lesson[], availabilities: Availability[]) {
        this.lessons = lessons
        this.availabilities = availabilities
    }

    schedule(): Schedule[] {
        // TODO implement algorithm for scheduling here
        var scheduleArr : Schedule[] = [] // schedule output

        // initialize tracker for remaining availability time
        // use availabilityID as index
        var remainingAvail : number[] = []
        for (var e of this.availabilities) {
            remainingAvail[e.id] = this.getDurationInMins(e.startTime, e.endTime)
        }
        
        for(var avail of this.availabilities) {

            // initialize Schedule output
            var schedItem:Schedule = {
                availabilityId: avail.id,
                lessons:[]
            }

            // skip condition: invalid time
            // insert empty lessons
            if(remainingAvail[avail.id] < 0 ){
                scheduleArr.push(schedItem)
                continue;
            }
            
            for(var lesson of this.lessons) {
                
                // skip conditions: no more availability, no more lesson
                if(remainingAvail[avail.id] <= 0 || lesson.duration <= 0) continue

                var availDuration:number = remainingAvail[avail.id]

                // lessonDuration > availDuration
                if(lesson.duration >= availDuration) {
                    // lessonDuration is lessened
                    lesson.duration -= availDuration

                    // schedule is finalized
                    schedItem.availabilityId = avail.id
                    schedItem.lessons.push(
                        {
                            title: lesson.title,
                            duration: remainingAvail[avail.id]
                        }  
                    )

                    // availDuration is 0
                    remainingAvail[avail.id] = 0
                } else {
                    // availDuration > lessonDuration

                    // availDuration is lessened
                    remainingAvail[avail.id] -= lesson.duration

                    // lesson is only added to schedItem
                    schedItem.availabilityId = avail.id
                    schedItem.lessons.push(
                        {
                            title: lesson.title,
                            duration: lesson.duration
                        }  
                    )

                    // no more available lesson
                    lesson.duration = 0
                }
            }
            scheduleArr.push(schedItem)
        }
        return scheduleArr;
    }
}

export default Scheduler;
