import { CurrencyDollar } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";

import {
  HeaderContainer,
  HeaderContent,
  LogoContainer,
  NewTransitionButton,
} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <CurrencyDollar size={40} weight="fill" />
          <h1>DT Money</h1>
        </LogoContainer>

        <Dialog.Root>
          <NewTransitionButton>New transaction</NewTransitionButton>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
