export default class TimeFormatter {
    static secondsToMinutesAndSeconds(seconds: number) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        let formattedSting = '';
        if (minutes > 0) {
            formattedSting += `${minutes} min.`;
        }

        if (minutes > 0 && seconds > 0) {
            formattedSting += ' ';
        }

        if (remainingSeconds > 0) {
            formattedSting += `${remainingSeconds} sec.`;
        }

        return formattedSting;
    }
}