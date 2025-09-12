import {PrismaClient} from "../src/generated/prisma"

const prismaClient = new PrismaClient()

async function main() {
    await prismaClient.pricingTier.createMany({
        data: [
            {
                name: "FREE",
                price: 0,
                requestsPerDay: 100,
                features: ["basic_facts", "random_facts"],
            },
            {
                name: "BASIC",
                price: 5.0,
                requestsPerDay: 10000,
                features: ["basic_facts", "random_facts", "species_facts", "images"],
            },
            {
                name: "PRO",
                price: 15.00,
                requestsPerDay: 100000,
                features: ["all_features", "premium_facts", "bulk_endpoints", "analytics"],
            },
        ],
    });
}

main()
    .then(() => console.log("Seeded Pricing Tiers"))
    .catch((err) => {
        console.log(err)
        process.exit(1)
    })
    .finally(async () => {
        await prismaClient.$disconnect()
    })