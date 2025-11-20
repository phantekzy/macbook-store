/* Import section */
import clsx from "clsx"
import { useMacStore } from "../store"
import { Canvas } from "@react-three/fiber"
import MacbookModel14 from "./models/Macbook-14"
/* ThreeJS imports */
import { StudioLights } from "./three/StudioLights"
import { useMediaQuery } from "react-responsive"
import { ModelSwitcher } from "./three/ModelSwitcher"
/* ProductViewer component */
export function ProductViewer() {
    /* Store section */
    const { color, scale, setColor, setScale } = useMacStore()
    /* React responsive */
    const isMobile = useMediaQuery({ query: '(max-width :1024px)' })
    return (
        <section id="product-viewer">
            {/* Title sectionvi */}
            <h2 className="text-center">Inspect the MacBook Like Never Before</h2>
            {/* Options section */}
            <div className="controls">
                <p className="info">MacBook Pro {scale} {color}</p>
                <div className="flex-center gap-5 mt-5">

                    <div className="color-control">
                        <div
                            onClick={() => setColor('#adb5bd')}
                            className={clsx('bg-neutral-300',
                                color === '#adb5bd' && "active")}
                        />

                        <div
                            onClick={() => setColor('#2e2c2e')}
                            className={clsx('bg-neutral-900',
                                color === '#2e2c2e' && "active")}
                        />
                    </div>

                    <div className="size-control">
                        {/* 14 inch */}
                        <div
                            onClick={() => setScale(0.06)}
                            className={clsx(scale === 0.06
                                ? "bg-white text-black"
                                : "bg-transparent text-white"
                            )}
                        >
                            <p>14"</p>
                        </div>
                        {/* 16 inch */}
                        <div
                            onClick={() => setScale(0.08)}
                            className={clsx(scale === 0.08
                                ? "bg-white text-black"
                                : "bg-transparent text-white"
                            )}
                        >
                            <p>16"</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Canvas 3d rendering */}
            <Canvas
                id="canvas"
                camera={{
                    position: [0, 2, 5],
                    fov: 50,
                    near: 0.1,
                    far: 100,
                }

                }
            >
                {/* Lighting */}
                <StudioLights />
                {/* Enable rotating the model and disabeling zooming */}
                <ModelSwitcher scale={isMobile ? scale - 0.03 : scale} isMobile={isMobile} />
            </Canvas>
        </section>
    )
}
