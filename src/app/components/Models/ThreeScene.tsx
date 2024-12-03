import { useEffect, useRef, useState, useImperativeHandle, forwardRef } from 'react'
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export interface CameraControls {
    moveToPosition: (index: number, duration: number) => void;
};

const cameraStates = [
    { position: new THREE.Vector3(-1.08, 1.33, 4.27), rotation: new THREE.Euler(-0.27, 0.44, 0.12) },
    { position: new THREE.Vector3(-1.66, 0.99, 1.72), rotation: new THREE.Euler(-0.22, -0.11, -0.02) },
    { position: new THREE.Vector3(0.48, 2.33, 0.56), rotation: new THREE.Euler(-0.54, 0.60, 0.32) },
    { position: new THREE.Vector3(-2.97, 3.62, 1.04), rotation: new THREE.Euler(-0.40, 0.26, 0.11) },
    { position: new THREE.Vector3(-0.86, 3.89, -1.22), rotation: new THREE.Euler(-0.44, 0.22, 0.10) },
];

const ThreeScene = forwardRef<CameraControls>((props, ref) => {
    const mountRef = useRef<HTMLDivElement>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const clockRef = useRef<THREE.Clock | null>(new THREE.Clock());

    const targetPositionRef = useRef<THREE.Vector3 | null>(null);  // Target position for smooth movement
    const targetRotationRef = useRef<THREE.Quaternion | null>(null); // Target rotation for smooth rotation
    const currentTargetIndexRef = useRef<number>(0);  // Current index in the camera positions array
    const durationRef = useRef<number>(0);  // Duration for the transition (in seconds)
    const currentTimeRef = useRef<number>(0);  // Tracks the elapsed time for the current transition

  const isTransitioningRef = useRef<boolean>(false);  // Flag to check if a transition is in progress

    const [cameraProperties, setCameraProperties] = useState({
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        zoom: 1,
        fov: 75,  // Field of view
      });

    const easeInOut = (t: number) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    useEffect(() => {
        if (!mountRef.current) return;

        const scene = new THREE.Scene();
        sceneRef.current = scene;

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        cameraRef.current = camera;
        
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        rendererRef.current = renderer;

        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        const loader = new GLTFLoader();

        let mixer : THREE.AnimationMixer;
        loader.load('/models/cloud_station/scene.gltf', (gltf) => {
            // Add the model to the scene
            scene.add(gltf.scene);
            scene.position.set(0, 0, 0);
            // Initialize the animation mixer
            mixer = new THREE.AnimationMixer(gltf.scene);

            // Loop through the animations and play them
            gltf.animations.forEach((clip) => {
                const action = mixer.clipAction(clip);
                action.play();
                action.setLoop(THREE.LoopRepeat, Infinity); // Optional: set looping
            });

            // animation loop
            const animate = () => {
                requestAnimationFrame(animate);

                // Update the mixer on every frame
                if (mixer) {
                    mixer.update(0.01); // Update with delta time
                }

                // Camera debugging
                if (cameraRef.current) {
                    setCameraProperties({
                        position: cameraRef.current.position,
                        rotation: cameraRef.current.rotation,
                        zoom: cameraRef.current.zoom,
                        fov: cameraRef.current.fov,
                      });
                }

                if (isTransitioningRef.current && cameraRef.current && targetRotationRef.current && clockRef.current) {
                    const delta = clockRef.current.getDelta();
                    currentTimeRef.current += Math.min(delta, 0.05);
                    // Normalize progress (0 to 1) based on duration
                    let progress = Math.min(currentTimeRef.current / durationRef.current, 1);

                    const easedProgress = easeInOut(progress);

                    // Calculate the distance for position lerp
                    let distance = 0;
                    if (targetPositionRef.current) {
                        distance = cameraRef.current.position.distanceTo(targetPositionRef.current);
                    }
                    
                    // Calculate the angular distance for rotation slerp (in radians)
                    const currentRotation = new THREE.Quaternion().setFromEuler(cameraRef.current.rotation);
                    const targetRotation = targetRotationRef.current;
                    const angularDistance = currentRotation.angleTo(targetRotation);

                    // Calculate scaling factors to normalize the progress of position and rotation
                    const maxDistance = Math.max(distance, angularDistance); // Use the larger of the two as the "base"
                    
                    // Scale progress so both position and rotation take the same time
                    let positionProgress = easedProgress * distance / maxDistance;
                    let rotationProgress = easedProgress * angularDistance / maxDistance;

                    if (isNaN(positionProgress) || isNaN(rotationProgress)) {
                        positionProgress = 0;
                        rotationProgress = 0;
                    }

                    if (targetPositionRef.current) {
                        cameraRef.current.position.lerp(targetPositionRef.current, positionProgress);
                        if (targetPositionRef.current.x !== cameraRef.current.position.x) {
                        
                            console.log(progress)
                        }
                    }
                    if (targetRotationRef.current) {
                        const quaternion = new THREE.Quaternion().setFromEuler(cameraRef.current.rotation);
                        quaternion.slerp(targetRotationRef.current, rotationProgress);
                        cameraRef.current.rotation.setFromQuaternion(quaternion);
                    }

                    if (progress >= 1) {
                        console.log("Done!");
                        if (targetRotationRef.current) {
                            const euler = new THREE.Euler().setFromQuaternion(targetRotationRef.current);
                            console.log("Rotation: " + euler.x + ", " + euler.y + ", " + euler.z);
                            cameraRef.current.rotation.set(euler.x, euler.y, euler.z);
                        }
                        if (targetPositionRef.current) {
                            console.log("Position: " + targetPositionRef.current.x + ", " + targetPositionRef.current.y + ", " + targetPositionRef.current.z);
                            cameraRef.current.position.copy(targetPositionRef.current);
                        }
                        isTransitioningRef.current = false; // Transition complete
                        currentTimeRef.current = 0;
                    }
                }



                renderer.render(scene, camera);
            };

            // Start the animation loop
            animate();
        },
        undefined,
        (error) => {
            console.error(error);
        })


        const initialPos = cameraStates[0].position;
        camera.position.set(initialPos.x, initialPos.y, initialPos.z);
        camera.rotation.setFromQuaternion(new THREE.Quaternion().setFromEuler(cameraStates[0].rotation));

        // Handle window resizing
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        
    
        window.addEventListener("resize", handleResize);

        // Clean up when the component is unmounted
        return () => {
            mountRef.current?.removeChild(renderer.domElement);
        };
    }, []);

    const setNextTarget = (index: number) => {
        const target = cameraStates[index];
        targetPositionRef.current = target.position;
        targetRotationRef.current = new THREE.Quaternion().setFromEuler(target.rotation);
    }
    const moveToPosition = (index: number, duration: number) => {
        if (isTransitioningRef.current) return;  // Ignore if already transitioning
        durationRef.current = duration;
        currentTargetIndexRef.current = index;
        setNextTarget(index);
        isTransitioningRef.current = true;  // Start the transition
    }

    // Expose camera manipulation functions to the parent component
    useImperativeHandle(ref, () => ({
        moveToPosition, // Expose the moveToPosition method to parent
    }));

    return (
        <div className="-z-50">
            <div ref={mountRef} className='absolute top-0 left-0' />
            <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 1, color: 'white' }}>
                <h3>Camera Properties</h3>
                <p><strong>Position:</strong> x: {cameraProperties.position.x.toFixed(2)}, y: {cameraProperties.position.y.toFixed(2)}, z: {cameraProperties.position.z.toFixed(2)}</p>
                <p><strong>Rotation:</strong> x: {cameraProperties.rotation.x.toFixed(2)}, y: {cameraProperties.rotation.y.toFixed(2)}, z: {cameraProperties.rotation.z.toFixed(2)}</p>
                <p><strong>Zoom:</strong> {cameraProperties.zoom}</p>
                <p><strong>Field of View (FOV):</strong> {cameraProperties.fov}</p>
            </div>
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black from-30% pointer-events-none' />
        </div>
    )
});

export default ThreeScene