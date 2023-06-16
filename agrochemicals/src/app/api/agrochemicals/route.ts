import { NextResponse, NextRequest } from "next/server";
import clientPromise from "../../../../lib/mongodb";
import "dotenv/config"
import { FindCursor, WithId } from "mongodb";

export async function GET(request : NextRequest ) : Promise<NextResponse<object>> {
   
   const client = await clientPromise
   const db = client.db("agrochemicals")
   const crops = await db.collection("crop").find({}).toArray()
   const categories = await db.collection("category").find({}).toArray()
   const enemies = await db.collection("enemy").find({}).toArray()

   
   return NextResponse.json({crops, categories,enemies})
}