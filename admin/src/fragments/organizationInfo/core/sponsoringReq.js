import {Paper, Table, TableContainer} from "@material-ui/core";
import React from "react";
import {organizationInfoStyles} from "./styles";
import {SponsTableHeadFragment, SponsTableBodyFragment} from "./sponsoringRequest";

export const SponsoringReq = ({ info }) =>{
    const classes = organizationInfoStyles()
    return(
        <div style={{marginTop:'120px'}}>
            <p style={{marginBottom:'24px'}} className={classes.title}>Sponsoring Request</p>
            <TableContainer  style={{boxShadow:'none'}} component={Paper}>
                {info && info.length ?
                    <Table size="small" aria-label="a dense table">
                        <SponsTableHeadFragment/>
                        {info && info.length && info.map((i,j) =>(
                            <React.Fragment key={j}>
                                <SponsTableBodyFragment info={i} />
                            </React.Fragment>
                        ))}
                    </Table>
                    :
                    <div className={classes.noInfo}>
                        <p>No Sponsoring Request</p>
                    </div>
                }

            </TableContainer>
        </div>
    )
}