/* Import section */
import { useMediaQuery } from "react-responsive";
import { performanceImages, performanceImgPositions } from "../constants";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
/* Performance component */
export function Performance() {
    /* Get resolution */
    const sectionRef = useRef(null)
    /* GSAP */
    useGSAP(() => {
        const sectionEl = sectionRef.current
        if (!sectionEl) return
        /* Text animation */
        gsap.fromTo(
            ".content p",
            { opacity: 0, y: 10 },
            {
                opacity: 1,
                y: 0,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: ".content p",
                    start: "top bottom",
                    end: "top center",
                    scrub: true,
                    invalidateOnRefresh: true
                }
            }
        )
        /* Images animation */
        const tl = gsap.timeline({
            defaults: { duration: 2, ease: "power1.inOut", overwrite: "auto" },
            scrollTrigger: {
                trigger: sectionEl,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
                invalidateOnRefresh: true,
            }
        })
        /* Positioning each image */
        performanceImgPositions.forEach((item) => {
            if (item.id === 'p5') return
            const selector = `.${item.id}`
            const vars = {}

            if (typeof item.left === "number") vars.left = `${item.left}%`;
            if (typeof item.right === "number") vars.right = `${item.right}%`;
            if (typeof item.bottom === "number") vars.bottom = `${item.bottom}%`;
            if (item.transform) vars.transform = item.transform;

            tl.to(selector, vars, 0)
        })
    },
        /* Dependencies and scoop */
        { scope: sectionRef }
    )
    /* Return section */
    return (
        <section id='performance' ref={sectionRef}>
            {/* Title section */}
            <h2>
                Turn Up the Graphics. Turn On the Game.
            </h2>
            {/* Wrapper section */}
            {/* images section */}
            <div className="wrapper">
                {performanceImages.map(image => (
                    <img
                        key={image.id}
                        src={image.src}
                        className={image.id}
                    />
                ))}
            </div>
            {/* Content section */}
            <div className="content">
                <p className="text-white">
                    Experience a new level of visual fidelity with our latest graphics engine.
                    Every frame is rendered with stunning clarity and fluid motion, enhanced by advanced lighting and textures.
                    A powerful performance boost elevates every scene, delivering sharper, smoother, and more immersive visuals that bring your games and content to life.
                </p>

            </div>

        </section>
    )
}
