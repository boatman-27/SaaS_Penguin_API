import {PrismaClient} from "../src/generated/prisma"

const prismaClient = new PrismaClient()

async function main() {
    // Adelie Penguin
    await prismaClient.species.create({
            data: {
                commonName: "Adelie Penguin",
                scientificName: "Pygoscelis adeliae",
                species: "adeliae",

                weightMale: 5.4,
                weightFemale: 4.7,

                nestType: "in colonies in the open, use stones to line nest.",
                favouriteFood: "krill",
                conservationStatus: "Least Concern",

                identification: "Medium-sized penguin recognised by its white eye-ring. Feathers on the back of the head are slightly elongated and can be raised to form a small crest. Immatures lack the eye-ring and have a white chin.",
                habits: "Breed in colonies from a few dozen to many thousands. Nests are shallow depressions lined with stones. Highly gregarious(sociable) on land and at sea.",

                distribution: {
                    create: [
                        {
                            region: "Antarctic continent and surrounding islands",
                            location: "South Shetland, South Orkney, South Sandwich, Bouvetøya",
                            breedingMonths: ["October", "November", "December", "January", "February"],
                            habitat: "ice-free nesting habitats",
                            populationEstimate: 10000000 // Approximate mature individuals, not total population.
                        }
                    ]
                },
                dietItems: {
                    create: [
                        {
                            foodType: "krill",
                            scientificName: "Euphausia superba",
                            commonName: "Antarctic Krill",
                            seasonal: false, // Core food source year-round, though consumption fluctuates.
                            location: "Offshore"
                        },
                        {
                            foodType: "krill",
                            scientificName: "Euphausia crystallorophias",
                            commonName: "Ice Krill",
                            seasonal: false, // Available near the coast, though consumption is regional.
                            location: "Inshore"
                        },
                        {
                            foodType: "fish",
                            scientificName: "Pleuragramma antarctica",
                            commonName: "Antarctic silverfish",
                            seasonal: false, // Staple food source for some populations; not just seasonal.
                            location: "Inshore/Nearshore"
                        },
                        {
                            foodType: "fish",
                            scientificName: "Lanternfish species",
                            commonName: "Lanternfish",
                            seasonal: true, // More common in certain seasons or offshore environments.
                            location: "Offshore"
                        },
                        {
                            foodType: "amphipods",
                            commonName: "Amphipods",
                            seasonal: true // More variable component of the diet.
                        }
                    ]
                },
                migrationPatterns: {
                    create: [
                        {
                            migrationPeriod: "autumn",
                            fromLocation: "Ross Sea breeding colonies (e.g., Cape Crozier)",
                            toLocation: "Northward with the pack ice",
                            distanceKm: 12760, // Average annual migration distance for Ross Sea populations.
                            duration: "over winter",
                            ageGroup: "adults"
                        },
                        {
                            migrationPeriod: "autumn",
                            fromLocation: "Ross Sea breeding colonies",
                            toLocation: "Further north on the pack ice, often farther than adults",
                            duration: "over winter",
                            ageGroup: "juveniles"
                        }
                    ]
                }
            }
        }
    )

    // African Penguin
    await prismaClient.species.create({
        data: {
            commonName: "African Penguin",
            scientificName: "Spheniscus demersus",
            species: "demersus",
            weightMale: 3.3,
            weightFemale: 3.0,
            nestType: "burrow or under bushes/rocks",
            favouriteFood: "small fish",
            conservationStatus: "Critically Endangered",
            identification:
                "The only penguin occurring regularly in southern Africa. Differs from Magellanic Penguins by usually lacking a second dark breast band (though some may have it). The area of naked skin reaches all around the eye and is more extensive than in Humboldt Penguins. Immature birds have a grey face and lack the pied pattern of adults. Adult plumage develops after about 14 months.",
            habits:
                "Breed in burrows, rock crevices, or under shrubs, often forming large colonies, some over ten thousand pairs. Breeding is poorly synchronised. Loud braying calls earned them the nickname 'Jackass Penguins'. Birds forage close inshore, especially during breeding.",
            distribution: {
                create: [
                    {
                        region: "Southern Africa",
                        location: "South Africa and Namibia coasts along the Benguela Current",
                        habitat: "coastal areas along nutrient-rich Benguela Current",
                        populationEstimate: 9900 // Number of breeding pairs in 2023
                    }
                ]
            },
            dietItems: {
                create: [
                    {
                        foodType: "fish",
                        commonName: "anchovy",
                        scientificName: "Engraulis capensis",
                        seasonal: false
                    },
                    {
                        foodType: "fish",
                        commonName: "sardine",
                        scientificName: "Sardinops sagax",
                        seasonal: false // Important prey, though stocks have declined
                    },
                    {
                        foodType: "fish",
                        commonName: "round herring",
                        scientificName: "Etrumeus teres",
                        seasonal: false
                    },
                    {
                        foodType: "fish",
                        commonName: "bearded goby",
                        scientificName: "Sufflogobius bibarbatus",
                        seasonal: false, // Important in areas where anchovy and sardine are depleted, particularly in Namibia
                        location: "Namibia"
                    },
                    {
                        foodType: "cephalopods",
                        commonName: "squid",
                        seasonal: false
                    },
                    {
                        foodType: "crustaceans",
                        commonName: "krill and shrimp",
                        seasonal: false
                    }
                ]
            },
            migrationPatterns: {
                create: [
                    {
                        migrationPeriod: "non-breeding dispersal",
                        fromLocation: "breeding colonies",
                        toLocation: "dispersing to forage, mainly within the Benguela Current region",
                        ageGroup: "adults",
                        duration: "up to 4 months at sea",
                        distanceKm: 400
                    },
                    {
                        migrationPeriod: "post-fledging dispersal",
                        fromLocation: "natal colonies",
                        toLocation: "dispersing widely, potentially >1000 km, often northwards",
                        duration: "18-24 months at sea",
                        ageGroup: "juveniles", // Juveniles disperse much further.
                        distanceKm: 1400 // Up to 1400 km recorded for juveniles.
                    },
                    {
                        migrationPeriod: "vagrants",
                        fromLocation: "beyond normal breeding range",
                        toLocation: "as far north as Setta Cama (Gabon) and Inhaca Island (Mozambique)",
                        ageGroup: "mostly juveniles"
                    }
                ]
            }
        }
    })

    // Chinstrap Penguin
    await prismaClient.species.create({
        data: {
            commonName: "Chinstrap Penguin",
            scientificName: "Pygoscelis antarctica",
            species: "antarctica",
            weightMale: 5.0,
            weightFemale: 4.8,
            nestType: "in colonies in the open",
            favouriteFood: "krill",
            conservationStatus: "Least Concern",
            identification:
                "Medium-sized penguins, easily recognised by their white face and the fine black line across the cheeks, which runs under the chin. The demarcation between black and white lies above the eye, isolating the dark eye in the white plumage. The bill is black. Juveniles closely resemble adults but can be recognised until their first moult by dark spotting around the eyes and a slightly shorter bill.",
            habits:
                "Breed on hillside slopes and rocky outcrops in colonies that can be enormous. At the South Shetlands, often breed among other Pygoscelis penguins, though usually on steeper slopes. Their marine distribution is linked with the continental shelf and the confluence of the Antarctic Circumpolar and Weddell Sea currents.",
            distribution: {
                create: [
                    {
                        region: "Scotia Arc",
                        location:
                            "Antarctic Peninsula, South Georgia, South Orkney, South Shetland, and South Sandwich Islands (vast numbers). Smaller colonies also on Bouvetøya, Peter I Island, Heard Island, and Balleny Islands.",
                        habitat: "hillside slopes and rocky outcrops",
                        populationEstimate: 8000000 // A 2020 estimate of breeding pairs, a more precise metric.
                    }
                ]
            },
            dietItems: {
                create: [
                    {
                        foodType: "krill",
                        scientificName: "Euphausia superba",
                        percentage: 95, // Krill is the dominant food source, though the exact percentage can vary.
                        seasonal: false
                    },
                    {
                        foodType: "fish",
                        scientificName: "Small species like myctophid fish",
                        seasonal: false
                    },
                    {
                        foodType: "cephalopods",
                        scientificName: "Squid",
                        seasonal: false
                    },
                    {
                        foodType: "crustaceans",
                        scientificName: "Amphipods",
                        seasonal: true
                    }
                ]
            },
            migrationPatterns: {
                create: [
                    {
                        migrationPeriod: "winter",
                        fromLocation: "breeding colonies",
                        toLocation: "pelagic waters north of the pack-ice zone, south of the Polar Front",
                        distanceKm: 4500, // Migratory distances can be several thousand km.
                        duration: "Antarctic winter (April-October)",
                        ageGroup: "adults"
                    },
                    {
                        migrationPeriod: "winter",
                        fromLocation: "breeding colonies",
                        toLocation: "pelagic waters north of the pack-ice zone, south of the Polar Front",
                        distanceKm: 4700, // Juvenile migrations are often longer than adults.
                        duration: "Antarctic winter (April-October)",
                        ageGroup: "juveniles"
                    }
                ]
            }
        }
    })

    // Emperor Penguin
    await prismaClient.species.create({
        data: {
            commonName: "Emperor Penguin",
            scientificName: "Aptenodytes forsteri",
            species: "forsteri",
            weightMale: 38.0, // Mean weight at start of breeding.
            weightFemale: 29.5, // Mean weight at start of breeding.
            nestType: "breed on sea ice in winter, egg carried on feet",
            favouriteFood: "Antarctic silverfish", // Most important single prey species.
            conservationStatus: "Near Threatened", // IUCN global, but with significant caveats.
            identification:
                "The largest living penguin, standing up to 1.3 m tall. Distinguished from the smaller King Penguin by size, more robust stature, and a broad pale yellow connection between the orange-yellow ear patches and the pale yellow upper breast. Ear patches are whitish in younger birds, becoming more yellow with age. Immatures resemble adults but are smaller and have a white rather than black chin.",
            habits:
                "Breeds during the Antarctic winter from March to December. Eggs and chicks are balanced on the feet to prevent contact with ice. No nests are built, allowing colonies to move and huddle closely for warmth. The male alone incubates the egg for two months in almost continuous darkness. If the female has not returned by hatching, the male can feed the chick briefly with a secretion ('milk') from the oesophagus.",
            distribution: {
                create: [
                    {
                        region: "Antarctic continent",
                        location:
                            "About 66 colonies around the Antarctic coastline, usually on fast ice near polynyas", // Updated colony count.
                        breedingMonths: [
                            "March",
                            "April",
                            "May",
                            "June",
                            "July",
                            "August",
                            "September",
                            "October",
                            "November",
                            "December"
                        ],
                        habitat: "fast ice and polynyas",
                        populationEstimate: 625000 // More recent total individual estimate.
                    }
                ]
            },
            dietItems: {
                create: [
                    {
                        foodType: "fish",
                        commonName: "Antarctic silverfish",
                        scientificName: "Pleuragramma antarcticum",
                        seasonal: false // Year-round prey, though availability fluctuates.
                    },
                    {
                        foodType: "cephalopods",
                        commonName: "Glacial squid",
                        scientificName: "Psychroteuthis glacialis",
                        seasonal: false // Eaten throughout the year.
                    },
                    {
                        foodType: "krill",
                        commonName: "Antarctic krill",
                        scientificName: "Euphausia superba",
                        seasonal: false // Consumed year-round.
                    },
                    {
                        foodType: "fish",
                        commonName: "Bald notothen",
                        scientificName: "Pagothenia borchgrevinki",
                        seasonal: false // Also a prey item.
                    },
                ]
            },
            migrationPatterns: {
                create: [
                    {
                        migrationPeriod: "post-breeding",
                        fromLocation: "Antarctic continent",
                        toLocation: "pelagic zone north of the breeding grounds, staying near pack ice",
                        ageGroup: "adults"
                    },
                    {
                        migrationPeriod: "post-fledging dispersal",
                        fromLocation: "natal colonies",
                        toLocation: "far north into open water (up to 48° S), then south again",
                        distanceKm: 2845, // An example of a maximum recorded juvenile migration.
                        ageGroup: "juveniles"
                    },
                ]
            }
        }
    })

    // Erect-crested Penguin
    await prismaClient.species.create({
        data: {
            commonName: "Erect-crested Penguin",
            scientificName: "Eudyptes sclateri",
            species: "sclateri",
            weightMale: 6.38, // Based on recent research.
            weightFemale: 5.4, // Based on recent research.
            nestType: "in colonies in the open, usually on bare rocks or with minimal material like stones and mud",
            favouriteFood: "krill and small fish",
            conservationStatus: "Endangered", // Confirmed IUCN status.
            identification:
                "Similar to other crested penguins, especially Snares and Fiordland Penguins. When dry on land, identified by the upright yellow feather plumes of their crests. Plumes droop when wet, making identification at sea difficult. They have a distinct gular pouch, a more parallel bill, and the yellow supercilium attaches higher on the bill. Can be distinguished from other crested penguins by the lower supercilium, their size, and gular pouch. Immatures have a pale yellow supercilium without long plumes and a mottled grey throat.",
            habits:
                "Breed on rocky slopes bordering the shore. A few pairs build nests but most lay their eggs directly on bare rock. After a long courtship, two eggs are laid, but the first, smaller A-egg is invariably lost, often on the same day or before the B-egg is laid. Brood reduction is an obligate behavior, and they rear only one chick. The chick is raised by the parents until it is old enough to fledge.",
            distribution: {
                create: [
                    {
                        region: "Sub-Antarctic islands south of New Zealand",
                        location:
                            "Main breeding grounds on Bounty and Antipodes Islands; vagrants recorded elsewhere, including Auckland, Campbell, and Snares islands, and the coasts of New Zealand and Australia.",
                        habitat: "rocky slopes bordering shore, pelagic marine environment when at sea",
                        populationEstimate: 195000 // Number of mature individuals, based on 2011 nest counts.
                    }
                ]
            },
            dietItems: {
                create: [
                    {
                        foodType: "krill",
                        commonName: "krill",
                        scientificName: "Euphausia superba",
                        seasonal: false
                    },
                    {
                        foodType: "fish",
                        commonName: "small fish",
                        seasonal: false
                    },
                    {
                        foodType: "cephalopods",
                        commonName: "squid",
                        seasonal: false
                    },
                ]
            },
            migrationPatterns: {
                create: [
                    {
                        migrationPeriod: "post-molt dispersal",
                        fromLocation: "breeding islands",
                        toLocation: "pelagic waters mainly southeast of New Zealand",
                        duration: "April to September (winter)",
                        ageGroup: "adults"
                    },
                    {
                        migrationPeriod: "post-fledging dispersal",
                        fromLocation: "breeding islands",
                        toLocation: "pelagic waters mainly southeast of New Zealand and beyond",
                        duration: "summer and winter",
                        ageGroup: "juveniles"
                    },
                ]
            }
        }
    })

    // Fiordland Penguin
    await prismaClient.species.create({
        data: {
            commonName: "Fiordland Penguin",
            scientificName: "Eudyptes pachyrhynchus",
            species: "pachyrhynchus",
            weightMale: 4.1, // Average weight.
            weightFemale: 3.7, // Average weight.
            nestType: "in forest under vegetation, rocks, tree roots; or in caves",
            favouriteFood: "squid and fish (varies by location)",
            conservationStatus: "Vulnerable", // Current IUCN status.
            identification:
                "Similar to Snares Penguin, with a thick yellow stripe above the eye ending in a dropping plume. Distinguished by larger size, white streaks on the cheeks, and absence of fleshy margin at the base of the bill. Immature birds have a mottled white chin, thinner dull yellow supercilium, and probably cannot be safely distinguished from Snares Penguins.",
            habits:
                "Breed under high rainforest canopy, dense shrub, under boulders, and in caves. Nests are lined with twigs and grass. Colonies consist of loose groups; nests can be several metres apart. Breeding is poorly synchronised. The second-laid egg hatches before the first, with the smaller chick often dying of starvation. Breeding season begins in June during austral winter.",
            distribution: {
                create: [
                    {
                        region: "New Zealand",
                        location: "Southwest coast of South Island, Stewart Island, Codfish Island, and offshore islets",
                        breedingMonths: ["June", "July", "August", "September", "October", "November"],
                        habitat: "cold rainforest and pelagic waters",
                        populationEstimate: 12500 // Current estimate of mature individuals.
                    }
                ]
            },
            dietItems: {
                create: [
                    {
                        foodType: "cephalopods",
                        commonName: "arrow squid",
                        scientificName: "Nototodarus sloanii",
                        percentage: 85, // Example for West Coast study.
                        seasonal: false,
                        location: "West Coast, South Island"
                    },
                    {
                        foodType: "crustaceans",
                        commonName: "krill",
                        scientificName: "Nyctiphanes australis",
                        percentage: 13, // Example for West Coast study.
                        seasonal: false,
                        location: "West Coast, South Island"
                    },
                    {
                        foodType: "fish",
                        commonName: "hoki, red cod",
                        percentage: 85, // Example for Codfish Island study.
                        seasonal: false,
                        location: "Codfish Island"
                    },
                    {
                        foodType: "fish",
                        commonName: "other small fish",
                        percentage: 2, // Example for West Coast study.
                        seasonal: false,
                        location: "West Coast, South Island"
                    }
                ]
            },
            migrationPatterns: {
                create: [
                    {
                        migrationPeriod: "pre-molt",
                        fromLocation: "breeding colonies",
                        toLocation: "Tasman Sea (Subtropical and Subantarctic Frontal Zones)",
                        distanceKm: 6800, // Maximum recorded swimming distance.
                        duration: "8-10 weeks (late Nov to Feb)",
                        ageGroup: "adults"
                    },
                    {
                        migrationPeriod: "winter dispersal",
                        fromLocation: "breeding colonies",
                        toLocation: "Tasman Sea and beyond, reaching subantarctic waters",
                        distanceKm: 6086, // Median recorded migration distance.
                        duration: "April to September",
                        ageGroup: "adults"
                    },
                    {
                        migrationPeriod: "post-fledging dispersal",
                        fromLocation: "breeding colonies",
                        toLocation: "Tasman Sea and pelagic waters farther south",
                        ageGroup: "juveniles"
                    },
                ]
            }
        }
    })

    // Galapagos Penguin
    await prismaClient.species.create({
        data: {
            commonName: "Galapagos Penguin",
            scientificName: "Spheniscus mendiculus",
            species: "mendiculus",
            weightMale: 2.6, //  Revised mean adult weight for males.
            weightFemale: 2.2, //  Revised mean adult weight for females.
            nestType: "burrow, crevices in lava, or lava tubes", // Added lava tubes.
            favouriteFood: "small fish (sardines, mullet, anchovies)", //  More specific.
            conservationStatus: "Endangered", //  Current IUCN status.
            identification:
                "The smallest of the Spheniscus penguins. Distinguished by a relatively large bill and narrow white line around the face. C-shaped white stripe runs from behind the eye, around the black ear coverts and chin, to join on the throat. Top of bill black, fading to pink on bottom. Juveniles have a gray head and back, and white underside, without the distinct white facial stripe. ",
            habits:
                "Breed mainly in caves or crevices of old lava flows and in burrows. Populations fluctuate heavily under the influence of El Niño events, which can threaten survival. They adapt to warm climate by panting and seeking shade. Breeding can occur year-round when food is available. No creching behavior observed in chicks. ",
            distribution: {
                create: [
                    {
                        region: "Galapagos Islands, Ecuador",
                        location: "Isabela, Fernandina, Santiago, Bartolomé, Floreana, and other islets, mainly in the western part of the archipelago where 95% of the population is found. ",
                        breedingMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], // All year-round, depending on food availability.
                        habitat: "coastal areas along nutrient-rich Humboldt and Cromwell Current, especially rocky shores, caves, and lava crevices", //  More specific habitat details.
                        populationEstimate: 1200 //  More recent estimate of mature individuals.  Fluctuates.
                    }
                ]
            },
            dietItems: {
                create: [
                    {
                        foodType: "fish",
                        commonName: "sardines",
                        scientificName: "Sardinops sagax",
                        seasonal: false,
                        location: "nearshore waters"
                    },
                    {
                        foodType: "fish",
                        commonName: "mullet",
                        seasonal: false,
                        location: "nearshore waters"
                    },
                    {
                        foodType: "fish",
                        commonName: "anchovies",
                        seasonal: false,
                        location: "nearshore waters"
                    },
                    {
                        foodType: "crustaceans",
                        commonName: "small crustaceans",
                        seasonal: false,
                        location: "nearshore waters"
                    }
                ]
            },
            migrationPatterns: {
                create: [
                    {
                        migrationPeriod: "non-breeding dispersal",
                        fromLocation: "breeding colonies",
                        toLocation: "forage and disperse among the Galapagos Islands (e.g., Isabela, Fernandina, Santiago, Bartolomé)",
                        distanceKm: 64, //  Maximum recorded movement for non-breeding adults.
                        ageGroup: "adults"
                    },
                    {
                        migrationPeriod: "post-fledging dispersal",
                        fromLocation: "natal colonies",
                        toLocation: "disperse among the Galapagos Islands and potentially further afield (vagrancy)",
                        ageGroup: "juveniles"
                    }
                ]
            }
        }
    })

    // Gentoo Penguin
    await prismaClient.species.create({
        data: {
            commonName: "Gentoo Penguin",
            scientificName: "Pygoscelis papua",
            species: "papua",
            weightMale: 6.2, // Northern subspecies average.
            weightFemale: 5.8, // Northern subspecies average.
            nestType: "in colonies in the open; nests are built from pebbles, vegetation, and mud",
            favouriteFood: "krill and fish",
            conservationStatus: "Least Concern",
            identification:
                "Characterised by a white patch around and behind the eye that joins on the crown. The orange-red lower mandible is also distinctive. Two subspecies exist: the larger *P. p. papua* in sub-Antarctic islands and the smaller *P. p. ellsworthi* on the Antarctic Peninsula. Juveniles closely resemble adults, but the white eye-patch is not connected to their white eye-rings until they moult at 14 months.",
            habits:
                "Colonies are usually smaller and less densely packed than other Pygoscelis penguins. Nests are often among tussocks in the sub-Antarctic and on stony ice-free areas and beaches on the Antarctic Peninsula. Some Gentoos forage close to colonies year-round, while others travel farther during the non-breeding season.",
            distribution: {
                create: [
                    {
                        region: "Sub-Antarctic and Antarctic Peninsula",
                        location:
                            "Falkland Islands, South Georgia, South Sandwich, South Orkney, South Shetland, Antarctic Peninsula, Marion, Prince Edward, Crozet, Kerguelen, Heard, Macquarie Islands, Staten Island",
                        habitat: "tussocks in sub-Antarctic, stony areas on Antarctic Peninsula, nearshore and pelagic marine environment",
                        populationEstimate: 774000
                    }
                ]
            },
            dietItems: {
                create: [
                    {
                        foodType: "krill",
                        scientificName: "Euphausia superba",
                        seasonal: true, // Seasonal abundance drives diet shifts.
                        location: "Antarctic Peninsula and Scotia Arc"
                    },
                    {
                        foodType: "krill",
                        scientificName: "Euphausia vallentini",
                        seasonal: true, // Krill species vary by region.
                        location: "Falkland Islands"
                    },
                    {
                        foodType: "fish",
                        scientificName: "Lanternfish and Notothenioids",
                        seasonal: true, // More fish are consumed at lower latitudes and during certain seasons.
                        location: "Sub-Antarctic and lower latitude colonies"
                    },
                    {
                        foodType: "squid",
                        scientificName: "Gonatus antarcticus and others",
                        seasonal: false // Consumed year-round, but less important than krill and fish.
                    }
                ]
            },
            migrationPatterns: {
                create: [
                    {
                        migrationPeriod: "non-breeding dispersal",
                        fromLocation: "breeding colonies",
                        toLocation: "foraging further afield, staying within continental shelf waters",
                        ageGroup: "adults",
                        distanceKm: 500, // Maximum foraging range varies by location and season.
                        duration: "late austral summer and winter"
                    },
                    {
                        migrationPeriod: "post-fledging dispersal",
                        fromLocation: "natal colonies",
                        toLocation: "dispersal further than adults during their first year",
                        ageGroup: "juveniles"
                    },
                    {
                        migrationPeriod: "vagrancy",
                        fromLocation: "dispersing population",
                        toLocation:
                            "north to 43°S Argentine coast, Australia, and New Zealand",
                        ageGroup: "all (rare occurrences)"
                    }
                ]
            }
        }
    })

    // Humboldt Penguin
    await prismaClient.species.create({
        data: {
            commonName: "Humboldt Penguin",
            scientificName: "Spheniscus humboldti",
            species: "humboldti",
            weightMale: 4.7, // Mean male weight from recent studies.
            weightFemale: 4.5, // Mean female weight from recent studies.
            nestType: "burrow or cave, often in thick guano deposits or rock crevices",
            favouriteFood: "anchovies and sardines",
            conservationStatus: "Vulnerable",
            identification:
                "Similar to Magellanic Penguins, but lacks the second dark breast band and has a wider white band around the head. More extensive bare skin than Magellanic Penguins, including a pink fleshy patch at the base of the lower mandible. Immature birds are generally darker on the head than Magellanic Penguins.",
            habits:
                "Nest in burrows—often dug into thick guano deposits, among boulders, in sea caves, and sometimes in the open. Most birds depart colonies after sunrise and forage in close proximity. Typically inshore foragers, but can travel further during the non-breeding season. Populations fluctuate with El Niño events, which can cause mass die-offs and breeding failures.",
            distribution: {
                create: [
                    {
                        region: "Humboldt Current",
                        location: "Pacific coast of Peru to Chile, 5°S to 42°S",
                        habitat: "coastal areas along cold nutrient-rich Humboldt Current, including offshore islands",
                        populationEstimate: 11000 // Updated mature individual estimate (2017 max estimate)
                    }
                ]
            },
            dietItems: {
                create: [
                    {
                        foodType: "fish",
                        commonName: "Peruvian anchovy",
                        scientificName: "Engraulis ringens",
                        seasonal: false // Primary prey but varies with availability.
                    },
                    {
                        foodType: "fish",
                        commonName: "South American pilchard",
                        scientificName: "Sardinops sagax",
                        seasonal: false // Important prey but varies with availability.
                    },
                    {
                        foodType: "fish",
                        commonName: "Araucanian herring",
                        scientificName: "Strangomera bentincki",
                        seasonal: false // Important prey but varies with availability.
                    },
                    {
                        foodType: "squid",
                        commonName: "Dosidiscus gigas",
                        scientificName: "Dosidiscus gigas",
                        seasonal: false
                    },
                    {
                        foodType: "crustaceans",
                        commonName: "various crustaceans",
                        scientificName: null,
                        seasonal: true // Varies by location and season.
                    }
                ]
            },
            migrationPatterns: {
                create: [
                    {
                        migrationPeriod: "non-breeding season dispersal",
                        fromLocation: "breeding colonies",
                        toLocation:
                            "pelagic waters along the Humboldt Current, with some individuals migrating up to 1,000 km north or south",
                        ageGroup: "adults",
                        distanceKm: 1000 // Reflects potential long-distance dispersal.
                    },
                    {
                        migrationPeriod: "foraging trips",
                        fromLocation: "breeding colonies",
                        toLocation:
                            "inshore waters, typically within 35 km of colony during chick-rearing",
                        ageGroup: "breeding adults",
                        distanceKm: 35 // More specific to breeding foraging behavior.
                    }
                ]
            }
        }
    })

    // King Penguin
    await prismaClient.species.create({
        data: {
            commonName: "King Penguin",
            scientificName: "Aptenodytes patagonicus",
            species: "patagonicus",
            weightMale: 16.0, // Updated to a more representative average weight.
            weightFemale: 14.3, // Updated to a more representative average weight.
            nestType: "in colonies in the open, with territories but no nest structure",
            favouriteFood: "lanternfish", // More specific favorite food.
            conservationStatus: "Least Concern",
            identification:
                "Second-largest penguin species, similar to Emperor Penguin, but ranges do not usually overlap. Cheeks are bright orange-yellow; belly white, back paler grey than black. Immatures similar to adults with duller facial plumage. Ear patches pale yellow; throat grey-white. Adult plumage reached after two years.",
            habits:
                "Dense colonies, sometimes tens of thousands of pairs, among tussocks, gently sloping beaches, and sometimes over a kilometre inland. No nest built, but pairs maintain territories. Long breeding cycle: 14–16 months to fledge a single chick. During winter, chicks may fast 1–5 months (May–Sept/Oct). Maximum of two chicks every three years.",
            distribution: {
                create: [
                    {
                        region: "Sub-Antarctic belt",
                        location:
                            "Falkland Islands, South Georgia, Marion, Prince Edward, Crozet, Kerguelen, Heard, Macquarie Islands, Tierra del Fuego", // Added Tierra del Fuego.
                        habitat: "tussocks, gently sloping beaches near sea access, and pelagic marine environment", // Added marine environment.
                        populationEstimate: 1600000 // Total breeding pairs estimate (2017).
                    }
                ]
            },
            dietItems: {
                create: [
                    {
                        foodType: "fish",
                        scientificName: "Electrona carlsbergi",
                        commonName: "lanternfish",
                        seasonal: true // Varies seasonally.
                    },
                    {
                        foodType: "fish",
                        scientificName: "Krefftichthys anderssoni",
                        commonName: "lanternfish",
                        seasonal: true
                    },
                    {
                        foodType: "cephalopods",
                        scientificName: "Moroteuthis species",
                        seasonal: true // Varies seasonally.
                    },
                    {
                        foodType: "krill",
                        scientificName: "Euphausia superba",
                        seasonal: true
                    }
                ]
            },
            migrationPatterns: {
                create: [
                    {
                        migrationPeriod: "winter dispersal",
                        fromLocation: "breeding colonies",
                        toLocation:
                            "pelagic waters, primarily around the Antarctic Polar Front and extending further north in winter",
                        distanceKm: 10000, // Example of long-distance winter dispersal.
                        ageGroup: "adults",
                        duration: "late austral summer through winter"
                    },
                    {
                        migrationPeriod: "post-fledging dispersal",
                        fromLocation: "breeding colonies",
                        toLocation: "pelagic waters, sometimes traveling great distances from natal colonies",
                        distanceKm: 4655, // Example of maximum recorded juvenile dispersal.
                        ageGroup: "juveniles",
                        duration: "juveniles spend their first years largely at sea"
                    }
                ]
            }
        }
    })

    // Australian Little Penguin
    await prismaClient.species.create({
        data: {
            commonName: "Australian Little Penguin",
            scientificName: "Eudyptula novaehollandiae",
            species: "novaehollandiae",
            weightMale: 1.5, // Representative average of known range.
            weightFemale: 1.3, // Representative average of known range.
            nestType: "burrow, cave, rock crevice, or under bushes; also uses artificial nest boxes",
            favouriteFood: "small schooling fish, squid, and krill",
            conservationStatus: "Least Concern",
            identification:
                "Upper parts pale to dark grey-blue. Lacks the fine blue edging on the flipper of its New Zealand counterpart. Resembles juveniles of _Spheniscus_ but ranges do not overlap. Genetic analysis separates it from the New Zealand Little Penguin.",
            habits:
                "Nocturnal on land. Forages during the day, often sleeps beside nest at night after feeding chicks. Nests in burrows, rock crevices, caves, and under vegetation. Nests may be clustered in colonies; at sea, usually alone or in small groups. Foraging trips typically within 30 km of colonies during breeding but can travel much farther.",
            distribution: {
                create: [
                    {
                        region: "Southern Australia",
                        location:
                            "Western Australia, South Australia, Victoria, Tasmania, and New South Wales (Manly population endangered)",
                        habitat: "coastal areas, offshore islands, and neritic marine environment",
                        populationEstimate: 300000, // Mature individuals for both species, requires separation.
                    },
                ],
            },
            dietItems: {
                create: [
                    {
                        foodType: "fish",
                        commonName: "pilchards, anchovies",
                        scientificName: "Sardinops sagax, Engraulis australis",
                        seasonal: true, // Availability varies seasonally.
                        location: "Australia",
                    },
                    {
                        foodType: "cephalopods",
                        commonName: "squid",
                        scientificName: "Nototodarus gouldi, Sepioteuthis australis",
                        seasonal: false,
                        location: "Australia",
                    },
                    {
                        foodType: "crustaceans",
                        commonName: "krill",
                        scientificName: "Nyctiphanes australis",
                        seasonal: true, // Availability varies seasonally.
                        location: "Australia",
                    },
                ],
            },
            migrationPatterns: {
                create: [
                    {
                        migrationPeriod: "post-fledging / non-breeding season",
                        fromLocation: "breeding colonies",
                        toLocation: "dispersal areas, potentially hundreds of kilometers away",
                        ageGroup: "juveniles and some non-breeding adults",
                    },
                ],
            },
        },
    });

    // New Zealand Little Penguin (Kororā)
    await prismaClient.species.create({
        data: {
            commonName: "New Zealand Little Penguin (Kororā)",
            scientificName: "Eudyptula minor",
            species: "minor",
            weightMale: 1.4, // Representative average of known range.
            weightFemale: 1.2, // Representative average of known range.
            nestType: "burrow, cave, rock crevice, or under bushes; often uses man-made structures",
            favouriteFood: "fish and squid",
            conservationStatus: "Least Concern",
            identification:
                "Upper parts dark grey-blue with a blue edge to the trailing side of the flipper. Lacks the fine blue edging on the flipper of its Australian counterpart. Genetic analysis separates it from the Australian Little Penguin.",
            habits:
                "Nocturnal on land. Forages during the day. Nests in burrows, rock crevices, caves, and under vegetation; often utilizes man-made structures in coastal and urban areas. Foraging trips typically within 20 km of colonies during breeding, but can undertake long-distance trips when not breeding.",
            distribution: {
                create: [
                    {
                        region: "New Zealand",
                        location: "North, South, Stewart, and Chatham Islands (absent from Otago region). Also vagrants to Snares and Three Kings Islands.",
                        habitat: "coastal areas, offshore islands, and neritic marine environment",
                        populationEstimate: 300000, // Subspecies are difficult to count separately; requires further data.
                    },
                ],
            },
            dietItems: {
                create: [
                    {
                        foodType: "fish",
                        commonName: "sprat, gudgeon, ahuru",
                        scientificName: "Sprattus antipodum, Grahamichthys radiata, Auchenoceros punctatus",
                        seasonal: false,
                        location: "New Zealand",
                    },
                    {
                        foodType: "cephalopods",
                        commonName: "arrow squid",
                        scientificName: "Nototodarus sloanii",
                        seasonal: false,
                        location: "New Zealand",
                    },
                    {
                        foodType: "crustaceans",
                        commonName: "stomopod larvae",
                        seasonal: false,
                        location: "New Zealand",
                    },
                ],
            },
            migrationPatterns: {
                create: [
                    {
                        migrationPeriod: "non-breeding season",
                        fromLocation: "breeding colonies",
                        toLocation: "pelagic waters, with individuals potentially traveling hundreds of kilometers",
                        ageGroup: "adults",
                    },
                    {
                        migrationPeriod: "post-fledging dispersal",
                        fromLocation: "natal colonies",
                        toLocation: "pelagic waters, with extensive dispersal",
                        ageGroup: "juveniles",
                    },
                ],
            },
        },
    });

    // Macaroni Penguin
    await prismaClient.species.create({
        data: {
            commonName: "Macaroni Penguin",
            scientificName: "Eudyptes chrysolophus",
            species: "chrysolophus",
            weightMale: 5.2, // Corrected to reflect average male weight.
            weightFemale: 5.3, // Corrected to reflect average female weight.
            nestType: "in colonies in the open, small nests built from pebbles and mud or on bare rock",
            favouriteFood: "krill",
            conservationStatus: "Vulnerable", // Correct IUCN status, population decreasing.
            identification: "In contrast to the other crested Penguins, this species has orange, not yellow, feather plumes. They originate from a supercilium that meets at the front, i.e. higher up the head than in other species. Macaroni Penguins are also slightly larger than the other crested penguins. Immatures are similar to adults but lack the long feather crest.",
            habits: "Breeds on rocky slopes, beaches and amongst tussocks. Most birds build a small nest from pebbles and by scraping out some mud or sand, but many pairs are content with laying their two eggs on bare rock. The first-laid A-egg is about 61-64% smaller than the B-egg and almost never survives.",
            distribution: {
                create: [
                    {
                        region: "Sub-Antarctic to Antarctic Peninsula",
                        location: "Antarctic Peninsula, Cape Horn, Falklands, South Georgia, South Sandwich, South Orkney, South Shetland, Bouvetøya, Prince Edward, Marion, Crozet, Kerguelen, Heard, Macquarie Islands",
                        habitat: "rocky slopes, beaches, amongst tussocks, and pelagic marine environment during winter",
                        populationEstimate: 18000000 // Global breeding pairs estimate (2013).
                    }
                ]
            },
            dietItems: {
                create: [
                    {
                        foodType: "euphausiids",
                        commonName: "Antarctic krill",
                        scientificName: "Euphausia superba",
                        seasonal: true,
                        location: "Throughout range"
                    },
                    {
                        foodType: "euphausiids",
                        commonName: "Thysanoessa species",
                        scientificName: "Thysanoessa spp.",
                        seasonal: true,
                        location: "Bouvetøya" // Example of regional variation.
                    },
                    {
                        foodType: "fish",
                        commonName: "lanternfish",
                        scientificName: "Electrona carlsbergi",
                        seasonal: true,
                        location: "Throughout range"
                    },
                    {
                        foodType: "fish",
                        commonName: "Krefftichthys anderssoni",
                        scientificName: "Krefftichthys anderssoni",
                        seasonal: true,
                        location: "Marion Island" // Example of regional variation.
                    },
                    {
                        foodType: "cephalopods",
                        commonName: "squid",
                        seasonal: false
                    },
                    {
                        foodType: "amphipods",
                        commonName: "Themisto gaudichaudii",
                        scientificName: "Themisto gaudichaudii",
                        seasonal: true
                    }
                ]
            },
            migrationPatterns: {
                create: [
                    {
                        migrationPeriod: "non-breeding season (winter)",
                        fromLocation: "breeding colonies",
                        toLocation: "pelagic waters of the Southern Ocean, within the Polar Frontal Zone",
                        distanceKm: 10430, // Average distance covered during winter for Kerguelen population.
                        ageGroup: "adults",
                        duration: "6 months"
                    },
                    {
                        migrationPeriod: "post-fledging dispersal",
                        fromLocation: "natal colonies",
                        toLocation: "dispersal further than adults during their first year",
                        ageGroup: "juveniles"
                    }
                ]
            }
        }
    })

    // Magellanic Penguin
    await prismaClient.species.create({
        data: {
            commonName: "Magellanic Penguin",
            scientificName: "Spheniscus magellanicus",
            species: "magellanicus",
            weightMale: 4.9, // Revised to be closer to the upper end of average weight.
            weightFemale: 4.6, // Revised to be closer to the lower end of average weight.
            nestType: "burrow, cave, or under bushes; often in dense colonies", // Added caves.
            favouriteFood: "small fish, squid, and crustaceans", // More encompassing.
            conservationStatus: "Near Threatened", // Correct IUCN status, population trends vary.
            identification: "It is the only Spheniscus penguin found over most of its range, but overlaps the distribution of Humboldt Penguins around Puerto Montt, Chile. Distinguished from Humboldt Penguins by having a second dark breast band and less extensive areas of bare facial skin. Some immature birds undergo partial head moult during winter and gain the pied head pattern of adults.",
            habits: "Breeds in burrows where digging is possible, otherwise on the surface or under bushes. Colonies form in a variety of habitats from low forests to grassland to bare rocks, often on islands or headlands. Some colonies on the Argentinean side number several hundreds of thousands of pairs.  Highly migratory during the non-breeding season.", // Added migratory habit.
            distribution: {
                create: [
                    {
                        region: "Southern South America",
                        location: "Pacific coast from 40°S Chile to 30°S Peru; Atlantic coast from 37°S Argentina to 23°S Brazil; breeding colonies in Chile, Argentina, and Falkland Islands", // More specific distribution.
                        breedingMonths: ["September", "October", "November", "December", "January", "February", "March", "April"], // More detailed breeding cycle.
                        habitat: "burrowing habitat (forests, grasslands, sand dunes, rocky outcrops) and pelagic marine environment", // Added marine environment.
                        populationEstimate: 2600000 // Upper end of the estimated breeding pairs.
                    }
                ]
            },
            dietItems: {
                create: [
                    {
                        foodType: "fish",
                        commonName: "Peruvian anchoveta, Falkland sprat, Argentine anchoita, Araucanian herring, Argentine hake", // Specific prey species.
                        scientificName: "Engraulis ringens, Sprattus fuegensis, Engraulis anchoita, Strangomera bentincki, Merluccius hubbsi",
                        seasonal: true // Reflects variability.
                    },
                    {
                        foodType: "cephalopods",
                        commonName: "Patagonian squid, Common octopus", // Specific prey species.
                        scientificName: "Loligo gahi, Octopus tehuelchus",
                        seasonal: true // Reflects variability.
                    },
                    {
                        foodType: "crustaceans",
                        commonName: "squat lobster",
                        scientificName: "Munida gregaria",
                        seasonal: true // Reflects variability.
                    },
                    {
                        foodType: "krill",
                        commonName: "krill",
                        scientificName: "Euphausia superba",
                        seasonal: true // Acknowledges krill as prey.
                    }
                ]
            },
            migrationPatterns: {
                create: [
                    {
                        migrationPeriod: "winter migration (non-breeding season)",
                        fromLocation: "breeding colonies in Argentina, Chile, and Falkland Islands",
                        toLocation:
                            "pelagic waters north along the coast to Peru (Pacific) and Brazil (Atlantic), reaching as far as Rio de Janeiro (23°S)", // More specific migration range.
                        distanceKm: 5000, // Reflects the extensive migratory distances.
                        ageGroup: "adults"
                    },
                    {
                        migrationPeriod: "post-fledging dispersal",
                        fromLocation: "natal colonies",
                        toLocation: "pelagic waters, generally traveling further than adults", // Specifies juvenile dispersal.
                        distanceKm: 2641, // Average distance reached.
                        ageGroup: "juveniles"
                    },
                    {
                        migrationPeriod: "winter migration (non-breeding season)",
                        fromLocation: "breeding colonies (e.g., Punta Tombo)",
                        toLocation: "partially migratory: some remain near colonies (within ~290 km)", // Includes partial migration.
                        distanceKm: 290,
                        ageGroup: "all (some individuals)"
                    }
                ]
            }
        }
    });

    // Southern Rockhopper Penguin (Eudyptes chrysocome chrysocome and Eudyptes chrysocome filholi)
    await prismaClient.species.create({
        data: {
            commonName: "Southern Rockhopper Penguin",
            scientificName: "Eudyptes chrysocome",
            species: "chrysocome",
            weightMale: 2.7, // Revised average weight.
            weightFemale: 2.5, // Revised average weight.
            nestType: "in colonies on rocky slopes, among tussocks, sometimes in small caves and crevices; nests built from tussock, peat, and pebbles",
            favouriteFood: "krill and fish",
            conservationStatus: "Vulnerable", // Current IUCN status.
            identification:
                "Small crested penguins with red eyes and a thin yellow supercilium (eyebrow stripe) that flares into plumes behind the eye. Yellow plumes are thinner than other Eudyptes species and are yellow, not orange (like Macaroni Penguin). Immature birds have a narrow supercilium and a pale mottled grey chin.",
            habits:
                "Breeds on rocky slopes and amongst tussocks, sometimes in small caves and amongst crevices. Builds a small nest from tussock, peat, and pebbles. The first-laid (A-egg) is typically smaller and less likely to survive. Colonies can be very dense, but the size and density vary geographically. Some populations may forage close inshore, others travel further. Highly migratory outside the breeding season.",
            distribution: {
                create: [
                    {
                        region: "Southern South America and New Zealand Subantarctic islands",
                        location: "Falkland Islands, Isla de los Estados, Ildefonso Islands, Diego Ramírez Islands, Isla Noir, Isla Pinguino, Staten Island, Prince Edward Islands, Crozet Islands, Kerguelen Islands, Heard Island, Macquarie Island, Campbell Island, Auckland Islands, Antipodes Islands", // Refined locations based on subspecies.
                        habitat: "rocky slopes, tussocks, coastal cliffs, and pelagic marine environment",
                        populationEstimate: 2460000, // Estimated breeding pairs for E. c. chrysocome. (This needs to be broken down by subspecies.)
                    },
                ],
            },
            dietItems: {
                create: [
                    {
                        foodType: "Euphausiids",
                        commonName: "krill",
                        scientificName: "Euphausia superba, Nyctiphanes australis, Themisto gaudichaudii", // More specific krill species.
                        percentage: null, // Removed static percentage as it varies significantly.
                        seasonal: true, // Diet composition varies seasonally.
                    },
                    {
                        foodType: "fish",
                        commonName: "lanternfish, sprat, notothenioids", // More specific fish species.
                        scientificName: "Electrona spp., Sprattus fuegensis, Lepidonotothen squamifrons",
                        percentage: null, // Varies significantly.
                        seasonal: true, // Diet composition varies seasonally.
                    },
                    {
                        foodType: "cephalopods",
                        commonName: "squid",
                        scientificName: "Loligo gahi, Gonatus antarcticus", // More specific squid species.
                        percentage: null, // Varies significantly.
                        seasonal: true, // Diet composition varies seasonally.
                    },
                ],
            },
            migrationPatterns: {
                create: [
                    {
                        migrationPeriod: "non-breeding season dispersal",
                        fromLocation: "breeding colonies",
                        toLocation: "pelagic waters of the Southern Ocean",
                        distanceKm: 5000, // Maximum recorded distance for Southern Rockhopper.
                        ageGroup: "adults",
                        duration: "3-5 months at sea", // Average duration.
                    },
                ],
            },
        },
    });

    // Northern Rockhopper Penguin (Eudyptes moseleyi)
    await prismaClient.species.create({
        data: {
            commonName: "Northern Rockhopper Penguin",
            scientificName: "Eudyptes moseleyi",
            species: "moseleyi",
            weightMale: 3.2, // Average weight at start of breeding.
            weightFemale: 2.8, // Estimated average based on male weight.
            nestType: "in colonies on rocky slopes and amidst tussocks",
            favouriteFood: "krill and fish",
            conservationStatus: "Endangered", // Current IUCN status.
            identification:
                "Small crested penguins with red eyes and a thick yellow supercilium (eyebrow stripe) that extends into long, pendulous plumes behind the eye, often reaching below the black-white demarcation line on the throat. Immature birds have a narrow supercilium and a pale mottled grey chin. More prominent crests than Southern Rockhopper Penguins.",
            habits:
                "Breeds on rocky slopes and amongst tussocks. Builds a small nest from tussock, peat, and pebbles. Lay two eggs, but typically only one chick is raised. Colonies are found on seven islands in the South Atlantic and Indian Oceans. Highly migratory outside the breeding season.",
            distribution: {
                create: [
                    {
                        region: "Cool temperate Atlantic and Indian Oceans",
                        location: "Tristan da Cunha (main island, Middle Island), Gough Island, Inaccessible Island, Nightingale Island, Amsterdam Island, St. Paul Island", // Refined locations.
                        habitat: "rocky slopes, tussocks, coastal cliffs, and pelagic marine environment",
                        populationEstimate: 530000, // Total mature individuals (2018 estimate), population declining.
                    },
                ],
            },
            dietItems: {
                create: [
                    {
                        foodType: "euphausiids",
                        commonName: "krill",
                        scientificName: "Euphausia superba, Thysanoessa spp.", // More specific krill species.
                        seasonal: true, // Diet composition varies seasonally.
                    },
                    {
                        foodType: "fish",
                        commonName: "lanternfish", // More specific fish species.
                        scientificName: "Electrona spp., Krefftichthys anderssoni",
                        seasonal: true, // Diet composition varies seasonally.
                    },
                    {
                        foodType: "cephalopods",
                        commonName: "squid",
                        seasonal: true, // Diet composition varies seasonally.
                    },
                ],
            },
            migrationPatterns: {
                create: [
                    {
                        migrationPeriod: "non-breeding season (winter)",
                        fromLocation: "breeding colonies",
                        toLocation: "pelagic waters of the South Atlantic and Indian Oceans, within the Polar Frontal Zone and further north",
                        distanceKm: 2200, // Example of recorded winter dispersal distance.
                        ageGroup: "adults",
                        duration: "several months"
                    },
                ],
            },
        },
    });

    // Royal Penguin
    await prismaClient.species.create({
        data: {
            commonName: "Royal Penguin",
            scientificName: "Eudyptes schlegeli",
            species: "schlegeli",
            weightMale: 5.2, // Corrected to reflect average male weight.
            weightFemale: 5.3, // Corrected to reflect average female weight.
            nestType: "in colonies on rocky slopes, beaches, and among tussocks; nests are built from pebbles or scraped mud",
            favouriteFood: "krill",
            conservationStatus: "Near Threatened", // Updated IUCN status (2018).
            identification:
                "Treated by some as a separate species, but often considered a white-faced variant of Macaroni Penguins (*Eudyptes chrysolophus schlegeli*). Orange feather plumes arise from a supercilium meeting at the front. Most birds have a white face, though some individuals may have a pale grey or dark chin. Immatures lack long crests, with only a short orange-yellow supercilium present.",
            habits:
                "Breeds on rocky slopes, beaches, and among tussocks. Most birds build a small nest from pebbles and scrape mud or sand, but some lay eggs on bare rock. The first-laid (A-egg) is significantly smaller than the second (B-egg) and almost never survives. After breeding, adults undergo a molt before departing for winter. Forage pelagically during the non-breeding season.",
            distribution: {
                create: [
                    {
                        region: "Sub-Antarctic",
                        location: "Endemic to Macquarie Island and adjacent Bishop and Clerk Islands",
                        habitat: "rocky slopes, beaches, tussocks, and pelagic marine environment",
                        populationEstimate: 1700000 // Macquarie Island breeding pairs (1984 census).
                    }
                ]
            },
            dietItems: {
                create: [
                    {
                        foodType: "euphausiids",
                        commonName: "krill (E. valentini, T. gregaria)",
                        scientificName: "Euphausia valentini, Thysanoessa gregaria",
                        seasonal: true
                    },
                    {
                        foodType: "fish",
                        commonName: "lanternfish (e.g., K. anderssoni, E. carlsbergi)",
                        scientificName: "Krefftichthys anderssoni, Electrona carlsbergi",
                        seasonal: true
                    },
                    {
                        foodType: "cephalopods",
                        commonName: "squid",
                        scientificName: "Undetermined species",
                        seasonal: true
                    },
                    {
                        foodType: "amphipods",
                        commonName: "amphipods",
                        scientificName: "Themisto gaudichaudii",
                        seasonal: true
                    }
                ]
            },
            migrationPatterns: {
                create: [
                    {
                        migrationPeriod: "non-breeding season",
                        fromLocation: "Macquarie Island",
                        toLocation: "pelagic waters of the Southern Ocean, potentially traveling thousands of kilometers; sightings recorded as far as Australia and New Zealand",
                        distanceKm: 10000, // Example of long-distance winter dispersal.
                        ageGroup: "adults",
                        duration: "approx. 6 months (April to October)"
                    },
                    {
                        migrationPeriod: "post-fledging dispersal",
                        fromLocation: "Macquarie Island",
                        toLocation: "pelagic waters, with extensive dispersal",
                        ageGroup: "juveniles"
                    }
                ]
            }
        }
    });

    // Snares Penguin
    await prismaClient.species.create({
        data: {
            commonName: "Snares Penguin",
            scientificName: "Eudyptes robustus",
            species: "robustus",
            weightMale: 3.3, // Updated average weight.
            weightFemale: 2.8, // Updated average weight.
            nestType: "in colonies in the open or under forest canopy; cup-shaped nests of peat, twigs, and pebbles",
            favouriteFood: "krill, squid, and fish",
            conservationStatus: "Vulnerable",
            identification:
                "Similar to Fiordland Penguins but differs from Erect-crested Penguins in having drooping feather plumes on the crest, yellow facial stripe reaches further up the bill, and more conical bill. Underwing pattern is highly variable.",
            habits:
                "Breeds under the canopy of Olearia forests and on coastal rock. Forests often die due to guano, creating clearings. Nests are cup-shaped from peat, wood, and pebbles in dense colonies. Both chicks usually hatch but typically only the B-egg chick survives. This species is endemic to the Snares Islands, and the population is currently considered stable.",
            distribution: {
                create: [
                    {
                        region: "Snares Islands, endemic",
                        location: "200 km south of New Zealand",
                        habitat: "Olearia forests, scrubland, and coastal rocks",
                        populationEstimate: 93000 // Estimated mature individuals (IUCN, 2013).
                    }
                ]
            },
            dietItems: {
                create: [
                    {
                        foodType: "euphausiids",
                        commonName: "krill",
                        scientificName: "Nyctiphanes australis",
                        percentage: 60, // During chick-rearing.
                        seasonal: true
                    },
                    {
                        foodType: "fish",
                        commonName: "lanternfish, long-snouted pipefish",
                        scientificName: "Lampanyctodes hectoris, Leptonotus morae",
                        percentage: 30, // During chick-rearing.
                        seasonal: true
                    },
                    {
                        foodType: "cephalopods",
                        commonName: "arrow squid, warty squid, violet squid",
                        scientificName: "Nototodarus sloanii, Morotheutis ingens, Histiotheuthis atlantica",
                        percentage: 10, // During chick-rearing.
                        seasonal: true
                    }
                ]
            },
            migrationPatterns: {
                create: [
                    {
                        migrationPeriod: "non-breeding season (winter)",
                        fromLocation: "Snares Islands",
                        toLocation: "pelagic waters west of the Snares, mainly south of Tasmania",
                        distanceKm: 3500, // Maximum recorded dispersal distance.
                        ageGroup: "adults",
                        duration: "May to August"
                    },
                    {
                        migrationPeriod: "post-fledging dispersal",
                        fromLocation: "Snares Islands",
                        toLocation: "dispersal areas, potentially wider than adults",
                        ageGroup: "juveniles"
                    }
                ]
            }
        }
    });

    // Yellow-eyed Penguin (Hoiho)
    await prismaClient.species.create({
        data: {
            commonName: "Yellow-eyed Penguin (Hoiho)",
            scientificName: "Megadyptes antipodes",
            species: "antipodes",
            weightMale: 5.7, // Average weight (kg)
            weightFemale: 5.4, // Average weight (kg)
            nestType: "solitary nests in burrows, caves, or under dense vegetation in coastal forests or scrubland",
            favouriteFood: "fish and squid (benthic foraging)",
            conservationStatus: "Endangered", // Global IUCN Red List status.
            identification:
                "Characterised by a band of pale yellow feathers surrounding its eyes and encircling the back of its head. Its eye is yellow. The foreneck and sides of the head are light brown. The back and tail are slate blue-black. Juvenile birds have a greyer head with no yellow band around their eyes. It is the largest living penguin to breed on the New Zealand mainland.",
            habits:
                "Unlike most other penguins, they are not highly colonial and prefer isolated nesting sites. They are benthic foragers, diving to the seafloor to hunt. Adults are mostly sedentary, foraging within a relatively small range, but juveniles disperse widely. Highly vulnerable to introduced predators, fishing impacts, disease, and climate change.",
            distribution: {
                create: [
                    {
                        region: "New Zealand",
                        location: "South-east coast of the South Island, Stewart Island, Auckland Islands, and Campbell Island",
                        breedingMonths: ["August", "September", "October", "November", "December", "January", "February", "March"],
                        habitat: "coastal forests, scrubland, and benthic marine environment over the continental shelf",
                        populationEstimate: 6000 // Estimated mature individuals (IUCN, 2020).
                    }
                ]
            },
            dietItems: {
                create: [
                    {
                        foodType: "fish",
                        commonName: "opalfish, sprat, silversides, blue cod, red cod",
                        scientificName: "Hemerocoetes monopterygius, Sprattus antipodum, Argentina elongata, Parapercis colias, Pseudophycis bachus",
                        seasonal: true
                    },
                    {
                        foodType: "cephalopods",
                        commonName: "arrow squid",
                        scientificName: "Nototodarus sloanii",
                        seasonal: true
                    },
                    {
                        foodType: "crustaceans",
                        commonName: "krill",
                        scientificName: "Nyctiphanes australis",
                        seasonal: true
                    },
                    {
                        foodType: "coelenterates",
                        commonName: "jellyfish",
                        seasonal: true
                    }
                ]
            },
            migrationPatterns: {
                create: [
                    {
                        migrationPeriod: "adult foraging",
                        fromLocation: "breeding colonies",
                        toLocation: "benthic foraging grounds, typically within 25 km of the coast, but can travel further",
                        distanceKm: 50, // Average foraging range estimate.
                        ageGroup: "adults",
                        duration: "year-round, longer trips during non-breeding"
                    },
                    {
                        migrationPeriod: "post-fledging dispersal",
                        fromLocation: "natal colonies",
                        toLocation: "pelagic waters, often dispersing north as far as Cook Strait",
                        distanceKm: 600, // Maximum recorded juvenile dispersal.
                        ageGroup: "juveniles"
                    },
                    {
                        migrationPeriod: "molting dispersal",
                        fromLocation: "breeding colonies",
                        toLocation: "coastal areas, some move north during molt",
                        ageGroup: "all",
                        duration: "February to April"
                    },
                ]
            }
        }
    });

}

main()
    .then(() => console.log("Seeded Species Table"))
    .catch((err) => {
        console.log(err)
        process.exit(1)
    })
    .finally(async () => {
        await prismaClient.$disconnect()
    })