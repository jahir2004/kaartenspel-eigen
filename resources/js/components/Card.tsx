import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    rank: string;
    suit: string;
    delay?: number;
}

const suitMap: Record<string, string> = {
    'S': 'spades',
    'H': 'hearts',
    'D': 'diamonds',
    'C': 'clubs',
};

const rankMap: Record<string, string> = {
    'A': 'A',
    '2': '02',
    '3': '03',
    '4': '04',
    '5': '05',
    '6': '06',
    '7': '07',
    '8': '08',
    '9': '09',
    '10': '10',
    'J': 'J',
    'Q': 'Q',
    'K': 'K',
};

export default function Card({ rank, suit, delay = 0 }: CardProps) {
    // Convert to Kenney format: card_spades_A.png, card_hearts_02.png, etc.
    const suitName = suitMap[suit] || 'spades';
    const rankName = rankMap[rank] || 'A';
    const fileName = `card_${suitName}_${rankName}.png`;

    return (
        <motion.div
            initial={{ opacity: 0, y: -20, rotateY: 90 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.4, delay }}
            className="inline-block"
        >
            <img
                src={`/cards/${fileName}`}
                alt={`${rank} of ${suit}`}
                className="w-24 h-auto rounded-lg shadow-lg hover:shadow-xl transition"
            />
        </motion.div>
    );
}
