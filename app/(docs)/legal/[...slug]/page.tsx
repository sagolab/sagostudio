import Link from "next/link"
import { notFound } from "next/navigation"
import { allLegals } from "contentlayer/generated"

import { getTableOfContents } from "@/lib/toc"
import { Icons } from "@/components/icons"
import { Mdx } from "@/components/mdx-components"
import { DocsPageHeader } from "@/components/page-header"
import { DashboardTableOfContents } from "@/components/toc"

import "@/styles/mdx.css"
import { Metadata } from "next"

import { env } from "@/env.mjs"
import { absoluteUrl, cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface LegalPageProps {
  params: {
    slug: string[]
  }
}

async function getLegalFromParams(params) {
  const slug = params?.slug?.join("/")
  const legal = allLegals.find((legal) => legal.slugAsParams === slug)

  if (!legal) {
    null
  }

  return legal
}

export async function generateMetadata({
  params,
}: LegalPageProps): Promise<Metadata> {
  const legal = await getLegalFromParams(params)

  if (!legal) {
    return {}
  }

  const url = env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set("heading", legal.title)
  ogUrl.searchParams.set("type", "Legal")
  ogUrl.searchParams.set("mode", "dark")

  return {
    title: legal.title,
    description: legal.description,
    openGraph: {
      title: legal.title,
      description: legal.description,
      type: "article",
      url: absoluteUrl(legal.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: legal.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: legal.title,
      description: legal.description,
      images: [ogUrl.toString()],
    },
  }
}

export async function generateStaticParams(): Promise<
  LegalPageProps["params"][]
> {
  return allLegals.map((legal) => ({
    slug: legal.slugAsParams.split("/"),
  }))
}

export default async function LegalPage({ params }: LegalPageProps) {
  const legal = await getLegalFromParams(params)

  if (!legal) {
    notFound()
  }

  const toc = await getTableOfContents(legal.body.raw)

  return (
    <main className="relative py-6 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 lg:py-10 xl:gap-20">
      <div>
        <DocsPageHeader heading={legal.title} text={legal.description} />
        <Mdx code={legal.body.code} />
        <hr className="my-4" />
        <div className="flex justify-center py-6 lg:py-10">
          <Link
            href="/legal"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            <Icons.chevronLeft className="mr-2 h-4 w-4" />
            See all legals
          </Link>
        </div>
      </div>
      <div className="hidden text-sm lg:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          <DashboardTableOfContents toc={toc} />
        </div>
      </div>
    </main>
  )
}
