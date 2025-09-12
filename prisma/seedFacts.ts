import {PrismaClient} from "../src/generated/prisma"

const prismaClient = new PrismaClient()

async function main() {
    await prismaClient.facts.createMany({
        data: [
            {
                fact: "A group of penguins in the water is called a raft but on land they’re called a waddle! Other names for a group of penguins include rookery, colony, and huddle.",
                source: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins"
            },
            {
                fact: "The black and white “tuxedo” look donned by most penguin species is a clever camouflage called countershading. When swimming, the black on their backs helps them blend in with the darkness of the ocean from predators viewing from above. Their white bellies help them blend in with the bright surface of the ocean when viewed by predators and prey from below.",
                source: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins"
            },
            {
                fact: "Penguins may huddle together for several reasons, including warmth.",
                source: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins"
            },
            {
                fact: "Penguins evolved to fly underwater, Most birds have hollow, air-filled bones to help them stay light for flight. Penguins adapted with solid bones instead. This helps them swim because solid bones reduce buoyancy—the tendency to float.",
                source: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins"
            },
            {
                fact: "A penguin’s thick feathers aren’t the only way this bird stays warm, A gland near the base of its tail provides waterproof oil. Penguins spend several hours each day covering their feathers with this oil and give extra attention to the task before swimming.",
                source: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins"
            },
            {
                fact: "Penguins live in many locations and habitats, can find them in Antarctica and Antarctic islands, the Galapagos Islands off the coast of Ecuador, South Africa, New Zealand, Australia, Peru and Chile.",
                source: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins"
            },
            {
                fact: "Contrary to many popular holiday cartoons, you’ll never see penguins and polar bears together in the wild. That’s because penguins live south of the equator while polar bears north of the equator in Arctic!",
                source: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins"
            },
            {
                fact: "Many male penguins gift female penguins with rocks in order to woo them, which are then used to build nests.",
                source: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins"
            },
            {
                fact: "The penguin is one of the most streamlined animals in the world, a penguin’s body is tapered at both ends and it has a large head, short neck and elongated body. This streamlined design helps penguins swim fast.",
                source: "https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins"
            },
            {
                fact: "Penguins have two days dedicated to them every year: January 20th is Penguin Awareness Day and April 25th is World Penguin Day.",
                source: "https://www.discover-the-world.com/blog/29-things-you-might-not-have-known-about-penguins/"
            },
            {
                fact: "Penguins sneeze to get rid of seawater they ingest while hunting for fish – it’s filtered from their bloodstream by the supraorbital gland behind their eyes.",
                source: "https://www.discover-the-world.com/blog/29-things-you-might-not-have-known-about-penguins/"
            },
            {
                fact: "Once a year penguins have a ‘catastrophic moult‘ (yes, that’s the technical term) in which they spend two or three weeks on land while they lose and replace all their feathers.",
                source: "https://www.discover-the-world.com/blog/29-things-you-might-not-have-known-about-penguins/"
            },
            {
                fact: "Adélie penguins are named after Adélie Land, in turn, named for the wife of French explorer Jules Dumont d’Urville who discovered these penguins in 1840.",
                source: "https://www.discover-the-world.com/blog/29-things-you-might-not-have-known-about-penguins/"
            },
            {
                fact: "Macaroni penguins are named after the flamboyantly dressed group of 18th century aristocrats, the ‘Macaronis’.",
                source: "https://www.discover-the-world.com/blog/29-things-you-might-not-have-known-about-penguins/"
            },
            {
                fact: "Because penguins aren’t usually under threat when they’re on land, wild penguins aren’t particularly afraid of tourists in Antarctica. In fact, if you stay still they’ll probably come and investigate you!",
                source: "https://www.discover-the-world.com/blog/29-things-you-might-not-have-known-about-penguins/"
            },
            {
                fact: "There’s a king penguin at Edinburgh Zoo that was knighted by the King of Norway in 2008. Sir Nils Olav holds the rank of Colonel-in-Chief in the Norwegian Guard.",
                source: "https://www.discover-the-world.com/blog/29-things-you-might-not-have-known-about-penguins/"
            },
            {
                fact: "Emperor penguins are the largest living species of penguin, reaching around 120cm (4ft)",
                source: "https://www.discover-the-world.com/blog/29-things-you-might-not-have-known-about-penguins/"
            },
            {
                fact: "The, now extinct, mega penguin Palaeeudyptes, which lived between 37 and 40 million years ago stood 160cm tall (the average height of a woman in the UK) and, including beak and flippers would have measured 2m.",
                source: "https://www.discover-the-world.com/blog/29-things-you-might-not-have-known-about-penguins/"
            },
            {
                fact: "The smallest penguin is the little blue penguin, found in New Zealand and Australia, which is only about 33cm high and 43cm long.",
                source: "https://www.discover-the-world.com/blog/29-things-you-might-not-have-known-about-penguins/"
            },
            {
                fact: "Gentoo penguins are the fastest species – they can reach swimming speeds up to 22 mph. Most penguins manage speeds of between 4-7mph.",
                source: "https://www.discover-the-world.com/blog/29-things-you-might-not-have-known-about-penguins/"
            },
            {
                fact: "Penguins will mate with the same member of the opposite sex season after season.",
                source: "https://www.discover-the-world.com/blog/29-things-you-might-not-have-known-about-penguins/"
            },
            {
                fact: "When they’re breeding, penguins are also similarly loyal to their nesting site, often the rookery in which they were born.",
                source: "https://www.discover-the-world.com/blog/29-things-you-might-not-have-known-about-penguins/"
            },
            {
                fact: "Both penguin parents care for their young for several months until the chicks are strong enough to hunt for food on their own.",
                source: "https://www.discover-the-world.com/blog/29-things-you-might-not-have-known-about-penguins/"
            },
            {
                fact: "Penguins don’t have teeth – they have backward-facing fleshy spines that line the inside of their mouths instead, which help them guide fish down their throats.",
                source: "https://www.discover-the-world.com/blog/29-things-you-might-not-have-known-about-penguins/"
            },
            {
                fact: "During the summer, a medium-sized penguin will eat about 1kg of fish, squid, crabs, krill and other seafood each day, but in the winter they’ll eat just a third of that.",
                source: "https://www.discover-the-world.com/blog/29-things-you-might-not-have-known-about-penguins/"
            },
            {
                fact: "Scientists can locate large penguin colonies from space, just by looking for dark ice patches stained by penguin droppings.",
                source: "https://www.discover-the-world.com/blog/29-things-you-might-not-have-known-about-penguins/"
            },
            {
                "fact": "The world's second-largest colony of emperor penguins has nearly disappeared after changes in sea/ice conditions made their breeding ground unstable. The species might lose anywhere between 50 % and 70 % of its global population by the end of this century.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Penguins are one of about 40 species of flightless birds. Other flightless birds include rheas, cassowaries, kiwis, ostriches, and emus. Most flightless birds live in the Southern Hemisphere.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Most scientists agree that there are 17 species of penguins. Of the 17 species, 13 are either threatened or endangered, with some on the brink of extinction.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "The Erect-crested Penguin (Eudyptes sclateri) has lost approximately 70 % of its population over the last 20 years. The Galapagos Penguin (Spheniscus mendiculus) has lost over 50 % since the 1970s, and their chance of becoming extinct this century is 30 %.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "The most common threats to penguin survival are pollution, loss of habitat by human encroachment, commercial fishing, oil dumping, algae blooms, and global warming.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Generally, penguins are not sexually dimorphic, meaning male and female penguins look alike.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "The Magellanic Penguin (Spheniscus magellanicus) is named after Ferdinand Magellan, who first saw them in 1520.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Oil spills kill approximately 20,000 adult and 22,000 juvenile Magellanic Penguins off the coast of Argentina every year.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Penguins swallow pebbles and stones as well as their food. Scientists believe that the stones may help grind up and digest their food. The stones may also add enough extra weight to help penguins dive deeper.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Penguins do not have teeth. Instead they use their beak to grab and hold wiggling prey. They have spines on the roof of their beak to help them get a good grip. Penguins even have spines on their tongues.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Penguins find all their food in the sea and are carnivores. They eat mostly fish and squid. They also eat crustaceans, such as crabs, shrimp, and krill. A large penguin can collect up to 30 fish in one dive.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Penguins (and any animal) that eat only fish are called piscivorous.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Penguins spend several hours a day preening or caring for their feathers. If penguins don’t keep them well maintained, their feathers would not stay waterproof. For extra protection, penguins spread oil on their feathers. The oil comes from a special gland near their tail feathers.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Penguins molt, or lose their feathers, once a year. They always molt on land or ice and until they grow new waterproof coats, they are unable to go into the water. Molting may take weeks, and most penguins lose about half their body weight during this time.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "The penguin with the highest number of species is the Macaroni Penguin, with approximately 11,654,000 pairs.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Penguin nesting areas are called “rookeries” and may contain thousands of pairs of birds. Each penguin has a distinct call, which allows individual penguins to find their mates and chicks even in the largest groups.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Penguins are highly social birds. Even at sea, penguins usually swim and feed in groups. Some penguin colonies on Antarctica are huge and can contain 20 million or more penguins at various times during the year.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "King penguins can form nesting colonies of up to 10,000 penguins. Each penguin keeps its neighbor at an exact but close distance.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Out of all the penguin and bird species, the Emperor Penguin (Aptenodytes forsteri) breeds in the coldest environment. Air temperatures may reach -40° F (-40° C) and wind speeds may reach 89 mph (144 km/hr).",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "A penguin’s normal body temperature is approximately 100° F (38° C).",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Emperor Penguins are the fifth heaviest of all bird species, although an adult male will lose about 26 pounds while he waits for a penguin chick to hatch.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Emperor Penguins have the longest uninterrupted incubation time of any bird at 64-67 days.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Emperor Penguins have the widest variety of vocalizations of all penguins. Scientists believe this is because they have no fixed nest site and must rely on vocal calls alone to find their chicks and mate.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Most penguin species breed during the spring and summer. Egg incubation varies from 1 month to 67 days, depending on the species. The Emperor Penguin is the only penguin that breeds during the Antarctic winter.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Most penguins can swim 5-6 miles per hour, and some can have bursts of speed of up to 15 mph. They can walk between 1.7 mph and 2.4 mph.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "In 2012, scientists discovered that a primary reason penguins can swim so fast is that they have a special “bubble boost.” When penguins fluff their feathers, they release bubbles that reduce the density of the water around them. The bubbles act as lubrication that decreases water viscosity, similar to competitive swimsuits.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Most penguins spend nearly 75 % of their lives in the water.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Penguins can stay underwater for 10-15 minutes before coming to the surface to breathe. Penguins cannot breath underwater.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Even though penguins spend much of their lives at sea, they all return to land to lay eggs.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Emperor Penguins are the largest penguins in the world and stand up to 4 feet (1.2 m) high and weigh as much as 100 pounds (45.3 kg).",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "King Penguins (Aptenodytes patagonicus) are second in size only to Emperors. A King is almost 3 feet tall and can weigh nearly 35 pounds. Kings don’t waddle the way most penguins do. Instead, they run fairly quickly on their feet.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Gentoo Penguins (Pygoscelis papua) can grow up to 30 inches tall and weigh up to 13 pounds. They are different than other penguins because they have a colorful orange bill, and no other penguin has such a big tail.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Macaroni Penguins (Eudyptes chrysolophus) get their name from the long, orange, yellow, and black feathery crests above their eyes. They were named after “macaroni dandies,” whose hairstyle was fashionable in the 18th century.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Little (a.k.a. Blue or Fairy) Penguins (Eudyptula minor) are the smallest of all the penguins. They stand 16 inches high and weigh just 2 pounds. They live in the warmer waters around Australia, Tasmania, and New Zealand.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Penguins’ eyes work better under water than they do in air. Many scientists believe penguins are extremely short-sighted on land.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Yellow-eyed Penguins (Megadyptes antipodes), the third-largest penguins, have yellow cat-like eyes. They live along the coastal shores of New Zealand and neighboring islands.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Penguins that live in and around Antarctica tend to survive in large numbers. Penguins that live in more temperate climates are more likely to suffer population declines.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "All penguins live in the Southern Hemisphere, from Antarctica to the warmer waters of the Galapagos Islands near the equator. No penguins live at the North Pole.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Only two species, the Adélie (Pygoscelis adeliae) and the Emperor Penguins, live on the frozen land of Antarctica. Most penguins live farther north, in New Zealand or along the coast of South America.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "The Galapagos Penguin lives farther north than any other penguin and is the only penguin that might venture into the Northern Hemisphere.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "To keep from overheating, penguins pant like dogs to cool off. They also ruffle their feathers and hold their wings away from their bodies.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Penguins’ unique coloring is called countershading. To predators looking down from above, the penguins’ black backs help them blend into the dark ocean. To predators looking up from underwater, the penguin’s white belly blends in against the light sky and snow.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Different penguins species have different ways of attracting a mate. King Penguins, for example, sing long songs with their partners. Gentoo Penguin males give their mates gifts of small pebbles or stones. For penguins, bonding is an important part of raising a chick.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Most penguin species lay two eggs. However, Emperor and King Penguins, the two largest species, build no nest at all and lay just a single egg. They warm their eggs on their feet and cover it with a flap of skin called a “brood pouch.”",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "When penguin chicks hatch, they are not waterproof, so they must stay out of the ocean. They depend on their parents to bring them food and to keep them warm until waterproof feathers replace their fluffy down coats.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "In the past, people ate penguin eggs. They also killed adult penguins for their feathers, skin, and oil. People also used penguin droppings (guano) to fertilize the soil and help grow crops. While this seems harmless, some penguins use guano to make their nests. When the guano was gone, they had to lay their eggs on the bare ground, where they were more susceptible to predators.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Larger penguins usually live in cooler regions. Smaller penguins are typically found in more temperate and tropical climates.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Some prehistoric penguins were very large, growing nearly as tall and heavy as a human.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "The earliest known penguin fossil is the Waimanu manneringi, which dates from about 60 million years ago. The fossil was discovered in Antarctica in 1980. Its name comes from Maori term for “water bird.” They were also flightless birds.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Penguin etymology is debated. Several scholars claim the word is derived from the Welsh pen gwyn, or “white head.” It originally appeared in the 16th century as a synonym for Great Auk. Other researches believe it is related to the Latin pinguis, or “fat.”",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Penguins swim so fast that they can propel themselves over 7 feet (2 meters) above water. The technique they use to cut through waves like dolphins or porpoises is called “porpoising.”",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Smaller penguins usually do not dive as deep as larger penguins. Larger penguins, such as Emperor Penguins, can dive as far as 1,870 feet for as long as 22 minutes, making it the deepest-diving non-flying bird and the longest submerged bird. An Emperor Penguin has solid bones rather than air-filled bones, which eliminates the risk of barotrauma. Their heart rate slows to 15-20 beats per minute and nonessential organs shut down during long dives.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Penguins can control the blood flow to their extremities in order to reduce the amount of blood that gets cold, but not enough so that their extremities freeze.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Penguins can drink salt water because they have a special gland, the supraorbital gland, that filters salt from the bloodstream.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "An adult male Emperor Penguin is the longest-fasting bird. It will not eat for approximately 115 days during its chick’s incubation/hatching period.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Approximately 1 in 50,000 penguins is born with brown plumage rather than black. These are called isabelline penguins. They live shorter lives than other penguins because they are less camouflaged and often do not mate.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Most penguins are found in South Africa, New Zealand, Chili, Antarctica, Argentina, and Australia.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "All penguins except the Emperor Penguin share incubation duties with their mate. Still, Emperor Penguins manage to get 75 % of their young to self-sufficiency.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "When compared proportionally to the weight of the parent birds, penguin eggs are smaller than any other bird species. Additionally, a penguin eggshell constitutes 10-16 % of the weight of a penguin egg, most likely to minimize risk of breakage in rough environments.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Penguins often slide on their tummies over ice and snow. This is called tobogganing. Researchers believe they do this for fun and as an efficient way to travel.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "A group of young penguin chicks is called a “crèche.” A group of penguins in the water is called a “raft.” A group of penguins on land is called a “waddle.”",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Penguins have more feathers than most other birds, averaging approximately 70 feathers per square inch. The Emperor Penguin has the most of any bird, at around 100 feathers per one square inch.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Chinstrap Penguins (Pygoscelis antarcticus) get their name from a thin black line that circles under their chin, like a strap on a helmet. Chinstrap Penguin colonies may reach up to one million penguins.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "While Chinstrap Penguins look dignified and gentleman-like, their exceptionally loud cries have earned them the nickname “Stonecracker” penguins.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "The 2005 children’s book And Tango Makes Three, based on a true story, is about a homosexual Chinstrap Penguin couple in New York’s Central Park Zoo. The book is listed on the 15 Most Controversial Picture Books.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Penguins mate, nest, and raise their chicks in a place called a “rookery.”",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Penguins lost their ability to fly millions of year ago. However, they are the fastest-swimming and deepest-diving species of any bird. Penguins are also the most aquatic of all birds.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Penguins typically are not afraid of humans.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "A wild penguin typically lives between 15-20 years, spending approximately 75 % of their lives in the water.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "The most rare penguin in the world is the Yellow-eyed Penguin, with only around 5,000 living in the wild. They live along the southeastern coast of New Zealand and nearby islands.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "The fastest underwater swimming bird is the Gentoo Penguin, able to swim up to 22 mph (36 km/h).",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "While some penguins mate for life or until a partner dies, some penguins often mate with new partners while the old ones are still alive and in the same colony. Some researchers have noted that male and female penguins sometimes “cheat” on their partners, even while they are nesting and raising young with another penguin.",
                "source": "https://www.factretriever.com/penguin-facts"
            },
            {
                "fact": "Penguins usually enter and leave the sea in large groups. Scientists believe this is for “safety in numbers.” By blending into a crowd, an individual penguin may avoid catching the attention of a predator.",
                "source": "https://www.factretriever.com/penguin-facts"
            }
        ]
    })
}

main()
    .then(() => console.log("Seeded Facts Table"))
    .catch((err) => {
        console.log(err)
        process.exit(1)
    })
    .finally(async () => {
        await prismaClient.$disconnect()
    })