import { NavLink } from 'react-router-dom';
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
        <NavLink to={`/spots/${spot.id}`} onMouseMove={handleMouseMove} className="spot-card">
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
                        <span className="sc-rating-value">
                            {parseFloat(spot.avgRating).toFixed(1)}
                        </span>
                    </div>
                </div>
                <div className="sc-bottom">
                    <span>${parseFloat(spot.price).toFixed(2)} / night</span>
                </div>
            </div>
            <div className="sc-tooltip">
                <span>{spot.name}</span>
            </div>
        </NavLink>
    );
}

export function SpotCardSkeleton() {
    return (
        <div className="spot-card">
            <div className="sc-image"></div>
            <div className="sc-details">
                <div className="sc-top">
                    <span className="sc-location">
                        <span
                            style={{
                                color: 'var(--muted)',
                                backgroundColor: 'var(--muted)',
                                borderRadius: 'var(--radius)',
                            }}
                        >
                            New York City, New York
                        </span>
                    </span>

                    <div className="sc-rating">
                        {/* TODO: Add star Icon */}
                        <CiStar />
                        <span className="sc-rating-value">
                            <span
                                style={{
                                    color: 'var(--muted)',
                                    backgroundColor: 'var(--muted)',
                                    borderRadius: 'var(--radius)',
                                }}
                            >
                                2.8
                            </span>
                        </span>
                    </div>
                </div>
                <div className="sc-bottom">
                    <span
                        style={{
                            color: 'var(--muted)',
                            backgroundColor: 'var(--muted)',
                            borderRadius: 'var(--radius)',
                        }}
                    >
                        $100.00 / night
                    </span>
                </div>
            </div>
        </div>
    );
}
