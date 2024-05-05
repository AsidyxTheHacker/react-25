import { useEffect, useState } from "react";

export default function RandomColor() {

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    function randomColorUtil(length) {
        return Math.floor(Math.random() * length);
    };

    function handleCreateRandomHexColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtil(hex.length)];
        };

        setColor(hexColor);
    };

    function handleCreateRandomRgbColor() {
        const r = randomColorUtil(256);
        const g = randomColorUtil(256);
        const b = randomColorUtil(256);

        setColor(`rgb(${r}, ${g}, ${b})`);
    };

    useEffect(() => {
        if (typeOfColor === 'rgb') handleCreateRandomRgbColor();
        else handleCreateRandomHexColor();
    }, [typeOfColor])

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Arial',
                height: "100vh",
                gap: '20px',
                background: color,
            }}>
            <button onClick={() => setTypeOfColor('hex')}>Create 'HEX' Color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Create 'RGB' Color</button>
            <button
                onClick=
                {(typeOfColor === 'hex' ?
                    handleCreateRandomHexColor :
                    handleCreateRandomRgbColor)}>
                Generate Random Color</button>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                color: 'white',
                fontSize: '60px',
                marginTop: '50px',
            }}>
                <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
                <h1 style={{
                    margin: 0
                }}>{color}</h1>
            </div>
        </div>
    );
};