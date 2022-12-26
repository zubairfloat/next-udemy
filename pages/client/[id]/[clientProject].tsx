import { useRouter } from "next/router";

function ClientNested() {
  const router = useRouter();
  console.log(router?.query);
  const { clientProject, id } = router.query;

  return (
    <div>
      <h1>check the client project {clientProject}</h1>
      <h2>in routing id is {id}</h2>
    </div>
  );
}
export default ClientNested;
