import type { ReactElement } from "react";
import HeroImage from "/src/assets/images/home/hero.jpg"

export default function OverlayHero(): ReactElement {
    return (
        <div className="hero min-h-full h-96 rounded" style={{ backgroundImage: `url(${HeroImage.src})` }}>
            <div className="hero-overlay bg-opacity-60 backdrop-blur-sm"></div>
            <div className="hero-content text-end text-neutral-content">
                <div className="max-w-md prose dark:prose-invert">
                    <h1 className="text-left mb-5 text-5xl font-bold dark:text-everforest-dark-aqua text-everforest-light-gray-2">Hi!</h1>
                    <p className="text-left mb-5">
                        Navigate around to read some of my posts, or check out my portfolio!
                    </p>
                </div>
            </div>
        </div>
    )
}