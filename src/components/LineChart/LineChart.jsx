
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const LineChart = () => {
const studentMarks = [
  { id: 1, name: "John Smith", math_marks: 85, physics_marks: 78, chemistry_marks: 92 },
  { id: 2, name: "Emily Johnson", math_marks: 78, physics_marks: 85, chemistry_marks: 70 },
  { id: 3, name: "Michael Davis", math_marks: 92, physics_marks: 88, chemistry_marks: 78 },
  { id: 4, name: "Sarah Wilson", math_marks: 65, physics_marks: 72, chemistry_marks: 60 },
  { id: 5, name: "David Lee", math_marks: 70, physics_marks: 65, chemistry_marks: 75 },
  { id: 6, name: "Jessica Brown", math_marks: 88, physics_marks: 92, chemistry_marks: 85 },
  { id: 7, name: "Matthew Taylor", math_marks: 75, physics_marks: 70, chemistry_marks: 68 },
  { id: 8, name: "Olivia Miller", math_marks: 82, physics_marks: 78, chemistry_marks: 80 },
  { id: 9, name: "William Moore", math_marks: 90, physics_marks: 85, chemistry_marks: 88 },
  { id: 10, name: "Sophia Anderson", math_marks: 72, physics_marks: 68, chemistry_marks: 72 }
];

    return (
        <div className=' p-10'>
        <h2 className='my-10 text-6xl font-bold text-center'>Practicing Charts</h2>  
      <div className='space-y-10'>
         <p className='text-2xl font-bold'>Math Marks</p>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={studentMarks}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis className='hidden lg:inline'  dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="math_marks" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
         <p className='text-2xl font-bold'>Physics Marks</p>

        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={studentMarks}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis className='hidden lg:inline'  dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="physics_marks" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
          <p className='text-2xl font-bold'>Chemistry Marks</p>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={studentMarks}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis className='hidden lg:inline'  dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="chemistry_marks" stroke="#82ca9d" fill="red" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
        </div>
    );
};

export default LineChart;