/*
 * Blog posts data store.
 * To publish a new post, share a Google Doc or file with Claude — it reads
 * the content, formats it, and adds a new entry here, then commits and pushes.
 *
 * Field reference:
 *   id          – unique slug, used in the URL: /blog/<id>
 *   title       – post title
 *   category    – one of: "Roofing Tips" | "Maintenance" | "Monsoon Season" |
 *                          "Project Spotlight" | "Company News" | "Gutters"
 *   date        – ISO date string "YYYY-MM-DD"
 *   author      – author display name
 *   excerpt     – 1-2 sentence summary shown on listing page
 *   image       – path under /img/blog/ — add the image to public/img/blog/
 *   body        – array of content blocks (see types below)
 *
 * Body block types:
 *   { type: "p",   text: "paragraph text" }
 *   { type: "h2",  text: "section heading" }
 *   { type: "h3",  text: "sub-heading" }
 *   { type: "ul",  items: ["bullet one", "bullet two"] }
 *   { type: "ol",  items: ["step one", "step two"] }
 *   { type: "tip", text: "highlighted tip or callout" }
 *   { type: "img", src: "/img/blog/photo.jpg", caption: "optional caption" }
 */

const blogPosts = [
  {
    id: 'preparing-your-roof-for-arizona-monsoon-season',
    title: 'How to Prepare Your Roof for Arizona Monsoon Season',
    category: 'Monsoon Season',
    date: '2026-09-17',
    author: 'Artistic Roofing Systems',
    excerpt:
      'Arizona monsoons bring heavy rain, high winds, and hail that can expose weaknesses in any roof. Here\'s what homeowners in Sierra Vista should check before storm season peaks.',
    image: '/img/blog/monsoon-prep.jpg',
    body: [
      {
        type: 'p',
        text: 'Arizona\'s monsoon season runs from June through September, and Cochise County is no stranger to intense storms. High winds, driving rain, and occasional hail can turn a minor roof issue into a costly leak overnight. The good news: a little preparation goes a long way.',
      },
      { type: 'h2', text: 'Start with a Visual Inspection' },
      {
        type: 'p',
        text: 'Before the heavy storms arrive, walk around your home and look up. You don\'t need to climb on the roof — a pair of binoculars works fine from the ground. Look for:',
      },
      {
        type: 'ul',
        items: [
          'Cracked, missing, or lifted tiles or shingles',
          'Visible granule loss on asphalt shingles (look in gutters after rain)',
          'Sagging areas or water stains on your eaves',
          'Debris or standing water around roof penetrations (vents, skylights, chimneys)',
        ],
      },
      { type: 'h2', text: 'Clear Your Gutters' },
      {
        type: 'p',
        text: 'Clogged gutters cause water to back up under your roofline — one of the most common sources of interior leaks during heavy rain. Clean them out before monsoon season and make sure downspouts direct water at least 6 feet away from your foundation.',
      },
      {
        type: 'tip',
        text: 'Seamless aluminum gutters shed debris more easily than sectional gutters and are far less likely to develop leaks at the seams. Ask us about a gutter upgrade before the season peaks.',
      },
      { type: 'h2', text: 'Check Flashings and Sealants' },
      {
        type: 'p',
        text: 'Flashings are the metal pieces that seal transitions between your roof and walls, chimneys, and vents. Over time, the sealant around them dries and cracks in Arizona\'s extreme heat. This is one of the most common entry points for water during a monsoon.',
      },
      { type: 'h2', text: 'When to Call a Professional' },
      {
        type: 'p',
        text: 'If your roof is more than 15 years old, or if you spot any of the warning signs above, schedule a professional inspection before the storm season peaks. Catching a problem in June is far cheaper than repairing water damage in August.',
      },
      {
        type: 'p',
        text: 'Artistic Roofing Systems serves Sierra Vista and all of Cochise County. We offer free estimates and can typically assess your roof within a few days of your call.',
      },
    ],
  },
  {
    id: 'tile-vs-shingle-vs-metal-which-roof-is-right-for-arizona',
    title: 'Tile vs. Shingle vs. Metal: Which Roof Is Right for Arizona?',
    category: 'Roofing Tips',
    date: '2026-09-10',
    author: 'Artistic Roofing Systems',
    excerpt:
      'Choosing a roofing material in Arizona means balancing heat resistance, weight, cost, and longevity. Here\'s an honest comparison to help you decide.',
    image: '/img/blog/roofing-materials.jpg',
    body: [
      {
        type: 'p',
        text: 'Arizona\'s climate is uniquely demanding on roofing materials — extreme UV exposure, heat cycling, and monsoon moisture all take a toll. The right choice depends on your home\'s structure, your budget, and how long you plan to stay. Here\'s how the three most common materials compare.',
      },
      { type: 'h2', text: 'Concrete & Clay Tile' },
      {
        type: 'ul',
        items: [
          'Lifespan: 40–50+ years with proper maintenance',
          'Best for: homes with adequate structural support (tile is heavy)',
          'Pros: excellent heat resistance, natural look, very durable',
          'Cons: higher upfront cost, requires TRI-certified installers for correct underlayment',
        ],
      },
      {
        type: 'p',
        text: 'Tile is the most popular choice in Sierra Vista for good reason — it performs exceptionally well in desert heat and holds up through decades of monsoon seasons. Artistic Roofing is TRI Certified, meaning our installers are trained in the specific techniques that make tile roofs last.',
      },
      { type: 'h2', text: 'Asphalt Shingles' },
      {
        type: 'ul',
        items: [
          'Lifespan: 20–30 years',
          'Best for: budget-conscious homeowners, standard residential structures',
          'Pros: lower cost, wide color selection, easier repairs',
          'Cons: shorter lifespan in extreme UV environments, more granule loss over time',
        ],
      },
      { type: 'h2', text: 'Metal Roofing' },
      {
        type: 'ul',
        items: [
          'Lifespan: 40–70 years',
          'Best for: homeowners prioritizing long-term value and energy efficiency',
          'Pros: reflects heat, lightweight, very low maintenance, excellent wind resistance',
          'Cons: higher upfront cost than shingles, can be noisier in heavy rain',
        ],
      },
      {
        type: 'tip',
        text: 'Not sure which material fits your home and budget? Request a free consultation — we\'ll evaluate your structure and walk you through the options that make sense for your situation.',
      },
    ],
  },
];

export default blogPosts;
