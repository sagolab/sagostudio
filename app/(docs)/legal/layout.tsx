interface LegalLayoutProps {
  children: React.ReactNode
}

export default function LegalLayout({ children }: LegalLayoutProps) {
  return <div className="mx-auto max-w-5xl">{children}</div>
}
