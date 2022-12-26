import { useRouter } from "next/router";

import Link from "next/link";

function ClientProjectDetails() {
  const router = useRouter();
  const ClientData = [
    { id: "max", name: "MAximum" },
    { id: "man", name: "Menue" },
  ];

  const nextHandler = () => {
    router.push("client/new/zubair");
  };
  return (
    <div>
      <h2>Client Project Details</h2>

      <ul>
        {ClientData.map((items, i) => {
          return (
            <>
              <li key={i}>
                <Link href={`client/${items.id}/zubair`}> {items.name}</Link>
              </li>
              <li key={i}>
                <Link
                  href={{ pathname: "client/[id]", query: { id: items.id } }}
                >
                  {" "}
                  {items.name}
                </Link>
              </li>
            </>
          );
        })}
      </ul>
      <button onClick={nextHandler}>Click and go to </button>
    </div>
  );
}
export default ClientProjectDetails;
