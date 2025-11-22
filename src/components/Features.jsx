/* Import section */
import { Canvas } from "@react-three/fiber";
import { StudioLights } from "./three/StudioLights";
import { features, featureSequence } from "../constants";
import clsx from "clsx";
import { Suspense, useEffect, useRef } from "react";
import { Html } from "@react-three/drei";
import MacbookModel from "./models/Macbook";
import { useMediaQuery } from "react-responsive";
import { useMacStore } from "../store";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

/* Model scrolling section */
function ModelScroll() {
    /* useRef */
    const groupRef = useRef(null)
    /* MediaQuery */
    const isMobile = useMediaQuery({ query: '(max-width : 1024px)' })
    /* Texture */
    const { setTexture } = useMacStore()
    /* Preload all the feature videos */
    useEffect(() => {
        featureSequence.forEach((feature) => {
            /* Virtual video memory */
            const virtual = document.createElement('video')
            /* Assign to object */
            Object.assign(virtual, {
                src: feature.videoPath,
                muted: true,
                playsInline: true,
                preload: 'auto',
                crossOrigin: 'anonymous',
            })
            virtual.load()
        })
    }, [])
    /* GSAP section for animations */
    useGSAP(() => {
        /* Model rotation */
        // Timeline 
        const modelTL = gsap.timeline({
            scrollTrigger: {
                trigger: '#f-canvas',
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
                pin: true,
            }

        })
        // Sync the timeline
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#f-canvas',
                start: 'top center',
                end: 'bottom top',
                scrub: 1,
            }
        })
        // Model spin
        if (groupRef.current) {
            modelTL.to(groupRef.current.rotation, {
                y: Math.PI * 2,
                ease: 'power1.inOut',
            })
        }
        /* Text and model sync */
        timeline
            // Box 1
            .call(() => setTexture('/videos/feature-1.mp4'))
            .to('.box1', { opacity: 1, y: 0, delay: 1 })
            // Box 2
            .call(() => setTexture('/videos/feature-2.mp4'))
            .to('.box2', { opacity: 1, y: 0 })
            // Box 3
            .call(() => setTexture('/videos/feature-3.mp4'))
            .to('.box3', { opacity: 1, y: 0 })
            // Box 4
            .call(() => setTexture('/videos/feature-4.mp4'))
            .to('.box4', { opacity: 1, y: 0 })
            // Box 4
            .call(() => setTexture('/videos/feature-5.mp4'))
            .to('.box5', { opacity: 1, y: 0 })
    }, [])
    return (
        <group ref={groupRef}>
            <Suspense fallback={<Html><h1 className="text-white text-3xl uppercase">Rendering the Mac..</h1></Html>}>
                <MacbookModel
                    scale={isMobile ? 0.05 : 0.08}
                    position={[0, -1, 0]}
                />
            </Suspense>
        </group>
    )
}
/* Features component */
export function Features() {
    return (
        <section id='features'>
            {/* Title section */}
            <h2>See Every Detail, Feel Every Frame</h2>

            {/* Canvas section */}
            <Canvas
                id='f-canvas'
                camera={{}}
            >
                {/* Lighting section */}
                <StudioLights />
                {/* Ambient lights */}
                <ambientLight
                    intensity={0.5}
                />
                {/* Macbook model */}
                <ModelScroll />
            </Canvas>
            {/* List of features */}
            <div className="absolute inset-0">
                {features.map((feature, key) => (
                    <div
                        key={key}
                        className={clsx('box', `box${key + 1}`, feature.styles)}
                    >
                        <img src={feature.icon} />
                        <p>
                            <span className="text-white">{feature.highlight}</span>
                            {feature.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
