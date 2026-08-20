'use client'
import { StickyScroll } from "./ui/sticky-scroll-reveal"
import musicContent from '@/data/why_choose_us.json'

const WhyChoosUs = () => {
  return (
    <div>
        <StickyScroll content={musicContent} />
    </div>
  )
}

export default WhyChoosUs