import React, { useState } from 'react';
import Card from "./Card";
import { motion } from 'framer-motion';

interface CardType {
    rank: string;
    suit: string;
}

export default function Blackjack() {
    const [playerCards, setPlayerCards] = useState<CardType[]>([]);
    const [dealerCards, setDealerCards] = useState<CardType[]>([]);
    const [playerScore, setPlayerScore] = useState(0);
    const [dealerScore, setDealerScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const csrf = (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content || '';

    const startGame = async () => {
        setLoading(true);
        try {
            const response = await fetch('/blackjack/api/start', { 
                method: 'POST',
                headers: { 'Accept': 'application/json', 'X-CSRF-TOKEN': csrf }
            });
            const data = await response.json();
            
            if (data.game) {
                setPlayerCards(data.game.player_hand || []);
                setDealerCards(data.game.dealer_hand || []);
                setPlayerScore(calculateScore(data.game.player_hand || []));
                setDealerScore(calculateScore(data.game.dealer_hand || []));
                setGameStarted(true);
                setResult(data.game.result || null);
            }
        } catch (err) {
            console.error('Error starting game:', err);
        } finally {
            setLoading(false);
        }
    };

    const hitCard = async () => {
        setLoading(true);
        try {
            const response = await fetch('/blackjack/api/hit', { 
                method: 'POST',
                headers: { 'Accept': 'application/json', 'X-CSRF-TOKEN': csrf }
            });
            const data = await response.json();
            
            if (data.game) {
                setPlayerCards(data.game.player_hand || []);
                setPlayerScore(calculateScore(data.game.player_hand || []));
                setResult(data.game.result || null);
            }
        } catch (err) {
            console.error('Error hitting:', err);
        } finally {
            setLoading(false);
        }
    };

    const stand = async () => {
        setLoading(true);
        try {
            const response = await fetch('/blackjack/api/stand', { 
                method: 'POST',
                headers: { 'Accept': 'application/json', 'X-CSRF-TOKEN': csrf }
            });
            const data = await response.json();
            
            if (data.game) {
                setDealerCards(data.game.dealer_hand || []);
                setDealerScore(calculateScore(data.game.dealer_hand || []));
                setResult(data.game.result || null);
            }
        } catch (err) {
            console.error('Error standing:', err);
        } finally {
            setLoading(false);
        }
    };

    const calculateScore = (hand: CardType[]) => {
        return hand.reduce((sum, card) => {
            if (card.rank === 'A') return sum + 11;
            if (['J', 'Q', 'K'].includes(card.rank)) return sum + 10;
            return sum + parseInt(card.rank);
        }, 0);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-700 to-green-900 p-8 text-white">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold text-center mb-12">♠ Blackjack ♠</h1>

                {/* Dealer's Hand */}
                <div className="mb-16 text-center">
                    <h2 className="text-2xl font-semibold mb-4">Dealer's Hand</h2>
                    <p className="text-xl mb-4">Score: {dealerScore}</p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        {dealerCards.map((card, idx) => (
                            card && (
                                <Card
                                    key={idx}
                                    rank={card.rank}
                                    suit={card.suit}
                                    delay={idx * 0.2}
                                />
                            )
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="h-1 bg-white opacity-30 mb-16"></div>

                {/* Player's Hand */}
                <div className="mb-16 text-center">
                    <h2 className="text-2xl font-semibold mb-4">Your Hand</h2>
                    <p className="text-xl mb-4">Score: {playerScore}</p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        {playerCards.map((card, idx) => (
                            card && (
                                <Card
                                    key={idx}
                                    rank={card.rank}
                                    suit={card.suit}
                                    delay={idx * 0.2}
                                />
                            )
                        ))}
                    </div>
                </div>

                {/* Result Message */}
                {result && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-8 p-4 bg-yellow-500 text-black rounded-lg text-xl font-bold"
                    >
                        {result.replace('_', ' ').toUpperCase()}
                    </motion.div>
                )}

                {/* Buttons */}
                <div className="flex gap-4 justify-center flex-wrap">
                    {!gameStarted ? (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={startGame}
                            disabled={loading}
                            className="px-6 py-3 bg-blue-600 rounded-lg font-bold hover:bg-blue-700 transition disabled:opacity-50"
                        >
                            {loading ? 'Starting...' : 'Start Game'}
                        </motion.button>
                    ) : (
                        <>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={hitCard}
                                disabled={loading || result !== null}
                                className="px-6 py-3 bg-green-600 rounded-lg font-bold hover:bg-green-700 transition disabled:opacity-50"
                            >
                                {loading ? 'Loading...' : 'Hit'}
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={stand}
                                disabled={loading || result !== null}
                                className="px-6 py-3 bg-red-600 rounded-lg font-bold hover:bg-red-700 transition disabled:opacity-50"
                            >
                                {loading ? 'Loading...' : 'Stand'}
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={startGame}
                                disabled={loading}
                                className="px-6 py-3 bg-purple-600 rounded-lg font-bold hover:bg-purple-700 transition disabled:opacity-50"
                            >
                                {loading ? 'Loading...' : 'New Game'}
                            </motion.button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}