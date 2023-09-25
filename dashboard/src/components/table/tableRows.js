import React, {useCallback, useState} from 'react'
import moment from "moment";
import {NumericFormat} from 'react-number-format'
import { withStyles } from "@mui/styles";
import { Tooltip } from "@mui/material";

export const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
        maxWidth: 396,
        // background: Colors.text,
        height: "auto",
        display: "flex",
        alignItems: "center",
        borderRadius: "6px",
        fontSize: "14px",
        // color: Colors.white,
        padding: "6px 16px",
    },
}))(Tooltip);



export const DateRow = ({date, color}) => {
    return (
      <p style={color ? {color:color} : {}}>
          { date ? moment(date).format('MM.DD.YYYY') : 'N/A'}
      </p>
    )
}

export const TextRow = ({name, textWidth, color, lightGray}) => {
    const [currentWidth, setCurrentWidth] = useState(null)

    const curr = useCallback(node => {
        if (node !== null) {
            setCurrentWidth(node.getBoundingClientRect().width);
        }
    }, []);

    const width = currentWidth ? currentWidth : 'auto'

    const text = (name ? name : '...') + ''

    return (
      <div ref={curr} className={lightGray ? 'text-style-light' : 'text-style'}>{RenderText(width, text, textWidth, color)}</div>
    )
}


export const PriceRow = ({info, textWidth, lightGray}) => {
    const [currentWidth, setCurrentWidth] = useState(null)

    const curr = useCallback(node => {
        if (node !== null) {
            setCurrentWidth(node.getBoundingClientRect().width);
        }
    }, []);

    const width = currentWidth ? currentWidth : 250
    const price = (info ? info.toFixed(2) : 0) + ''

    if (price) {
        const count = Math.ceil(width / (textWidth ? textWidth : 11))
        const slicedText = '' + price?.slice(0, count)
        return <div ref={curr} className={lightGray ? 'text-style-light' : 'text-style'}>
            {price?.length > count ?
              <HtmlTooltip
                title={
                    <p>
                        <NumericFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'}/>
                    </p>
                }
                placement="top-start"
              >
                  <p style={{textOverflow: 'ellipsis',}}>
                      <NumericFormat value={slicedText} displayType={'text'} thousandSeparator={true} prefix={'$'}/>...
                  </p>
              </HtmlTooltip>
              :
              <p>{
                  <NumericFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'}/>
              }</p>
            }
        </div>
    } else {
        return '...'
    }
}

export const PhoneRow = ({phone}) => {
    if (phone) {
        const converted = '(' + phone.substr(0, 3) + ') ' + phone.substr(3, 3) + '-' + phone.substr(6, 6);
        return (
          converted
        )
    } else {
        return 'Not Set'
    }
}

export const TypeRow = ({text}) => {
    if (text !== undefined) {
        return (
          text?.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
              return g1.toUpperCase() + g2.toLowerCase();
          })
        )
    }else{
        return '...'
    }
}

const RenderText = (width, text, textWidth,color) => {
    if (text) {

        const count = Math.ceil(width / (textWidth ? textWidth : 11))
        const slicedText = '' + text?.slice(0, count)
        return <div className='text-style' style={color ? {color:color}: {}}>
            {text?.length > count ?
              <HtmlTooltip
                title={<p>{text}</p>}
                placement="top-start"
              >
                  <p style={{textOverflow: 'ellipsis',}}>
                      {`${slicedText}...`}
                  </p>
              </HtmlTooltip>
              :
              <p>{text}</p>
            }
        </div>
    } else {
        return '...'
    }
}

export const PriceConvertor = ({price} ) => {
    const convertedPrice = price ? price.toFixed(2) : 0
    return <NumericFormat value={convertedPrice ? convertedPrice : '0'} displayType={'text'} thousandSeparator={true} prefix={'$'} />

}