import type { StrapiEventData } from "@/types/strapi-custom-types";
import { Suspense } from "react";
import EventCardTile from "@/components/EventCardTile";


export default async function UpcomingEvents({
  events,
}: {
  events: StrapiEventData[];
}) {
  if (!events) return null;

  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="my-10 grid md:grid-cols-2 gap-8">
        {events.map((data: StrapiEventData) => (
          <EventCardTile key={data.id} data={data} />
        ))}
      </div>
    </Suspense>
  );
}
