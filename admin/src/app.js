import { RouterSwitcher } from './root/routerSwitcher';
import {Toast} from "./components";
import { httpRequestsOnSuccessActions} from "./store";
import {ToastFail, ToastSuccess} from "./utils";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

function App() {
    const dispatch = useDispatch();

    const { httpOnError, httpOnSuccess } = useSelector((state) => ({
        httpOnLoad: state.httpOnLoad,
        httpOnError: state.httpOnError,
        httpOnSuccess: state.httpOnSuccess,
    }));

    const success = httpOnSuccess.length && httpOnSuccess[0].type;
    const error = httpOnError.length && httpOnError[0].type;
    const toastSuccess = ToastSuccess(success);
    const toastFail = ToastFail(error);

    useEffect(() => {
        if (toastSuccess) {
            dispatch(httpRequestsOnSuccessActions.removeSuccess(success));
        }
    }, [toastSuccess]);

    useEffect(() => {
        if (toastFail) {
            // dispatch(httpRequestsOnErrorsActions.removeError(error));
        }
    }, [toastFail]);

    return (
        <div>
            <RouterSwitcher />

            <Toast
                type={toastSuccess ? 'success' : toastFail ? 'error' : ''}
                text={toastSuccess ? toastSuccess : toastFail ? toastFail : ''}
                info={toastSuccess ? !!toastSuccess : toastFail ? !!toastFail : ''}
            />
        </div>
    );
}

export default App;
