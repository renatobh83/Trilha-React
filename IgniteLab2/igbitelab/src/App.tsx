import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { client } from "./lib/apollo";

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
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);
  // useEffect(() => {
  //   client
  //     .query({
  //       query: GET_LESSONS_QUERY,
  //     })
  //     .then((res) => console.log(res));
  // }, []);
  return (
    <div className="text-2xl">
      <ul>
        {data?.lessons.map((lesson) => {
          return <li key={lesson.id}>{lesson.title}</li>;
        })}
      </ul>
    </div>
  );
}
