/* Import section */
import { Hero } from "./components/Hero"
import { NavBar } from "./components/NavBar"
import { ProductViewer } from "./components/ProductViewer"
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

