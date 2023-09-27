import { ReactNode } from "react";

const InputSpacer = ({ children }: { children: ReactNode }) => {
	return <div className="mb-6">{children}</div>;
};

export default InputSpacer;
