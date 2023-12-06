import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;

  background-color: ${(props) => props.theme["gray-800"]};
  position: fixed;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      padding: 1rem;
      border-radius: 6px;
      border: 0;

      background-color: ${(props) => props.theme["gray-900"]};
      color: ${(props) => props.theme["gray-300"]};

      &::placeholder {
        color: ${(props) => props.theme["gray-500"]};
      }
    }

    button[type="submit"] {
      height: 3.625rem;
      margin-top: 1.5rem;
      border: 0;
      padding: 0.15rem;
      border-radius: 6px;
      font-weight: bold;

      background-color: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme.white};

      cursor: pointer;

      &:not(:disabled):hover {
        background-color: ${(props) => props.theme["green-700"]};
        transition: background-color 0.2s;
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }
  }

  @media screen and (max-width: 600px) {
    min-width: auto;
    width: 100%;
    bottom: 0;
    transform: translate(-50%, 0%);
  }
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`;

interface TransactionTypeButtonProps {
  variant: "income" | "outcome";
}

export const TransactionTypeButton = styled(
  RadioGroup.Item
)<TransactionTypeButtonProps>`
  background-color: ${(props) => props.theme["gray-700"]};
  color: ${(props) => props.theme["gray-100"]};

  padding: 1rem;
  border: 0;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  cursor: pointer;

  svg {
    color: ${({ variant, theme }) =>
      variant === "income" ? theme["green-300"] : theme["red-300"]};
  }

  &[data-state="unchecked"]:hover {
    background-color: ${(props) => props.theme["gray-600"]};
    transition: background-color 0.2s;
  }

  &[data-state="checked"] {
    color: ${(props) => props.theme.white};
    background-color: ${({ variant, theme }) =>
      variant === "income" ? theme["green-300"] : theme["red-300"]};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background-color: transparent;
  border: 0;

  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;

  color: ${(props) => props.theme["gray-500"]};

  cursor: pointer;
`;
