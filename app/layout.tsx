
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../theme'
import { Providers } from './providers'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Saas UI Landingspage',
    description: 'Free SaaS landingspage starter kit',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href="/static/favicons/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/static/favicons/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/static/favicons/favicon-16x16.png"
                />
                <link rel="manifest" href="/static/favicons/manifest.json" />
            </head>
            <body>
                <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}
