import 'bootstrap/dist/css/bootstrap.css';

import buildClient from '../api/build-client';
import Header from '../components/header';



const globalCss = ({ Component, pageProps, currentUser }) => {
    return <div>
        <Header currentUser={currentUser}/>
        <Component {...pageProps} />
    </div>
};

 globalCss.getInitialProps = async appContext => {
    const client = buildClient(appContext.ctx);
    const { data } = await client.get('/api/users/currentuser');

    let pageProps = {};
    if(appContext.Component.getInitialProps)
    {
        pageProps = await appContext.Component.getInitialProps(appContext.ctx);
    }


    return {
        pageProps,
        ...data
    }
 };

export default globalCss;