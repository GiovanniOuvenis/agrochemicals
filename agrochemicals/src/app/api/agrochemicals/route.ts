import { NextResponse } from "next/server";
import clientPromise from "../../../../lib/mongodb";


export async function GET( ) {   
   const client = await clientPromise
   const db = client.db("agrochemicals")
   const chemicals = await db.collection("chemical").find({}).toArray()
   return NextResponse.json(chemicals)
}