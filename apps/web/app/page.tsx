import { Button, Header } from "ui";

const env = String(process.env.ENV_DEPLOYED);

export default function Page() {
  return (
    <>
      <Header text="Web Test 2" />
      <p>ENV: {env}</p>
      <Button />
    </>
  );
}
