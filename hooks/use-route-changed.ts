'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

const useRouteChanged = (fn: () => void) => {
  const pathname = usePathname()
  const savedPathname = useRef(pathname)

  useEffect(() => {
    if (savedPathname.current !== pathname) {
      fn()
      console.log('App is changing to: ', pathname)
      savedPathname.current = pathname
    }
  }, [pathname, fn])
}

export default useRouteChanged
