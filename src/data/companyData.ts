import { ProductItem, ManufacturingStep, QualityMatrixRow, ComplianceSlot, FAQItem } from '../types';

export const COMPANY_DETAILS = {
  name: 'JAYRAJI',
  tagline: 'Pure by Nature. Trusted by Choice.',
  subtitle: 'Master crafted cold-pressed mustard oil and pure edible oils, merging generational Indian agricultural wisdom with precision mechanical extraction.',
  corporateAddressPlaceholder: '[Corporate Office: Plot No. / Commercial Tower, Industrial Area — Enter Here]',
  plantAddressPlaceholder: '[Manufacturing Facility: Agro-Processing Zone / Oil Mills Cluster — Enter Here]',
  phonePrimary: '+91 95690 23092',
  phoneDisplay: '+91 95690 23092',
  whatsappDirect: 'https://wa.me/919569023092?text=Hello%20JAYRAJI%20Team,%20I%20am%20interested%20in%20distribution%20and%20bulk%20supply.',
  emailCorporate: 'anshulyaduvanshi0909@gmail.com',
  emailDistribution: 'anshulyaduvanshi0909@gmail.com',
  operatingHours: 'Monday – Saturday: 09:00 AM – 06:30 PM IST',
  cinPlaceholder: '[CIN: Corporate Identity Number — Pending Verification]',
  fssaiPlaceholder: '[FSSAI Central / State License No. — Enter Here]',
  gstinPlaceholder: '[GSTIN Registration No. — Enter Here]',
};

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'mustard-cold-pressed',
    name: 'JAYRAJI Pure Cold-Pressed Mustard Oil',
    category: 'mustard',
    status: 'available',
    badge: 'Flagship Edition',
    tagline: 'Traditional Single-Expeller Extraction Under 45°C',
    heroImage: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80',
    ],
    extractionProcess: 'Slow-mechanical cold extraction using heavy-duty expellers with integrated water cooling jackets to preserve all natural allylisothiocyanate volatile aromatic compounds.',
    temperatureLimit: 'Strictly monitored < 45°C (True Cold-Pressed)',
    flashPoint: 'High Flash Point ~290°C (Deep Frying Safe)',
    smokePoint: '250°C (482°F) high-tolerance cooking stability',
    pungencyLevel: 'Grade 1 Robust Pungency (Natural Jhaanjh)',
    pungencyRating: 5,
    shelfLife: '12 Months from Manufacturing Date in Ambient Conditions',
    storageInstructions: 'Store in an airtight container away from direct sunlight and excessive humidity. No refrigeration required. Natural crystallization at low temperatures is a sign of purity.',
    overview: 'JAYRAJI Pure Cold-Pressed Mustard Oil is pressed exclusively from carefully selected bold black and brown mustard seeds (Brassica nigra and Brassica juncea). We avoid chemical extraction, bleaching agents, or synthetic additives, retaining its signature dark golden amber hue, invigorating aroma, and balanced fatty acid profile.',
    packOptions: [
      { size: '500 ml', type: 'Food-grade Recyclable PET Bottle', idealFor: 'Compact households & trial use', code: 'JRJ-MO-500' },
      { size: '1 Litre', type: 'Rigid Square Grip PET Bottle', idealFor: 'Standard family monthly staple', code: 'JRJ-MO-1000' },
      { size: '2 Litre', type: 'Ergonomic Easy-Pour Jerry Can', idealFor: 'Active kitchen cooking & tadka', code: 'JRJ-MO-2000' },
      { size: '5 Litre', type: 'Heavy Duty Food-grade Canister', idealFor: 'Large households & festive cooking', code: 'JRJ-MO-5000' },
      { size: '15 Litre', type: 'Traditional Tin Container (13.65 kg net)', idealFor: 'Sweet makers, caterers, & institutional kitchens', code: 'JRJ-MO-15000T' },
    ],
    culinaryPairings: [
      {
        dish: 'Traditional Tadka (Tempering)',
        description: 'Brings forth an earthy, crisp aromatic base for dals, kadhi, and dry vegetable stir-fries with cumin and mustard seeds.',
        technique: 'Smoke gently until faint wisps appear, then cool slightly before adding spices.'
      },
      {
        dish: 'Authentic Indian Pickles (Achaar)',
        description: 'Acts as an organic preservative due to natural antimicrobial properties, keeping mango, lime, and red chilli pickles crisp for months.',
        technique: 'Pour directly over sun-dried spices and raw produce to lock in longevity.'
      },
      {
        dish: 'Sarson Ka Saag & Winter Greens',
        description: 'Imparts the definitive North Indian rustic flavor essential for winter brassica preparations and makki ki roti accompaniments.',
        technique: 'Fold in at the finish to retain pungency and golden shine.'
      },
      {
        dish: 'Bengali Macher Jhol & Fish Fries',
        description: 'Elevates coastal and riverine fish gravies, lending the unmistakable zest and deep amber caramelization.',
        technique: 'High heat flash-fry for a delicate crispy crust while sealing tender juices.'
      }
    ],
    specifications: [
      { label: 'FFA (Free Fatty Acid as Oleic)', value: '< 1.20% Max', verifiedBy: 'In-House Quality Testing Unit' },
      { label: 'Moisture & Insoluble Impurities', value: '< 0.20% w/w', verifiedBy: 'Batch Titration Protocol' },
      { label: 'Refractive Index at 40°C', value: '1.4646 – 1.4662', verifiedBy: 'Digital Abbe Refractometer' },
      { label: 'Saponification Value', value: '170 – 184 mg KOH/g', verifiedBy: 'Standard Laboratory Assay' },
      { label: 'Iodine Value', value: '98 – 110 g I₂/100g', verifiedBy: 'Wijs Method Test' },
      { label: 'Synthetic Color / Added Flavors', value: '0.00% (Strictly Absent)', verifiedBy: 'Spectrophotometric Screen' },
      { label: 'Argemone Oil Test', value: 'Negative (Zero Contamination)', verifiedBy: 'TLC Nitric Acid Test' }
    ],
    nutritionPer100g: {
      energy: '884 kcal',
      totalFat: '100.0 g',
      mufa: '65.0 g',
      pufa: '21.0 g',
      sfa: '12.0 g',
      transFat: '0.0 g',
      cholesterol: '0.0 mg',
      vitaminE: '34.0 mg'
    }
  },
  {
    id: 'kachi-ghani-wooden',
    name: 'JAYRAJI Kachi Ghani (Wooden Kolhu)',
    category: 'kachi-ghani',
    status: 'coming-soon',
    badge: 'Artisanal Batch • Launching Soon',
    tagline: 'Ancestral Wooden Cold Expeller (Lakdi Kolhu) Extraction',
    heroImage: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1000&q=80',
    ],
    extractionProcess: 'Ultra-low RPM (14–18 RPM) crushing inside seasoned neem-wood chambers. Cold friction process preserves raw enzymatic integrity without any metal ion contact.',
    temperatureLimit: 'Ambient Extraction (< 38°C strictly enforced)',
    flashPoint: '~285°C',
    smokePoint: '245°C',
    pungencyLevel: 'Intense Artisanal Pungency',
    pungencyRating: 5,
    shelfLife: '9 Months from Packing Date',
    storageInstructions: 'Store in UV-protected glass or tin container in a dark, cool pantry.',
    overview: 'Under development in our dedicated heritage pilot wing. Designed for connoisseurs seeking the purest form of cold-pressed mustard oil with zero heating, cold crushed in seasoned wooden mortars.',
    packOptions: [
      { size: '1 Litre', type: 'Dark Amber UV-Blocking Bottle', idealFor: 'Gourmet daily wellness & cooking', code: 'JRJ-KG-1000' },
      { size: '5 Litre', type: 'Vintage Food-grade Tin Container', idealFor: 'Connoisseur households', code: 'JRJ-KG-5000' },
    ],
    culinaryPairings: [
      {
        dish: 'Raw Culinary Drizzles & Marinades',
        description: 'Drizzled raw over steamed hilsa, boiled potatoes (Aloo Bharta), and fresh onion chutneys for maximum sharp piquancy.',
        technique: 'Use unheated to enjoy complete volatile natural jhaanjh.'
      }
    ],
    specifications: [
      { label: 'Extraction Chamber', value: 'Certified Food-Safe Seasoned Wood', verifiedBy: 'Pilot Line Specification' },
      { label: 'Temperature Target', value: '< 38°C Max Peak Friction', verifiedBy: 'Continuous Infrared Sensor' },
      { label: 'Status', value: 'Pre-production Trial Runs', verifiedBy: 'JAYRAJI Quality Lab' }
    ],
    nutritionPer100g: {
      energy: '884 kcal',
      totalFat: '100.0 g',
      mufa: '66.0 g',
      pufa: '20.5 g',
      sfa: '11.5 g',
      transFat: '0.0 g',
      cholesterol: '0.0 mg',
      vitaminE: '36.0 mg'
    }
  },
  {
    id: 'groundnut-cold-pressed',
    name: 'JAYRAJI Filtered Peanut / Groundnut Oil',
    category: 'refined',
    status: 'coming-soon',
    badge: 'Under Formulation • Coming Soon',
    tagline: 'Naturally Settled Sweet Pod Groundnut Oil',
    heroImage: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80',
    ],
    extractionProcess: 'Mechanical screw press of clean-shelled Saurashtra/Rajasthan peanuts, followed by micro-fabric filtration without chemical degumming or caustic neutralization.',
    temperatureLimit: '< 50°C Mechanical Press',
    flashPoint: '~310°C',
    smokePoint: '232°C',
    pungencyLevel: 'Mild Nutty & Sweet Aroma',
    pungencyRating: 2,
    shelfLife: '12 Months',
    storageInstructions: 'Keep in cool dry environment away from dampness.',
    overview: 'Expanding the JAYRAJI promise to traditional filtered groundnut oil. Perfectly balanced for all-round everyday Indian frying, flatbreads, and festive sweets with zero trans fats.',
    packOptions: [
      { size: '1 Litre', type: 'Ergonomic Transparent Bottle', idealFor: 'Daily general cooking', code: 'JRJ-GNO-1000' },
      { size: '5 Litre', type: 'Canister Pack', idealFor: 'Frying & snack preparation', code: 'JRJ-GNO-5000' },
      { size: '15 Litre', type: 'Food Grade Tin', idealFor: 'Bulk food processors & commercial kitchens', code: 'JRJ-GNO-15000' },
    ],
    culinaryPairings: [
      {
        dish: 'Deep Frying & Savory Snacks',
        description: 'Leaves puris, samosas, and pakoras non-greasy with an inviting nutty note.',
        technique: 'Maintains stability over extended frying cycles.'
      }
    ],
    specifications: [
      { label: 'Refining Mode', value: 'Physical Micro-filtration Only (No Solvents)', verifiedBy: 'Process Specification' },
      { label: 'Status', value: 'R&D Phase Under Pilot Batching', verifiedBy: 'JAYRAJI Technical Team' }
    ],
    nutritionPer100g: {
      energy: '884 kcal',
      totalFat: '100.0 g',
      mufa: '48.0 g',
      pufa: '32.0 g',
      sfa: '18.0 g',
      transFat: '0.0 g',
      cholesterol: '0.0 mg',
      vitaminE: '28.0 mg'
    }
  }
];

export const MANUFACTURING_STEPS: ManufacturingStep[] = [
  {
    step: 1,
    title: 'Seed Sourcing & Agricultural Grading',
    tagline: 'Selecting only high-density, mature Indian mustard grains',
    description: 'We procure selectively from established oilseed cultivation belts. Every inbound lot undergoes moisture sampling, seed density screening, and physical foreign matter inspection before binning.',
    criticalParameter: 'Moisture: 6.0% – 7.5% | Impurities: < 1.0%',
    qualityControlAction: 'Pre-cleaning seed moisture verification and visual screen for insect damage or immature seed clusters.',
    equipmentType: 'Digital Grain Moisture Analyzer & Density Separator',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    detailedSpecs: [
      'Origin: Selected harvest lots from North & Central Indian mustard mandis',
      'Dual optical check for seed integrity and absence of split grains',
      'Storage in aerated, climate-controlled holding silos'
    ]
  },
  {
    step: 2,
    title: 'Precision Cleaning & Conditioning',
    tagline: 'Multi-stage aspiration, de-stoning, and magnetic separation',
    description: 'Incoming seeds pass through high-frequency vibratory sieves, high-power magnetic bars, and air aspirators to purge dust, husk, stones, and stray ferrous particles.',
    criticalParameter: 'Purity Level: 99.5%+ Clean Seed Mass',
    qualityControlAction: 'Zero tolerance for stones, stalks, or particulate sand entering the extraction screw.',
    equipmentType: 'Vibratory Multi-Deck Screen & Triple Drum Aspirator',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    detailedSpecs: [
      'Stage 1: Rotary scalper removing large twigs and husks',
      'Stage 2: Specific gravity de-stoner removing sand and grit',
      'Stage 3: Rare-earth neodymium magnetic sweep removing metal debris'
    ]
  },
  {
    step: 3,
    title: 'Cold Expeller Mechanical Extraction',
    tagline: 'Low-speed single-pass press with chilled water jackets',
    description: 'Cleaned seeds enter heavy-duty mechanical screw expellers engineered to run at controlled RPM. Chilled water jackets dissipate mechanical frictional heat, ensuring temperature remains below 45°C.',
    criticalParameter: 'Operating Temp: Strictly < 45°C at Exit Orifice',
    qualityControlAction: 'Continuous IR pyrometer recording of oil exit temperature every 15 minutes.',
    equipmentType: 'Heavy-Duty Water-Cooled Cold Screw Expellers',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    detailedSpecs: [
      'No steam cooking or pre-heating boilers used',
      'Mechanical friction alone liberates pure virgin oil',
      'Preserves the delicate allyl isothiocyanate pungency and antioxidant tocopherols'
    ]
  },
  {
    step: 4,
    title: 'Sedimentation & Multi-Stage Micro-Filtration',
    tagline: 'Physical settling and non-chemical canvas filter presses',
    description: 'Raw oil rests in stainless steel settling vats to allow heavier meal particles to settle naturally. It then travels through progressive high-density food-grade cotton canvas and micro-mesh filters.',
    criticalParameter: 'Optical Clarity: Translucent Amber | Sediment: 0.0%',
    qualityControlAction: 'Filtration pressure monitoring and turbidity meter sampling.',
    equipmentType: 'Multi-Plate SS304 Filter Press & Micro-pore Cartridge Filter',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    detailedSpecs: [
      'Completely physical filtration—no chemical solvents (hexane) or bleaching earths',
      'Retains the natural golden-red color and rich viscosity',
      'Final pass through 5-micron food-safe polishing elements'
    ]
  },
  {
    step: 5,
    title: 'In-House Laboratory Batch Analysis',
    tagline: 'Rigorous chemical, physical, and purity testing before release',
    description: 'Every oil batch is transferred to holding tanks and sealed until internal laboratory clearance. Testing verifies FFA, refractive index, iodine value, and tests for Argemone adulterants.',
    criticalParameter: 'Argemone: Zero (Negative) | FFA: < 1.2% | Moisture: < 0.25%',
    qualityControlAction: 'Mandatory Certificate of Analysis (CoA) generated and logged per batch.',
    equipmentType: 'TLC Chromatograph, Abbe Refractometer, Automated Titrator',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    detailedSpecs: [
      'Chemical assay for free fatty acid content and peroxide formation',
      'Nitric acid reagent test for argemone oil screening',
      'Retained batch reference samples stored for 18 months'
    ]
  },
  {
    step: 6,
    title: 'Automated Bottling & Induction Sealing',
    tagline: 'Touchless filling under cleanroom hygiene parameters',
    description: 'Cleared oil flows through food-grade SS316L manifolds into automated filling nozzles. Containers undergo ionized air cleaning, volumetric filling, nitrogen blanket purging, and tamper-proof induction foil sealing.',
    criticalParameter: 'Volumetric Accuracy: ± 0.2% | Hermetic Induction Seal',
    qualityControlAction: 'Automated checkweigher validation and torque tightness inspection.',
    equipmentType: 'Automated Monoblock Filling & Capping Line with Nitrogen Doser',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80',
    detailedSpecs: [
      'Virgin, BPA-free food-grade PET and tinplate containers',
      'Induction foil sealing prevents oxidation and transit leakage',
      'Inkjet batch code, packaging date, and MRP printing for total traceability'
    ]
  }
];

export const QUALITY_MATRIX: QualityMatrixRow[] = [
  {
    parameter: 'Extraction Methodology',
    jayrajiStandard: 'Cold-pressed mechanical expeller (< 45°C, no solvent)',
    commercialBlendedStandard: 'Chemical solvent extraction (Hexane) + high heat (> 180°C)',
    significance: 'Preserves natural nutrients, vitamins, and authentic sharp flavor.',
    testingMethod: 'Process Temperature Logs & Solvent Residue Assay'
  },
  {
    parameter: 'Chemical Bleaching / Deodorization',
    jayrajiStandard: 'Zero (None). 100% unbleached, unfiltered amber virgin oil',
    commercialBlendedStandard: 'Activated clays, chemical washes, and steam deodorization',
    significance: 'Maintains raw phytochemicals and natural carotenoids.',
    testingMethod: 'Spectrophotometric Absorption Test'
  },
  {
    parameter: 'Free Fatty Acid (FFA as Oleic)',
    jayrajiStandard: 'Consistently < 1.20% Max (Indicating fresh seeds)',
    commercialBlendedStandard: 'Often 2.0% – 3.0% before chemical neutralization',
    significance: 'Lower FFA prevents rancidity and extends natural shelf life.',
    testingMethod: 'Standard Acid-Base Titration (IS 548)'
  },
  {
    parameter: 'Argemone Oil Contamination',
    jayrajiStandard: 'Strictly Absent / Negative (Zero tolerance)',
    commercialBlendedStandard: 'Common risk in unorganized supply chains',
    significance: 'Prevents toxic dropsy caused by sanguinarine alkaloids.',
    testingMethod: 'TLC & Concentrated Nitric Acid Test'
  },
  {
    parameter: 'Synthetic Allyl Isothiocyanate / Added Aroma',
    jayrajiStandard: '0.00% (Strictly natural pungency from genuine seed)',
    commercialBlendedStandard: 'Sometimes added synthetically to boost smell in weak oils',
    significance: 'Guarantees authentic culinary punch with zero artificial flavorings.',
    testingMethod: 'Gas Chromatography Mass Spectrometry (GC-MS)'
  },
  {
    parameter: 'Moisture & Insoluble Matter',
    jayrajiStandard: '< 0.20% w/w (Ensuring micro-filtration dryness)',
    commercialBlendedStandard: 'Up to 0.45% w/w (Accelerates microbial degradation)',
    significance: 'Dry oil prevents hydrolysis and preserves smoke point integrity.',
    testingMethod: 'Karl Fischer Titration / Oven Moisture Evaporation'
  }
];

export const COMPLIANCE_SLOTS: ComplianceSlot[] = [
  {
    code: 'FSSAI-COMPLIANCE',
    agency: 'Food Safety and Standards Authority of India',
    title: 'FSSAI License & Manufacturing Compliance',
    description: 'Mandatory standard compliance for edible vegetable oil manufacturing, packaging, and food-grade hygiene protocols.',
    placeholderText: '[FSSAI License No. — Enter Here]',
    statusText: 'Documentation Prepared / Verification in Process'
  },
  {
    code: 'AGMARK-STANDARD',
    agency: 'Directorate of Marketing & Inspection (Govt. of India)',
    title: 'AGMARK Grade I Mustard Oil Grading',
    description: 'Statutory national quality grading certifying optical clarity, iodine value, and natural pungency standards for mustard oils.',
    placeholderText: '[AGMARK Certification No. — Details Pending Verification]',
    statusText: 'Lab Testing Conforming to Grade I Standards'
  },
  {
    code: 'ISO-STANDARDS',
    agency: 'International Organization for Standardization',
    title: 'Food Safety Management Systems (ISO 22000 / HACCP)',
    description: 'Process management controls ensuring zero foreign object contamination and hygienic handling from silo to dispatch.',
    placeholderText: '[ISO 22000 / HACCP Audit Reference — Enter Here]',
    statusText: 'Framework Aligned with Plant Operational SOPs'
  },
  {
    code: 'WEIGHTS-MEASURES',
    agency: 'Legal Metrology Department',
    title: 'Legal Metrology & Packaged Commodities Act',
    description: 'Standardized filling weights, clear volumetric labeling, tamper-proof induction foil sealing, and batch trace codes.',
    placeholderText: '[Legal Metrology Registration — Enter Here]',
    statusText: 'Fully Compliant Volumetric Dispensing'
  }
];

export const B2B_ROADMAP_STEPS = [
  {
    step: '01',
    title: 'Initial Commercial Enquiry',
    description: 'Submit your firm details, distribution territory, and monthly projected volume (Cartons or Metric Tonnes).',
    timeline: 'Within 24 Hours'
  },
  {
    step: '02',
    title: 'Spec Review & Sample Dispatch',
    description: 'Receive our technical data sheet, Certificate of Analysis (CoA), and sample packs dispatched directly to your office/lab.',
    timeline: '2 – 3 Working Days'
  },
  {
    step: '03',
    title: 'Commercial Terms & Pricing Sign-off',
    description: 'Transparent slab-based wholesale rates, GST invoicing details, payment terms, and dispatch schedules agreed upon.',
    timeline: '3 – 5 Working Days'
  },
  {
    step: '04',
    title: 'Production Allocation & Dispatch',
    description: 'Orders are freshly batched, securely palletized or crated, and dispatched with e-Way bills and batch CoA.',
    timeline: 'As Per Contract Lead-Time'
  },
  {
    step: '05',
    title: 'Dedicated Account Management',
    description: 'Single point of contact for re-orders, marketing collateral support, logistics coordination, and billing reconciliation.',
    timeline: 'Ongoing Partnership'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'manufacturing',
    question: 'What differentiates JAYRAJI cold-pressed mustard oil from regular commercial refined mustard oil?',
    answer: 'Traditional cold extraction does not expose the seeds to excessive artificial heat or chemical solvents like hexane. We mechanically press selected whole mustard seeds using water-cooled screw expellers kept below 45°C. This locks in natural antioxidants (tocopherols), delicate allyl isothiocyanate aroma, and essential fatty acids without chemical bleaching or deodorization.'
  },
  {
    id: 'faq-2',
    category: 'sourcing',
    question: 'How do you ensure zero contamination with Argemone mexicana (adulterant)?',
    answer: 'Argemone seeds are a notorious agricultural weed that can mix with mustard harvests. At JAYRAJI, we conduct mandatory optical seed grading upon receipt, followed by rigorous in-house laboratory chemical testing (TLC and nitric acid tests) for every lot. No batch moves to extraction without confirmed negative argemone results.'
  },
  {
    id: 'faq-3',
    category: 'b2b',
    question: 'What is the Minimum Order Quantity (MOQ) for distributors and institutional buyers?',
    answer: 'For state and district distributors, typical trial orders start at 100 to 200 mixed cartons (combinations of 1L bottles, 2L, 5L cans, and 15L tins). For institutional kitchens, caterers, and private label bulk seekers, supply is available in 15L tins or bulk tankers on contract terms. Please submit the B2B inquiry form for custom volume quotations.'
  },
  {
    id: 'faq-4',
    category: 'b2b',
    question: 'Can JAYRAJI provide custom packaging or private labeling?',
    answer: 'Yes. We provide institutional packing and contract manufacturing options for modern trade chains, restaurant networks, and corporate brands subject to minimum run volumes and packaging lead times.'
  },
  {
    id: 'faq-5',
    category: 'culinary',
    question: 'Does JAYRAJI mustard oil have a high smoke point suitable for deep frying?',
    answer: 'Yes. High-quality unadulterated cold-pressed mustard oil has a smoke point of approximately 250°C (482°F) and a flash point near 290°C. This makes it exceptionally resilient for traditional Indian deep frying (kachoris, samosas, fish) and high-heat tadka tempering without thermal breakdown.'
  },
  {
    id: 'faq-6',
    category: 'sourcing',
    question: 'Why does genuine mustard oil have a pungent tear-inducing aroma (Jhaanjh)?',
    answer: 'The signature pungency comes naturally from allyl isothiocyanate, which is released when mustard seed enzymes (myrosinase) interact during gentle crushing. Commercial refining removes this compound with steam, leaving a flat, flavorless oil. JAYRAJI retains its natural, invigorating jhaanjh purely through careful cold pressing.'
  },
  {
    id: 'faq-7',
    category: 'manufacturing',
    question: 'How should JAYRAJI mustard oil be stored, and what is the shelf life?',
    answer: 'Store the container tightly sealed in a cool, dry area away from direct sunlight. Unopened containers have an optimal shelf life of 12 months from manufacturing date. Note that slight natural thickening or cloudiness at chilly temperatures is normal for pure seed oils and dissolves quickly when placed in room temperature.'
  }
];
