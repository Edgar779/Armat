import {organizationInfoStyles} from './styles';
import ReactHtmlParser from 'react-html-parser';
import {Images} from "theme";


export const Item = ({ title, value, column, categItem, type }) => {
    const classes = organizationInfoStyles()
    return (
        <div style={column ? { flexDirection: 'column', alignItems: 'flex-start' } : {}} className={classes.itemWrapper}>
            <p>{title} </p>
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
                                                    <img style={{marginBottom:'-4px'}} src={Images.rightArrowIcon} alt={'rightArrowIcon'}/>
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
                        <p>{title === 'Description' ? ReactHtmlParser(value) : value}</p>
                    </div>
                )
            ) : type === 'website' ? (
                <a className={classes.link} href={value} target={'_blank'} rel="noreferrer">
                    Visit the website{' '}
                </a>
            ) : (
                <span>{value}</span>
            )}
        </div>
    );
};
