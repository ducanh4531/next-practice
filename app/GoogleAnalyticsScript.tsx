import Script from "next/script";

const GoogleAnalyticsScript = () => {
	return (
		<>
			<Script
				async
				src="https://www.googletagmanager.com/gtag/js?id=G-K06FFZGBFF"
			/>
			<Script id="google-analytics">
				{/* Typescript compiler doesn't know about dataLayer - global object */}
				{/* so wrapping all code below into string as a child to the component 
				and Script component will parse the string and interpret it as JS code */}
				{`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-K06FFZGBFF');`}
			</Script>
		</>
	);
};

export default GoogleAnalyticsScript;
