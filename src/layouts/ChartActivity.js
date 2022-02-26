import { useContext } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'; //Legend, Cell
import ActivityContext from "../context/activity/activityContext";

const ChartActivity = () => {

    const { chart } = useContext(ActivityContext);

    console.log(chart)


    return (
        <>
            

            <div className="chart">
                <div className="chart-container">
                    <ResponsiveContainer width='99%' height='99%'>
                        <BarChart
                            width={800}
                            height={400}
                            data={chart}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="Estación" />
                            <YAxis />
                            <Tooltip />
                            <Legend/>
                            <Bar dataKey="Pick" fill="#780000" />
                            <Bar dataKey="Put" fill="#2f3848" />
                        </BarChart>
                    </ResponsiveContainer>

                </div>
            </div>

        </>
    );


}

export default ChartActivity;