// Import section
import { useEffect, useRef } from "react"
// Hero component section
export function Hero() {
    // useRef hook
    const videoRef = useRef()
    // useEffect
    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 2
    }, [])
    return (
        < section id="hero" >
            {/* Title section */}
            < div >
                <h1>MacBook Pro</h1>
                <img src="/title.png" alt="Macbook title" />
            </div>
            {/* Video section */}
            < video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />
            <button>Order Now</button>
            <p>Starting at 350,000DA </p>
        </section >
    )
}
