import {useState} from "react";

interface CardValueProps {
    title: string;
    content: string;
}

import "./CardValue.scss";

export function CardValue( { title, content }: CardValueProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="card-value" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <h2 className="card-value__title">{title}</h2>
            <p className="card-value__content" hidden={! isHovered}>{content}</p>
        </div>
    );

}