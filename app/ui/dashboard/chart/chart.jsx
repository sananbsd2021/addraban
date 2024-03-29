"use client"

import styles from './chart.module.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "Sun",
    หนังสือส่ง: 4000,
    หนังสือรับ: 2400,
    บันทึกข้อความ: 2300,
  },
  {
    name: "Mon",
    หนังสือส่ง: 3000,
    หนังสือรับ: 1398,
    บันทึกข้อความ: 2400,
  },
  {
    name: "Tue",
    หนังสือส่ง: 2000,
    หนังสือรับ: 3800,
    บันทึกข้อความ: 2100,    
  },
  {
    name: "Wed",
    หนังสือส่ง: 2780,
    หนังสือรับ: 3908,
    บันทึกข้อความ: 2200,
  },
  {
    name: "Thu",
    หนังสือส่ง: 1890,
    หนังสือรับ: 4800,
    บันทึกข้อความ: 2500,
  },
  {
    name: "Fri",
    หนังสือส่ง: 2390,
    หนังสือรับ: 3800,
    บันทึกข้อความ: 2600,
  },
  {
    name: "Sat",
    หนังสือส่ง: 3490,
    หนังสือรับ: 4300,
    บันทึกข้อความ: 2300,
  },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{background:"#151c2c", border:"none"}}/>
          <Legend />
          <Line type="monotone" dataKey="หนังสือส่ง" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="หนังสือรับ" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
          <Line type="monotone" dataKey="หนังสือส่ง" stroke="#7784d8" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
