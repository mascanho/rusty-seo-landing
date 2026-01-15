
'use client'

import { Center } from '@chakra-ui/react'
import { Auth } from '@saas-ui/auth'
import { Link } from '@saas-ui/react'
import { BackgroundGradient } from 'components/gradients/background-gradient'
import { PageTransition } from 'components/motion/page-transition'
import { Section } from 'components/section'
import { FaGithub, FaGoogle } from 'react-icons/fa'

const providers = {
    google: {
        name: 'Google',
        icon: FaGoogle,
    },
    github: {
        name: 'Github',
        icon: FaGithub,
        variant: 'solid',
    },
}

export default function Login() {
    return (
        <Section height="calc(100vh - 200px)" innerWidth="container.sm">
            <BackgroundGradient zIndex="-1" />

            <Center height="100%" pt="20">
                <PageTransition width="100%">
                    <Auth
                        view="login"
                        providers={providers}
                        signupLink={<Link href="/signup">Sign up</Link>}
                    />
                </PageTransition>
            </Center>
        </Section>
    )
}
