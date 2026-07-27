const WORDS_PER_MINUTE = 225;

const sections = [
  {
    id: 'crash',
    paragraphs: [
      `Four weeks ago, during the Hyde Park Blast criterium, I crashed hard enough to break seven ribs and snap my clavicle. A titanium plate now holds my shoulder together, and my recovery will be measured not in miles, but in weeks.`,

      `It's been nearly a month since I last uploaded to Strava, and not a day has gone by that I haven't thought about when I can ride again. I always knew how much time and energy cycling consumed, but I don't think I ever stopped to consider how deeply it had become embedded in every corner of my life until it was suddenly taken away.`,

      `My injuries will heal. That's what bones do. But I'm beginning to realize that I didn't just lose the ability to ride my bike. I temporarily lost the framework around which much of my life is organized.`,
    ],
  },

  {
    id: 'physical',
    paragraphs: [
      `The obvious void is physical. Every day off the bike is another day of fitness slowly slipping away. It sounds like hyperbole, but I can almost feel it happening. My legs are restless, desperate to work, while my healing ribs remind me that breathing hard still hurts and my plated clavicle reminds me that biology doesn't negotiate with impatience.`,

      `My diet has become strangely untethered. I spent years eating to fuel rides and recover from races, only to discover that those habits don't disappear just because the training does. I catch myself looking in the mirror, worried about the softness replacing muscle and wondering how much of the engine I worked so hard to build is slowly fading.`,

      `I miss the chemical reward. Like an addict craving a fix, I've found myself longing for that familiar post-ride calm—that strange cocktail of exhaustion, accomplishment, relief, and clarity that only seems to arrive after hours on the bike. I don't think I appreciated how much my emotional equilibrium depended on it until it disappeared.`,
    ],
  },

  {
    id: 'common-language',
    paragraphs: [
      `Nearly every meaningful friendship I've formed since moving to Louisville exists because of a bicycle. Some friends race in pristine Lycra, obsessed with grams and watts. Others ride fixed gears through alleyways in cut-off shirts before ending the night over cheap beer. Some disappear into the woods every weekend. Others couldn't care less about racing and simply enjoy wandering the city on two wheels.`,

      `Different aesthetics. Different philosophies. Different reasons for riding. Yet somehow the bicycle became our common language.`,

      `When I crashed, I didn't just stop riding. I temporarily disappeared from the place where those relationships naturally exist. Most of the time I spend with my closest friends is while we're riding. So naturally, if I'm not on my bike, I'm not with them, because they're still doing what we all love.`,
    ],
    styles: {
      1: 'pull',
    },
  },

  {
    id: 'identity',
    paragraphs: [
      `Cycling isn't just a hobby. It shapes how I eat, how I spend weekends, the places I travel, the conversations I seek out, the technology I obsess over, and even the work I find meaningful. Some of my favorite engineering conversations have happened on long rides, somewhere between snack breaks at remote gas stations.`,

      `Cycling has also changed how I think about health, risk, competition, friendship, community, and politics. Somewhere along the way, the bicycle stopped being something I owned and quietly became one of the lenses through which I experienced the rest of life.`,

      `When one activity weaves itself into that many aspects of your life, it eventually stops being an activity. It becomes part of your identity.`,
    ],
    styles: {
      2: 'pull',
    },
  },

  {
    id: 'conflict',
    paragraphs: [
      `For years I've watched the Louisville cycling community slog through conflict after conflict. Petty disagreements. Personality clashes. Hurt feelings. Splinter groups. People taking sides over things that often seemed trivial from the outside. Against the backdrop of dangerous roads, underbuilt cycling infrastructure, barriers to participation, and the countless challenges our community already faces, those disagreements often felt painfully small.`,

      `I've always tried to stay above it, or at least outside of it. Because after all... are we talking or are we riding? But I've never really understood why the drama seemed so inevitable. That is, until I was forced to watch from the sidelines and contemplate it all.`,

      `If my life is cycling, and cycling is my life—and if I'm surrounded by people who feel much the same way—then of course life spills into cycling. How could it not?`,
    ],
    styles: {
      2: 'pull',
    },
  },

  {
    id: 'home',
    paragraphs: [
      `We often get into cycling because it feels like an escape. We focus on the breathing, the pedal stroke, the route ahead, the suffering, the scenery. For a little while, the rest of life fades into the background.`,

      `But eventually the escape becomes home. And once something becomes home, it doesn't remain separate from the rest of life. It slowly accumulates everything else that makes us who we are. Our relationships. Our ambitions. Our fears. Our grief. Our pride. Our generosity.`,

      `Cycling itself is a culture, complete with its own language, fashion, rituals, heroes, unwritten rules, and social hierarchy. Even within it are countless smaller tribes: the weight weenies, the commuters, the couriers, the gravel riders, the fixie counterculture, the endurance addicts, the sprinters, the mountain bikers, the dentists.`,

      `From the outside, it probably looks absurd. From the inside, it feels like belonging. I think that is what makes it so powerful—and perhaps what makes it so volatile.`,
    ],
  },

  {
    id: 'shared-miles',
    paragraphs: [
      `The bicycle is never just the bicycle. It's the thing around which our lives become intertwined. It's why someone you've only shared a handful of rides with can feel like an old friend. Maybe it's the shared danger of traffic, potholes, loose dogs, and inattentive drivers. Maybe it's the mutual suffering. Maybe it's the post-ride ice cream or beer. Whatever it is, there's something difficult to explain to people who haven't experienced it.`,

      `When you've shared enough miles together, you've usually shared everything else too:`,

      `Weddings.
Divorces.
Children.
Deaths.
Illness.
Career changes.
Traumas.
Failures.
Victories.
Life.`,

      `So no, it no longer surprises me that cyclists occasionally fight over things that seem petty to everyone else. What once looked like melodrama now looks more like the inevitable consequence of caring deeply about something bound up with our identities, our happiness, and our sense of belonging.`,
    ],
    styles: {
      2: 'stacked',
    },
  },

  {
    id: 'letter',
    paragraphs: [
      `And so, to my fellow cyclists:`,

      `We're not arguing about bicycles.`,

      `We're arguing about the things we've attached to them: our identities, our friendships, our pride, our grief, our aspirations, and our need for belonging.`,

      `That's why the disagreements sometimes feel disproportionate. That's why group rides fracture, friendships strain, clubs splinter, and social media erupts over things that seem laughably insignificant to outsiders. To outsiders, they're just bikes. To us, they're the axis around which so much of life quietly revolves.`,

      `Recognizing that doesn't excuse poor behavior. Ego is still ego. Cruelty is still cruelty. But instead of asking, “Why are cyclists so dramatic?” perhaps we should ask, “What is this disagreement really protecting?” Rarely is it only a ride name, race result, or route. More often, it is a person trying to protect some part of themselves they have unknowingly wrapped around this beautiful, absurd sport.`,

      `Maybe understanding that would make us a little slower to judge one another and a little quicker to forgive. The person frustrating us has probably endured the same close calls with traffic, the same freezing winter rides, the same impossible climbs, and the same inexplicable joy of rolling home completely exhausted and somehow more alive than when they left. Very few people outside this community will ever fully understand that.`,

      `The bicycle doesn't merely carry us down the road. It carries pieces of who we are. So, let's stop pretending that what happens on the bike can be isolated from everything we carry onto it. When conflict comes, we should remember what brought us together before deciding what ought to divide us.`,
    ],
    styles: {
      1: 'pull',
    },
  },

  {
    id: 'foundation',
    paragraphs: [
      `This injury has forced me to ask myself a difficult question. Not whether I want to come back—I do, without hesitation—but whether I've allowed too much of my life to rest on one remarkably fragile piece of anatomy.`,

      `Cycling has given me far more than it has ever taken away. Maybe the lesson is not to love it less, but to build a life with more than one foundation.`,

      `Because someday, whether through injury, age, or circumstance, every cyclist rides home for the last time.`,

      `When that day comes for me, I know I will leave a tremendous part of myself behind. But I hope I will have learned that what mattered most was never the bicycle alone. It was the people, the friendships, and the life it carried me toward.`,
    ],
    styles: {
      2: 'pull',
    },
  },
];

const wordCount = sections
  .flatMap((section) => section.paragraphs)
  .join(' ')
  .trim()
  .split(/\s+/)
  .filter(Boolean).length;

const essay = {
  slug: 'open-letter-cycling',
  plainTitle: 'An Open Letter to the Cycling Community',
  titleLines: ['An Open Letter', 'to the Cycling Community'],
  subtitle:
    'On injury, identity, community, and what remains after the bike is put away.',
  signature: 'Ken',
  dateline: 'Louisville, Kentucky · August 2026',
  readingTime: `${Math.max(
    1,
    Math.ceil(wordCount / WORDS_PER_MINUTE),
  )} min read`,
  sections,
};

export default essay;
