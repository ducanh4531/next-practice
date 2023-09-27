import prisma from "@/prisma/client";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export async function POST(request: NextRequest) {
	// await the call to get the body of the request
	const body = await request.json();

	const validation = schema.safeParse(body);

	if (!validation.success) {
		return NextResponse.json(validation.error.errors, { status: 400 });
	}

	const user = await prisma.user.findUnique({
		where: { email: validation.data.email },
	});

	if (user) {
		return NextResponse.json(
			{ error: "User already exists" },
			{ status: 400 }
		);
	}

	const saltRounds = 10;
	const hashedPassword = await bcrypt.hash(body.password, saltRounds);

	const newUser = await prisma.user.create({
		data: {
			name: body.name,
			email: body.email,
			hashedPassword,
		},
	});

	return NextResponse.json({ email: newUser.email });
}

export async function PUT(request: NextRequest) {
	const body = await request.json();

	const user = await prisma.user.findUnique({ where: { email: body.email } });

	const saltRounds = 10;

	const hashedPassword = await bcrypt.hash(body.newPassword, saltRounds);

	const passwordsMatch = await bcrypt.compare(
		body.password,
		user?.hashedPassword!
	);

	if (passwordsMatch) {
		await prisma.user.update({
			where: { email: body.email },
			data: { hashedPassword },
		});
	}

	return NextResponse.json({ email: body.email });
}
