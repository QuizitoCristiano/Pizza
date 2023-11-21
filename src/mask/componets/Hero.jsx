import React, { useState, useEffect } from 'react';
import PizzaBanner from '../img/pizza-banner.png';
import QuatroEstacoes from '../img/quattro-stagioni.webp';
import Margherita from '../img/margherita.webp';
import './seu-estilo.css'; // Substitua pelo caminho real do seu arquivo de estilo

const MyBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [PizzaBanner, QuatroEstacoes, Margherita]; // Lista de imagens

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <img
      id="minha-imagem"
      width={450}
      height={450}
      src={images[currentImageIndex]}
      alt={`Image ${currentImageIndex + 1}`}
      className="fadeInAnimation"
      style={{
        '@media screen and (max-width: 805px)': {
          width: '50px',
          height: 'auto',
        },
      }}
      onLoad={() => {
        // Adiciona a classe 'show' após a imagem ser carregada para acionar a animação
        setTimeout(() => {
          const img = document.getElementById('minha-imagem');
          img.classList.add('show');
        }, 100); // Ajuste conforme necessário para garantir que a classe seja aplicada após o carregamento
      }}
    />
  );
};

export default MyBanner;
