import Head from "next/head";
import Layout, { siteTitle } from "@/components/layout";
import EventItem from "@/components/eventItem";
import { API_URL } from "@/config/index";

export default function EventsPage({ events }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  return {
    props: {
      events,
    },
    revalidate: 1,
  };
}
