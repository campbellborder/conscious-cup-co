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
    const controls = new OrbitControls( camera, renderer.domElement );
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const light = new THREE.PointLight(0xffffff, 1, 0);
    light.position.set(10, 10, 10);
    scene.add(light);

    // Load cup model
    const loader = new GLTFLoader();
    loader.load('coffee_cup/scene.gltf', function ( gltf ) {
      const model = gltf.scene;  
      scene.add(model);
      model.scale.set(4, 4, 4);
    }, 	function ( xhr ) {

      console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
  
    }, function ( error ) {
      console.error( error );
    });
    
    camera.position.z = 5;
    controls.update();

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div ref={containerRef} id="three-container" className={cn('w-3/5 flex-auto', className)}></div>;
};