import { CheckCircle, Lock } from "phosphor-react";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
  const isLessonAvailable = false;
  return (
    <a href="#">
      <span className="text-gray-300">Terca 22 de junho </span>
      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex itens-center justify-between">
          {isLessonAvailable ? (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
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
            {type == "live" ? "Ao vivo" : "Aula Partica"}
          </span>
        </header>
        <strong className="text-gray-200 mt-5 block">{title}</strong>
      </div>
    </a>
  );
}
