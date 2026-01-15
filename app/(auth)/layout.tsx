
'use client'
import { Layout } from 'components/layout'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    // Auth pages (like signup) might hide header but show footer
    // We can default to hiding header for all pages in this group, 
    // or we can make this layout configurable.
    // Based on signup.tsx, header is hidden.
    return (
        <Layout
            announcementProps={undefined as any} // Hide announcement
            headerProps={{ display: 'none' }}
            footerProps={{ borderTopWidth: '1px' }}
        >
            {children}
        </Layout>
    )
}
