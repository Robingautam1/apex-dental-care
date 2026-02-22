export interface Review {
    name: string;
    rating: number;
    text: string;
    date: string;
}

export const reviews: Review[] = [
    {
        name: 'Rahul Sharma',
        rating: 5,
        text: 'Very polite with patients. Dr. Aashish Malik is one of the best dentists in Rohtak. The clinic is clean and well-maintained. Highly recommended for anyone looking for quality dental care in Model Town.',
        date: '2024-08-15',
    },
    {
        name: 'Priya Gupta',
        rating: 5,
        text: 'I had a root canal done at Apex Dental Care and the experience was completely painless. Dr. Malik explained everything clearly and made me feel at ease. Best dental clinic in Rohtak without a doubt!',
        date: '2024-09-22',
    },
    {
        name: 'Amit Kumar',
        rating: 5,
        text: 'Got my teeth whitening done here and the results are amazing. The staff is very friendly and professional. The clinic uses latest technology. Will definitely visit again for my regular check-ups.',
        date: '2024-10-05',
    },
];
