import React from "react";
import {Images} from "theme";
import {Paper, Table, TableContainer} from "@material-ui/core";
import {ClaimTableBodyFragment, ClaimTableHeadFragment} from "./claimTable";
import {Item} from "./item";
import {organizationInfoStyles} from "./styles";
import {Manager} from "./manager";
import {HtmlTooltip} from "components";
import {AvailableHourseBox} from "../../../components/availability/availableHourseBox";
import {AvailableHours} from "../../../components/availability";

export const Claims = ({claims, handleEdit, handleArchive, handleOpen, item}) => {
    const classes = organizationInfoStyles()

    return (
        <div className={classes.ClaimsWrapper}>
            <div>
                <div className={classes.claimsButtons}>
                    <button onClick={handleEdit}>
                        <img src={Images.ed} alt={'edit'}/>
                    </button>
                    <button>
                        <img onClick={handleOpen} src={Images.del} alt={'delete'}/>
                    </button>


                    <HtmlTooltip title={<div>{item.status === "ARCHIVED" ? 'Activate' : 'ARCHIVED'}</div>}
                                 placement="top-end">
                        <button onClick={() => handleArchive(item.status === "ARCHIVED" ? 'ACTIVE' : 'ARCHIVED')}>
                            {item.status === "ARCHIVED" ?
                                <img src={Images.archiveButton} alt={'document'}/>
                                :
                                <img src={Images.doc} alt="icon"/>
                            }
                        </button>
                    </HtmlTooltip>

                </div>
                <p className={classes.title}>Hours of Operation</p>
            </div>
            <div className={classes.itemSection}>
                {item && item.hours &&
                <div>
                    <AvailableHours availabilityData={item && item.hours} />
                </div>
                }
                <p style={{margin: '35px 0 24px 0'}}
                   className={classes.title}>{item.manager ? 'Organization Manager' : 'Claims'}</p>
                {item.manager ?
                    <Manager item={item.manager}/>
                    :
                    <TableContainer style={{boxShadow: 'none'}} component={Paper}>
                        {claims && claims.length ?
                            <Table size="small" aria-label="a dense table">
                                <ClaimTableHeadFragment/>
                                <ClaimTableBodyFragment claims={claims}/>
                            </Table>
                            :
                            <div className={classes.noInfo}>
                                <p>No Claims Yet</p>
                            </div>
                        }
                    </TableContainer>
                }
            </div>
        </div>
    )
}