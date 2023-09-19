import axios from "axios";
import { useEffect, useState } from "react";


import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink"
];
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


import { Dna } from "react-loader-spinner";
const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [obj, setObj] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(response => response.json())
    // .then(data => setPhones(data.data))
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const newData = phoneData.map((phone) => {
          const newObj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return newObj;
        });

        return setObj(newData), setPhones(data.data.data), setLoader(false);
      });
    console.log(obj);
  }, []);
  return (
    <div>
      <h2 className="text-5xl font-bold text-center my-10">
        Phones with axios fetch
      </h2>
      {loader && (
        <div className="flex justify-center">
          <Dna
            visible={true}
            height="500"
            width="500"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      )}
      <div className="md:grid grid-cols-4 gap-4 m-10">
        {phones.map((phone, idx) => {
          return (
            <div key={idx} className="card bg-base-100 shadow-xl">
              <figure>
                <img src={phone.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{phone.brand}</h2>
                <p>{phone.phone_name}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="px-10">
        <p className="text-2xl font-bold text-center">Pricing</p>

        <div className="lg:flex justify-center hidden">
          <BarChart width={1200} height={500} data={obj}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name"/>
            <YAxis />
            <Bar
              dataKey="price"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {obj.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Phones;
