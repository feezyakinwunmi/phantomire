import { launchIcs } from "../../lib/launch";

/** Calendar file for the launch event, used by the "Add to calendar" buttons. */
export function GET() {
  return new Response(launchIcs(), {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'attachment; filename="phantomire-launch.ics"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
