import ExpenseIncomeSection from "@/app/_components/ExpenseIncome";
import Card from "@/components/atoms/Card";
import LatestSpending from "./_components/LatestSpending";
import PremiumSubs from "./_components/PremiumSubs";
import Typography from "@/components/atoms/Typography";
import ButtonIcon from "@/components/atoms/ButtonIcon";
import { PiMagnifyingGlass } from "react-icons/pi";
import LastTransaction from "./_components/LastTransaction";
import ListToBuy from "./_components/ListToBuy";
import Chat from "./_components/Chat";
import Logo from "@/components/molecules/Logo";
import Account from "./_components/Account";

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
          <div className="col-span-3"></div>
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
