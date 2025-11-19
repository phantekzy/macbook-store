/* Import section */
import { Hero } from "./components/Hero"
import { NavBar } from "./components/NavBar"
import { ProductViewer } from "./components/ProductViewer"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

/* Register the Plugins */
gsap.registerPlugin(ScrollTrigger)
/* App function component */
function App() {
    return (
        <main>
            {/* Navigation bar */}
            <NavBar />
            {/* Hero section */}
            <Hero />
            {/* ProductViewer section */}
            <ProductViewer />
        </main>
    )
}
/* Export section */
export default App

