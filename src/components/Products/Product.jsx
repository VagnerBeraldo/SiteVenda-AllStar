import {motion} from "framer-motion"
import AllstarImage from "../../assets/tenis_preto.png";
import "../Products/Products.css"

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import PlayVideoButton from "../PlayButton";
const slideUp = (delay) => ({
    hidden:{
        opacity: 0,
        y: 100,
    },
    show:{
        opacity: 1,
        y: 0,
    transition: {
        duration: 0.8,
        delay: delay
    }
    }
})

const Product = () => {
    return(
        <section className="product-session">
            <div className="product-container">
                <div className="brand-info">
                    <div className="brand-text">
                        <motion.h1
                            variants={slideUp(0.3)}
                            initial="hidden"
                            animate="show"
                            className="product-title"
                        >
                            Chuck Pro Mid
                        </motion.h1>

                        <motion.div
                            variants={slideUp(0.5)}
                            initial="hidden"
                            animate="show">
                            <h2 className="product-subtitle">A MELHOR MARCA</h2>    

                            <p className="product-description">
                                Redesenhado para skate. Este tênis Converse CONS Chuck Taylor
                                All Star Pro Mid apresentam todos os elementos essenciais do
                                modelo original de 1917 com tecnologias de alto desempenho... 
                            </p>
                            <a href="/" className="more-info">
                            * Mais informações *
                            </a>
                        </motion.div>

                        <motion.div
                            variants={slideUp(0.7)}
                            initial="hidden"
                            animate="show"
                            className="size-selection">
                            <p className="title-size">
                                Selecione o seu tamanho 
                            </p>
                            <div className="size-option">
                                <p className="size-box">34</p>
                                <p className="size-box">35</p>
                                <p className="size-box">36</p>
                                <p className="size-box">37</p>
                                <p className="size-box">38</p>
                                <p className="size-box">39</p>
                                <p className="size-box">40</p>
                                <p className="size-box">41</p>
                                <p className="size-box">42</p>
                                <p className="size-box">43</p>
                            </div>
                        </motion.div>

                    </div>
                </div>
                <div className="container-image-section">
                    <motion.img
                    initial={{opacity: 0, x: 100, rotate: 20}}
                    whileInView={{opacity: 1, x: 0, rotate: 0}}
                    transition={{duration: 0.6, delay: 0.4}}
                    src={AllstarImage}
                    alt="Imagem de um tênis All Star"
                    className="content-image"
                    />
                    <motion.div
                        initial={{opacity: 0, scale: 0}}
                        whileInView={{opacity: 1, scale: 1}}
                        transition={{duration: 0.5, delay: 0.8}}
                        className="play-button-container"
                    >
                        <PlayVideoButton />
                        
                    </motion.div>
                </div>
                <div className="right-section">
                    <motion.p
                    variants={slideUp(0.6)}
                    initial="hidden"
                    animate="show"
                    className="right-text"
                    >
                        Redesenhado para skate. Estes tênis Converse CONS Chuck Taylor All Star Pro Mid
                        apresentam todos os elementos essenciais do modelo original de 1917 com tecnologias
                        de alto desempenho para criar um autêntico modelo de skate. Uma palmilha de espuma
                        CX moldada proporciona amortecimento, uma sola de borracha com 
                        tração proporciona contato com a prancha e tecido de lona com reforço de borracha 
                        para durabilidade completa o paconte de desempenho. 
                    </motion.p>
                                        
                    <motion.div
                    variants={slideUp(0.9)}
                    initial="hidden"
                    animate="show"
                    className="navigation-icons"
                    >
                        <div className="container-arrow">
                            <div className="arrow-icon">
                            <FaArrowRight />
                            </div>
                            <div className="arrow-icon">
                            <FaArrowLeft/>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <motion.p
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5, delay: 0}}
                className="background-text"
            >
                All Star
            </motion.p>
            {<div className="blur-circle"></div> }
        </section>
    )
}

export default Product;
