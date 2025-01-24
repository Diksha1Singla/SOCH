import React from 'react';

const CirclePercentage = ({ percentages }) => {
  const categoryColors = {
    clothes:  ' rgb(157, 75, 245)', // Red for clothes (40%)
    food: '#ff8c00', // Orange for food (25%)
    drinks: '#f9d71c', // Yellow for drinks (25%)
    bath: '#3cb371', // Green for bath (10%)
  };


  const totalPercentage = Object.values(percentages).reduce((acc, curr) => acc + curr, 0);
  let startAngle = 0;

  return (
    <div className="circle-container">
      <svg width="200" height="200">
        {Object.entries(percentages).map(([category, percentage]) => {
          const angle = (percentage / totalPercentage) * 360;
          const endAngle = startAngle + angle;
          const largeArcFlag = angle > 180 ? 1 : 0;

          const innerRadius = 70; // Adjust inner radius as needed
          const outerRadius = 100; // Adjust outer radius as needed

          const startX = 100 + innerRadius * Math.cos((startAngle - 90) * (Math.PI / 180));
          const startY = 100 + innerRadius * Math.sin((startAngle - 90) * (Math.PI / 180));
          const endX = 100 + innerRadius * Math.cos((endAngle - 90) * (Math.PI / 180));
          const endY = 100 + innerRadius * Math.sin((endAngle - 90) * (Math.PI / 180));

          const outerStartX = 100 + outerRadius * Math.cos((startAngle - 90) * (Math.PI / 180));
          const outerStartY = 100 + outerRadius * Math.sin((startAngle - 90) * (Math.PI / 180));
          const outerEndX = 100 + outerRadius * Math.cos((endAngle - 90) * (Math.PI / 180));
          const outerEndY = 100 + outerRadius * Math.sin((endAngle - 90) * (Math.PI / 180));

          const pathData = `
            M ${outerStartX} ${outerStartY}
            A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${outerEndX} ${outerEndY}
            L ${endX} ${endY}
            A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${startX} ${startY}
            L ${outerStartX} ${outerStartY}
          `;

          startAngle = endAngle;

          return (
            <path
              key={category}
              d={pathData}
              fill={categoryColors[category]}
              stroke="transparent"
            />
          );
        })}
      </svg>
      <div className="legend">
        {Object.entries(percentages).map(([category, percentage]) => (
          <div key={category} className="legend-item">
            <span className="legend-color" style={{ backgroundColor: categoryColors[category] }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CirclePercentage;
