import React, { useState, useEffect, useCallback } from 'react'

type Props = {
  sectionRef: React.Ref<any> | any,
}

const Menu = ({ sectionRef }: Props) => {
  const [showMenu, setShowMenu] = useState<boolean>();

  const handleScroll = useCallback(() => {
    const currentPagePosition = window.pageYOffset;
    const postSectionPosition = sectionRef.current.offsetTop;

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
    ? <h1>Hello</h1>
    : null
}

export default Menu;
