import useCaseInventory from "@/assets/use-case-inventory.jpg";
import useCaseIdeas from "@/assets/use-case-ideas.jpg";
import useCaseReceipts from "@/assets/use-case-receipts.jpg";
import useCaseLists from "@/assets/use-case-lists.jpg";
import useCaseWines from "@/assets/use-case-wines.jpg";
import useCaseCookbooks from "@/assets/use-case-cookbooks.jpg";
import useCaseTodo from "@/assets/use-case-todo.jpg";
import useCaseMisc from "@/assets/use-case-misc.jpg";
import useCaseAnything from "@/assets/use-case-anything.jpg";
import useCaseAlcohol from "@/assets/use-case-alcohol.jpg";
import useCaseDreamhome from "@/assets/use-case-dreamhome.jpg";
import useCasePets from "@/assets/use-case-pets.jpg";
import useCaseTattoos from "@/assets/use-case-tattoos.jpg";
import useCaseDates from "@/assets/use-case-dates.jpg";
import useCaseMasks from "@/assets/use-case-masks.jpg";
import useCaseCollectibles from "@/assets/use-case-collectibles.jpg";
import useCaseJewellery from "@/assets/use-case-jewellery.jpg";
import useCasePlants from "@/assets/use-case-plants.jpg";
import useCaseEvents from "@/assets/use-case-events.jpg";

export type UseCase = {
  id: string;
  title: string;
  image: string;
  about: string;
  recall: string;
};

export const anythingUseCase: UseCase = {
  id: "anything",
  title: "Literally anything you want",
  image: useCaseAnything,
  about:
    "If it crosses your mind, it belongs in Recall. A dream you don't want to forget. A compliment someone gave you. The colour of paint in a hotel lobby. A funny thing your kid said. The wine your neighbour brought to dinner. Recall has no opinion about what's worth saving — only that you might want it back one day.",
  recall:
    "Ask in plain language: 'what was that thing about…?' Recall searches across everything you've ever saved — text, images, places, people, links — and surfaces whatever fits. The more you capture, the more your second brain has to draw on.",
};

export const useCases: UseCase[] = [
  {
    id: "wines",
    title: "Wines",
    image: useCaseWines,
    about:
      "That bottle you loved at dinner. The one your friend recommended. The label you photographed at that vineyard. Snap a picture of the bottle and add a tasting note — even just 'liked it, peppery.' Recall extracts the producer, vintage, and region from the label automatically.",
    recall:
      "Ask: 'which Bordeaux did I open last summer?' or 'show me the reds I rated 7/10 or higher.' Recall finds the bottle, the note, the place — perfect for the next restaurant order or wine shop visit.",
  },
  {
    id: "ideas",
    title: "Ideas",
    image: useCaseIdeas,
    about:
      "Every fleeting thought, half-formed concept, or shower-time epiphany — captured before it slips away. Jot down a sentence, dictate a voice memo, snap a sketch on a napkin. Recall preserves the spark and the context: when you had it, where you were, what triggered it.",
    recall:
      "Ask: 'what was that idea I had about the side project last month?' or 'show me everything I noted down about pricing.' Recall connects related ideas across time and surfaces the thread you were pulling on — even if you've forgotten the exact words.",
  },
  {
    id: "things",
    title: "Things",
    image: useCaseInventory,
    about:
      "Keep track of everything you own and where it lives. Snap a photo of the contents of a drawer, a storage box in the attic, or the shelf in the garage. Add a note about what's inside, condition, or when you bought it. Recall handles the rest — turning piles of stuff into a searchable, organised inventory you can actually find again.",
    recall:
      "Ask: 'where did I put the Christmas lights?' or 'do I still have spare HDMI cables?' Recall surfaces the photo, the note, and the location instantly. Search by what's in the image, not just by what you typed — Recall recognises the objects you've stored.",
  },
  {
    id: "dream-home",
    title: "Dream Home",
    image: useCaseDreamhome,
    about:
      "Every interior you've fallen in love with, every paint colour that caught your eye, every fixture and floorplan idea — collected as you find them. Snap pages from magazines, save Instagram posts, pin a tile shop on the map, jot a sentence about the kitchen you stayed in on holiday.",
    recall:
      "Ask: 'what was that green I liked for the bedroom?' or 'show me the bathrooms I've saved.' Recall pulls the photos, the notes and the places together — turning a scattered moodboard into something you can actually take to a builder.",
  },
  {
    id: "lists",
    title: "Lists",
    image: useCaseLists,
    about:
      "Shopping lists, packing lists, gift ideas, books to read, films to watch. All the running tallies that live on scraps of paper and half-finished notes apps — finally in one place. Add items in seconds, with photos or links if you want the extra context.",
    recall:
      "Ask: 'what's on my packing list for skiing?' or 'what books did I want to read this summer?' Recall pulls up the list, lets you check things off, and remembers what you finished — so the next time you start a similar list, it can suggest items.",
  },
  {
    id: "cookbooks",
    title: "Cookbooks",
    image: useCaseCookbooks,
    about:
      "Your physical cookbook shelf, made searchable. Snap the cover, the recipe index and a few favourite pages from each book. Recall indexes the recipes — so a wall of cookbooks becomes a personal recipe database you can actually use mid-week.",
    recall:
      "Ask: 'which of my books has a good roast chicken recipe?' or 'what can I make with aubergines?' Recall points you to the exact book and page — no more flipping through a dozen cookbooks to find the one you remember.",
  },
  {
    id: "activities",
    title: "Things to do",
    image: useCaseTodo,
    about:
      "The restaurant a friend mentioned. The hiking trail you saw on Instagram. The exhibition closing next month. All the 'we should do that sometime' moments — captured with a link, a photo, or a pinned location, so they don't fade into vague intentions.",
    recall:
      "Ask: 'what restaurants did I save in Lisbon?' or 'what gig did Elly recommend?' Recall surfaces ideas by place, by season, or by who suggested them — turning a backlog of intentions into actual plans.",
  },
  {
    id: "bills",
    title: "Bills & Invoices",
    image: useCaseReceipts,
    about:
      "Never lose a receipt again. Snap it the moment you're handed one — paper, email, or screen. Recall reads the merchant, the amount, the items and the date automatically, so you don't have to type anything. Expense reports, warranties, returns and tax season all get instantly easier.",
    recall:
      "Ask: 'how much did I spend on coffee last month?' or 'find the receipt from the hardware store in June.' Recall surfaces the image and the extracted details, ready to forward, file or claim.",
  },
  {
    id: "important-dates",
    title: "Important Dates",
    image: useCaseDates,
    about:
      "Birthdays, anniversaries, the day you started a new job, when the boiler was last serviced. The dates you'll wish you remembered, plus the context: who, what, where, and what you did last time.",
    recall:
      "Ask: 'what did I get Mum last year?' or 'when's our anniversary?' Recall surfaces the date and everything attached to it — so you never duplicate a gift, miss a milestone, or forget the year the car was bought.",
  },
  {
    id: "miscellaneous",
    title: "Miscellaneous",
    image: useCaseMisc,
    about:
      "Everything that doesn't fit a neat category. A serial number from the back of an appliance. A parking spot photo. A Wi-Fi password scribbled on a coaster. A quote you liked. The bits and pieces of life that don't belong in a notes app but you really do need later — Recall keeps them all in one place, with whatever context you add.",
    recall:
      "Ask: 'what was the Wi-Fi at that café?' or 'find the serial number for the washing machine.' Recall surfaces the photo or note instantly — even when you can't remember exactly what you saved or when, just what it was about.",
  },
  {
    id: "alcohol",
    title: "Alcohol Cabinet",
    image: useCaseAlcohol,
    about:
      "The whiskies, gins, vermouths and bitters scattered across your shelf — all in one searchable place. Snap each bottle as you open it, add a quick note on how you liked it, what you mixed it with, or who gifted it. Recall reads the label so you don't have to type the producer or age statement.",
    recall:
      "Ask: 'what gin do I have that works for a Negroni?' or 'which whisky did Dad bring last Christmas?' Recall surfaces the bottle, your tasting note and what's still left — perfect for pouring guests or restocking before a dinner party.",
  },
  {
    id: "pets",
    title: "Pets",
    image: useCasePets,
    about:
      "Vaccination dates, vet bills, the brand of food they actually eat, the toy they destroyed in a week, photos at every age. Everything about your pet, in one place — instead of scattered across the fridge, the vet's portal and your camera roll.",
    recall:
      "Ask: 'when's the next worming due?' or 'what was the name of that treat she loved?' Recall surfaces the record, the photo or the receipt — so vet visits, sitters and new vets get everything they need in seconds.",
  },
  {
    id: "tattoos",
    title: "Tattoos",
    image: useCaseTattoos,
    about:
      "Designs you love, artists you want to book, placements you're considering. Save reference photos, sketches, flash sheets and screenshots — plus the studio name, the price quoted and the aftercare instructions you'll definitely need later.",
    recall:
      "Ask: 'what was the artist for the floral piece I saved?' or 'show me the references for my forearm idea.' Recall pulls the whole moodboard together so you walk into the appointment with everything in one place.",
  },
  {
    id: "masks",
    title: "Mask Collection",
    image: useCaseMasks,
    about:
      "Every mask in your collection — Venetian, Noh, ceremonial, modern. Snap each one, note where you bought it, who made it, what it's made of, and any history that came with it. The collection becomes a living catalogue instead of a row of shelves.",
    recall:
      "Ask: 'which masks did I buy in Venice?' or 'show me the ones with feathers.' Recall pulls the photos and the provenance together — perfect for insurance, for showing visitors, or for tracking what's still on your wishlist.",
  },
  {
    id: "plants",
    title: "Plants",
    image: useCasePlants,
    about:
      "Every plant in the house, plus the ones you've killed and the ones you want to try. Snap each pot, note the species, when you last watered, when you repotted, the spot it likes. Recall keeps the care notes attached to the plant instead of on a sticky note that's long gone.",
    recall:
      "Ask: 'when did I last feed the monstera?' or 'which plants are safe for the cat?' Recall surfaces the schedule, the photos and the notes — turning houseplant chaos into something that actually thrives.",
  },
  {
    id: "collectibles",
    title: "Collectibles",
    image: useCaseCollectibles,
    about:
      "Coins, stamps, action figures, trading cards, vinyl, enamel pins — whatever you collect. Snap each piece, note the condition, the year, where you bought it and what you paid. Recall reads what it can from the image and keeps the rest organised.",
    recall:
      "Ask: 'do I already own this one?' or 'what's missing from the 1986 set?' Recall surfaces matches, gaps and duplicates — so you stop buying the same thing twice and finally close out the set.",
  },
  {
    id: "jewellery",
    title: "Jewellery",
    image: useCaseJewellery,
    about:
      "Every ring, chain, pair of earrings and family heirloom — photographed, valued and quietly catalogued. Add the maker, the metal, the stone, the story behind it. Useful for insurance, useful for inheritance, useful for finding the earring back you swear you put somewhere.",
    recall:
      "Ask: 'where's Grandma's brooch?' or 'show me the silver pieces.' Recall surfaces the photo, the location and the details — ready for an insurance claim, a valuation or just finding what to wear tonight.",
  },
  {
    id: "upcoming-events",
    title: "Upcoming Events",
    image: useCaseEvents,
    about:
      "Concerts, weddings, festivals, conferences, the gallery opening next month. The tickets, the wristbands, the dress code, the address, who else is going and what time you said you'd arrive — all in one place instead of scattered across email and DMs.",
    recall:
      "Ask: 'what's on this weekend?' or 'where's the ticket for Friday?' Recall pulls up the event, the tickets, the location and any notes — so you stop scrolling through inboxes the morning of.",
  },
];

export const allUseCases: UseCase[] = [...useCases, anythingUseCase];

export type CarouselSlot =
  | { kind: "use-case"; useCase: UseCase }
  | { kind: "see-more" };

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Build the 7-slot carousel: 3 random use cases, "anything", 2 more random,
 * then "see more". Excludes the anything use case from the random pool.
 */
export function buildCarouselSlots(): CarouselSlot[] {
  const shuffled = shuffle(useCases).slice(0, 5);
  const first3 = shuffled.slice(0, 3);
  const next2 = shuffled.slice(3, 5);
  return [
    ...first3.map<CarouselSlot>((uc) => ({ kind: "use-case", useCase: uc })),
    { kind: "use-case", useCase: anythingUseCase },
    ...next2.map<CarouselSlot>((uc) => ({ kind: "use-case", useCase: uc })),
    { kind: "see-more" },
  ];
}
