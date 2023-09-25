export const ImgCard = ({ classes, data, noImage }) => {
    return data?.images?.length > 0 ? (
        <img height={406} width={556} className={classes.img} alt="" src={data.images[data.eventImage ? data.eventImage : 0].url} />
    ) : (
        <img height={406} width={556} className={classes.imgNoImage} alt="" src={noImage} />
    );
};
