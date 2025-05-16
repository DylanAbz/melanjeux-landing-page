import "./Person.scss";

interface PersonProps {
    imagePath: string;
    name: string;
    role: string;
    nickname: string;
}

export function Person({ imagePath, name, role, nickname }: PersonProps) {
    return (
        <div className="person">
            <div className="person__image-wrapper">
                <img src={imagePath} alt={name} className="person__image" />
            </div>
            <div className="person__info">
                <h2 className="person__name">{name}</h2>
                <div className="titles-container">
                    <h3 className="person__role">{role}</h3>
                    <p className="person__nickname">{nickname}</p>
                </div>
            </div>
        </div>
    );
}
