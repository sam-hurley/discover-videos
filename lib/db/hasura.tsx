export function queryHasuraGQL(
	operationsDoc: string,
	operationName: string,
	variables: Record<string, any>
) {
	return fetch(process.env.NEXT_PUBLIC_HASURA_ADMIN_URL || "undefined", {
		method: "POST",
		headers: {
			"x-hasura-admin-secret":
				process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET || "undefined",
		},
		body: JSON.stringify({
			query: operationsDoc,
			variables,
			operationName,
		}),
	}).then((result) => result.json());
}
