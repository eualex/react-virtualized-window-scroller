import styled from "styled-components";

type UserItemProps = {
  name: string;
  description: string;
};

const Container = styled.div`
  position: relative;
  width: 100%;

  padding: 1rem;

  div {
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    background-color: #fff;

    border-radius: 1rem;
    padding: 2rem 1rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    transition: transform 0.3s ease;

    strong {
      margin-right: 1rem;
    }
  }

  &:hover {
    div {
      transform: translate(-10px, -10px);
    }
  }
`;

export function UserItem({ name, description }: UserItemProps) {
  return (
    <Container>
      <div>
        <strong>{name}:</strong>
        <p>{description}</p>
      </div>
    </Container>
  );
}
