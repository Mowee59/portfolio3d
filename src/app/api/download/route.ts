import {  NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET() {
  const filePath = path.join(process.cwd(), "files", "main.pdf");
  const stat = fs.statSync(filePath);

  const headers = new Headers();
  headers.set("Content-Length", stat.size.toString());
  headers.set("Content-Type", "application/pdf");
  headers.set("Content-Disposition", "attachment; filename=example.pdf");

  const fileStream = fs.createReadStream(filePath);

  // Convert Node.js ReadStream to Web ReadableStream
  const readableStream = new ReadableStream({
    start(controller) {
      fileStream.on("data", (chunk) => controller.enqueue(chunk));
      fileStream.on("end", () => controller.close());
      fileStream.on("error", (err) => controller.error(err));
    },
  });

  return new NextResponse(readableStream, {
    headers,
  });
}
