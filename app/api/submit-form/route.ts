import { Client } from "@notionhq/client"
import { type NextRequest, NextResponse } from "next/server"

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { name, email, message }: { name: string; email: string; message: string } = await request.json()

    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID!,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          email: email,
        },
        Message: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
      },
    })

    return NextResponse.json({ msg: "Success" }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ msg: "There was an error" }, { status: 500 })
  }
}
