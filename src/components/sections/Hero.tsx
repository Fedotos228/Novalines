'use client'

import { ArrowRightIcon } from 'lucide-react'
import BackgroundVideo from '../elements/BackgroundVideo'
import Button from '../ui/Button'

export default function Hero() {
    return (
        <section className="w-full h-[660px] relative" id="hero">
            <BackgroundVideo source="/assets/videos/nova.mp4" />
            <div className="flex items-center justify-center h-full flex-col gap-8 px-4">
                <h1 className="text-white text-center">
                    <span className="-left-20 md:block hidden -top-5 absolute font-medium">
                        /**
                    </span>
                    We keep your business moving, so you can focus on what you do best.
                    <span className="-right-20 md:block hidden -bottom-5 absolute font-medium">
                        */
                    </span>
                </h1>

                <Button className="w-60">
                    APPLY NOW
                    <ArrowRightIcon size={22} />
                </Button>
            </div>
        </section>
    )
}
