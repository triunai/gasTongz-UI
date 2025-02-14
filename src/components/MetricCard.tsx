import React from "react";

const MetricCard = ({ title, value }: {title: string, value: number | string}) => (
    <div className="bg-black p-6 rounded-lg shadow-md shadow-amber-500 text-white">
        <h3 className="text-xl font-bold ">{value}</h3>
        <p className="text-gray-400">{title}</p>
    </div>

);

export default MetricCard;