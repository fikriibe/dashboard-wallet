import ExpenseIncomeSection from "@/app/_components/ExpenseIncome";
import ButtonIcon from "@/components/atoms/ButtonIcon";
import Card from "@/components/atoms/Card";
import Typography from "@/components/atoms/Typography";
import { PiMagnifyingGlass } from "react-icons/pi";
import Account from "./_components/Account";
import BalanceStatistic from "./_components/BalanceStatistic";
import Chat from "./_components/Chat";
import LastTransaction from "./_components/LastTransaction";
import LatestSpending from "./_components/LatestSpending";
import ListToBuy from "./_components/ListToBuy";
import PremiumSubs from "./_components/PremiumSubs";
import Analytics from "./_components/Analytics";

export default function Home() {
  return (
    <main className="grid grid-cols-4 gap-4 bg-neutral-100 h-full">
      <div className="col-span-3 py-6 px-8 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <Typography variant="header" size="xl">
              Hello, John.D
            </Typography>
            <Typography size="sm">
              View and control your finances here!
            </Typography>
          </div>
          <ButtonIcon>
            <PiMagnifyingGlass size={20} />
          </ButtonIcon>
        </div>

        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-3">
            <Card withPadding>
              <BalanceStatistic />
            </Card>
          </div>
          <div className="col-span-2">
            <Card>
              <Account />
            </Card>
          </div>
        </div>

        <Card>
          <div className="flex [&>div]:p-4 [&>div]:flex-1">
            <ListToBuy />
            <span className="self-stretch w-[1px] bg-neutral-300" />
            <Chat />
          </div>
        </Card>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <Card withPadding>
              <LastTransaction />
            </Card>
          </div>
          <div>
            <Card withPadding>
              <Analytics />
            </Card>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 flex flex-col gap-4">
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
