 gsap.registerPlugin(ScrollTrigger);

        // Troca suave da imagem de fundo conforme a seção visível ao scrollar
        const sections = [
            { id: 'sobre', bgId: 'bg-1' },
            { id: 'galeria', bgId: 'bg-2' },
            { id: 'precos', bgId: 'bg-3' },
            { id: 'localizacao', bgId: 'bg-4' }
        ];

        function changeBgImage(activeBgId) {
            document.querySelectorAll('.bg-layer').forEach(img => {
                if (img.id === activeBgId) {
                    img.classList.add('active');
                } else {
                    img.classList.remove('active');
                }
            });
        }

        sections.forEach(item => {
            ScrollTrigger.create({
                trigger: `#${item.id}`,
                start: "top 60%",
                end: "bottom 40%",
                onEnter: () => changeBgImage(item.bgId),
                onEnterBack: () => changeBgImage(item.bgId)
            });
        });

        // Animação horizontal da galeria durante a rolagem
        gsap.to(".gallery-track-1", {
            x: "-18%",
            ease: "none",
            scrollTrigger: {
                trigger: "#galeria",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

        gsap.to(".gallery-track-2", {
            x: "18%",
            ease: "none",
            scrollTrigger: {
                trigger: "#galeria",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });