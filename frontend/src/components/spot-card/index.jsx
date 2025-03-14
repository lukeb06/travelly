import './index.css';
import { CiStar } from 'react-icons/ci';

function clamp(num, min, max) {
    return Math.max(min, Math.min(max, num));
}

export default function SpotCard({ spot }) {
    const handleMouseMove = e => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const card = e.currentTarget;

        const cardBound = card.getBoundingClientRect();
        const cardX = cardBound.x;
        const cardY = cardBound.y;
        const cardWidth = cardBound.width;

        const image = card.querySelector('.sc-image');
        const imageBound = image.getBoundingClientRect();
        const imageHeight = imageBound.height;

        const tooltip = card.querySelector('.sc-tooltip');
        const tooltipBound = tooltip.getBoundingClientRect();
        const tooltipWidth = tooltipBound.width;
        const tooltipHeight = tooltipBound.height;
        const tooltipHalfWidth = tooltipWidth / 2;
        const tooltipHalfHeight = tooltipHeight / 2;

        const newX = clamp(mouseX - cardX - tooltipHalfWidth, 0, cardWidth - tooltipWidth);
        const newY = clamp(mouseY - cardY - tooltipHalfHeight + 35, 0, imageHeight - tooltipHeight);

        tooltip.style.top = `${newY}px`;
        tooltip.style.left = `${newX}px`;
    };

    return (
        <div onMouseMove={handleMouseMove} className="spot-card">
            <div className="sc-image">
                <img src={spot.previewImage} />
            </div>
            <div className="sc-details">
                <div className="sc-top">
                    <span className="sc-location">
                        {spot.city}, {spot.state}
                    </span>

                    <div className="sc-rating">
                        {/* TODO: Add star Icon */}
                        <CiStar />
                        <span className="sc-rating-value">{spot.avgRating.toFixed(1)}</span>
                    </div>
                </div>
                <div className="sc-bottom">
                    <span>${spot.price.toFixed(2)} / night</span>
                </div>
            </div>
            <div className="sc-tooltip">
                <span>{spot.name}</span>
            </div>
        </div>
    );
}
