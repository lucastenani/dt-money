import { CurrencyDollar } from "@phosphor-icons/react";

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

        <NewTransitionButton>New transaction</NewTransitionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
