export default function Home() {
  return <Foo />;
}

class Service {
  create() {
    console.log("create");
  }
}

const { Foo } = createFoo(new Service());

function createFoo(service: Service) {
  function Foo() {
    async function action() {
      "use server";
      service.create();
      console.log("action");
    }

    return (
      <form action={action}>
        <button>sumbit</button>
      </form>
    );
  }

  return { Foo };
}
