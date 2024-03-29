import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useMyMutationMutation } from "../graphql/types";

export function Subscribe() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [createSubscriber, { loading }] = useMyMutationMutation();
  async function handleOnSubmit(event: FormEvent) {
    event?.preventDefault();

    await createSubscriber({
      variables: {
        name: nome,
        email,
      },
    });

    navigate("/event");
  }

  return (
    <div className="min-h-screen bg-blur bg-no-repeat bg-cover flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex justify-between items-center mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma{" "}
            <strong className="text-blue-500">aplicação completa</strong> , do
            zero, com <strong className="text-blue-500"> React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>
          <form
            onSubmit={handleOnSubmit}
            className="flex flex-col gap-2 w-full"
          >
            <input
              type="text"
              onChange={(event) => setNome(event.target.value)}
              placeholder="Seu nome completo"
              className="bg-gray-900 rounded px-5 h-14"
            />
            <input
              type="text"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Digite seu email"
              className="bg-gray-900 rounded px-5 h-14"
            />
            <button
              type="submit"
              disabled={loading}
              className="uppercase mt-4 bg-green-500 py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src="/src/assets/mockup.png" alt="" className="mt-10" />
    </div>
  );
}
