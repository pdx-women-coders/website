import React from 'react';
import '../App.css';

interface ButtonProps {
    onClick: (e: React.MouseEvent) => void;
    text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
    return (
        <button onClick={(e) => onClick(e)} className="Button">
            {text}
        </button>
    );
};

export default Button;