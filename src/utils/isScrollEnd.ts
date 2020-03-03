const END_OFFSET = 10

export default (event: any): boolean => {
  const height = Math.max(event.clientHeight, window.innerHeight)

  return event.scrollHeight - event.scrollTop <= height + END_OFFSET
}
