import { motion } from 'motion/react';
import { useRef } from 'react';

// Brand Typography Tokens:
// Titles: font-display (serif)
// Descriptions: font-sans (sans-serif)
// Glassmorphism: bg-white/5 backdrop-blur-2xl border border-white/10
// Hover Glow: hover:border-white/30
// Interaction: group-hover:scale-110 (image), -translate-y-2 (text)

const bentoItems = [
    {
        id: 'architecture',
        title: 'Roof Architecture & Installation',
        description: 'Complete estate transformations using slate, zinc, and premium synthetics.',
        // Spans 2 rows on left
        className: 'md:col-span-2 md:row-span-2',
        image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2940&auto=format&fit=crop'
    },
    {
        id: 'commercial',
        title: 'Commercial & Enterprise Solutions',
        description: 'Large-scale TPO and EPDM systems for high-value commercial assets.',
        // Wide top card
        className: 'md:col-span-2',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop'
    },
    {
        id: 'inspections',
        title: 'Precision Inspections',
        description: 'Advanced diagnostic reporting for real estate and post-storm assessments.',
        // Standard Card 1
        className: 'md:col-span-2 lg:col-span-1 lg:row-span-1',
        image: 'https://images.unsplash.com/photo-1541888081622-1d542a170564?q=80&w=2940&auto=format&fit=crop'
    },
    {
        id: 'storm',
        title: 'Storm Restoration & Insurance',
        description: 'White-glove recovery and claim management following severe weather.',
        // Vertical Card (Right Column) - Note: With a 3-col grid, to make a vertical right column card work perfectly 
        // we need to adjust span. Let's make it span 1 col, 2 rows.
        className: 'md:col-span-1 md:row-span-2',
        image: 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?q=80&w=2940&auto=format&fit=crop'
    },
    {
        id: 'repair',
        title: 'Master Repair & Maintenance',
        description: 'Surgical leak repair and proactive preservation of the building envelope.',
        // Standard Card 2
        className: 'md:col-span-1 md:row-span-1',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356f58?q=80&w=2940&auto=format&fit=crop'
    },
    {
        id: 'drainage',
        title: 'Advanced Drainage Systems',
        description: 'Custom-fabricated guttering designed for maximum water diversion.',
        // Standard Card 3
        className: 'md:col-span-2 lg:col-span-1 md:row-span-1',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2924&auto=format&fit=crop'
    }
];

// Layout adjustment for actual 3 column CSS grid:
// 1: 2 col, 2 row (Left block)
// 2: 2 col, 1 row (Top right) ... Wait, 3 column grid:
// Let's refine the exact grid coordinates for a 3-col, 3-row layout, or handle it via masonry/flex if flex is better.
// Actually, standard Bento is usually 3 columns.
// Row 1: Item 1 (col-span-2, row-span-2). Item 4 (col-span-1, row-span-2) -> Storm goes here!
// Row 2: (Implicitly filled by Item 1 and Item 4)
// Row 3: Item 2 (col-span-2), Item 3 (col-span-1) -> Wait, let's look at the mapping requested:
// Left: Large Feature Card (spans 2 rows).
// Top Wide: Commercial.
// If Left is 2 rows, and Top Wide is wide... We need a custom layout mapping.
// Let's use a 4-column, 3-row grid for maximum flexibility or stick to Tailwind's grid-cols-1 md:grid-cols-2 lg:grid-cols-3.

// Let's use a standard 3-column setup with precise spans.
// Mobile: 1 col.
// Tablet: 2 cols.
// Desktop: 3 cols.
const bentoItemsMapped = [
    {
        ...bentoItems[0], // Architecture
        className: 'col-span-1 md:col-span-2 lg:row-span-2 lg:col-span-2' // Left Large
    },
    {
        ...bentoItems[3], // Storm
        className: 'col-span-1 md:col-span-1 lg:row-span-2 lg:col-span-1' // Right Tall
    },
    {
        ...bentoItems[1], // Commercial
        className: 'col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-1' // Wide Bottom Left? User said "Wide Top Card". Let's rearrange the array to fit flow.
    }
]

export function BentoGrid() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Responsive Grid Logic:
    // lg:grid-cols-3 lg:grid-rows-3
    // Item 1 (Architecture): col-span-2 row-span-2 (Left big square)
    // Item 2 (Commercial): col-span-2 row-span-1 (Wide card, maybe bottom left?)
    // Actually, let's just use exact classes per item to match the requested look.

    const gridItems = [
        {
            id: 'architecture',
            title: 'Roof Architecture & Installation',
            description: 'Complete estate transformations using slate, zinc, and premium synthetics.',
            className: 'lg:col-span-2 lg:row-span-2 md:col-span-2 row-span-1',
            image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2940&auto=format&fit=crop'
        },
        {
            id: 'commercial',
            title: 'Commercial & Enterprise Solutions',
            description: 'Large-scale TPO and EPDM systems for high-value commercial assets.',
            className: 'lg:col-span-2 lg:row-span-1 md:col-span-2 row-span-1',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop'
        },
        {
            id: 'inspections',
            title: 'Precision Inspections',
            description: 'Advanced diagnostic reporting for real estate and post-storm assessments.',
            className: 'lg:col-span-1 lg:row-span-1 md:col-span-1 row-span-1',
            image: 'https://images.unsplash.com/photo-1541888081622-1d542a170564?q=80&w=2940&auto=format&fit=crop'
        },
        {
            id: 'storm',
            title: 'Storm Restoration & Insurance',
            description: 'White-glove recovery and claim management following severe weather.',
            className: 'lg:col-span-1 lg:row-span-2 md:col-span-1 row-span-1',
            image: 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?q=80&w=2940&auto=format&fit=crop'
        },
        {
            id: 'repair',
            title: 'Master Repair & Maintenance',
            description: 'Surgical leak repair and proactive preservation of the building envelope.',
            className: 'lg:col-span-1 lg:row-span-1 md:col-span-1 row-span-1',
            image: 'https://images.unsplash.com/photo-1504307651254-35680f356f58?q=80&w=2940&auto=format&fit=crop'
        },
        {
            id: 'drainage',
            title: 'Advanced Drainage Systems',
            description: 'Custom-fabricated guttering designed for maximum water diversion.',
            className: 'lg:col-span-1 lg:row-span-1 md:col-span-1 row-span-1',
            image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2924&auto=format&fit=crop'
        }
    ];

    // Re-ordering to make the grid flow naturally
    // Row 1: Architecture (2x2), Commercial (2x1) -> Wait, 3 columns total. Cannot have 2x2 and 2x1 in same row (needs 4 cols).
    // Request: Layout Desktop 3-column grid.
    // Large Feature Card (Left - spans 2 rows) -> col-span-2 row-span-2. That takes 2 columns, 2 rows.
    // This leaves 1 column on the right for the first 2 rows.
    // Vertical Card (Right Column) -> col-span-1 row-span-2. Fits perfectly on the right of the Large Feature Card!
    // So Row 1 & 2: [Architecture (2x2)] [Storm (1x2)]
    // Row 3: We have 3 columns available.
    // Wide Top Card: Commercial -> "Wide Top Card" might mean it should be at the top? 
    // If Commercial is Wide Top, it takes row 1, col-span-2.
    // Let's create a specific 3-column CSS Grid structure that perfectly matches standard Bento layouts.

    const orderedItems = [
        {
            id: 'commercial',
            title: 'Asset Portfolio Solutions',
            description: 'Engineered high-performance systems designed for the rigorous demands of institutional and commercial real estate.',
            className: 'lg:col-span-2 lg:row-span-1', // Wide Top
            image: 'https://images.unsplash.com/photo-1541888081622-1d542a170564?q=80&w=2940&auto=format&fit=crop'
        },
        {
            id: 'storm',
            title: 'Post-Event Recovery & Advocacy',
            description: 'White-glove restoration and strategic insurance claim management to return your estate to pre-loss perfection',
            className: 'lg:col-span-1 lg:row-span-2', // Vertical Right
            image: 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?q=80&w=2940&auto=format&fit=crop'
        },
        {
            id: 'architecture',
            title: 'Estate Master-Planning',
            description: 'Bespoke architectural envelopes crafted from slate, zinc, and copper to define the silhouette of your legacy.',
            className: 'lg:col-span-2 lg:row-span-2 max-h-[500px]', // Large Feature (Left) constrained
            image: 'https://images.unsplash.com/photo-1635424710928-0544e8512eae?q=80&w=2940&auto=format&fit=crop'
        },
        {
            id: 'inspections',
            title: 'Structural Diagnostics',
            description: 'Forensic-level analysis of the building envelope to identify latent risks before they become structural liabilities.',
            className: 'lg:col-span-1 lg:row-span-1 aspect-square', // Standard 1
            image: 'https://images.unsplash.com/photo-1504307651254-35680f356f58?q=80&w=2940&auto=format&fit=crop' // Re-used existing good one
        },
        {
            id: 'repair',
            title: 'Preservation & Stewardship',
            description: 'Surgical interventions and proactive maintenance programs designed to extend the lifespan of your architectural assets.',
            className: 'lg:col-span-1 lg:row-span-1 aspect-square', // Standard 2
            image: 'https://images.unsplash.com/photo-1541888081622-1d542a170564?q=80&w=2940&auto=format&fit=crop' // Re-used existing good one
        },
        {
            id: 'drainage',
            title: 'Hydraulic Management',
            description: 'Advanced Drainage Systems',
            className: 'lg:col-span-1 lg:row-span-1 aspect-square', // Standard 3
            image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2924&auto=format&fit=crop'
        }
    ];

    /*
      Grid Visualization (lg: grid-cols-3)
      [Commercial (2x1)]   [Storm (1x2)]
      [Architecture (2x2)] ^ (Storm cont.)
      ^ (Arch cont.)       [Inspections (1x1)]
      [Repair (1x1)]       [Drainage (1x1)]  ... Wait, Arch is 2x2.
      If Architecture is 2x2, taking cols 1 & 2. Inspections takes col 3.
    */

    return (
        <section className="bg-brand-black px-6 py-24 min-h-screen flex items-center justify-center relative z-10">
            <div className="max-w-7xl w-full mx-auto" ref={containerRef}>

                <div className="mb-16">
                    <motion.p
                        className="text-brand-silver text-xs font-semibold tracking-[0.2em] uppercase mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        Capabilities
                    </motion.p>
                    <motion.h2
                        className="font-display text-4xl md:text-5xl font-bold text-brand-white tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                    >
                        Premium Roofing Services.
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:auto-rows-[250px] md:auto-rows-[300px]">
                    {orderedItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={`group relative rounded-2xl md:rounded-[2rem] overflow-hidden cursor-pointer
                         bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-white/30 
                         transition-colors duration-500 ease-out flex flex-col justify-end
                         ${item.className}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {/* Background Image structure fix */}
                            <div className="absolute inset-0 z-0 overflow-hidden transform-gpu rounded-2xl md:rounded-[2rem]">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out transform-gpu"
                                />
                            </div>

                            {/* Content & Readability Gradient Wrapper */}
                            <div className="relative z-10 w-full mt-auto p-10 transform-gpu translate-y-0 group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                                {/* Text-Confined Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none rounded-b-2xl md:rounded-b-[2rem] -z-10" />

                                <h3 className="font-display text-xl md:text-2xl text-white font-medium tracking-tight mb-2">
                                    {item.title}
                                </h3>
                                <p className="font-sans text-brand-silver/90 text-[13px] leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
