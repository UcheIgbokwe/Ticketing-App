import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';



const globalCss = ({ Component, pageProps }) => {
    return <div>
        <h1>Header!</h1>
        <Component {...pageProps} />
    </div>
};

 globalCss.getInitialProps = async appContext => {
    const client = buildClient(appContext.ctx);
    const { data } = await client.get('/api/users/currentuser');

    //console.log(data);
    
    return data;
 };

export default globalCss;