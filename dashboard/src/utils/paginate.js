// Pagination Functional.

export const SavePage = (navigator, info, anotherInfo, page) => {
    navigator(page, {
        state: {
            limit: 10,
            skip: info?.skip ? info?.skip : 0,
            page: info?.page ? info?.page : 1,
            ...anotherInfo,
        },
    });
};

export const SaveParams = (link, navigator, anotherInfo) => {
    navigator(link, {
        state: {
            ...anotherInfo,
        },
    });
};

export const SendPageSave = (navigate, number, info, page) => {
    const _skip = getSkipCount(number, 10);
    const pushInfo = { ...info };
    pushInfo.page = number;
    pushInfo.skip = _skip;
    SavePage(navigate, info, { ...pushInfo }, page);
};

export const getSkipCount = (pageNumber = 0, limitNumber = 0) => {
    return pageNumber <= 1 ? 0 : (pageNumber - 1) * limitNumber;
};
