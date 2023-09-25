import {HtmlTooltip} from "./htmlTool";
import React from "react";
import {screensStyle} from "./styles";


export const SlicedText = ({data, size, type}) => {
    const classes = screensStyle()

    const classType = type === 'name' ? classes.nameEllipsis :
        type === 'address' ? classes.addressEllipsis :
            type === 'email' ? classes.emailEllipsis :
                type === 'desc' ? classes.desc :
                    type === 'id' ? classes.id :

                        ''
    return (
        <>
            {data && data.length > size ?
                <HtmlTooltip
                    title={<p>{data}</p>}
                    placement="top-end"
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
