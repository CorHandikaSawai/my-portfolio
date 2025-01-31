import { useState, useEffect, useRef } from 'react';
import './Header.css';

export default function Header() {
    const titles = ['Software Engineer', 'Cybersecurity Enthusiast'];
    const [currentTitle, setCurrentTitle] = useState(titles[0]);
    const [displayText, setDisplayText] = useState('');
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [glitch, setGlitch] = useState(false);
    const canvasRef = useRef(null);
    const headerRef = useRef(null);
    const mousePos = useRef({ x: -999, y: -999 }); // Default position (hidden)

    useEffect(() => {
        let typingSpeed = isDeleting ? 50 : 100;
        let glitchChance = Math.random() < 0.1;

        if (glitchChance && !isDeleting) {
            setGlitch(true);
            setTimeout(() => setGlitch(false), 200);
        }

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (charIndex < currentTitle.length) {
                    setDisplayText((prev) => prev + currentTitle[charIndex]);
                    setCharIndex((prev) => prev + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            } else {
                if (charIndex > 0) {
                    setDisplayText((prev) => prev.slice(0, -1));
                    setCharIndex((prev) => prev - 1);
                } else {
                    setIsDeleting(false);
                    setCurrentTitle((prev) =>
                        prev === titles[0] ? titles[1] : titles[0]
                    );
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, currentTitle]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const resizeCanvas = () => {
            if (headerRef.current) {
                const { width, height } =
                    headerRef.current.getBoundingClientRect();
                canvas.width = width;
                canvas.height = height;
            }
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const characters = '01010110011011110111001101010100';
        const columns = Math.floor(canvas.width / 15);
        const drops = Array(columns).fill(1);

        const drawMatrix = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Dark overlay to fade old numbers
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.font = '16px monospace';

            drops.forEach((y, x) => {
                const text = characters.charAt(
                    Math.floor(Math.random() * characters.length)
                );
                const posX = x * 15;
                const posY = y * 15;

                // Calculate distance from mouse
                const dx = posX - mousePos.current.x;
                const dy = posY - mousePos.current.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Opacity logic: Brighter near the cursor, dim further away
                let opacity = 0.1; // Default hidden state
                if (distance < 100) opacity = 1; // Fully visible near cursor
                else if (distance < 200) opacity = 0.5; // Partially visible

                ctx.fillStyle = `rgba(0, 255, 0, ${opacity})`; // Green matrix numbers
                ctx.fillText(text, posX, posY);

                // Reset when reaching bottom or randomly
                if (y * 15 > canvas.height || Math.random() > 0.975)
                    drops[x] = 0;
                drops[x]++;
            });
        };

        let interval = setInterval(drawMatrix, 50);

        const handleMouseMove = (event) => {
            if (!headerRef.current) return;
            const rect = headerRef.current.getBoundingClientRect();
            mousePos.current = {
                x: event.clientX - rect.left,
                y: event.clientY - rect.top,
            };
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            clearInterval(interval);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <header
            id='landing-header'
            ref={headerRef}
            style={{ position: 'relative', overflow: 'hidden' }}
        >
            <canvas ref={canvasRef} className='matrix-header'></canvas>
            <h1>Hi, I am Cor</h1>
            <h2 className={`typewriter ${glitch ? 'glitch' : ''}`}>
                A <span>{displayText}</span>
            </h2>
        </header>
    );
}
