import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

// * Next.js will cache the result of this response
// * if we remove request parameter
export async function GET(request: NextRequest) {
	const users = await prisma.user.findMany();

	return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
	const body = await request.json();
	// * Once read the body of the request => need to validate it
	// * If invalid, return 400, otherwise, return the data that was created
	const validation = schema.safeParse(body);

	if (!validation.success) {
		return NextResponse.json(validation.error.errors, { status: 400 });
	}

	const user = await prisma.user.findUnique({
		where: { email: body.email },
	});

	if (user) {
		return NextResponse.json(
			{ error: "User already exists" },
			{ status: 400 }
		);
	}

	const newUser = await prisma.user.create({
		data: { name: body.name, email: body.email },
	});

	return NextResponse.json(newUser, { status: 201 });
}