/* Import section */
import { Hero } from "./components/Hero"
import { NavBar } from "./components/NavBar"
/* App function component */
function App() {
    return (
        <main>
            {/* Navigation bar */}
            <NavBar />
            {/* Hero section */}
            <Hero />
        </main>
    )
}
/* Export section */
export default App

