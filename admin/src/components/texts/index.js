/**Texts components export index */

import { useCallback, useState } from "react";
import { HtmlTooltip } from "../screens";
export { SliceText } from './sliceText';


export const TextRow = ({name, textWidth, color}) => {
  const [currentWidth, setCurrentWidth] = useState(null)

  const curr = useCallback(node => {
    if (node !== null) {
      setCurrentWidth(node.getBoundingClientRect().width);
    }
  }, []);

  const width = currentWidth ? currentWidth : 'auto'

  const text = (name ? name : '...') + ''

  return (
    <div ref={curr} className='text-style'>{RenderText(width, text, textWidth, color)}</div>
  )
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