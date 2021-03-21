import type { NextApiRequest, NextApiResponse } from "next";
import * as hubspot from "@hubspot/api-client";

const client = new hubspot.Client({
	apiKey: process.env.HUBSPOT_KEY,
});

type Body = {
	first_name: string;
	email: string;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const body = req.query as Body;
		const createdContact = await client.crm.contacts.basicApi.create({
			properties: {
				email: body.email,
				lifecyclestage: "subscriber",
			},
		});

		return res.status(201).json(createdContact);
	} catch (e) {
		console.error(e);
		res.status(e.statusCode).json(e);
	}
};
