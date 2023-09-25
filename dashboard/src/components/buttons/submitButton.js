import { MinLoader } from 'components';
import { FindLoad } from 'utils';

export const SubmitButton = ({ title, actionType, type, handleSubmit, styles }) => {
    const loader = FindLoad(actionType);

    const handleCLick = () => {
        if(handleSubmit){
            handleSubmit()
        }
    }

    return (
        <button
          style={{ ...styles }}
          onClick={handleCLick} className="add-button" type={type ? type : 'button'}>
            {loader?.length ? <MinLoader color={'white'} /> : <span className="button-text">{title}</span>}
        </button>
    );
};
