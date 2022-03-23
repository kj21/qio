import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "@/components/layout";
import EventItem from "@/components/eventItem";
import { API_URL } from "@/config/index";

export default function Home({ events }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      {events.length > 0 && (
        <Link href="/events">
          <a className="btn-secondary">View all events</a>
        </Link>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  return {
    props: {
      events: events.slice(0, 3),
    },
    revalidate: 1,
  };
}