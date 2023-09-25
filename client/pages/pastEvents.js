import { MyEvents } from 'pages';

const MyEventsPage = ({ showAddress }) => {
    return <MyEvents pageType={'pastEvents'} showAddress={showAddress} />;
};

export default MyEventsPage;
