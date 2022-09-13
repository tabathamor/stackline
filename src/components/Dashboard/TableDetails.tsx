import React from "react";
import * as AiIcons from 'react-icons/ai';
import Moment from 'moment';


export interface Props {
    report: Items[];
}

export interface Items {
    retailSales: number,
    retailerMargin: number,
    unitsSold: number,
    weekEnding: string,
    wholesaleSales: number
}

const currencyFormat = (num: number) => {
    return '$' + num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const numberFormat = (value: number) =>
    new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'USD'
    }).format(value);

export const formatDate = Moment().format('DD-MM-YY')

const TableDetails = (props: Props) => {

    return (
        <>
            <table className="table">
                <thead>
                    <tr className="title text-center pb-4">
                        <th scope="col">Week Ending <AiIcons.AiOutlineDown opacity={0.6} /></th>
                        <th scope="col" >Retail Sales <AiIcons.AiOutlineDown opacity={0.6} /></th>
                        <th scope="col">Wholesale Sales <AiIcons.AiOutlineDown opacity={0.6} /></th>
                        <th scope="col">Units Sold <AiIcons.AiOutlineDown opacity={0.6} /></th>
                        <th scope="col">Retailer Margin <AiIcons.AiOutlineDown opacity={0.6} /></th>
                    </tr>
                </thead>
                <tbody>
                    {props.report.map((datass) => (
                        
                        <tr className="subtitle text-center">
                            <th scope="row">{datass.weekEnding}</th>
                            <td>  {currencyFormat(datass.retailSales)}</td>
                            <td>{currencyFormat(datass.wholesaleSales)}</td>
                            <td>{currencyFormat(datass.unitsSold)}</td>
                            <td>{currencyFormat(datass.retailerMargin)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    );
}

export default TableDetails;