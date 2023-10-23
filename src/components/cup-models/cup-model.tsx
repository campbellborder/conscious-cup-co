"use client"

import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export default function CupModel({ path, className }: { path: string, className?: string }) {

  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.Renderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const currentModelRef = useRef<THREE.Object3D | null>(null);

  // Initialize scene, camera, and renderer
  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      console.error('Container element not found');
      return;
    }
    if (container.children.length > 0) {
      return;
    }

    sceneRef.current = new THREE.Scene();
    cameraRef.current = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    rendererRef.current = new THREE.WebGLRenderer({ alpha: true });

    const scene = sceneRef.current;
    const camera = cameraRef.current;
    const renderer = rendererRef.current;
    controlsRef.current = new OrbitControls(camera, renderer.domElement);
    const controls = controlsRef.current;

    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Color, Intensity
    scene.add(ambientLight);

    camera.position.z = 8;
    camera.position.y = 2.5;
    controls.update();

    // Function to handle resizing
    const handleResize = () => {
      if (container) {
        const width = container.clientWidth;
        const height = container.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };


    animate();
  }, []);

  // Load the model whenever `path` changes
  useEffect(() => {
    const scene = sceneRef.current;
    const loader = new GLTFLoader();

    loader.load(path, (gltf) => {
      if (currentModelRef.current) {
        scene!.remove(currentModelRef.current);
      }

      const model = gltf.scene;
      currentModelRef.current = model;
      scene!.add(model);
      model.scale.set(20, 8, 20);

      const box = new THREE.Box3().setFromObject(model);
      const center = new THREE.Vector3();
      box.getCenter(center);

      const controls = controlsRef.current!;
      controls.target.copy(center);
      controls.update();
    }, undefined, (error) => {
      console.error(error);
    });
  }, [path]);


  return <div ref={containerRef} id="three-container" className={cn('', className)}></div>;
};