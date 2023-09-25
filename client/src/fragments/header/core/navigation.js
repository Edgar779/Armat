import { useNavStyles } from './styles';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Icon } from '../../../components/icon';
import { SVGNames } from '../../../constants';
import BusinessIcon from '../../../../public/assets/linksIcons/businessIcon.svg';
import NonIcon from '../../../../public/assets/linksIcons/business.svg';
import PastIcon from '../../../../public/assets/linksIcons/pastIcon.svg';
import UpcomingIcon from '../../../../public/assets/linksIcons/upcomingIcon.svg';
import axios from 'axios';
import { MiniLoader, SlicedText } from 'components';
import SearchAddress from './searchAddress';
import { Colors } from '../../../utils';
import { noImage } from '../../singleEvent';

export const Navigation = ({ token, scrollY, onOpen }) => {
    const route = useRouter();
    const router = useRouter();
    const [windowPath, setWindow] = useState('/');

    useEffect(() => {
        setWindow(route.pathname);
        if (route.pathname === '/pastEvents') {
            sessionStorage.setItem('windowPath', windowPath);
        } else if (route.pathname === '/upcomingEvents') {
            sessionStorage.setItem('windowPath', windowPath);
        }
    }, [route]);

    const routing = [
        { link: '/upcomingEvents', name: 'Upcoming Events', svgName: 'UpcomingIcon' },
        { link: '/pastEvents', name: 'Past Events', svgName: 'PastIcon' },
        { link: '/nonProfit', name: 'Nonprofit', svgName: 'NonIcon' },
        { link: '/business', name: 'Business', svgName: 'BusinessIcon' },
    ];

    const classes = useNavStyles();
    const [show, setShow] = useState(false);
    const [searchedEv, setSearchedEv] = useState([]);
    const [searchedAddress, setSearchedAddress] = useState(false);
    const [loader, setLoader] = useState(false);
    const [values, setValue] = useState('');
    const [location, setLocation] = useState('');
    const [searchText, setSearchText] = useState('');

    const [address, setAddress] = useState('');
    const [searchedEvAddress, setSearchedEvAddress] = useState('');
    const [addressLoader, setAddressLoader] = useState(false);

    const handleGetEventsOrgs = (e, type) => {
        const search = e.target.value;
        setSearchText(search);
        setValue(search);

        const searchBody = {
            searchField: e.target.value,
        };
        setLoader(true);

        axios.post(`/search`, null, { params: { ...searchBody } })
            .then((res) => {
                setSearchedEv(res.data);
                setLoader(false);
            })
            .catch(() => {
                setLoader(false);
            });
    };

    const [showMobileSearch, setShowMobileSearch] = useState(false);

    const [addressShow, setAddressShow] = useState(false);

    const handleOpenCLoseAddress = () => {
        setAddressShow(!addressShow);
        setSearchedAddress(true);
        setShow(false);
    };

    const handleShow = () => {
        setShow(false);
        setShowMobileSearch(false);
        setSearchedAddress(false);
        setAddressShow(false);
        onOpen && onOpen(false);
    };

    const handleGetSearch = () => {
        if (address || searchText) {
            if (address && !address.lat && !address.lng) {
                const data = { address: address };
                axios.post(`/address`, data).then((res) => {
                    const searchBody = {
                        lat: res.data.lat + '',
                        lng: res.data.lng + '',
                        address: address.formattedAddress,
                        zoom: 50000,
                    };
                    searchText ? (searchBody.searchText = searchText) : '';
                    if (res.data) {
                        router.push({
                            pathname: '/search',
                            query: { ...searchBody },
                        });
                    }
                });
            } else {
                if (searchText && address) {
                    router.push({
                        pathname: '/search',
                        query: {
                            searchField: values,
                            lat: address.lat + '',
                            lng: address.lng + '',
                            address: address.formattedAddress,
                            zoom: 50000,
                        },
                    });
                }
                if (!searchText && address) {
                    router.push({
                        pathname: '/search',
                        query: {
                            lat: address.lat + '',
                            lng: address.lng + '',
                            address: address.formattedAddress,
                            zoom: 50000,
                        },
                    });
                }
                if (searchText && !address) {
                    router.push(`search?search=${values}`);
                }
            }
        } else {
            router.push('search');
        }

        setShow(false);
        setShowMobileSearch(false);
        setSearchedAddress(false);
    };

    const handleSearchAddress = (e) => {
        setAddress(e);
    };

    const handleAddress = (e) => {
        const address = { address: e };
        setAddressShow(false);
        axios.post(`/address`, address).then((res) => {
            setAddress(res.data);
            const searchBody = {
                lat: res.data.lat + '',
                lng: res.data.lng + '',
                // zoom: 5000,
            };
            searchText ? (searchBody.searchText = searchText) : '';
            setAddressLoader(true);

            axios
                .post(`/search`, null, { params: { ...searchBody } })
                .then((res) => {
                    setSearchedEvAddress(res.data);
                    setAddressLoader(false);
                })
                .catch(() => {
                    setAddressLoader(false);
                });
        });

        setLocation(e);
        setShow(false);
    };

    const handleOpen = (item) => {
        item && item.name && setSearchText(item.name);
        item && item.title && setSearchText(item.title);

        if (item?.type === 'EVENT') {
            router.push(`singleEvent?eventid=${item.id}`);
        }
        if (item.type === 'BUSINESS' || item.type === 'NON_PROFIT') {
            router.push(`singleOrganization?orgid=${item.id}`);
        }
        setShow(false);
        setShowMobileSearch(false);
        setSearchedAddress(false);
    };

    const handleChangeShowMobile = () => {
        setShowMobileSearch(true);
        onOpen && onOpen(true);
    };

    return (
        <>
            <div className={'desktopSmall'}>
                {show && <div className={classes.backDrop} onClick={handleShow} />}
                <div className={classes.wrappedNavigation}>
                    <div>
                        <div className={classes.searchWrapper}>
                            <div className={classes.find}>
                                <p className={classes.title}>Find</p>
                                <input
                                    value={searchText}
                                    onChange={handleGetEventsOrgs}
                                    onClick={() => setShow(true)}
                                    className={classes.searchInput}
                                    placeholder={'events, organizations…'}
                                />

                                {show && (
                                    <div className={classes.showWrapper}>
                                        <div className={classes.showWrapperBody}>
                                            {loader === true ? (
                                                <MiniLoader />
                                            ) : searchedEv && searchedEv?.length ? (
                                                searchedEv.map(
                                                    (i, j) =>
                                                        i !== null && (
                                                            <div onClick={() => handleOpen(i)} className={classes.searchedCard} key={j}>
                                                                <img src={i?.image ? i?.image?.url : noImage.lgJPG} alt="icon" />
                                                                <div>
                                                                    <span>
                                                                        {
                                                                            <SlicedText
                                                                                notTool={true}
                                                                                type={'address'}
                                                                                size={30}
                                                                                data={i.name ? i.name : ''}
                                                                            />
                                                                        }
                                                                    </span>
                                                                    <SlicedText
                                                                        notTool={true}
                                                                        type={'address'}
                                                                        size={30}
                                                                        data={i?.address?.formattedAddress && i?.address?.formattedAddress}
                                                                    />
                                                                </div>
                                                            </div>
                                                        )
                                                )
                                            ) : (
                                                searchText?.length && <p className={classes.noMatch}>No Matching Results</p>
                                            )}
                                        </div>

                                        {routing.map((i, j) => (
                                            <div onClick={handleShow} key={j} className={classes.menuLinks}>
                                                <Icon color={Colors.ThemeGreen} name={i?.svgName} width={'24px'} height={'24px'} />
                                                <Link key={j} href={i.link}>
                                                    <p> {i?.name}</p>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {searchedAddress && <div className={classes.backDrop} onClick={handleShow} />}
                            <div className={classes.address}>
                                <p className={classes.title}>City</p>
                                <SearchAddress
                                    handleCloseCurrent={() => setAddressShow(false)}
                                    handleOpenCLoseAddress={handleOpenCLoseAddress}
                                    addressShow={addressShow}
                                    type={'searching'}
                                    handleChangeValue={handleSearchAddress}
                                    handleSelectValue={handleAddress}
                                />
                            </div>

                            <button onClick={handleGetSearch} className={classes.searchButton}>
                                <Icon name={SVGNames.SearchIcon} width={'24px'} height={'24px'} />
                                <p>Search</p>
                            </button>
                        </div>

                        {scrollY < 10 && (
                            <div style={{ display: 'flex', marginTop: '14px' }}>
                                {routing.map((i, j) => (
                                    <Link key={j} href={i.link}>
                                        <p className={classes.linkStyle}> {i.name}</p>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className={'tablete'}>
                {showMobileSearch && <div className={classes.backDrop} onClick={handleShow} />}
                <div className={classes.wrappedNavigation}>
                    <div className={classes.mobileSearchingWrap}>
                        <div className={classes.searchMobileWrapper}>
                            <button className={classes.mobileAddressSearch}>
                                <Icon name={SVGNames.SearchBlueIcon} width={'24px'} height={'24px'} color={Colors.ThemeGreen} />
                            </button>
                            <input
                                value={searchText}
                                onChange={handleGetEventsOrgs}
                                onClick={handleChangeShowMobile}
                                placeholder={'Start your search'}
                            />
                            <button className={classes.mobileAddressSearchButton} onClick={handleGetSearch}>
                                <Icon name={SVGNames.SearchIcon} width={'24px'} height={'24px'} color={Colors.ThemeGreen} />
                            </button>
                        </div>
                        <div>
                            {showMobileSearch && searchText.length ? (
                                <div className={classes.showWrapperMobileShow}>
                                    <div className={classes.showWrapperBody}>
                                        {loader === true ? (
                                            <MiniLoader />
                                        ) : searchedEv && searchedEv.length ? (
                                            searchedEv.map((i, j) => (
                                                <div onClick={() => handleOpen(i)} className={classes.searchedCard} key={j}>
                                                    <img src={i?.image ? i?.image?.url : noImage.lgJPG} alt="icon" />
                                                    <div>
                                                        <span>
                                                            {<SlicedText type={'address'} size={30} data={i?.name ? i?.name : ''} />}
                                                        </span>
                                                        <SlicedText
                                                            type={'searchedAddress'}
                                                            size={30}
                                                            data={i?.address?.formattedAddress && i?.address?.formattedAddress}
                                                        />
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            searchText.length && <p className={classes.noMatch}>No Matching Results</p>
                                        )}
                                    </div>

                                    {routing.map((i, j) => (
                                        <div onClick={handleShow} key={j} className={classes.menuLinks}>
                                            <Icon name={i.svgName} width={'24px'} height={'24px'} />
                                            <Link key={j} href={i.link}>
                                                <p> {i.name}</p>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                ''
                            )}
                        </div>

                        {showMobileSearch && (
                            <div className={classes.searchMobileWrapper}>
                                <button className={classes.mobileAddressSearch}>
                                    <Icon color={Colors.ThemeGreen} name={SVGNames.LocationIcon} width={'24px'} height={'24px'} />
                                </button>
                                <SearchAddress
                                    handleCloseCurrent={() => setAddressShow(false)}
                                    handleOpenCLoseAddress={handleOpenCLoseAddress}
                                    addressShow={addressShow}
                                    type={'searching'}
                                    handleChangeValue={handleSearchAddress}
                                    handleSelectValue={handleAddress}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
