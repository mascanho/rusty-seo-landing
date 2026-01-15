
import { useEffect, useRef } from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import gsap from 'gsap'

export const FloatingParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const particleColor = useColorModeValue('purple.500', 'purple.200')

  useEffect(() => {
    if (!containerRef.current) return

    const particles = containerRef.current.children
    
    Array.from(particles).forEach((particle) => {
      gsap.to(particle, {
        x: 'random(-50, 50)',
        y: 'random(-50, 50)',
        duration: 'random(5, 10)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        rotation: 'random(0, 360)',
        scale: 'random(0.8, 1.2)',
        opacity: 'random(0.2, 0.6)',
      })
    })
  }, [])

  return (
    <Box position="absolute" top="0" left="0" width="100%" height="100%" overflow="hidden" zIndex="0" ref={containerRef} pointerEvents="none">
       {[...Array(15)].map((_, i) => (
         <Box
           key={i}
           position="absolute"
           left={`${Math.random() * 100}%`}
           top={`${Math.random() * 100}%`}
           width={`${Math.random() * 15 + 5}px`}
           height={`${Math.random() * 15 + 5}px`}
           bg={particleColor}
           opacity={Math.random() * 0.4 + 0.1}
           borderRadius="full"
           filter="blur(8px)"
         />
       ))}
    </Box>
  )
}
