import { CommonStyle } from './styles';
import ReactHtmlParser from 'react-html-parser';
import { Icon } from 'components';
import { SVGNames } from 'constants/index';
import * as React from 'react';

export const Item = ({ title, value, column, categItem, type, link, target, IconName }) => {
    const classes = CommonStyle();

    return (
        <div style={column ? { flexDirection: 'column', alignItems: 'flex-start' } : {}} className={classes.itemWrapper}>
            {title !== 'Description' && (
                <div className={classes.imageAndIcon}>
                    {IconName && <Icon name={IconName} style={{ marginRight: '12px' }} />}
                    <p>{title} </p>
                </div>
            )}
            {column ? (
                categItem && categItem.length ? (
                    <div className={classes.categoriesWrapper}>
                        {categItem.map((i, j) => (
                            <div key={j} className={classes.whiteItem}>
                                <div className={classes.ellipsis}>
                                    {i.map((k, l) => (
                                        <div className={l === i.length - 1 ? classes.lastRows : classes.rows} key={l}>
                                            <p>
                                                {`${k.text}`}
                                                <span>
                                                    <Icon name={SVGNames.RightArrowIcon} style={{ marginBottom: '-3px' }} />
                                                </span>
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className={classes.whiteItem}>
                        <span>{title === 'Description' ? ReactHtmlParser(value) : value}</span>
                    </div>
                )
            ) : (
                <>
                    {type === 'website' ? (
                        <div>
                            <a className={classes.link} href={link} target={'_blank'} rel="noreferrer">
                                Visit the website{' '}
                            </a>
                        </div>
                    ) : type === 'links' ? (
                        <div>
                            <a target={target} className={classes.link} href={link} rel="noreferrer">
                                {value?.length > 80 ? `${value.slice(0, 80)}...` : value}
                            </a>
                        </div>
                    ) : (
                        <span>{value}</span>
                    )}
                </>
            )}
        </div>
    );
};
