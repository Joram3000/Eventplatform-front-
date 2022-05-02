import React, { useEffect } from "react";
import { fetchEvents } from "../store/Events/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectEvents } from "../store/Events/selector";
import CardComponent from "../components/Card/Card";

export default function EventPage() {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);

  useEffect(() => {
    dispatch(fetchEvents);
  }, []);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center " }}
    >
      {events
        ? events.map((event) => {
            return (
              <CardComponent
                key={event.id}
                title={event.title}
                description={event.description}
                image={event.mainImage}
                place={event.place}
                tickets={event.tickets}
              />
            );
          })
        : "loading"}
    </div>
  );
}
