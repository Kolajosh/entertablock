import React from "react";
import DashboardWrapper from "../../../components/layout/DashboardWrapper";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { PieChart } from "react-minimal-pie-chart";
import { CustomButton } from "../../../components/buttons/CustomButton";

const Earnings = () => {
  const data = [
    { name: "Jan", uv: 550, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 800, pv: 1398, amt: 2210 },
    { name: "Mar ", uv: 900, pv: 9800, amt: 2290 },
    { name: "Apr ", uv: 400, pv: 3908, amt: 2000 },
    { name: "May ", uv: 1000, pv: 4800, amt: 2181 },
    { name: "Jun ", uv: 300, pv: 3800, amt: 2500 },
    { name: "Jul ", uv: 700, pv: 4300, amt: 2100 },
    { name: "Sep ", uv: 500, pv: 3200, amt: 2400 },
    { name: "Oct ", uv: 600, pv: 9800, amt: 2290 },
    { name: "Nov ", uv: 200, pv: 3908, amt: 2000 },
    { name: "Dec ", uv: 100, pv: 4800, amt: 2181 },
  ];

  return (
    <>
      <DashboardWrapper>
        <div className="text-white flex justify-between items-center mt-10 mx-20">
          <div className="font-semibold text-2xl font-jarkata">Earnings</div>
          <div className="space-x-3">
            <select className="text-white py-2 px-2 rounded-full items-center bg-[#2F2F2F] border border-[#434141]">
              <option value="">All Songs</option>
            </select>
            <select className="text-white py-2 px-2 rounded-full items-center bg-[#2F2F2F] border border-[#434141]">
              <option value="2023">2023</option>
            </select>
          </div>
        </div>
        <div className="mx-20 font-jarkata grid gap-5 grid-cols-1 md:grid-cols-3">
          <div className="col-span-1 rounded-3xl w-full h-auto bg-[#1E1E1E] border border-[#2F2F2F] space-y-5 p-5 mt-10 text-white font-jarkata">
            <div className="text-xl font-semibold">Wallet</div>
            <hr className="border border-[#2F2F2F]" />
            <div className="flex flex-col justify-center items-center">
              <div>Receive your royalties and earning with ease</div>
              <div>
                <CustomButton labelText={"Connect Wallet"} variant="primary" />
              </div>
            </div>
          </div>

          <div className="col-span-2 p-5 rounded-3xl w-full h-auto bg-[#1E1E1E] border border-[#2F2F2F] space-y-5 mt-10 text-white font-jarkata ">
            <div className="flex justify-between items-center ">
              <div>
                <div className="text-sm">Streams</div>
                <div className="text-3xl font-semibold">5,300</div>
              </div>
              <div>
                <select className="text-white py-2 px-2 rounded-full items-center bg-[#2F2F2F] border border-[#434141]">
                  <option value="2023">All Platforms</option>
                </select>
              </div>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <td>Country</td>
                  <td>Streams</td>
                  <td>Total Revenue</td>
                  <td>Net Payable</td>
                </tr>
              </thead>
              <tbody className="">
                <tr>
                  <td>Nigeria</td>
                  <td>5,720,394</td>
                  <td>5.7ETH</td>
                  <td>1.124ETH</td>
                </tr>
                <tr>
                  <td>Nigeria</td>
                  <td>5,720,394</td>
                  <td>5.7ETH</td>
                  <td>1.124ETH</td>
                </tr>
                <tr>
                  <td>Nigeria</td>
                  <td>5,720,394</td>
                  <td>5.7ETH</td>
                  <td>1.124ETH</td>
                </tr>
                <tr>
                  <td>Nigeria</td>
                  <td>5,720,394</td>
                  <td>5.7ETH</td>
                  <td>1.124ETH</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mx-20 font-jarkata grid gap-5 grid-cols-1 md:grid-cols-2">
          <div className="col-span-1 p-5 rounded-3xl w-full h-auto bg-[#1E1E1E] border border-[#2F2F2F] space-y-5 mt-10 text-white font-jarkata ">
            <div className="text-xl font-semibold">Token</div>
            <hr className="border border-[#2F2F2F]" />
            <div className="flex justify-between items-center">
              <div>Nigeria</div>
              <div>6993</div>
            </div>
            <div className="flex justify-between items-center">
              <div>United States</div>
              <div>2000</div>
            </div>
            <div className="flex justify-between items-center">
              <div>Germany</div>
              <div>700</div>
            </div>
            <div className="flex justify-between items-center">
              <div>Australia</div>
              <div>300</div>
            </div>
            <div className="flex justify-between items-center">
              <div>Portugal</div>
              <div>200</div>
            </div>
          </div>
          <div className="col-span-1 p-5 rounded-3xl w-full h-auto bg-[#1E1E1E] border border-[#2F2F2F] space-y-5 mt-10 text-white font-jarkata ">
            <div className="text-xl font-semibold">Activity</div>
            <hr className="border border-[#2F2F2F]" />
            <div className="text-center">No Activity Yet</div>
          </div>
        </div>
      </DashboardWrapper>
    </>
  );
};

export default Earnings;
