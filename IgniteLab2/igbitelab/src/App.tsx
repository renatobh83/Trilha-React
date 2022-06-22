import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { Video } from "./components/Video";
import { client } from "./lib/apollo";
import { Event } from "./pages/Event";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
      teacher {
        bio
        avatarURL
      }
      slug
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}
export function App() {
  // const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);
  // useEffect(() => {
  //   client
  //     .query({
  //       query: GET_LESSONS_QUERY,
  //     })
  //     .then((res) => console.log(res));
  // }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <Event />
      <main className="flex flex-1">
        <Video />
        <Sidebar />
      </main>
    </div>
  );
}
