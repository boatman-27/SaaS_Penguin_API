import { PrismaClient } from "../src/generated/prisma";

const prismaClient = new PrismaClient();

async function main() {
  await prismaClient.pricingTier.createMany({
    data: [
      {
        name: "FREE",
        price: 0,
        requestsPerDay: 100,
        features: ["Sample penguin facts access", "Basic API testing"],
      },
      {
        name: "STARTER",
        price: 9.0,
        requestsPerDay: 5000,
        features: [
          "Random penguin facts",
          "Facts by ID & search",
          "Up to 3 API keys",
          "Reference data (food types, regions, conservation status)",
        ],
      },
      {
        name: "PROFESSIONAL",
        price: 29.0,
        requestsPerDay: 50000,
        features: [
          "Everything in Starter",
          "Full species database access",
          "Advanced species filtering (diet, breeding, weight, population)",
          "Species summaries & detailed info",
          "Up to 10 API keys",
          "Usage analytics & insights",
          "Priority support",
        ],
      },
      {
        name: "ENTERPRISE",
        price: 99.0,
        requestsPerDay: 500000,
        features: [
          "Everything in Professional",
          "Unlimited API keys",
          "Advanced analytics & reporting",
          "Custom rate limits",
          "Dedicated support",
          "SLA guarantee",
        ],
      },
    ],
  });
}
main()
  .then(() => console.log("Seeded Pricing Tiers"))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });

