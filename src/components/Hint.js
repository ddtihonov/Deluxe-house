import React, { useState } from 'react';

const Hint = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

return (
    <div className="hint__item">
        <div className="hint__box" onClick={() => setIsActive(!isActive)}>
            <div className="hint__title">{title}</div>
            <div className="hint__title">{isActive ? '-' : '+'}</div>
        </div>
        {isActive && <div className="hint__content">{content}</div>}
    </div>
    );
};

export default Hint;