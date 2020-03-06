import config from 'global/config'

const { breakpoints } = config
const { keys, values } = Object

type Mq = {
  desktop: string,
  mobileLanding: string,
  mobile: string,
}

  // @ts-ignore
const mediaQuery = (direction: 'min' | 'max'): Mq => values(breakpoints)
  .reduce(
    (prev, cur, index) => ({ ...prev, [keys(breakpoints)[index]]: `@media (${direction}-width: ${cur}px)` }),
    {}
  )

export const mqMax = mediaQuery('max')
export const mqMin = mediaQuery('min')
