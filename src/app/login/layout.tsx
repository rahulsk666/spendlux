import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login - Spendlux',
  description: 'Sign in to your Spendlux account',
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 