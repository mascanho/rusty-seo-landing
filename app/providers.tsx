
'use client'

import { SaasProvider } from '@saas-ui/react'
import { AuthProvider } from '@saas-ui/auth'
import theme from '../theme'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <SaasProvider theme={theme}>
            <AuthProvider>
                {children}
            </AuthProvider>
        </SaasProvider>
    )
}
