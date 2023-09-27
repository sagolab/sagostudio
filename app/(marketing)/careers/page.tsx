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
            Careers
          </h1>
          <h2 className="font-heading text-7xl sm:text-8xl md:text-8xl lg:text-9xl">
            Join the Sago Studio Team
          </h2>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            At Sago Studio, we&apos;re more than a team; we&apos;re a family of
            innovators, dreamers, and creators. We&apos;re on a mission to
            redefine what&apos;s possible in technology and design, and we need
            your talent and passion to make it happen.
          </p>
        </div>
      </section>
      <section
        id="why"
        className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32"
      >
        <div className="items-left container flex max-w-[84rem] flex-col gap-2 text-left">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Why Sago Studio?
          </h1>
          <div className="max-w-[42rem] pt-6 leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          <li >
            Innovation Driven: We don&apos;t just follow trends; we set them. Be
            part of a team that&apos;s at the forefront of technology and
            design.
          </li>
          <li>
            Diverse and Inclusive: We believe in the power of diversity. Your
            unique perspective and background are valued here.
          </li>
          <li>
            Impactful Work: Your work at Sago Studio directly impacts millions
            of users worldwide. Join us in making a positive change in the
            world.
          </li>
          <li >
            Growth and Learning: We&apos;re committed to your personal and
            professional growth. Continuous learning and development are part of
            our DNA.
          </li>
          <li>
            Work-Life Balance: We know that a happy team is a productive team.
            We offer flexible work arrangements to support your well-being.
          </li>
          </div>
        </div>
      </section>
    </>
  )
}
