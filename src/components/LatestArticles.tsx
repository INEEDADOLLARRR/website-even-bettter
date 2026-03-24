import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';
import { getAllArticles } from '../lib/articleLoader';

export function LatestArticles() {
    const articles = getAllArticles().slice(0, 3);

    return (
        <section aria-label="Latest articles" className="py-14 md:py-sp-58 bg-bg-base text-text-primary border-t border-surface-muted/5 transition-colors duration-300">
            <div className="container mx-auto px-5 md:px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-sp-6 mb-sp-8">
                    <div className="max-w-xl">
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-brand-blue font-semibold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-5 flex items-center gap-4"
                        >
                            <span className="w-8 h-[1px] bg-brand-blue" />
                            Latest Insights
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.08, duration: 0.35, ease: 'easeOut' }}
                            className="font-display text-3xl md:text-4xl font-medium tracking-tight"
                        >
                            The Roofing <span className="text-text-secondary/50">Journal.</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.16, duration: 0.35, ease: 'easeOut' }}
                    >
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-brand-blue font-semibold uppercase tracking-widest text-[10px] md:text-xs hover:text-text-primary transition-colors duration-300 group"
                        >
                            View All Articles
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-sp-6">
                    {articles.map((article, i) => (
                        <motion.div
                            key={article.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.35, ease: 'easeOut' }}
                        >
                            <Link
                                to={`/blog/${article.slug}`}
                                className="group block glass-panel-light rounded-2xl overflow-hidden transition-all duration-500 h-full"
                            >
                                <div className="aspect-[16/9] overflow-hidden relative">
                                    <img
                                        src={article.featuredImage}
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div className="absolute inset-0 bg-bg-base/20 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-brand-blue text-[10px] uppercase tracking-widest font-semibold">{article.category}</span>
                                        <span className="text-text-secondary/40">·</span>
                                        <span className="flex items-center gap-1 text-text-secondary/60 text-[10px] uppercase tracking-widest">
                                            <Calendar className="w-3 h-3" />
                                            {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                        </span>
                                    </div>
                                    <h3 className="font-display text-lg font-medium tracking-tight mb-3 group-hover:text-text-primary transition-colors leading-snug">
                                        {article.title}
                                    </h3>
                                    <p className="text-text-secondary/60 text-sm font-light leading-[1.7] line-clamp-2">
                                        {article.excerpt}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
