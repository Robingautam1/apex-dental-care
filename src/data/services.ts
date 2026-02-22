export interface Service {
    slug: string;
    title: string;
    shortTitle: string;
    tagline: string;
    description: string;
    body: string;
    icon: string;
    faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
    {
        slug: 'teeth-cleaning',
        title: 'Teeth Cleaning in Rohtak — Apex Dental Care',
        shortTitle: 'Teeth Cleaning',
        tagline: 'Professional dental cleaning for a brighter, healthier smile',
        icon: 'Sparkles',
        description: 'Get professional teeth cleaning services at Apex Dental Care in Model Town, Rohtak. Dr. Aashish Malik uses advanced ultrasonic scaling technology for thorough plaque and tartar removal.',
        body: `Regular professional teeth cleaning is the foundation of excellent oral health. At Apex Dental Care in Model Town, Rohtak, Dr. Aashish Malik and our experienced team provide thorough dental cleaning services using state-of-the-art ultrasonic scaling equipment.\n\nOur teeth cleaning procedure removes built-up plaque, tartar, and surface stains that regular brushing and flossing cannot address. The process is gentle yet effective, ensuring your gums stay healthy and your teeth remain cavity-free. We recommend professional cleaning every six months to maintain optimal dental hygiene.\n\nDuring your visit, our dental team will examine your teeth and gums for any signs of decay, gum disease, or other oral health concerns. Early detection is key to preventing costly and painful dental problems down the road. As a leading dental clinic in Rohtak, Haryana, we are committed to making preventive care accessible and affordable for every member of the community.\n\nWhether you are dealing with persistent bad breath, sensitive gums, or simply want to maintain your brilliant smile, our professional cleaning service at Apex Dental Care is the right choice. Book your appointment today and experience the difference that expert care makes.`,
        faqs: [
            { question: 'How often should I get my teeth cleaned in Rohtak?', answer: 'Dentists recommend professional teeth cleaning every 6 months. At Apex Dental Care in Rohtak, Dr. Aashish Malik will assess your oral health and may recommend more frequent visits if needed.' },
            { question: 'Is teeth cleaning painful?', answer: 'Modern ultrasonic cleaning at Apex Dental Care is virtually painless. You may feel mild sensitivity during the procedure, but our team ensures your comfort throughout.' },
            { question: 'How much does teeth cleaning cost at Apex Dental Care Rohtak?', answer: 'We offer affordable teeth cleaning services. Please call us at 098021 55667 for current pricing and to book your appointment at our Model Town, Rohtak clinic.' },
        ],
    },
    {
        slug: 'root-canal-treatment',
        title: 'Root Canal Treatment in Rohtak — Apex Dental Care',
        shortTitle: 'Root Canal',
        tagline: 'Painless root canal therapy to save your natural teeth',
        icon: 'ShieldCheck',
        description: 'Expert root canal treatment at Apex Dental Care, Rohtak. Dr. Aashish Malik performs painless RCT procedures using modern techniques to save your natural teeth.',
        body: `Root canal treatment (RCT) is one of the most common and effective dental procedures for saving a severely infected or damaged tooth. At Apex Dental Care in Model Town, Rohtak, Dr. Aashish Malik — one of Rohtak\'s most trusted dental surgeons — performs root canal procedures with precision and care.\n\nMany patients fear root canal treatment, but modern dental techniques have made the procedure virtually painless. Using advanced anesthesia and rotary endodontic instruments, Dr. Malik ensures that your experience is comfortable from start to finish. Our patients frequently tell us that the procedure was far easier than they expected.\n\nDuring a root canal, the infected pulp tissue inside the tooth is carefully removed, the root canals are cleaned, shaped, and disinfected, and the tooth is sealed with a biocompatible filling material. After the procedure, a dental crown is typically placed to protect and strengthen the treated tooth.\n\nAt our dental clinic in Rohtak, Haryana, we use digital X-rays for accurate diagnosis and treatment planning. This allows us to identify the exact extent of infection and provide targeted treatment. Root canal therapy at Apex Dental Care has a high success rate, and most treated teeth last a lifetime with proper care.\n\nDon\'t let tooth pain disrupt your life. If you are experiencing persistent toothache, sensitivity to hot or cold, or swelling around a tooth, contact Apex Dental Care immediately. Early intervention can save your tooth and prevent more serious complications.`,
        faqs: [
            { question: 'Is root canal treatment painful at Apex Dental Care Rohtak?', answer: 'No. Dr. Aashish Malik uses modern anesthesia and rotary instruments to ensure a painless root canal experience. Most patients report feeling no discomfort during the procedure.' },
            { question: 'How many visits are needed for root canal treatment?', answer: 'Most root canal treatments at Apex Dental Care Rohtak are completed in 1-2 visits, depending on the severity of the infection.' },
            { question: 'What is the cost of root canal treatment in Rohtak?', answer: 'Root canal treatment costs vary based on the tooth and complexity. Contact Apex Dental Care at 098021 55667 for a consultation and accurate pricing.' },
        ],
    },
    {
        slug: 'teeth-whitening',
        title: 'Teeth Whitening in Rohtak — Apex Dental Care',
        shortTitle: 'Teeth Whitening',
        tagline: 'Brighten your smile with professional whitening',
        icon: 'Sun',
        description: 'Professional teeth whitening services at Apex Dental Care in Rohtak. Get a brighter, whiter smile with safe and effective whitening treatments by Dr. Aashish Malik.',
        body: `A bright, white smile boosts confidence and makes a lasting first impression. At Apex Dental Care in Model Town, Rohtak, we offer professional teeth whitening services that deliver dramatic results safely and effectively.\n\nUnlike over-the-counter whitening products, professional teeth whitening at our Rohtak dental clinic uses clinical-grade whitening agents under the careful supervision of Dr. Aashish Malik. This ensures even, consistent whitening without damaging your tooth enamel or causing excessive sensitivity.\n\nOur in-office whitening treatment can lighten your teeth by several shades in just one visit. We also offer take-home whitening kits with custom-fitted trays for patients who prefer a more gradual approach. Dr. Malik will assess your teeth and recommend the best whitening option based on the type and severity of staining.\n\nCommon causes of tooth discoloration include coffee, tea, red wine, tobacco use, certain medications, and natural aging. Regardless of the cause, professional whitening at Apex Dental Care can help restore your natural tooth brightness.\n\nBefore beginning any whitening treatment, we conduct a thorough dental examination to ensure your teeth and gums are healthy. Any existing cavities or gum issues are addressed first to ensure the best possible whitening results. Visit us at our conveniently located clinic in Model Town, Rohtak, Haryana, and let us help you achieve the smile you deserve.`,
        faqs: [
            { question: 'How long does teeth whitening last?', answer: 'Professional teeth whitening results at Apex Dental Care can last 6 months to 2 years, depending on your diet and oral hygiene habits.' },
            { question: 'Is teeth whitening safe for my enamel?', answer: 'Yes. Professional whitening at our Rohtak clinic uses clinically tested products that are safe for tooth enamel when applied by Dr. Aashish Malik.' },
            { question: 'Can I get teeth whitening if I have sensitive teeth?', answer: 'Yes. Dr. Malik at Apex Dental Care Rohtak uses desensitizing agents to minimize any sensitivity during and after the whitening process.' },
        ],
    },
    {
        slug: 'dental-implants',
        title: 'Dental Implants in Rohtak — Apex Dental Care',
        shortTitle: 'Dental Implants',
        tagline: 'Permanent tooth replacement that looks and feels natural',
        icon: 'Anchor',
        description: 'Get high-quality dental implants at Apex Dental Care in Rohtak. Dr. Aashish Malik provides permanent tooth replacement solutions with titanium implants for a natural-looking smile.',
        body: `Dental implants are the gold standard for replacing missing teeth. At Apex Dental Care in Model Town, Rohtak, Dr. Aashish Malik offers premium dental implant solutions that look, feel, and function just like your natural teeth.\n\nA dental implant consists of a titanium post that is surgically placed into the jawbone, where it fuses with the bone through a process called osseointegration. Once healed, a custom-made dental crown is attached to the implant, creating a permanent and stable tooth replacement.\n\nUnlike dentures, dental implants are fixed in place — there is no risk of slipping, clicking, or discomfort while eating or speaking. They also help preserve jawbone density, preventing the facial sagging that can occur with tooth loss. With proper care, dental implants can last a lifetime.\n\nAt our dental clinic in Rohtak, Haryana, we use digital imaging and 3D planning technology to ensure precise implant placement. Dr. Malik carefully evaluates each patient\'s bone density, oral health, and aesthetic goals to create a customized treatment plan.\n\nWhether you are missing a single tooth, multiple teeth, or need a full-arch restoration, Apex Dental Care has the expertise and technology to help. We also offer implant-supported dentures for patients who want a more stable alternative to traditional removable dentures. Schedule a consultation today and take the first step toward a complete, confident smile.`,
        faqs: [
            { question: 'Are dental implants permanent?', answer: 'Yes. Dental implants at Apex Dental Care Rohtak are designed to be a permanent tooth replacement solution. With proper oral hygiene, they can last a lifetime.' },
            { question: 'How long does the dental implant process take?', answer: 'The complete dental implant process typically takes 3-6 months at our Rohtak clinic, including healing time for osseointegration.' },
            { question: 'Am I a candidate for dental implants?', answer: 'Most adults with adequate jawbone density are good candidates. Dr. Aashish Malik will evaluate your suitability during a consultation at Apex Dental Care Rohtak.' },
        ],
    },
    {
        slug: 'orthodontics-braces',
        title: 'Orthodontics & Braces in Rohtak — Apex Dental Care',
        shortTitle: 'Orthodontics',
        tagline: 'Straighten your teeth for a perfectly aligned smile',
        icon: 'AlignCenter',
        description: 'Orthodontic treatment and braces at Apex Dental Care in Rohtak. Dr. Aashish Malik offers metal braces, ceramic braces, and clear aligners for children and adults.',
        body: `A straight, properly aligned smile is not just about aesthetics — it is essential for oral health, proper bite function, and long-term dental wellness. At Apex Dental Care in Model Town, Rohtak, Dr. Aashish Malik provides comprehensive orthodontic treatment for patients of all ages.\n\nWe offer multiple orthodontic options to suit your lifestyle and needs: traditional metal braces for the most effective and affordable correction, ceramic braces for a more discreet appearance, and clear aligner therapy for patients who prefer a virtually invisible option.\n\nOrthodontic treatment corrects a range of dental issues including crooked teeth, crowded teeth, gaps between teeth, overbite, underbite, crossbite, and open bite. Left untreated, these conditions can lead to difficulty in cleaning teeth, increased risk of cavities and gum disease, jaw pain, and uneven tooth wear.\n\nDr. Malik creates a personalized treatment plan for each patient, using digital impressions and X-rays to map out the precise movement of teeth over the course of treatment. Regular adjustment appointments at our Rohtak clinic ensure that your treatment stays on track.\n\nOrthodontic treatment duration varies from 6 months to 2 years depending on the complexity of the case. Our team provides clear guidance on care instructions, dietary adjustments, and hygiene practices during treatment. Investing in orthodontic care at Apex Dental Care is an investment in a lifetime of confident smiles.`,
        faqs: [
            { question: 'What age is best for orthodontic treatment?', answer: 'While early evaluation is recommended around age 7, orthodontic treatment at Apex Dental Care Rohtak is effective for teenagers and adults as well.' },
            { question: 'Do braces hurt?', answer: 'There may be mild discomfort for a few days after each adjustment. Dr. Aashish Malik at Apex Dental Care Rohtak ensures the process is as comfortable as possible.' },
            { question: 'How long do I need to wear braces?', answer: 'Treatment duration at our Rohtak clinic typically ranges from 12-24 months depending on the complexity of your case.' },
        ],
    },
    {
        slug: 'cosmetic-dentistry',
        title: 'Cosmetic Dentistry in Rohtak — Apex Dental Care',
        shortTitle: 'Cosmetic Dentistry',
        tagline: 'Transform your smile with advanced cosmetic procedures',
        icon: 'Gem',
        description: 'Cosmetic dentistry services at Apex Dental Care in Rohtak. From veneers to smile makeovers, Dr. Aashish Malik helps you achieve the smile of your dreams.',
        body: `Your smile is one of the first things people notice about you. At Apex Dental Care in Model Town, Rohtak, Dr. Aashish Malik offers a full range of cosmetic dentistry services designed to enhance the appearance of your teeth and give you the confidence to smile freely.\n\nOur cosmetic dental services include dental veneers, dental bonding, tooth contouring, smile makeovers, and aesthetic crown and bridge work. Each treatment is carefully planned to achieve natural-looking results that complement your facial features.\n\nDental veneers are thin, custom-made shells that cover the front surface of teeth to improve their appearance. They are an excellent solution for teeth that are discolored, chipped, misaligned, or have gaps. At our Rohtak dental clinic, we use high-quality porcelain veneers that mimic the translucency and luster of natural teeth.\n\nDental bonding is a more conservative and affordable option for minor cosmetic improvements. Using tooth-colored composite resin, Dr. Malik can repair chipped, cracked, or discolored teeth in a single visit.\n\nFor patients seeking a comprehensive transformation, our smile makeover service combines multiple cosmetic procedures to achieve a complete aesthetic overhaul. Dr. Malik works closely with each patient to understand their goals and design a treatment plan that delivers stunning, lasting results.\n\nVisit Apex Dental Care in Rohtak, Haryana, and discover how modern cosmetic dentistry can transform your smile and your quality of life.`,
        faqs: [
            { question: 'How long do dental veneers last?', answer: 'High-quality porcelain veneers at Apex Dental Care Rohtak can last 10-15 years or longer with proper care.' },
            { question: 'Is cosmetic dentistry painful?', answer: 'Most cosmetic procedures at our Rohtak clinic are minimally invasive. Dr. Aashish Malik uses local anesthesia when needed to ensure your comfort.' },
            { question: 'Can cosmetic dentistry fix gaps between teeth?', answer: 'Yes. Dental veneers, bonding, and orthodontic treatment at Apex Dental Care can effectively close gaps between teeth.' },
        ],
    },
    {
        slug: 'pediatric-dentistry',
        title: 'Pediatric Dentistry in Rohtak — Apex Dental Care',
        shortTitle: 'Pediatric Dentistry',
        tagline: 'Gentle, caring dental treatment for your little ones',
        icon: 'Baby',
        description: 'Child-friendly dental care at Apex Dental Care in Rohtak. Dr. Aashish Malik provides gentle, fear-free dental treatment for children of all ages.',
        body: `Children deserve special care when it comes to dental health. At Apex Dental Care in Model Town, Rohtak, we create a warm, welcoming environment where kids feel comfortable and safe during their dental visits.\n\nDr. Aashish Malik has extensive experience in treating young patients and understands the unique dental needs of growing children. Our pediatric dental services include regular check-ups, cleanings, fluoride treatments, dental sealants, cavity fillings, and space maintainers.\n\nEarly dental visits are crucial for establishing good oral hygiene habits and detecting potential problems before they become serious. The American Academy of Pediatric Dentistry recommends that children visit the dentist by their first birthday or within six months of their first tooth erupting.\n\nAt our child-friendly dental clinic in Rohtak, Haryana, we take a gentle, patient approach to dental care. We explain each step of the process in simple, non-threatening language and use techniques designed to minimize anxiety. Our goal is to make every visit a positive experience so that children develop a healthy relationship with dental care.\n\nWe also provide guidance to parents on proper brushing and flossing techniques, nutrition for healthy teeth, thumb-sucking habits, and when to expect permanent teeth. Investing in your child\'s dental health today sets the foundation for a lifetime of strong, healthy teeth.\n\nBring your child to Apex Dental Care Rohtak and give them the gift of excellent oral health from the very start.`,
        faqs: [
            { question: 'At what age should my child first visit the dentist?', answer: 'We recommend bringing your child to Apex Dental Care Rohtak by their first birthday or within 6 months of their first tooth appearing.' },
            { question: 'How do you handle anxious children?', answer: 'Dr. Aashish Malik and our team use gentle, child-friendly techniques to create a calm and positive dental experience at our Rohtak clinic.' },
            { question: 'Are dental sealants recommended for children?', answer: 'Yes. Dental sealants protect your child\'s molars from cavities and are highly recommended by Dr. Malik at Apex Dental Care Rohtak.' },
        ],
    },
    {
        slug: 'emergency-dental-care',
        title: 'Emergency Dental Care in Rohtak — Apex Dental Care',
        shortTitle: 'Emergency Care',
        tagline: 'Immediate treatment when you need it most',
        icon: 'Siren',
        description: 'Emergency dental services at Apex Dental Care in Rohtak. Dr. Aashish Malik provides urgent treatment for toothache, broken teeth, dental trauma, and more.',
        body: `Dental emergencies can happen at any time, and quick action can make the difference between saving and losing a tooth. At Apex Dental Care in Model Town, Rohtak, Dr. Aashish Malik provides prompt emergency dental treatment for patients experiencing acute dental problems.\n\nCommon dental emergencies we treat include severe toothache, knocked-out teeth, broken or cracked teeth, loose or displaced teeth from trauma, lost fillings or crowns, abscesses and dental infections, and soft tissue injuries to the gums, tongue, or cheeks.\n\nIf you are experiencing a dental emergency in Rohtak, call Apex Dental Care immediately at 098021 55667. Our team will provide guidance over the phone and schedule an emergency appointment as quickly as possible.\n\nWhile waiting to see the dentist, here are some first-aid tips: For a knocked-out tooth, keep it moist by placing it in milk or between your cheek and gums. For a toothache, rinse with warm salt water and take over-the-counter pain medication. For a cracked tooth, rinse your mouth and apply a cold compress to reduce swelling.\n\nAt our Rohtak dental clinic, we are equipped with the latest diagnostic tools, including digital X-rays, to quickly assess the extent of the emergency and provide targeted treatment. Dr. Malik\'s experience and expertise ensure that emergency cases are handled efficiently to relieve pain and prevent further damage.\n\nDon\'t endure dental pain or risk permanent damage. Contact Apex Dental Care in Rohtak, Haryana, for immediate emergency dental care. Your dental health is our top priority.`,
        faqs: [
            { question: 'Does Apex Dental Care offer emergency dental services in Rohtak?', answer: 'Yes. Apex Dental Care provides emergency dental treatment in Model Town, Rohtak. Call 098021 55667 for immediate assistance.' },
            { question: 'What should I do if a tooth is knocked out?', answer: 'Keep the tooth moist in milk and visit Apex Dental Care Rohtak immediately. Quick action can increase the chance of saving the tooth.' },
            { question: 'Can I walk in for emergency dental care?', answer: 'We recommend calling ahead at 098021 55667 so Dr. Aashish Malik can prepare for your emergency. Walk-ins are accommodated when possible.' },
        ],
    },
];
