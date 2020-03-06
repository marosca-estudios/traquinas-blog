import React from 'react'
import { Wrapper, Loader, Circular, Path } from './styled'

const Spinner = ({ ...props }: {}) => (
  <Wrapper {...props}>
    <Loader>
      <Circular viewBox="25 25 50 50">
        <Path
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth="4"
          strokeMiterlimit="10"
          {...props}
        />
      </Circular>
    </Loader>
  </Wrapper>
)

export default Spinner
