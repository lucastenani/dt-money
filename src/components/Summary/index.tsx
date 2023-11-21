import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollar,
} from "@phosphor-icons/react";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Incomes</span>
          <ArrowCircleUp size={32} color="#80b37e" />
        </header>

        <strong>$ 17,400.00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Outflows</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>$ 1,259.00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#ffffff" />
        </header>

        <strong>$ 16,141.00</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
