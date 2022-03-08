import { PieChart, Pie, ResponsiveContainer } from "recharts";

const data = [{ name: "Programadas", value: 4 }, { name: "No Programadas", value: 2 }];

export const ChartPerformance = () => {
    return (
        <ResponsiveContainer width="100%" height={200}>
            <PieChart height={250}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#780000"
                    dataKey="value"
                    label={({
                        cx,
                        cy,
                        midAngle,
                        innerRadius,
                        outerRadius,
                        value,
                        index
                    }) => {
                        console.log("handling label?");
                        const RADIAN = Math.PI / 180;
                        // eslint-disable-next-line
                        const radius = 25 + innerRadius + (outerRadius - innerRadius);
                        // eslint-disable-next-line
                        const x = cx + radius * Math.cos(-midAngle * RADIAN);
                        // eslint-disable-next-line
                        const y = cy + radius * Math.sin(-midAngle * RADIAN);

                        return (
                            <text
                                x={x}
                                y={y}
                                fill="#780000"
                                textAnchor={x > cx ? "start" : "end"}
                                dominantBaseline="central"
                            >
                                {data[index].name} ({value})
                            </text>
                        );
                    }}
                />
            </PieChart>
        </ResponsiveContainer>
    )
}
