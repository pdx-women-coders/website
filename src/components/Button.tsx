import React from 'react';
import '../App.css';

interface ButtonProps {
    onClick: () => void;
    text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
    return (
        <button onClick={onClick} className="Button">
            {text}
        </button>
    );
};

export default Button;