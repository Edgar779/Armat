import { HtmlTooltip } from './htmlTool';
import React, { useCallback, useState } from 'react';
import { noResultStyle } from './style';

export const SlicedText = ({ data, size, type, color, notTool }) => {
    const classes = noResultStyle();

    const classType =
        type === 'name'
            ? classes.nameEllipsis
            : type === 'address'
            ? classes.addressEllipsis
            : type === 'organAddress'
            ? classes.organAddressEllipsis
            : type === 'email'
            ? classes.emailEllipsis
            : type === 'desc'
            ? classes.desc
            : type === 'id'
            ? classes.id
            : type === 'searchedAddress'
            ? classes.searchAddressEllipsis
            : '';
    return (
        <>
            {notTool === true ? (
                <p style={color ? { color: color } : {}} className={classType}>
                    {data && data.length > size ? `${data.slice(0, size)}...` : data}
                </p>
            ) : data && data.length > size ? (
                <HtmlTooltip title={<p>{data}</p>} placement="top-end">
                    {type === 'desc' ? (
                        <span style={color ? { color: color } : {}} className={classType}>
                            {data && `${data.slice(0, size)}...`}
                        </span>
                    ) : (
                        <p style={color ? { color: color } : {}} className={classType}>
                            {data && `${data.slice(0, size)}...`}
                        </p>
                    )}
                </HtmlTooltip>
            ) : type === 'desc' ? (
                <span>{data}</span>
            ) : (
                <p className={classType}>{data}</p>
            )}
        </>
    );
};

export const TextRow = ({ name, textWidth, color, lightGray }) => {
    const [currentWidth, setCurrentWidth] = useState(null);

    const curr = useCallback((node) => {
        if (node !== null) {
            setCurrentWidth(node.getBoundingClientRect().width);
        }
    }, []);

    const width = currentWidth ? currentWidth : 'auto';

    const text = (name ? name : '...') + '';

    return (
        <div ref={curr} className={lightGray ? 'text-style-light' : 'text-style'}>
            {RenderText(width, text, textWidth, color)}
        </div>
    );
};

const RenderText = (width, text, textWidth, color) => {
    if (text) {
        const count = Math.ceil(width / (textWidth ? textWidth : 10));
        const slicedText = '' + text?.slice(0, count);
        return (
            <div className="text-style" style={color ? { color: color } : {}}>
                {text?.length > count ? (
                    <HtmlTooltip title={<p>{text}</p>} placement="top-start">
                        <p style={{ textOverflow: 'ellipsis' }}>{`${slicedText}...`}</p>
                    </HtmlTooltip>
                ) : (
                    <p>{text}</p>
                )}
            </div>
        );
    } else {
        return '...';
    }
};
