
import { useEffect, useRef } from 'react'
import { Box, Image } from '@chakra-ui/react'
import gsap from 'gsap'

const images = [
    "/static/screenshots/dashboard.png",
    "/static/screenshots/list.png",
    "/static/screenshots/billing.png",
]

export const HeroImageShowcase = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return
        const cards = containerRef.current.children

        // Initial State
        gsap.set(cards, {
            opacity: 0,
            y: 100,
            scale: 0.9,
        })

        // Entry Animation
        gsap.to(cards, {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.2,
            duration: 1.2,
            ease: "power3.out",
            onComplete: () => {
                // Floating Animation loop
                Array.from(cards).forEach((card, index) => {
                    gsap.to(card, {
                        y: 'random(-15, 15)',
                        duration: 2 + index, // varied duration
                        repeat: -1,
                        yoyo: true,
                        ease: 'sine.inOut',
                    })
                })
            }
        })

        // Tilt effect on mouse move (Parallax)
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e
            const xPos = (clientX / window.innerWidth - 0.5) * 20
            const yPos = (clientY / window.innerHeight - 0.5) * 20

            gsap.to(cards, {
                rotationY: xPos,
                rotationX: -yPos,
                stagger: 0.05,
                duration: 0.5,
                ease: 'power2.out'
            })
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }

    }, [])

    return (
        <Box
            ref={containerRef}
            position="relative"
            width="1200px" // Adjusted to match the previous image width context roughly
            height="600px"
            sx={{ perspective: "1500px" }}
        >
            {images.map((src, i) => (
                <Box
                    key={i}
                    position="absolute"
                    top={i === 0 ? "50px" : i === 1 ? "150px" : "-20px"}
                    left={i === 0 ? "50px" : i === 1 ? "250px" : "150px"}
                    zIndex={i === 0 ? 3 : i === 1 ? 2 : 1}
                    width="700px"
                    borderRadius="2xl"
                    overflow="hidden"
                    boxShadow="2xl"
                    borderWidth="1px"
                    borderColor="whiteAlpha.200"
                    _dark={{ borderColor: "whiteAlpha.100" }}
                    bg="gray.800"
                >
                    <Image src={src} alt={`App Screenshot ${i + 1}`} w="100%" h="auto" />
                </Box>
            ))}
        </Box>
    )
}
