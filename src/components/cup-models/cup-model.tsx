"use client"

import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


export default function CupModel({className}: {className?: string}) {

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    // Get container
    const container = containerRef.current;
    if (!container) {
      console.error('Container element not found');
      return;
    }
    // Check if the renderer's DOM element has already been appended
    if (container.children.length > 0) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({alpha: true});
    // const renderer = new THREE.WebGLRenderer();
    const controls = new OrbitControls( camera, renderer.domElement );
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Color, Intensity
    scene.add(ambientLight);
  
    // Create and add point light
    // const pointLight = new THREE.PointLight(0xffffff, 1, 1000); // Color, Intensity, Distance
    // pointLight.position.set(50, 50, 50); // Position
    // scene.add(pointLight);

    // Load cup model
    const loader = new GLTFLoader();
    loader.load('coffee_cup/scene.gltf', function ( gltf ) {
      const model = gltf.scene;  
      console.log(model)
      scene.add(model);
      model.scale.set(20, 8, 20);

      // Calculate bounding box to find the center
    const box = new THREE.Box3().setFromObject(model);
    const center = new THREE.Vector3();
    box.getCenter(center);

    // Center the camera and the controls
    controls.target.copy(center);
    controls.update();


    }, 	undefined , function ( error ) {
      console.error( error );
    });

    camera.position.z = 8;
    camera.position.y = 2.5;
    controls.update();

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div ref={containerRef} id="three-container" className={cn('', className)}></div>;
};