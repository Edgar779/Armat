import { MyEvents } from 'pages';

const MyEventsPage = ({ showAddress }) => {
    return <MyEvents pageType={'upcomingEvents'} showAddress={showAddress} />;
};

export default MyEventsPage;
