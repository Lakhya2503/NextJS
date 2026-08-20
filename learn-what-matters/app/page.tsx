import Image from "next/image";
import Card from '@/components/Card'

export default function Home() {
  return (
  <div className="">
      <h1> HOME PAGE </h1>
      <Card
        title={`Card 1`}
        description={`This is first card`}
      />
      <Card
        title={`Card 2`}
        description={`This is second card`}
      />
  </div>
  );
}
