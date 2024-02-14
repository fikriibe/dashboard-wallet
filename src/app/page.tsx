import ExpenseIncomeSection from "@/app/_components/ExpenseIncome";
import Card from "@/components/atoms/Card";
import LatestSpending from "./_components/LatestSpending";
import PremiumSubs from "./_components/PremiumSubs";

export default function Home() {
  return (
    <main className="grid grid-cols-4 gap-4 bg-neutral-100 h-full">
      <div className="col-span-3"></div>
      <div className="bg-white p-4 flex flex-col gap-4">
        <Card withBorder withPadding>
          <ExpenseIncomeSection expense={5653} income={2430} />
        </Card>
        <Card withBorder withPadding>
          <LatestSpending />
        </Card>
        <Card withBorder withPadding>
          <PremiumSubs />
        </Card>
      </div>
    </main>
  );
}
