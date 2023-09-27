import Image from "next/image"
import Link from "next/link"

import { env } from "@/env.mjs"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default async function IndexPage() {
  
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="items-left container flex max-w-[84rem] flex-col gap-2 text-left">
          <h1 className="font-heading text-3xl opacity-25 sm:text-5xl md:text-6xl lg:text-7xl">
            Products
          </h1>
          <h2 className="font-heading text-7xl sm:text-8xl md:text-8xl lg:text-9xl">
          Functional Meets Gorgeous
          </h2>
          <p className="max-w-[42rem] pt-4 leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Every product we craft is not just user-friendly; it&apos;s a visual masterpiece. We believe in making the complex simple and the beautiful functional.
          </p>
          <div className="flex max-w-[64rem] gap-4 pt-8 ">
            <Link
              href={siteConfig.links.twitter}
              className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
              target="_blank"
            >
              Follow us on X
            </Link>
          </div>
        </div>
      </section>
      

     
    </>
  )
}
