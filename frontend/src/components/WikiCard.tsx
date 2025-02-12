import { Share2 } from 'lucide-react';
import { useState, useEffect } from 'react';

export interface WikiArticle {
    title: string;
    extract: string;
    pageid: number;
    url: string;
    thumbnail?: {
        source: string;
        width: number;
        height: number;
    };
    categories?: string[];
}

interface WikiCardProps {
    article: WikiArticle;
}

export function WikiCard({ article }: WikiCardProps) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {
        if (article.thumbnail?.source) {
            // Clean and normalize the image URL
            const url = new URL(article.thumbnail.source);
            
            // Try all common image extensions
            const baseUrl = url.href.replace(/\.(jpg|jpeg|png|svg|webp)$/i, '');
            const extensions = ['jpg', 'jpeg', 'png', 'webp'];
            
            // First try the original URL
            setImageUrl(url.href);
            
            // Create an image to test loading
            const img = new Image();
            img.onload = () => {
                setImageLoaded(true);
                setImageError(false);
            };
            img.onerror = async () => {
                // If original fails, try each extension in sequence
                let loaded = false;
                
                // Try each extension until one works
                for (const ext of extensions) {
                    if (loaded) break;
                    
                    const alternateUrl = `${baseUrl}.${ext}`;
                    if (alternateUrl === url.href) continue; // Skip if it's the original URL
                    
                    try {
                        await new Promise((resolve, reject) => {
                            const altImg = new Image();
                            altImg.onload = () => {
                                setImageUrl(alternateUrl);
                                setImageLoaded(true);
                                setImageError(false);
                                loaded = true;
                                resolve(true);
                            };
                            altImg.onerror = reject;
                            altImg.src = alternateUrl;
                        });
                    } catch (e) {
                        console.log(`Failed to load image with extension ${ext}`);
                        continue;
                    }
                }
                
                // If all extensions fail, try the original URL without extension
                if (!loaded) {
                    try {
                        await new Promise((resolve, reject) => {
                            const plainImg = new Image();
                            plainImg.onload = () => {
                                setImageUrl(baseUrl);
                                setImageLoaded(true);
                                setImageError(false);
                                resolve(true);
                            };
                            plainImg.onerror = reject;
                            plainImg.src = baseUrl;
                        });
                    } catch (e) {
                        console.error('All image formats failed to load');
                        setImageError(true);
                        setImageLoaded(true); // Show content even if image fails
                    }
                }
            };
            img.src = url.href;
        }
    }, [article.thumbnail?.source]);

    // Add debugging log
    console.log('Article data:', {
        title: article.title,
        pageid: article.pageid,
        originalUrl: article.thumbnail?.source,
        currentUrl: imageUrl,
        imageLoaded,
        imageError
    });

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: article.title,
                    text: article.extract || '',
                    url: article.url
                });
            } catch (error) {
                console.error('Error sharing:', error);
            }
        } else {
            // Fallback: Copy to clipboard
            await navigator.clipboard.writeText(article.url);
            alert('Link copied to clipboard!');
        }
    };

    return (
        <div className="h-screen w-full flex items-center justify-center snap-start relative">
            <div className="h-full w-full relative">
                {article.thumbnail && imageUrl ? (
                    <div className="absolute inset-0">
                        <img
                            loading="lazy"
                            src={imageUrl}
                            alt={article.title}
                            className={`w-full h-full object-cover transition-opacity duration-300 bg-white ${
                                imageLoaded && !imageError ? 'opacity-100' : 'opacity-0'
                            }`}
                            onLoad={() => setImageLoaded(true)}
                            onError={(e) => {
                                console.error('Image failed to load:', e, imageUrl);
                                setImageError(true);
                                setImageLoaded(true); // Show content even if image fails
                            }}
                        />
                        {(!imageLoaded || imageError) && (
                            <div className="absolute inset-0 bg-gray-900 animate-pulse" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
                    </div>
                ) : (
                    <div className="absolute inset-0 bg-gray-900" />
                )}
                {/* Content container with z-index to ensure it's above the image */}
                <div className="absolute bottom-[10vh] left-0 right-0 p-6 text-white z-10">
                    <div className="flex justify-between items-start mb-3">
                        <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-200 transition-colors"
                        >
                            <h2 className="text-2xl font-bold drop-shadow-lg">{article.title}</h2>
                        </a>
                        <button
                            onClick={handleShare}
                            className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                            aria-label="Share article"
                        >
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>
                    <p className="text-gray-100 mb-4 drop-shadow-lg line-clamp-6">{article.extract}</p>
                    <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-white hover:text-gray-200 drop-shadow-lg"
                    >
                        Read more →
                    </a>
                </div>
            </div>
        </div>
    );
}
