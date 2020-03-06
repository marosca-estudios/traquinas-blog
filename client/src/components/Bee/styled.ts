import styled from 'styled-components'
import { centeredAbsolute } from 'styledComponents/utils'

export const BeeContainer = styled.video`
  display: flex;
  position: absolute;
  pointer-events: none;
  z-index: -1;
  width: 65rem;

  ${centeredAbsolute};
`
