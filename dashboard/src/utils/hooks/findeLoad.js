// Finde Load.

import { useSelector } from "react-redux";

export const FindLoad = (status) => {
  const { httpOnLoad } = useSelector((state) => ({
    httpOnLoad: state.httpOnLoad,
  }));
  return (
    httpOnLoad && httpOnLoad?.length && httpOnLoad.find((i) => i === status)
  );
};
