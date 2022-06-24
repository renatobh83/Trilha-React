import { Header } from "../components/Header";
import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { Video } from "../components/Video";
import { Sidebar } from "../components/Sidebar";
import { useParams } from "react-router-dom";

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

export function Event() {
  const { slug } = useParams<{ slug: string }>();
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
      <Header />
      <main className="flex flex-1">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1"></div>}

        <Sidebar />
      </main>
    </div>
  );
}
