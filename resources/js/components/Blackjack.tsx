import { motion } from 'framer-motion';
import { useState } from 'react';
import Card from './Card';

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
                headers: { Accept: 'application/json', 'X-CSRF-TOKEN': csrf },
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
                headers: { Accept: 'application/json', 'X-CSRF-TOKEN': csrf },
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
                headers: { Accept: 'application/json', 'X-CSRF-TOKEN': csrf },
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
            <div className="mx-auto max-w-4xl">
                <h1 className="mb-12 text-center text-5xl font-bold">♠ Blackjack ♠</h1>

                {/* Dealer's Hand */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-2xl font-semibold">Dealer's Hand</h2>
                    <p className="mb-4 text-xl">Score: {dealerScore}</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {dealerCards.map((card, idx) => card && <Card key={idx} rank={card.rank} suit={card.suit} delay={idx * 0.2} />)}
                    </div>
                </div>

                {/* Divider */}
                <div className="mb-16 h-1 bg-white opacity-30"></div>

                {/* Player's Hand */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-2xl font-semibold">Your Hand</h2>
                    <p className="mb-4 text-xl">Score: {playerScore}</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {playerCards.map((card, idx) => card && <Card key={idx} rank={card.rank} suit={card.suit} delay={idx * 0.2} />)}
                    </div>
                </div>

                {/* Result Message */}
                {result && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 rounded-lg bg-yellow-500 p-4 text-center text-xl font-bold text-black"
                    >
                        {result.replace('_', ' ').toUpperCase()}
                    </motion.div>
                )}

                {/* Buttons */}
                <div className="flex flex-wrap justify-center gap-4">
                    {!gameStarted ? (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={startGame}
                            disabled={loading}
                            className="rounded-lg bg-blue-600 px-6 py-3 font-bold transition hover:bg-blue-700 disabled:opacity-50"
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
                                className="rounded-lg bg-green-600 px-6 py-3 font-bold transition hover:bg-green-700 disabled:opacity-50"
                            >
                                {loading ? 'Loading...' : 'Hit'}
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={stand}
                                disabled={loading || result !== null}
                                className="rounded-lg bg-red-600 px-6 py-3 font-bold transition hover:bg-red-700 disabled:opacity-50"
                            >
                                {loading ? 'Loading...' : 'Stand'}
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={startGame}
                                disabled={loading}
                                className="rounded-lg bg-purple-600 px-6 py-3 font-bold transition hover:bg-purple-700 disabled:opacity-50"
                            >
                                {loading ? 'Loading...' : 'New Game'}
                            </motion.button>

                            {result !== null && (
                                <div className="mt-6 flex justify-center gap-4">
                                    <a
                                        href="/"
                                        className="inline-flex items-center justify-center rounded-lg bg-gray-800 px-6 py-3 font-bold hover:bg-gray-900"
                                    >
                                        Home
                                    </a>
                                    <a
                                        href="/leaderboard"
                                        className="inline-flex items-center justify-center rounded-lg bg-stone-600 px-6 py-3 font-bold hover:bg-stone-700"
                                    >
                                        Leaderboard
                                    </a>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
