import SEO from "util/DefaultSEO";
import { theme } from "util/ChakraTheme";
import { DefaultSeo } from "next-seo";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import "./styles.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				{process.env.NODE_ENV === "production" && process.browser && (
					<>
						<script
							async
							src="https://www.googletagmanager.com/gtag/js?id=G-SE7E1WDWEL"
						/>
						<script
							async
							dangerouslySetInnerHTML={{
								__html: `
								  window.dataLayer = window.dataLayer || [];
								  function gtag(){dataLayer.push(arguments);}
								  gtag('js', new Date());
								
								  gtag('config', 'G-SE7E1WDWEL');
								`,
							}}
						/>
					</>
				)}
				<title>Kryptokurzy.cz</title>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png?v=m2njO944N0"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png?v=m2njO944N0"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png?v=m2njO944N0"
				/>
				<link rel="manifest" href="/site.webmanifest?v=m2njO944N0" />
				<link
					rel="mask-icon"
					href="/safari-pinned-tab.svg?v=m2njO944N0"
					color="#5bbad5"
				/>
				<link rel="shortcut icon" href="/favicon.ico?v=m2njO944N0" />
				<meta name="msapplication-TileColor" content="#000000" />
				<meta name="theme-color" content="#ffffff" />
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, viewport-fit=cover"
				/>
				<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
			</Head>
			<DefaultSeo {...SEO} />
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	);
}

export default MyApp;
