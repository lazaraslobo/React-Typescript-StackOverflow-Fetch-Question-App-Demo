import React from 'react';
import { options } from '../Grid'
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import {CardDataInterface} from '../data.comp.interfaces';

const TableWrapper = styled.table`width : 100%`;

interface tablePropsInterface{
    data            :   [],
    onClickRow(data : CardDataInterface)  :  any
}

const RenderTableView = (tableprops : tablePropsInterface) =>{
    console.log("incoming ", tableprops);
    return (
        <Grid {...options.contRowCenterCenter}>
          <Grid item xs={12}>
            <TableWrapper >
              <thead>
                <tr className="table-header">
                  <th>Sl. No</th>
                  <th>Author</th>
                  <th>Title</th>
                  <th>Creation Date</th>
                </tr>
              </thead>
              <tbody>
                {
                  tableprops.data.map((eachElem : CardDataInterface, index)=>
                    <tr className="table-row-data stackQACard" key={index} onClick={()=>tableprops.onClickRow(eachElem)}>
                      <td>{index+1}</td>
                      <td>{eachElem.owner.display_name}</td>
                      <td>{eachElem.title}</td>
                      <td>{eachElem.creation_date}</td>
                    </tr>
                  )
                }
              </tbody>
            </TableWrapper>
          </Grid>
        </Grid>
    )
  }

  export default RenderTableView;