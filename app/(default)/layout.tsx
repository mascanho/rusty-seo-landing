
'use client'
import { Layout } from 'components/layout'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    // These props match what _app.tsx + pages used to pass
    // For now, we use a single static definition. 
    // If different pages in (default) need different props, we might need a context or client logic.
    const announcement = {
        title: "Support us by becoming a stargazer! 🚀 ",
        description:
            '<img src="https://img.shields.io/github/stars/saas-js/saas-ui.svg?style=social&label=Star" />',
        href: "https://github.com/saas-js/saas-ui",
    }

    return (
        <Layout
            announcementProps={announcement}
            headerProps={{}}
            footerProps={{}}
        >
            {children}
        </Layout>
    )
}
