import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export async function GET(
	request: NextRequest,
	{ params }: { params: { id: string } }
) {
	const product = await prisma.product.findUnique({
		where: {
			id: parseInt(params.id),
		},
	});

	if (!product) {
		return NextResponse.json(
			{ error: "Product not found" },
			{ status: 404 }
		);
	}

	return NextResponse.json(product);
}

export async function PUT(
	request: NextRequest,
	{ params }: { params: { id: string } }
) {
	const body = await request.json();
	const validation = schema.safeParse(body);

	const findProductById = await prisma.product.findUnique({
		where: {
			id: parseInt(params.id),
		},
	});

	if (!validation.success) {
		return NextResponse.json(validation.error.errors, { status: 400 });
	}

	if (!findProductById) {
		return NextResponse.json(
			{ error: "Product not found" },
			{ status: 404 }
		);
	}

	const findProductByName = await prisma.product.findUnique({
		where: {
			name: body.name,
		},
	});

	if (findProductByName) {
		return NextResponse.json(
			{
				error: "Product name should be unique",
			},
			{ status: 400 }
		);
	}

	const updatedProduct = await prisma.product.update({
		where: { id: parseInt(params.id) },
		data: { name: body.name },
	});

	return NextResponse.json(updatedProduct);
}

export async function DELETE(
	request: NextRequest,
	{ params }: { params: { id: string } }
) {
	const product = await prisma.product.findUnique({
		where: { id: parseInt(params.id) },
	});

	if (!product) {
		return NextResponse.json(
			{ error: "Product not found" },
			{ status: 404 }
		);
	}

	await prisma.product.delete({ where: { id: product.id } });

	return NextResponse.json({});
}
