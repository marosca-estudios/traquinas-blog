import React, { useState, useEffect, useCallback } from 'react'
import { Wrapper } from './styled'

type Props = {
  sectionRef: React.Ref<any> | any,
}

const OFFSET = 1.5

const Menu = ({ sectionRef }: Props) => {
  const [showMenu, setShowMenu] = useState<boolean>();

  const handleScroll = useCallback(() => {
    const currentPagePosition = window.pageYOffset;
    const postSectionPosition = sectionRef.current.offsetTop / OFFSET;

    if (currentPagePosition >= postSectionPosition) {
      if (!showMenu) {
        setShowMenu(true)
      }
    } else {
      if (showMenu) {
        setShowMenu(false)
      }
    }
  }, [sectionRef, showMenu])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll])

  return showMenu
    ? <Wrapper showMenu={showMenu}>
        Hello
    </Wrapper>
    : null
}

export default Menu;
