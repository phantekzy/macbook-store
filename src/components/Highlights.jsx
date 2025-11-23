/* Import section */
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useMediaQuery } from "react-responsive"
/* Highlights component */
export function Highlights() {
    const isMobile = useMediaQuery({ query: '(max-width : 1024px)' })
    /* GSAP */
    useGSAP(() => {
        gsap.to(['.left-column', '.right-column'], {
            scrollTrigger: {
                trigger: '#highlights',
                start: isMobile ? 'bottom bottom' : 'top top',
            },
            y: 0,
            opacity: 1,
            stagger: 0.5,
            duration: 1,
            ease: 'power1.inOut',
        })
    })
    return (
        <section id='highlights'>
            {/* Titles section */}
            <h2>Experience the Upgrade You Deserve</h2>
            <h3>Discover What’s Possible with the MacBook Pro</h3>
            {/* Grid section */}
            <div className="masonry">
                {/* Left side */}
                <div className="left-column">
                    <div>
                        <img src="/laptop.png" />
                        <p>From Heavy Workloads to Done in Seconds</p>
                    </div>
                    <div>
                        <img src="/sun.png" />
                        <p>Every Pixel, Perfect: Liquid Retina XDR</p>
                    </div>
                </div>
                {/* Right side */}
                <div className="right-column">
                    <div className="apple-gradient">
                        <img src="/ai.png" />
                        <p>Optimized from the Core for <span>Apple Intelligence</span></p>
                    </div>
                    <div>
                        <img src="/battery.png" />
                        <p>
                            A Battery That Goes Beyond:
                            <span className="green-gradient">{' '}4 Extra Hours,{' '}</span>
                            <span className="text-dark-100">{' '}21 Hours Total</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )

}
