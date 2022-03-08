import { useContext } from "react";
import React from 'react';
import {
    ResponsiveContainer,
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';
import ActivityContext from "../context/activity/activityContext";

const ChartActivity = () => {

    const { chart } = useContext(ActivityContext);

    console.log(chart)


    return (
        <>
            <ResponsiveContainer width='100%' height='100%'>
                <ComposedChart
                    data={chart}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="Estación" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Pick" barSize={20} fill="#780000" />
                    <Bar dataKey="Put" barSize={20} fill="#2f3848" />
                    <Line type="monotone" dataKey="Bines" stroke="#008000" />
                </ComposedChart>
            </ResponsiveContainer>
        </>
    );


}

export default ChartActivity;