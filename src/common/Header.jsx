import React, { useEffect } from "react";
import pixelIcon from '../assets/images/pixel-icon-1.svg';
import pixelLogo from '../assets/images/pixelbot-logo.svg';
import Image from 'react-bootstrap/Image';
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FiArrowRight } from "react-icons/fi";
import { useMotionTemplate, useMotionValue, motion,animate} from "framer-motion";
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
            <div className="border border-danger border-1">
                <div className="d-flex container py-2 text-center">
                    <Image src={pixelIcon} rounded className="img-set-icon mr-2"/>
                    <span>
                        <a href="/" className="text-dark fs-1 d-block">
                        Specialized in Branding, Web Design and Motion Graphics.
                        </a>
                    </span>
                    <motion.button
                        style={{
                            border,
                            boxShadow,
                        }}
                        whileHover={{
                            scale: 1.015,
                        }}
                        whileTap={{
                            scale: 0.985,
                        }}
                        className="btn btn-outline-light px-2 py-1 rounded-pill text-capitalize text-dark">
                        get in touch
                        <FiArrowRight className="ms-2" />
                    </motion.button>
                </div>
            </div>

            <motion.section
                style={{
                    backgroundImage,
                }}
                className="d-flex flex-column justify-content-center min-vh-100 overflow-hidden text-gray-200">
                <div className="position-relative z-10 text-center">
                    {/* <h1 className="bg-gradient-to-br from-white to-gray-400 bg-clip-text text-3xl fw-bold text-white text-center">
                    </h1> */}
                    <Image src={pixelLogo} rounded className="w-25  pt-5"/>
                    {/* <p className="my-4 text-white align-content-center flex-wrap">
                    We are a full-service creative studio creating beautiful digital experiences and products. Our mission is to make work process meaningful.
                    </p> */}
                    
                </div>

                <div
                    className="position-absolute top-0 start-0 end-0 bottom-0 w-100 h-100">
                    <Canvas>
                        <Stars radius={50} count={2500} factor={4} fade speed={2} />
                    </Canvas>
                </div>
            </motion.section>
        </>
    );
}
