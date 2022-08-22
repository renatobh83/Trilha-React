import { Link, useParams } from "react-router-dom";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { CheckCircle, Lock } from "phosphor-react";
import classNames from "classnames";
interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(props.availableAt);

  const availableDateFormat = format(
    props.availableAt,
    "EEEE' - 'd' de 'MMMM' - 'k'h'mm",
    {
      locale: ptBR,
    }
  );
  const isLessonActive = slug === props.slug;

  return (
    <Link
      to={`/event/lesson/${props.slug}`}
      className={classNames("group relative", {
        "before:absolute before:left-[-8px] before:bottom-[44px] before:bg-green-500 before:w-4 before:h-4 before:rotate-45 before:rounded-l-sm  before:border-l before:border-b before:border-gray-500":
          isLessonActive,
      })}
    >
      <span className="text-gray-300">{availableDateFormat}</span>
      <div
        className={classNames("rounded border border-gray-500 p-4 mt-2", {
          "bg-green-500": isLessonActive,
          " group-hover:border-green-500": !isLessonActive,
        })}
      >
        <header className="flex itens-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames(
                "text-sm  font-medium flex items-center gap-2",
                {
                  "text-white": isLessonActive,
                  "text-blue-500": !isLessonActive,
                }
              )}
            >
              <CheckCircle size={20} />
              Conteudo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em Breve
            </span>
          )}
          <span className="text-xs rounded px-2 py-[2px] text-white border border-green-300 font-bold">
            {props.type == "live" ? "Ao vivo" : "Aula Partica"}
          </span>
        </header>
        <strong
          className={classNames(" mt-5 block", {
            "text-white": isLessonActive,
            "text-gray-200": !isLessonActive,
          })}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
}
