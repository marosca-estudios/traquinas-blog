import styled from 'styled-components'
import theme from 'global/theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 5rem;
  margin-bottom: 2rem;
`

export const Card = styled.div`
  display: flex;
  min-width: 5rem;
  min-height: 3.5rem;

  align-items: center;
  padding: 0 2rem;
  color: ${theme.colors.BLACK};
  background: ${theme.colors.PRIMARY_LIGHT};
`

export const LeftRibbon = styled.div`
	width: 0;
	height: 0;
	border-top: 25px solid ${theme.colors.PRIMARY_LIGHT};
	border-left: 25px solid transparent;
	border-bottom: 25px solid ${theme.colors.PRIMARY_LIGHT};
`

export const RightRibbon = styled.div`
	width: 0;
	height: 0;
	border-top: 25px solid ${theme.colors.PRIMARY_LIGHT};
	border-right: 25px solid transparent;
	border-bottom: 25px solid ${theme.colors.PRIMARY_LIGHT};
`
