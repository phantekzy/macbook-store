/* Import section */
import { Hero } from "./components/Hero"
import { NavBar } from "./components/NavBar"
import { ProductViewer } from "./components/ProductViewer"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { Showcase } from "./components/Showcase"
import { Performance } from "./components/Performance"
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
            {/* Showcase section */}
            <Showcase />
            {/* Performance section */}
            <Performance />
        </main>
    )
}
/* Export section */
export default App

