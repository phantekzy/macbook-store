/* Import section */
import { PresentationControls } from "@react-three/drei"
import { useRef } from "react"
import MacbookModel16 from "../models/Macbook-16"
import MacbookModel14 from "../models/Macbook-14"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
/* Helpers */
const ANIMATION_DURATION = 1
const OFFSET_DISTANCE = 5
/* Utility function */
/* Fade helper */
function fadeMeshes(group, opacity) {
    if (!group) return;
    group.traverse((child) => {
        if (child.isMesh) {
            child.material.transparent = true
            gsap.to(child.material, { opacity, duration: ANIMATION_DURATION })
        }
    })
}
/* Slide helper */
function moveGroup(group, x) {
    if (!group) return;
    gsap.to(group.position, { x, duration: ANIMATION_DURATION })
}

/* Model switcher section */
export function ModelSwitcher({ scale, isMobile }) {
    /* useRef section */
    const smallMacRef = useRef()
    const largMacRef = useRef()
    const showLargMac = scale === 0.08 || scale === 0.05

    /* useGSAP */
    useGSAP(() => {
        if (showLargMac) {
            /* Slide */
            moveGroup(smallMacRef.current, -OFFSET_DISTANCE)
            moveGroup(largMacRef.current, 0)
            /* Fade */
            fadeMeshes(smallMacRef.current, 0)
            fadeMeshes(largMacRef.current, 1)
        } else {
            /* Slide */
            moveGroup(smallMacRef.current, 0)
            moveGroup(largMacRef.current, OFFSET_DISTANCE)
            /* Fade */
            fadeMeshes(smallMacRef.current, 1)
            fadeMeshes(largMacRef.current, 0)
        }

    }, [scale])


    /* Control config */
    const controlsConfig = {
        snap: true,
        speed: 1,
        zoom: 1,
        polar: [-Math.PI, Math.PI],
        config: { mass: 1, tension: 0, friction: 26 }
    }
    return (
        <>
            {/* Macbook16 rendering */}
            <PresentationControls {...controlsConfig}>
                <group ref={largMacRef}>
                    <MacbookModel16
                        scale={isMobile ? 0.05 : 0.08}
                    />
                </group>
            </PresentationControls>

            {/* Macbook14 rendering */}
            <PresentationControls {...controlsConfig}>
                <group ref={smallMacRef}>
                    <MacbookModel14
                        scale={isMobile ? 0.03 : 0.06}
                    />
                </group>
            </PresentationControls>
        </>
    )
}
