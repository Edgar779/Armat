import {HtmlTooltip} from "./HtmlTool";
import React from "react";
import { errMessageStyle } from './styles';


export const SlicedText = ({data, size, type}) => {
    const globalText = errMessageStyle()

    const classType =
        type === 'name' ? globalText.nameEllipsis :
            type === 'bigText' ? globalText.nameEllipsisBig :
                type === 'tableName' ? globalText.tableNameEllipsis :
                    type === 'address' ? globalText.addressEllipsis :
                        type === 'email' ? globalText.emailEllipsis :
                            type === 'desc' ? globalText.desc :
                                type === 'id' ? globalText.id :
                                    ''
    return (
        <>
            {data && data.length > size ?
                <HtmlTooltip
                    title={<p>{data}</p>}
                    placement="top-start"
                >

                    {type === 'desc' ?
                        <span className={classType}>
                            {data && `${data.slice(0, size)}...`}
                        </span>
                        :
                        <p className={classType}>
                            {data && `${data.slice(0, size)}...`}
                        </p>
                    }
                </HtmlTooltip>
                :
                type === 'desc' ?
                    <span>{data}</span>
                    :
                    <p className={classType}>{data}</p>
            }

        </>
    )
}
