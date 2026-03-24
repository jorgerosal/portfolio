import { promises as fs } from "fs";
import path from "path";

const counterFilePath = path.join(process.cwd(), "data", "page-counter.json");

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

async function readCounter() {
  const raw = await fs.readFile(counterFilePath, "utf8");
  const parsed = JSON.parse(raw) as { count?: number };

  return typeof parsed.count === "number" ? parsed.count : 10539;
}

async function writeCounter(count: number) {
  await fs.writeFile(
    counterFilePath,
    JSON.stringify({ count }, null, 2),
    "utf8",
  );
}

export async function GET() {
  try {
    const currentCount = await readCounter();
    const nextCount = currentCount + 1;

    await writeCounter(nextCount);

    return Response.json(
      { count: nextCount },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      },
    );
  } catch {
    return Response.json(
      { count: 10539, error: "counter_unavailable" },
      {
        status: 500,
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      },
    );
  }
}
