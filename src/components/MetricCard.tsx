import React from "react";

const MetricCard = ({ title, value }: {title: string, value: number | string}) => (
    <div className="bg-white p-6 rounded-lg shadow-md shadow-current">
        <h3 className="text-xl font-bold">{value}</h3>
        <p className="text-gray-500">{title}</p>
    </div>

);

export default MetricCard;