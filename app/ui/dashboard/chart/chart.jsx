"use client"

import styles from './chart.module.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "Sun",
    หนังสือส่ง: 40,
    หนังสือรับ: 24,
    บันทึกข้อความ: 23,
  },
  {
    name: "Mon",
    หนังสือส่ง: 30,
    หนังสือรับ: 13,
    บันทึกข้อความ: 24,
  },
  {
    name: "Tue",
    หนังสือส่ง: 20,
    หนังสือรับ: 38,
    บันทึกข้อความ: 21,    
  },
  {
    name: "Wed",
    หนังสือส่ง: 27,
    หนังสือรับ: 39,
    บันทึกข้อความ: 22,
  },
  {
    name: "Thu",
    หนังสือส่ง: 18,
    หนังสือรับ: 48,
    บันทึกข้อความ: 25,
  },
  {
    name: "Fri",
    หนังสือส่ง: 23,
    หนังสือรับ: 38,
    บันทึกข้อความ: 26,
  },
  {
    name: "Sat",
    หนังสือส่ง: 34,
    หนังสือรับ: 43,
    บันทึกข้อความ: 23,
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
          <Line type="monotone" dataKey="บันทึกข้อความ" stroke="#ff0202" strokeDasharray="4 6 3 7" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
