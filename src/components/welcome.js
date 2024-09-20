import React from "react";
import {motion} from "framer-motion";
import {SocialsButtons} from "./socials-button/socials-buttons.js";
import {ScrollArrow} from "./scroll-arrow/scroll-arrow";

export const Welcome = ({scrollToAbout }) => {
    return (
        <div className="Welcome">
            <motion.div
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{
                    duration: 1,
                    ease: [0, 0.33, 0.66, 1.01],
                    scale: {
                        type: "spring",
                        damping: 20,
                        stiffness: 100,
                        restDelta: 0.001
                    }
                }}>
                <div className="welcome-content">
                    <div className="welcome-upper">
                        <img className="personal-pic" src="/pfp.png" alt="me"/>
                        <div className="texte-welcome">
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{ease: "easeIn", duration: 1}}>
                                <h1>Bonjour, je suis Gaël<span>.</span>B</h1>
                                <div className="sous-titre">
                                    <p>Etudiant ingénieur en cybersécurité&nbsp;</p>
                                    <img src="/laptop.png" alt="computer"/>
                                </div>
                                <SocialsButtons/>
                            </motion.div>
                        </div>
                    </div>
                    <hr/>
                    <p>Passionné par l'informatique et ses applications depuis plusieurs années, je
                        cherche<br/> constamment à approfondir mes
                        connaissances. <br/> L'objectif de ce site est de répertorier mon parcours et mes projets.</p>
                </div>
            </motion.div>

            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{ease: "easeIn", duration: 1}}>
                <ScrollArrow onClick={scrollToAbout} />
            </motion.div>
        </div>
    )
};
