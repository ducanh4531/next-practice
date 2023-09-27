"use client";

interface ErrorPageProps {
	error: Error;
	reset: () => void;
}

// * NOTE: IN REAL APPLICATION, WE USUALLY LOG ERRORS USING A LOGGING SERVICE
// * EG: SENTRY, ETC.

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
	console.log("Error", error);
	return (
		<>
			<div>An unexpected error has occurred.</div>
			<button className="btn" onClick={() => reset()}>
				Retry
			</button>
		</>
	);
};

export default ErrorPage;
