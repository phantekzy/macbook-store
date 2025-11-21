/* Import section */
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useMediaQuery } from "react-responsive"

/* Showcase component */
export function Showcase() {
    /* Resolution detection */
    const isTablet = useMediaQuery({ query: '(max-width : 1024px)' })
    /* GSAP section */
    useGSAP(() => {
        if (!isTablet) {
            /* Timeline section */
            const timeLine = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true,
                }
            })

            /* Calling the timeLine */
            timeLine.to('.mask img', {
                transform: 'scale(1.1)',
            }).to('.content', {
                opacity: 1,
                y: 0,
                ease: 'power1.in',
            })
        }
    }, [isTablet])
    /* Showcase section */
    return <section id='showcase'>
        <div className="media">
            {/* Video section */}
            <video src="/videos/game.mp4" autoPlay loop muted playsInline />
            <div className="mask">
                {/* Mask section */}
                <img src="/mask-logo.svg" />
            </div>
        </div>
        {/* Content section */}
        <div className="content">
            {/* Wrapper section */}
            <div className="wrapper">
                <div className="lg:max-w-md">
                    {/* Title section */}
                    <h2>Where Performance Becomes Art</h2>

                    {/* Descriptions and infos */}
                    <div className="space-y-5 mt-7 pe-10">
                        <p>
                            M4 Chip: {" "}
                            <span
                                className="text-white">
                                The New Benchmark
                            </span>
                            {" "}of portable Power
                        </p>

                        <p> From 3D rendering to high-frame gaming, the M4 chip boosts every task,
                            setting a new performance standard
                        </p>

                        <p> With advanced neural capabilities, the M4 accelerates AI-driven tasks,
                            making editing and automation faster and smarter.
                        </p>

                        <p className="text-primary"> Explore the technology inside M4 → </p>
                    </div>
                </div>

                {/* Performance section */}
                <div className="max-w-3xs space-y-14">
                    {/* First section */}
                    <div className="space-y-2">
                        <h3>4× acceleration</h3>
                        <p>in advanced rendering workflows</p>
                        {/* Second section */}
                        <div className="space-y-2">
                            <h3>1.5× higher speed</h3>
                            <p>with next-generation CPU performance</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
