/* Import section */
import { Environment, Lightformer } from "@react-three/drei";

/* Lighting section */
export function StudioLights() {
    return (
        <group name="lights">
            <Environment resolution={256}>
                <group>
                    {/* Key softboxes */}
                    <Lightformer
                        form="rect"
                        intensity={12}
                        position={[-10, 5, -5]}
                        scale={12}
                        rotateY={Math.PI / 2}
                    />
                    <Lightformer
                        form="rect"
                        intensity={12}
                        position={[10, 0, 1]}
                        scale={12}
                        rotateY={Math.PI / 2}
                    />

                    {/* Fill softbox above */}
                    <Lightformer
                        form="rect"
                        intensity={5}
                        position={[0, 8, 0]}
                        scale={20}
                    />
                </group>

                {/* Spot lights */}
                <spotLight
                    position={[-2, 10, 5]}
                    angle={0.2}
                    decay={0.05}
                    intensity={Math.PI * 0.4}
                />
                <spotLight
                    position={[0, -25, 10]}
                    angle={0.2}
                    decay={0.05}
                    intensity={Math.PI * 0.3}
                />
                <spotLight
                    position={[0, 15, 5]}
                    angle={0.2}
                    decay={0.1}
                    intensity={Math.PI * 1.2}
                />

                {/* Ambient fill */}
                <ambientLight intensity={0.3} />
            </Environment>
        </group>
    )
}

