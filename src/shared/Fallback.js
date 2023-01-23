import React from "react";

export function Fallback({status, children}) {
	if (status.loading)
		return <div>...</div>

	return children;
}