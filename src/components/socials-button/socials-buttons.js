import React from 'react'
import "./socials.scss"
import {motion} from "framer-motion";

export const SocialsButtons = () => {
    return (
        <div className="buttons">
            <motion.a
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.98}}
                style={{x: 0}}>
                <div className="linkedin-button">
                    <img src="/linkedin.png" alt="linkedin"/>
                    <a href="https://www.linkedin.com/in/gaël-brossard" target="_blank"
                       rel="noreferrer">&ensp;LinkedIn&nbsp;</a>
                </div>
            </motion.a>
            <motion.a
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.98}}
                style={{x: 0}}>
                <div className="github-button">
                    <img src="/github.png" alt="linkedin"/>
                    <a href="https://github.com/Shyveee" target="_blank"
                       rel="noreferrer">&ensp;GitHub&nbsp;</a>
                </div>
            </motion.a>
            <motion.a
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.98}}
                style={{x: 0}}>
                <div className="rootme-button">
                    <img src="/rootme.png" alt="rootme"/>
                    <a href="https://www.root-me.org/Shyve" target="_blank"
                       rel="noreferrer">&ensp;RootMe&nbsp;</a>
                </div>
            </motion.a>
        </div>

    )
}
