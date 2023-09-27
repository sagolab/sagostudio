import Link from "next/link"
import { allLegals } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { formatDate } from "@/lib/utils"
import { DocsPageHeader } from "@/components/page-header"

export const metadata = {
  title: "Legal",
  description:
    "Our Policies and Terms",
}

export default function LegalPage() {
  const legal = allLegals
    .filter((legal) => legal.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <div className="py-6 lg:py-10">
      <DocsPageHeader
        heading="Legal Matters"
        text="Our Policies and Terms"
      />
      {legal?.length ? (
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {legal.map((legal) => (
            <article
              key={legal._id}
              className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              {legal.featured && (
                <span className="absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-medium">
                  Featured
                </span>
              )}
              <div className="flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-medium tracking-tight">
                    {legal.title}
                  </h2>
                  {legal.description && (
                    <p className="text-muted-foreground">{legal.description}</p>
                  )}
                </div>
                {legal.date && (
                  <p className="text-sm text-muted-foreground">
                    {formatDate(legal.date)}
                  </p>
                )}
              </div>
              <Link href={legal.slug} className="absolute inset-0">
                <span className="sr-only">View</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No Legal published.</p>
      )}
    </div>
  )
}
