import { useContext } from 'react';
import { useRouter } from 'next/router';
import { OrangeButton } from 'components';
import { ModalContext } from 'contexts';

export const HeaderButton = ({ buttonCont, token }) => {
    const route = useRouter();
    let { openModal } = useContext(ModalContext);
    const button = {
        width: '199px',
        '@media (max-width: 767px)': {
            width: '182px',
        },
    };
    return (
        <OrangeButton
            width={'182px'}
            height={'48px'}
            button={button}
            buttonText={buttonCont}
            handleClick={token ? () => route.push('/upcomingEvents') : openModal.auth}
        />
    );
};
