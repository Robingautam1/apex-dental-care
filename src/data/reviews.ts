export interface Review {
    name: string;
    rating: number;
    text: string;
}

export const reviews: Review[] = [
    {
        name: 'R.K., Rohtak',
        rating: 5,
        text: 'Fantastic service and amazing doctor. The entire team at Apex Dental Care made me feel comfortable throughout my treatment. Highly recommended for anyone in Rohtak looking for quality dental care.',
    },
    {
        name: 'S.P., Model Town',
        rating: 5,
        text: 'Doctors and amenities are excellent. The clinic is very clean and modern. I got my root canal done here and it was completely painless. Best dental clinic in Model Town.',
    },
    {
        name: 'A.M., Rohtak',
        rating: 5,
        text: 'Dr. Aashish is one of the best dental surgeons in town. Very polite with patients. He explained everything clearly before the procedure. My whole family visits Apex Dental Care now.',
    },
];
