import React, { useEffect } from "react";
import pixelIcon from '../assets/images/PixelBot_Icon_Yellow.svg';
import pixelLogo from '../assets/images/PixelBot_Logo_White.svg';
import Image from 'react-bootstrap/Image';
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/header.css';

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function Header() {
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

    return (
        <>
            {/* top bar code starts from here  */}
            <div className="sticky-top top-bg">
                <div className="container d-flex flex-column flex-md-row justify-content-center align-items-center py-2 ">
                    <span className="text-center text-md-start mb-md-0">
                        <a href="/" className="text-dark fs-5 fs-md-1 d-block">
                            <Image src={pixelIcon} rounded className="img-set-icon me-2" />&nbsp;
                            Specialized in Branding, Web Design and Motion Graphics.
                        </a>
                    </span>
                </div>
            </div>
            {/* top bar code end here  */}

            {/* hero section starts from here */}
            <motion.section
                style={{
                    backgroundImage,
                }}
                className="d-flex flex-column justify-content-center min-vh-100 overflow-hidden text-gray-200">
                <div className="position-relative z-10 text-center">
                    <Image src={pixelLogo} rounded className="w-25  " />
                    <h1 className="bg-gradient-to-br from-white to-gray-400 bg-clip-text text-3xl fw-bold text-center text-clr-gry pt-5">
                        Launching Soon
                    </h1>
                </div>
                <div
                    className="position-absolute top-0 start-0 end-0 bottom-0 w-100 h-100">
                    <Canvas>
                        <Stars radius={50} count={2500} factor={4} fade speed={2} />
                    </Canvas>
                </div>
            </motion.section>
            {/* hero section end here */}
        </>
    );
}
