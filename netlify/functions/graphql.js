exports.handler = async function(event, context) {
	//const query = 'query Query { country (code: "BR") {	name capital } }';
	console.log(event.body);
	const { countryCode } = JSON.parse(event.body);

	try {
		const query = `
			query Query {
			  country (code: "${countryCode}") {
			    name
			    capital
			  }
			}
		`;
		const response = await fetch('https://countries.trevorblades.com/graphql', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				//'cache': 'no-cache',
			},
			body: JSON.stringify({query}),
		});
		
		const data = await response.json();
		
		return {
			statusCode: 200,
			body: JSON.stringify(data),
		};
	} catch(error) {
		return {
			statusCode: 500,
			body: JSON.stringify({ error: 'Internal Server Error'}),
		}
	}
};
