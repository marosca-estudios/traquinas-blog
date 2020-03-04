export default (target: any, smoothTime: number = 100): void => {
  const destination = target.current.offsetTop

  window.scrollBy({
    top: destination, left: 0, behavior: 'smooth',
  })

  const isDone = setInterval(() => {
    const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2

    if (atBottom) {
      clearInterval(isDone)
    }
  }, smoothTime)
}
