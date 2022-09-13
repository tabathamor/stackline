import React, { useState } from 'react';
import './index.css';
import Navbar from '../Navbar';
import { Data } from '../../Data/Data';
import BarChar from '../Graph/BarChar';
import TableDetails from './TableDetails';

const Dashboard = () => {

  const [data, setData] = useState(Data);
  const dataSales = data.sales;
  const dataS = dataSales;
  console.log(data.sales, "aqui");

  return (
    <>
      <Navbar />
      <div className='container-fluid mt-4 overflow-auto'>
        <div className="row h-100">
          <div className='col-lg-2 col-12'></div>
          <div className=" col-lg-2 col-12 position-fixed h-100">
            <div className="dashboardCard-vertical">
              <img src={data.image} width={150} />
              <div className="cardTitle mt-3">{data.brand}</div>
              <p className="cardText w-75 text-center">{data.subtitle}</p>
              <div className="solid" ></div>
              <div className='mt-3 mb-3 flex-container d-flex'>
                {data.tags?.map(tag => (<span className="badged m-2">{tag}</span>))}
              </div>
              <div className="solid"></div>
            </div>
          </div>

          <div className="col-lg-10 col-12 ">
            <div className="dashboardCard-hy h-400">
              <p className="retailTitle text-left">Retail sales</p>
              <BarChar />
            </div>

            <div className="dashboardCard-hy h-200">
              <TableDetails report={dataS} />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard