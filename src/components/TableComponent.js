import React from 'react';
import { Table } from 'react-bootstrap';
import "./TableComponent.css"

export default function TableComponent() {
    return (
        <Table responsive>
            <thead className='table-header-wrapper'>
                <tr className='table-header'>
                    <th className='table-header-item' >Token</th>
                    <th className='table-header-item1'>Price</th>
                    <th className='table-header-item1'>Txns</th>
                    <th className='table-header-item1'>Volume</th>
                    <th className='table-header-item1'>5M</th>
                    <th className='table-header-item1'>1H</th>
                    <th className='table-header-item1'>6H</th>
                    <th className='table-header-item1'>24H</th>
                    <th className='table-header-item1'>Liquidity</th>
                    <th className='table-header-item1'>FDV</th>
                </tr>
            </thead>
            <tbody>
                <tr >
                    <td className='styles'>
                        <div className='container1'>
                            <p className='container' >1</p>
                            <p className='container' >1</p>
                        </div>
                    </td>
                    <td className='styles1' >$386.76</td>
                    <td className='styles1' >90,974  </td>
                    <td className='styles1' >$49M </td>
                    <td className='styles1' >0.03% </td>
                    <td className='styles1' >0.05% </td>
                    <td className='styles1' >1.29% </td>
                    <td className='styles1' >-1.76 </td>
                    <td className='styles1' >$267M </td>
                    <td className='styles1' >$2.02B </td>
                </tr>
                <tr>
                    <td className='styles'>2</td>
                    <td className='styles1' >$386.76</td>
                    <td className='styles1' >90,974  </td>
                    <td className='styles1' >$49M </td>
                    <td className='styles1' >0.03% </td>
                    <td className='styles1' >0.05% </td>
                    <td className='styles1' >1.29% </td>
                    <td className='styles1' >-1.76 </td>
                    <td className='styles1' >$267M </td>
                    <td className='styles1' >$2.02B </td>
                </tr>
                <tr>
                    <td className='styles'>3</td>
                    <td className='styles1' >$386.76</td>
                    <td className='styles1' >90,974  </td>
                    <td className='styles1' >$49M </td>
                    <td className='styles1' >0.03% </td>
                    <td className='styles1' >0.05% </td>
                    <td className='styles1' >1.29% </td>
                    <td className='styles1' >-1.76 </td>
                    <td className='styles1' >$267M </td>
                    <td className='styles1' >$2.02B </td>
                </tr>
            </tbody>
        </Table>
    );
}
