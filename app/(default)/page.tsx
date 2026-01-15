
import { LandingPage } from 'components/landing-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Saas UI Landingspage',
    description: 'Free SaaS landingspage starter kit',
}

export default function Page() {
    return <LandingPage />
}
