import { ChemicalProduct, CompanyOffice } from './types';

// Category cover imports
import imgDefault from './assets/images/atlas_chemical_banner_1779280184633.png';
import imgAgro from './assets/images/agro_chemicals_cover_1779368342951.png';
import imgVitamin from './assets/images/nutrients_vitamins_cover_1779368362980.png';
import imgSecurity from './assets/images/security_devices_cover_1779368378590.png';
import imgProduce from './assets/images/fresh_produce_cover_1779368398115.png';

// Individual product image imports
import imgTHF from './assets/images/High-Purity Tetrahydrofuran (THF).jpg';
import imgTiO2 from './assets/images/Titanium Dioxide Rutile (Nano).jpg';
import imgDMSO from './assets/images/Dimethyl Sulfoxide (DMSO) Pharma-Grade.jpg';
import imgPEG from './assets/images/Polyethylene Glycol (PEG-400).jpg';
import imgCobalt from './assets/images/Cobalt Octoate 12 percent.jpg';
import imgAcetonitrile from './assets/images/Ultra-Pure Acetonitrile (HPLC Grade).jpg';
import imgEVA from './assets/images/Ethylene Vinyl Acetate Copolymer (EVA-18).jpg';
import imgAlCl3 from './assets/images/Anhydrous Aluminum Chloride (Catalyst Grade).jpg';
import imgChlorpyrifos from './assets/images/Chlorpyrifos Technical.jpg';
import imgEmamectin from './assets/images/Emamectin Benzoate.jpg';
import imgProfenofos from './assets/images/Profenofos Technical.jpg';
import imgThiamethoxam from './assets/images/Thiamethoxam 30 percent FS.jpg';
import imgLambda from './assets/images/Lambda-Cyhalothrin Tech.jpg';
import imgChlorantraniliprole from './assets/images/Chlorantraniliprole Tech.jpg';
import imgGA3 from './assets/images/Gibberellic Acid (GA3).jpg';
import imgAbamectin from './assets/images/Abamectin Tech.jpg';
import imgPotassiumHumate from './assets/images/Potassium Humate Powder.jpg';
import imgHumicAcid from './assets/images/Humic Acid Flakes premium.jpg';
import imgVitA from './assets/images/Vitamin A Palmitate 1.7M IU.jpg';
import imgVitD3 from './assets/images/Vitamin D3 (Cholecalciferol).jpg';
import imgVitD2 from './assets/images/Vitamin D2 (Ergocalciferol).jpg';
import imgVitE from './assets/images/Vitamin E (DL-Alpha Tocopheryl Acetate).jpg';
import imgVitB12 from './assets/images/Vitamin B12 (Cyanocobalamin).jpg';
import imgVitC from './assets/images/Ascorbic Acid (Vitamin C).jpg';
import imgVitK from './assets/images/Vitamin K (Phytomenadione).jpg';
import imgEMLock from './assets/images/Industrial EM Lock 280kg.jpg';
import imgShutterSensor from './assets/images/Heavy Duty Shutter Sensor.jpg';
import imgLZBracket from './assets/images/Anodized LZ Bracket Set.jpg';
import imgDoorSensor from './assets/images/Precision Door Contact Sensor.jpg';
import imgExitSwitch from './assets/images/Stainless Steel Exit Switch.jpg';
import imgSolenoid from './assets/images/Solenoid Strike Lock system.jpg';
import imgMangoes from './assets/images/Subtropical Bio-secure Mangoes.jpg';
import imgAvocadoes from './assets/images/Phyto-isolated Fresh Avocadoes.jpg';
import imgBellPeppers from './assets/images/Rich Nutrient Bell Peppers.jpg';

export { imgDefault, imgAgro, imgVitamin, imgSecurity, imgProduce };

export const CHEMICAL_PRODUCTS: ChemicalProduct[] = [
  {
    id: 'prod-01',
    name: 'High-Purity Tetrahydrofuran (THF)',
    formula: 'C₄H₈O',
    casNumber: '109-99-9',
    category: 'Solvents',
    purity: '≥ 99.9%',
    description: 'Ultra-low moisture specialty industrial solvent designed for polymerization, pharmaceutical synthesis, and organometallic reactions.',
    safetyClass: 'Class 3 Flammable Liquid',
    applications: ['Pharmaceutical APIs', 'Grignard Reagents', 'Polymer Coatings', 'Adhesives'],
    packaging: ['200L Steel Drums', '1000L IBC Tanks', 'Bulk Iso-Tanks'],
    imageUrl: imgTHF,
    actionTarget: 'contact'
  },
  {
    id: 'prod-02',
    name: 'Titanium Dioxide Rutile (Nano)',
    formula: 'TiO₂',
    casNumber: '13463-67-7',
    category: 'Catalysts',
    purity: '≥ 98.5%',
    description: 'High surface-area photo-catalyst optimized for protective coatings, solar energy conversion, and advanced plastic masterbatches.',
    safetyClass: 'Non-Hazardous (Powder)',
    applications: ['UV-Shielding Coatings', 'Photo-voltaics', 'Polymers & Plastics', 'Environmental Catalyst'],
    packaging: ['25kg Multi-layer Bags', '500kg Bulk Bags'],
    imageUrl: imgTiO2,
    actionTarget: 'contact'
  },
  {
    id: 'prod-03',
    name: 'Dimethyl Sulfoxide (DMSO) Pharma-Grade',
    formula: 'C₂H₆OS',
    casNumber: '67-68-5',
    category: 'Solvents',
    purity: '≥ 99.95%',
    description: 'Low-odor pharmaceutical grade solvent with extremely high membrane penetration, ideal for drug delivery formulations and cryopreservation.',
    safetyClass: 'Low Toxicity / Irritant',
    applications: ['Active Pharmaceutical Ingredients (APIs)', 'Cell Conservation', 'Agrochemicals', 'Electronics Cleansing'],
    packaging: ['25L HDPE Jerrycans', '220L Polypropylene Drums'],
    imageUrl: imgDMSO,
    actionTarget: 'contact'
  },
  {
    id: 'prod-04',
    name: 'Polyethylene Glycol (PEG-400)',
    formula: 'H(OCH₂CH₂)nOH (n≈8.2)',
    casNumber: '25322-68-3',
    category: 'Polymers',
    purity: 'Medical & Food Grade',
    description: 'Water-soluble, low-volatility polymer widely used as an excipient, wetting agent, and viscosity modifier in cosmetics and pharmaceutical suspensions.',
    safetyClass: 'Non-Hazardous',
    applications: ['Cosmetics', 'Oral Formulations', 'Ointments & Creams', 'Metal Working Lubricants'],
    packaging: ['200kg Plastic Drums', '1000kg IBC Containers'],
    imageUrl: imgPEG,
    actionTarget: 'contact'
  },
  {
    id: 'prod-05',
    name: 'Cobalt Octoate 12%',
    formula: 'Co(C₈H₁₅O₂)₂',
    casNumber: '136-52-7',
    category: 'Catalysts',
    purity: '12% Metal Content',
    description: 'Heavy metal dryer accelerator for unsaturated polyester resins, giving superior drying crosslinks in ambient conditions.',
    safetyClass: 'Class 9 Environmentally Hazardous',
    applications: ['Fibre Reinforced Plastics (FRP)', 'Alkyd Paint Driers', 'Polymerization Initiator'],
    packaging: ['50kg Iron Pails', '180kg Steel Drums'],
    imageUrl: imgCobalt,
    actionTarget: 'contact'
  },
  {
    id: 'prod-06',
    name: 'Ultra-Pure Acetonitrile (HPLC Grade)',
    formula: 'CH₃CN',
    casNumber: '75-05-8',
    category: 'Reagents',
    purity: '≥ 99.98%',
    description: 'Sub-ppb metal specification purity solvent crucial for high-performance liquid chromatography, mass spectrometry, and peptide synthesis.',
    safetyClass: 'Class 3 Flammable & Toxic',
    applications: ['HPLC & LC-MS Analysis', 'Peptide Synthesis', 'DNA / RNA Synthesis', 'Quality Control Laboratories'],
    packaging: ['4 x 4L Glass Carton', '20L Stainless Steel Drums'],
    imageUrl: imgAcetonitrile,
    actionTarget: 'contact'
  },
  {
    id: 'prod-07',
    name: 'Ethylene Vinyl Acetate Copolymer (EVA-18)',
    formula: '(C₂H₄)x(C₄H₆O₂)y',
    casNumber: '24937-78-8',
    category: 'Polymers',
    purity: '18% VA Content',
    description: 'High-toughness, flexible copolymer used extensively in hot-melt adhesives, solar encapsulation films, and sound barriers.',
    safetyClass: 'Non-Hazardous Pellets',
    applications: ['Hot-Melt Adhesives', 'Photovoltaic Encapsulating', 'Wire & Cable Jacketing', 'Footwear Midsoles'],
    packaging: ['25kg Valve Bags', '1000kg Octabins'],
    imageUrl: imgEVA,
    actionTarget: 'contact'
  },
  {
    id: 'prod-08',
    name: 'Anhydrous Aluminum Chloride (Catalyst Grade)',
    formula: 'AlCl₃',
    casNumber: '7446-70-0',
    category: 'Catalysts',
    purity: '≥ 99.0%',
    description: 'Strong Lewis acid catalyst required for Friedel-Crafts alkylation, isomerization, and pharmaceutical intermediate manufacturing processes.',
    safetyClass: 'Class 8 Corrosive Solid',
    applications: ['Friedel-Crafts Catalysis', 'Scent & Fragrance Synthesis', 'Dye Intermediates', 'Refinery Alkylations'],
    packaging: ['50kg Moisture-Proof Drums', 'Bulk Tanker Loads'],
    imageUrl: imgAlCl3,
    actionTarget: 'contact'
  },

  // ==================== AGRO CHEMICALS (Redirects to "About" section as requested) ====================
  {
    id: 'agro-01',
    name: 'Chlorpyrifos Technical',
    formula: 'C₉H₁₁Cl₃NO₃PS',
    casNumber: '2921-88-2',
    category: 'Agro Chemicals',
    purity: '≥ 97.0%',
    description: 'Organophosphate insecticide grade formulated for broad-spectrum crop defense, soil treatment, and structural pest deterrence.',
    safetyClass: 'Class 6.1 Toxic Substance',
    applications: ['Broad-scale Crop Care', 'Soil Infestation Management', 'Termite Barriers'],
    packaging: ['250kg UN Steel Drums', 'Bulk ISO Tanks'],
    imageUrl: imgChlorpyrifos,
    actionTarget: 'about'
  },
  {
    id: 'agro-02',
    name: 'Emamectin Benzoate',
    formula: 'C₄₉H₇₅NO₁₃ · C₇H₆O₂',
    casNumber: '155569-91-8',
    category: 'Agro Chemicals',
    purity: '≥ 95.0%',
    description: 'Modern bio-pesticide designed to target Lepidoptera species with exceptional systemic plant penetration and low residue curves.',
    safetyClass: 'Class 6.1 Mild Poison',
    applications: ['Horticulture Defense', 'Lepidopteran Pest Control', 'Foliar Crop Protection'],
    packaging: ['25kg Fiber Drums', '1kg Aluminum Pouches'],
    imageUrl: imgEmamectin,
    actionTarget: 'about'
  },
  {
    id: 'agro-03',
    name: 'Profenofos Technical',
    formula: 'C₁₁H₁₅BrClO₃PS',
    casNumber: '41198-08-7',
    category: 'Agro Chemicals',
    purity: '≥ 94.0%',
    description: 'Acaricide and insecticide targeting chewing and sucking insects in cotton and vegetable fields with powerful translaminar action.',
    safetyClass: 'Class 6.1 Moderately Toxic',
    applications: ['Cotton Crop Shielding', 'Sucking Pest Eradication', 'Systemic Foliage Care'],
    packaging: ['200L Polyurethane Drums', '25L HDPE Cans'],
    imageUrl: imgProfenofos,
    actionTarget: 'about'
  },
  {
    id: 'agro-04',
    name: 'Thiamethoxam 30% FS',
    formula: 'C₈H₁₀ClN₅O₃S (30% Solu)',
    casNumber: '153719-23-4',
    category: 'Agro Chemicals',
    purity: '30% Flowable Concentrate',
    description: 'High-efficacy neonicotinoid configured as a seed dress option to shield early roots from early soil and root pests.',
    safetyClass: 'Class 9 Ecologically Regulated',
    applications: ['Early Seed Coating', 'Root System Conditioning', 'Suction Insect Control'],
    packaging: ['50L HDPE Containers', '5L Dispenser Packs'],
    imageUrl: imgThiamethoxam,
    actionTarget: 'about'
  },
  {
    id: 'agro-05',
    name: 'Lambda-Cyhalothrin Tech',
    formula: 'C₂₃H₁₉ClF₃NO₃',
    casNumber: '91465-08-6',
    category: 'Agro Chemicals',
    purity: '≥ 96.5%',
    description: 'Active synthetic pyrethroid with powerful contact and stomach action to secure crops from extensive bug infestations.',
    safetyClass: 'Class 6.1 Restricted Substance',
    applications: ['Foliar Pest Eradication', 'Locust Outbreak Management', 'Public Health Vector Control'],
    packaging: ['25kg Cardboard Cases', '200L Drum Packs'],
    imageUrl: imgLambda,
    actionTarget: 'about'
  },
  {
    id: 'agro-06',
    name: 'Chlorantraniliprole Tech',
    formula: 'C₁₈H₁₄BrCl₂N₅O₂',
    casNumber: '500008-45-7',
    category: 'Agro Chemicals',
    purity: '≥ 98.0%',
    description: 'Premium ryanodine receptor modulator pesticide with a stellar profile. Provides hyper-efficient caterpillar defense with favorable eco-safety parameters.',
    safetyClass: 'Low Toxicity Profile',
    applications: ['Vanyards & Orchards Care', 'Caterpillar Control', 'Eco-safe Agriculture Integration'],
    packaging: ['25kg Sealed Tins', '500g Bottles'],
    imageUrl: imgChlorantraniliprole,
    actionTarget: 'about'
  },
  {
    id: 'agro-07',
    name: 'Gibberellic Acid (GA3)',
    formula: 'C₁₉H₂₂O₆',
    casNumber: '77-06-5',
    category: 'Agro Chemicals',
    purity: '≥ 90.0% Crystalline',
    description: 'Organic phytohormone and plant growth accelerator that stimulates cell division, expanding grapes and accelerating crop development.',
    safetyClass: 'Non-Hazardous',
    applications: ['Grape & Fruit Elongation', 'Seed Germination Interventions', 'Brewing Malt Acceleration'],
    packaging: ['10kg Custom Fiber Bags', '100g Cryo Jars'],
    imageUrl: imgGA3,
    actionTarget: 'about'
  },
  {
    id: 'agro-08',
    name: 'Abamectin Tech',
    formula: 'C₄₈H₇₂O₁₄ + C₄₇H₇₀O₁₄',
    casNumber: '71751-41-2',
    category: 'Agro Chemicals',
    purity: '≥ 95.0%',
    description: 'Insecticide and miticide fermented from natural soil microbiology to target mites and leafminers with supreme systemic penetration.',
    safetyClass: 'Class 6.1 Highly Toxic Tech',
    applications: ['Acarid Eradication', 'Greenhouse Ornamental Security', 'Fruit Leafminer Defense'],
    packaging: ['25L Steel Pails', '1kg Sealed Jars'],
    imageUrl: imgAbamectin,
    actionTarget: 'about'
  },
  {
    id: 'agro-09',
    name: 'Potassium Humate Powder',
    formula: 'Humic Acid Salt',
    casNumber: '68514-28-3',
    category: 'Agro Chemicals',
    purity: '≥ 85.0% Humate Content',
    description: 'Highly alkaline organic fertilizer helper that optimizes mineral utilization and holds soil moisture levels in drought areas.',
    safetyClass: 'Non-Hazardous Organic Base',
    applications: ['Soil Structure Revitalization', 'Organic Fertilizer Formulations', 'Drought Resistance Upgrading'],
    packaging: ['25kg Poly-woven bags', '800kg Super-sacks'],
    imageUrl: imgPotassiumHumate,
    actionTarget: 'about'
  },
  {
    id: 'agro-10',
    name: 'Humic Acid Flakes premium',
    formula: 'Natural Macromolecules',
    casNumber: '1415-93-6',
    category: 'Agro Chemicals',
    purity: '≥ 70% Humic Active',
    description: 'Rich organic matter flakes designed to chelates crucial micronutrients in the roots, boosting trace fertilizer uptake and soil aeration.',
    safetyClass: 'Eco-certified Soil Conditioner',
    applications: ['Root Drip Irrigation Help', 'Sandy Soil Humus Enrichment', 'Natural Crop Stimulant'],
    packaging: ['25kg Valve Bags', '1000kg Bulk Sacks'],
    imageUrl: imgHumicAcid,
    actionTarget: 'about'
  },

  // ==================== VITAMINS (Redirects to "Contact" section as requested) ====================
  {
    id: 'vit-01',
    name: 'Vitamin A Palmitate 1.7M IU',
    formula: 'C₃₆H₆₀O₂',
    casNumber: '79-81-2',
    category: 'Vitamins',
    purity: '1,700,000 IU/g USP',
    description: 'Pharmaceutical and infant formula grade Vitamin A oil, stabilized with natural tocopherol antioxidants.',
    safetyClass: 'USP Food Grade',
    applications: ['Infant Fortification', 'Nutritional Supplements', 'Advanced Cosmetic Cosmeceuticals'],
    packaging: ['25kg Sealed Glass Cartons', '5kg Aluminum Flasks'],
    imageUrl: imgVitA,
    actionTarget: 'contact'
  },
  {
    id: 'vit-02',
    name: 'Vitamin D3 (Cholecalciferol)',
    formula: 'C₂₇H₄₄O',
    casNumber: '67-97-0',
    category: 'Vitamins',
    purity: '≥ 99.0% Crystalline',
    description: 'High-purity dry powder form or oil form configured for medical supplement systems and bone health formulation enrichment.',
    safetyClass: 'Toxic in Pure Powder',
    applications: ['Clinical Calcium Formulation', 'Nutritional Supplements', 'Dairy Fortification'],
    packaging: ['10kg Sealed Kegs', '1kg Tin Packs'],
    imageUrl: imgVitD3,
    actionTarget: 'contact'
  },
  {
    id: 'vit-03',
    name: 'Vitamin D2 (Ergocalciferol)',
    formula: 'C₂₈H₄₄O',
    casNumber: '50-14-6',
    category: 'Vitamins',
    purity: '≥ 98.0% Food Grade',
    description: 'Premium quality plant-derived Vitamin D2 formulated for clean label vegan nutritional products and multi-vitamins.',
    safetyClass: 'Food Supplement Grade',
    applications: ['Vegan Supplementation', 'Specialty Plant Milks', 'Clinical Supplements'],
    packaging: ['25kg Food Drums', '2kg Alum Cans'],
    imageUrl: imgVitD2,
    actionTarget: 'contact'
  },
  {
    id: 'vit-04',
    name: 'Vitamin E (DL-Alpha Tocopheryl Acetate)',
    formula: 'C₃₁H₅₂O₃',
    casNumber: '7695-91-2',
    category: 'Vitamins',
    purity: '≥ 98.0% Pure Oil',
    description: 'Stable oil ester serving as a powerful antioxidant, safeguarding cellular lipid membranes from radical cellular degradation.',
    safetyClass: 'Safe Organic Compound',
    applications: ['Anti-aging Skin Care', 'Dietary Oils', 'Animal Nutrition Premixes'],
    packaging: ['200kg Metal Barrels', '20kg HDPE Cans'],
    imageUrl: imgVitE,
    actionTarget: 'contact'
  },
  {
    id: 'vit-05',
    name: 'Vitamin B12 (Cyanocobalamin)',
    formula: 'C₆₃H₈₈CoN₁₄O₁₄P',
    casNumber: '68-19-9',
    category: 'Vitamins',
    purity: '99.0% Pure HPLC',
    description: 'Bespoke red crystalline raw material for anemia management formulas and nervous system preservation pills.',
    safetyClass: 'High-purity active agent',
    applications: ['Pernicious Anemia Therapeutics', 'Energy Drinks', 'Pediatric Formulations'],
    packaging: ['100g Sealed Glass Vials', '1kg Air-tight Jars'],
    imageUrl: imgVitB12,
    actionTarget: 'contact'
  },
  {
    id: 'vit-06',
    name: 'Ascorbic Acid (Vitamin C)',
    formula: 'C₆H₈O₆',
    casNumber: '50-81-7',
    category: 'Vitamins',
    purity: '≥ 99.5% FCC Grade',
    description: 'Fine white acidic powder with exceptional antioxidant activities, preserving food shelf lives and building structural collagen.',
    safetyClass: 'Atoxic Organic Acid',
    applications: ['Natural Preservatives', 'Immunity Boosters', 'Beverage Refining'],
    packaging: ['25kg Triple Cardboard Boxes', '500kg Bulk Bags'],
    imageUrl: imgVitC,
    actionTarget: 'contact'
  },
  {
    id: 'vit-07',
    name: 'Vitamin K (Phytomenadione)',
    formula: 'C₃₁H₄₆O₂',
    casNumber: '84-80-0',
    category: 'Vitamins',
    purity: '≥ 97.0% Pure oil',
    description: 'Active vitamin required directly in the liver for blood coagulant element generation and vascular crystallization deterrence.',
    safetyClass: 'Medical Auxiliary Solution',
    applications: ['Hematology Therapeutics', 'Bone Density Enhancements', 'Emergency Coagulation Prep'],
    packaging: ['5L Sealed Dark Jars', '1kg Vacuum Containers'],
    imageUrl: imgVitK,
    actionTarget: 'contact'
  },

  // ==================== SECURITY SYSTEMS (Redirects to "Contact" section as requested) ====================
  {
    id: 'sec-01',
    name: 'Industrial EM Lock 280kg',
    formula: 'Electromagnetic Holding Lock',
    casNumber: 'Hardware-EML280',
    category: 'Security Systems',
    purity: 'Holding Force: 600lbs / 280kg',
    description: 'Heavy duty anodized electromagnetic lock, optimized with electronic fail-safe design and feedback logs for commercial fire doors.',
    safetyClass: 'UL Listed Fire-safe Hardware',
    applications: ['Server Room Security', 'Office Exit Integration', 'Fail-Safe Fire Doors'],
    packaging: ['Single Installer Box', 'Carton of 10 Units'],
    imageUrl: imgEMLock,
    actionTarget: 'contact'
  },
  {
    id: 'sec-02',
    name: 'Heavy Duty Shutter Sensor',
    formula: 'Magnetic Rolling Reed Switch',
    casNumber: 'Hardware-RSS900',
    category: 'Security Systems',
    purity: 'Gap Distance: ≥ 50mm',
    description: 'Indestructible cast-aluminum sensor designed to trigger industrial rolling shutters, built with a heavy armored cable casing.',
    safetyClass: 'IP67 Waterproof Rating',
    applications: ['Warehouse Garage Alarms', 'Retail Rolling Shutter Alarms', 'Heavy Equipment Security'],
    packaging: ['Sealed Hardware Pack', 'Box containing 50 units'],
    imageUrl: imgShutterSensor,
    actionTarget: 'contact'
  },
  {
    id: 'sec-03',
    name: 'Anodized LZ Bracket Set',
    formula: 'Universal Mounting Bracket Block',
    casNumber: 'Hardware-LZ600',
    category: 'Security Systems',
    purity: 'High-Strength Machined Alum',
    description: 'Specialty LZ mounting accessories required to secure electromagnetic hardware on inswinging entry door structures.',
    safetyClass: 'Industrial Grade Assembly',
    applications: ['Inswinging Glass Entrance Gates', 'Emergency Wooden Doors', 'Structural Frame Conversion'],
    packaging: ['Set of 3 Screws Included', 'Bulk Box of 15 sets'],
    imageUrl: imgLZBracket,
    actionTarget: 'contact'
  },
  {
    id: 'sec-04',
    name: 'Precision Door Contact Sensor',
    formula: 'Recessed Magnetic Contact Core',
    casNumber: 'Hardware-DCS110',
    category: 'Security Systems',
    purity: 'Trace Voltage: 12-24V DC',
    description: 'Discreet press-fit security magnetic switches designed to alert control hubs of unauthorized window or office frame access.',
    safetyClass: 'CE Compliant Automation',
    applications: ['Office Perimeter Alarms', 'Intelligent HVAC shutdown systems', 'Data Server Rack Monitoring'],
    packaging: ['Sealed Multi-kit of 5', 'Bulk Tray of 100'],
    imageUrl: imgDoorSensor,
    actionTarget: 'contact'
  },
  {
    id: 'sec-05',
    name: 'Stainless Steel Exit Switch',
    formula: 'Backlit Request-to-Exit Push',
    casNumber: 'Hardware-RTE200',
    category: 'Security Systems',
    purity: 'Mechanic Cycles: ≥ 500,000',
    description: 'High visibility wall-mounted switch with sleek laser-etched lettering designed for easy entry control releases.',
    safetyClass: 'CE & RoHS Certified',
    applications: ['Access Control Overrides', 'Office Main Intercom Release', 'Cleanroom Entry Loops'],
    packaging: ['Single unit mounting kit', 'Carton of 40 switches'],
    imageUrl: imgExitSwitch,
    actionTarget: 'contact'
  },
  {
    id: 'sec-06',
    name: 'Solenoid Strike Lock system',
    formula: 'Electromechanical Strike Core',
    casNumber: 'Hardware-SLK350',
    category: 'Security Systems',
    purity: 'Fail-Secure / Fail-Safe Config',
    description: 'Compact metal door strike lock with solid stainless steel blocks, designed to replace standard mechanical catches instantly.',
    safetyClass: 'UL tested durability',
    applications: ['Apartment Intercom Entry Locks', 'Keypad Access Door Frames', 'Internal Administrative Security'],
    packaging: ['Metal Plate Kit with installation templates', 'Box of 12 units'],
    imageUrl: imgSolenoid,
    actionTarget: 'contact'
  },

  // ==================== FRUITS & VEGETABLES / ORGANIC PRODUCE (Redirects to "Contact" section) ====================
  {
    id: 'org-01',
    name: 'Subtropical Bio-secure Mangoes',
    formula: 'Alphonso Premium Harvest',
    casNumber: 'Produce-Alphonso',
    category: 'Organic Produce',
    purity: 'Residue-free Bio cert',
    description: 'Hand-picked commercial grade Alphonso mangoes, harvested from organic orchards and curated under non-destructive testing.',
    safetyClass: 'Organic FDA Compliant',
    applications: ['Premium Fresh Fruit Logistics', 'Organic Puree Processing', 'Gourmet Food Catering'],
    packaging: ['12-Piece Wooden Crates', 'Custom Airfluid Packaging'],
    imageUrl: imgMangoes,
    actionTarget: 'contact'
  },
  {
    id: 'org-02',
    name: 'Phyto-isolated Fresh Avocadoes',
    formula: 'Hass Cultivar Selection',
    casNumber: 'Produce-Hass',
    category: 'Organic Produce',
    purity: 'Grade A Export Standards',
    description: 'Premium rich Hass avocados with high cold-storage shelf lives, optimal lipid profile and trace-impurity guarantee.',
    safetyClass: 'Non-GMO Certified',
    applications: ['Import Supermarkets', 'Cold-Pressed Avocado Oil Extraction', 'Premium Health Food chains'],
    packaging: ['4kg Carton Boxes', 'Bulk Ventilated Crates'],
    imageUrl: imgAvocadoes,
    actionTarget: 'contact'
  },
  {
    id: 'org-03',
    name: 'Rich Nutrient Bell Peppers',
    formula: 'Capsicum Annuum Trio Multi-pack',
    casNumber: 'Produce-Capsicum',
    category: 'Organic Produce',
    purity: 'No Chemical Sprays applied',
    description: 'Red, yellow, and green premium crunchy sweet peppers packed with deep vitamin ascorbic reserves, cultivated in hydro-shelters.',
    safetyClass: 'Certified Pesticide-Free',
    applications: ['Commercial Fresh Food Outlets', 'Dehydration Canning Plants', 'Organic Dining Sector'],
    packaging: ['5kg Protective Carton Baskets', 'Bulk Eco-Mesh Bags'],
    imageUrl: imgBellPeppers,
    actionTarget: 'contact'
  }
];

export const COMPANY_OFFICES: CompanyOffice[] = [
  {
    id: 'off-01',
    name: 'ATLAS CHEMICAL Trading Node',
    role: 'Regional Hub',
    city: 'Pune',
    country: 'India',
    phone: '+91 9730092433',
    email: 'kewal.patade0592@gmail.com',
    address: '20, B-2001, VTP Bel Air, Nande Road, Baner, Mahalunge, Pune, Maharashtra 411045',
    coords: { x: 70.2, y: 44.5 },
    contactPerson: 'Kewal Patade'
  },
  {
    id: 'off-02',
    name: 'Atlas Corporate Headquarters',
    role: 'Global HQ',
    city: 'Rotterdam',
    country: 'Netherlands',
    phone: '+31 (10) 555-0190',
    email: 'rotterdam.trade@atlaschemical.example.com',
    address: 'Harbor Haven Gate 412, 3011 TA Rotterdam',
    coords: { x: 49.5, y: 31.0 }
  },
  {
    id: 'off-03',
    name: 'Americas Commerce & Inquiries',
    role: 'Regional Hub',
    city: 'Houston',
    country: 'United States',
    phone: '+1 (713) 555-8320',
    email: 'houston.sales@atlaschemical.example.com',
    address: '1200 Petro Blvd, Industrial Corridor, Houston, TX 77002',
    coords: { x: 23.5, y: 38.0 }
  },
  {
    id: 'off-04',
    name: 'Atlas Synthesis Lab',
    role: 'R&D Center',
    city: 'Zurich',
    country: 'Switzerland',
    phone: '+41 (44) 922-0442',
    email: 'zurich.rd@atlaschemical.example.com',
    address: 'Polymer Strasse 18, Innovation Park, 8044 Zurich',
    coords: { x: 50.8, y: 33.8 }
  }
];

export const CERTIFICATIONS = [
  { id: 'cert-1', title: 'ISO 9001:2015', subtitle: 'Quality Management Systems', value: 'Cert: 48931QL' },
  { id: 'cert-2', title: 'ISO 14001:2015', subtitle: 'Environmental Stewardship', value: 'Cert: 33202EV' },
  { id: 'cert-3', title: 'REACH Compliant', subtitle: 'European Chemicals Agency', value: 'Full Registration' },
  { id: 'cert-4', title: 'FDA Compliant', subtitle: 'Food & Pharma Grade Materials', value: 'Facility Cert: US-920' }
];

export const TIMELINE_MILESTONES = [
  { year: '1998', title: 'Corporate Foundation', desc: 'Atlas Chemical established in Rotterdam, facilitating regional polymer trade.' },
  { year: '2005', title: 'Specialty Synthesis Launch', desc: 'Opened our flagship high-purity catalysts and analytical reagent facility in Zurich.' },
  { year: '2012', title: 'Global Logistics Expansion', desc: 'Opened dedicated Deep-Water port terminals in Houston and Singapore for bulk iso-container deliveries.' },
  { year: '2020', title: 'Green Chemistry Initiative', desc: 'Committed to over 40% reduction of carbon output through bio-derived solvent alternatives.' },
  { year: '2025', title: 'Decentralized Micro-refining', desc: 'Launched containerized modular synthesis hubs to deliver localized chemical formulas instantly.' }
];
