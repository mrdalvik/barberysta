function secondsToMinutesAndSeconds (seconds: number): string {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  let minutesAndSecondsText = ''
  if (minutes > 0) {
    minutesAndSecondsText += `${minutes} min.`
  }

  if (minutes > 0 && seconds > 0) {
    minutesAndSecondsText += ' '
  }

  if (remainingSeconds > 0) {
    minutesAndSecondsText += `${remainingSeconds} sec.`
  }

  return minutesAndSecondsText
}

export {
  secondsToMinutesAndSeconds
}
