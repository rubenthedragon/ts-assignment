
export function Stopwatch(){
    let timeStart: number = new Date().getTime();

    return {
        get time(){
            let minutesCount: number = 0;
            let totalSeconds: number = Math.ceil((new Date().getTime() - timeStart) / 1000);
            while(totalSeconds > 60){
                minutesCount++;
                totalSeconds-=60;
            }
            return minutesCount + "." + totalSeconds;
        }
    }
}