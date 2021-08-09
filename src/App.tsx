import faker from "faker";

import { UserItem } from "./components/UserItem";
import { Virtualized } from "./components/Virtualized";

import * as S from "./styles";

const data = Array.from({ length: 1000 }).map(() => ({
  name: faker.name.firstName(),
  description: faker.lorem.text(),
}));

function App() {
  return (
    <>
      <S.Global />
      <S.Title>This is react virtualized with window scroll example</S.Title>

      <Virtualized
        dataLength={data.length}
        onRender={(index) => (
          <UserItem
            name={data[index].name}
            description={data[index].description}
          />
        )}
      />
    </>
  );
}

export default App;
