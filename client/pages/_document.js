import { Children } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import { theme } from 'theme';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="theme-color" content={theme.palette.primary.main} />
                    <meta name="viewport" content="width=device-width, user-scalable=no" />
                    {/*<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />*/}
                    <script src="https://kit.fontawesome.com/030cda6e9e.js" crossOrigin="anonymous" />

                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-V740X4PC9E"></script>

                    {/*Google Analytics Start*/}
                    <script
                        dangerouslySetInnerHTML={{
                            __html: ` window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-V740X4PC9E');
                         `,
                        }}
                    />
                    {/*Google Analytics End*/}

                    {/*HotJar Start*/}
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:2414392,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
                        }}
                    />
                    {/*HotJar End*/}

                    {/*Tawk.to Start*/}
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/60e63d86d6e7610a49aa28e3/1fa1m0lfn';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
`,
                        }}
                    />
                    {/*Tawk.to End*/}

                    {/* <script
                        async
                        defer
                        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDnEVZH42jb76dK1GxIj1fqMXEWkBFJe80&libraries=places"
                    /> */}


                    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDnEVZH42jb76dK1GxIj1fqMXEWkBFJe80&libraries=places" />
                    <link
                        href="https://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,700italic,400,600,700,800"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [...Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
};
