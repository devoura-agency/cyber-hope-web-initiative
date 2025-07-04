import { useState, useEffect } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Calendar, Clock, User, Play, FileText, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface WeeklyNews {
  id: string;
  title: string;
  description: string;
  pdfUrl: string;
  publishDate: string;
  createdAt: string;
}

const NewsWeekly = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [weeklyNews, setWeeklyNews] = useState<WeeklyNews[]>([]);
  const [selectedPdf, setSelectedPdf] = useState<WeeklyNews | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isPageTurning, setIsPageTurning] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    fetchWeeklyNews();
  }, []);

  const fetchWeeklyNews = async () => {
    try {
      const weeklyNewsRef = collection(db, 'weeklyNews');
      const q = query(weeklyNewsRef, orderBy('publishDate', 'desc'));
      const querySnapshot = await getDocs(q);
      const newsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as WeeklyNews[];
      setWeeklyNews(newsData);
    } catch (error) {
      console.error('Error fetching weekly news:', error);
    }
  };

  const handlePageChange = (direction: 'next' | 'prev') => {
    if (isPageTurning) return;
    
    setIsPageTurning(true);
    
    setTimeout(() => {
      if (direction === 'next' && currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      } else if (direction === 'prev' && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
      setIsPageTurning(false);
    }, 400);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const newsArticles = [
    {
      id: 1,
      title: "Major Cybersecurity Breach Affects Thousands",
      excerpt: "A recent cyber attack has compromised personal data of thousands of users, highlighting the importance of digital security measures.",
      date: "2024-06-10",
      author: "CHHIF Team",
      category: "Cybercrime Alert"
    },
    {
      id: 2,
      title: "New Government Guidelines for Digital Safety",
      excerpt: "The government has released new guidelines to help citizens protect themselves from online fraud and cybercrime.",
      date: "2024-06-08",
      author: "CHHIF Team",
      category: "Policy Update"
    },
    {
      id: 3,
      title: "Awareness Campaign Reaches 10,000 Students",
      excerpt: "Our recent cybersecurity awareness campaign in schools has successfully reached over 10,000 students across the region.",
      date: "2024-06-05",
      author: "CHHIF Team",
      category: "Success Story"
    }
  ];

  const videoContent = [
    {
      id: 1,
      title: "Cybersecurity Awareness - Protecting Your Digital Life",
      videoId: "rYCey9uoXmc",
      thumbnail: `https://img.youtube.com/vi/rYCey9uoXmc/maxresdefault.jpg`,
      description: "Learn essential cybersecurity practices to protect yourself online."
    },
    {
      id: 2,
      title: "Understanding Online Fraud Prevention",
      videoId: "eruADZJ2b_w",
      thumbnail: `https://img.youtube.com/vi/eruADZJ2b_w/maxresdefault.jpg`,
      description: "Comprehensive guide to identifying and preventing online fraud."
    },
    {
      id: 3,
      title: "Digital Safety for Children and Teens",
      videoId: "9Df9u4y1vqM",
      thumbnail: `https://img.youtube.com/vi/9Df9u4y1vqM/maxresdefault.jpg`,
      description: "Important digital safety tips for young internet users."
    },
    {
      id: 4,
      title: "Legal Rights of Cybercrime Victims",
      videoId: "qyUFadP3Ads",
      thumbnail: `https://img.youtube.com/vi/qyUFadP3Ads/maxresdefault.jpg`,
      description: "Know your legal rights if you become a victim of cybercrime."
    },
    {
      id: 5,
      title: "Social Media Safety Guidelines",
      videoId: "yVpyYMvklHA",
      thumbnail: `https://img.youtube.com/vi/yVpyYMvklHA/maxresdefault.jpg`,
      description: "Best practices for staying safe on social media platforms."
    },
    {
      id: 6,
      title: "Password Security and Management",
      videoId: "q7KNrOpk67k",
      thumbnail: `https://img.youtube.com/vi/q7KNrOpk67k/maxresdefault.jpg`,
      description: "How to create and manage secure passwords effectively."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cyber Help Weekly Edition</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stay updated with the latest cybersecurity news, awareness content, and educational resources
            </p>
          </div>
        </div>
      </section>

      {/* Fullscreen Newspaper Viewer */}
      {selectedPdf && isFullscreen && (
        <div className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center">
          <div className="w-full h-full relative">
            {/* Close Button */}
            <Button
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white"
              size="sm"
            >
              <X className="h-4 w-4" />
            </Button>

            {/* Newspaper Display */}
            <div className="newspaper-reader h-full flex items-center justify-center p-4">
              <div className={`newspaper-container ${isPageTurning ? 'page-turning' : ''}`}>
                <div className="newspaper-shadow"></div>
                <div className="newspaper-content">
                  <iframe
                    src={`${selectedPdf.pdfUrl}#page=${currentPage}&view=FitH`}
                    className="w-full h-full border-0"
                    title={selectedPdf.title}
                  />
                </div>
                <div className="newspaper-fold"></div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-black/50 px-6 py-3 rounded-full">
              <Button
                variant="ghost"
                onClick={() => handlePageChange('prev')}
                disabled={currentPage === 1 || isPageTurning}
                className="text-white hover:bg-white/20"
                size="sm"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
              
              <span className="text-white text-sm px-4">
                Page {currentPage} of {totalPages}
              </span>
              
              <Button
                variant="ghost"
                onClick={() => handlePageChange('next')}
                disabled={currentPage === totalPages || isPageTurning}
                className="text-white hover:bg-white/20"
                size="sm"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Content Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="weekly-news" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto">
              <TabsTrigger value="weekly-news">Weekly Edition News</TabsTrigger>
              <TabsTrigger value="news">Latest News</TabsTrigger>
              <TabsTrigger value="videos">Video Content</TabsTrigger>
            </TabsList>

            {/* Weekly Edition News Tab */}
            <TabsContent value="weekly-news" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Weekly Edition News</h2>
                <p className="text-lg text-gray-600">
                  Read our weekly digital newspaper with the latest cybersecurity insights and updates
                </p>
              </div>

              {/* Weekly News Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {weeklyNews.map((news) => (
                  <Card key={news.id} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 newspaper-card">
                    <CardContent className="p-0">
                      <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 p-8 h-64 flex flex-col items-center justify-center newspaper-front">
                        <div className="newspaper-masthead mb-4">
                          <h3 className="text-2xl font-bold text-gray-800 text-center">CYBER HELP</h3>
                          <div className="w-16 h-0.5 bg-gray-600 mx-auto mt-1"></div>
                          <p className="text-xs text-gray-600 text-center mt-1">WEEKLY EDITION</p>
                        </div>
                        
                        <FileText className="h-12 w-12 text-amber-600 mb-2" />
                        
                        <div className="absolute top-4 right-4 bg-red-600 text-white text-xs px-2 py-1 rounded newspaper-edition">
                          EDITION #{news.id}
                        </div>
                        
                        <div className="absolute bottom-4 left-4 right-4 text-center">
                          <div className="text-xs text-gray-600">
                            {new Date(news.publishDate).toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6 bg-white">
                        <h3 className="font-bold text-lg mb-2 line-clamp-2 text-gray-800">{news.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{news.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-gray-500 text-sm">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(news.publishDate).toLocaleDateString()}
                          </div>
                          <Button
                            onClick={() => {
                              setSelectedPdf(news);
                              setCurrentPage(1);
                              setTotalPages(10);
                              setIsFullscreen(true);
                            }}
                            className="bg-amber-600 hover:bg-amber-700 text-white newspaper-btn"
                          >
                            Read Edition
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {weeklyNews.length === 0 && (
                <div className="text-center py-12">
                  <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">No weekly editions available yet.</p>
                  <p className="text-gray-500">Check back soon for our latest digital newspaper!</p>
                </div>
              )}
            </TabsContent>

            {/* Latest News Tab */}
            <TabsContent value="news" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest News & Updates</h2>
                <p className="text-lg text-gray-600">
                  Stay informed about the latest developments in cybersecurity and our foundation's activities
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsArticles.map((article) => (
                  <Card key={article.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {article.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(article.date).toLocaleDateString()}
                        </div>
                      </div>
                      <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                      <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-500 text-sm">
                          <User className="h-4 w-4 mr-1" />
                          {article.author}
                        </div>
                        <Button variant="outline" size="sm">
                          Read More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            </TabsContent>

            {/* Videos Tab */}
            <TabsContent value="videos" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Educational Video Content</h2>
                <p className="text-lg text-gray-600">
                  Watch our educational videos to learn about cybersecurity and digital safety
                </p>
              </div>

              {/* Featured Video Player */}
              {selectedVideo && (
                <div className="mb-12">
                  <Card>
                    <CardContent className="p-0">
                      <div className="aspect-video">
                        <iframe
                          src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
                          title={selectedVideo.title}
                          className="w-full h-full rounded-t-lg"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedVideo.title}</h3>
                        <p className="text-gray-600">{selectedVideo.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Video Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videoContent.map((video) => (
                  <Card key={video.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/placeholder.svg';
                          }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-t-lg">
                          <Button
                            size="lg"
                            className="bg-red-600 hover:bg-red-700"
                            onClick={() => setSelectedVideo(video)}
                          >
                            <Play className="h-6 w-6 mr-2" />
                            Play Video
                          </Button>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{video.title}</h3>
                        <p className="text-gray-600 text-sm line-clamp-2">{video.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Button asChild variant="outline" size="lg">
                  <a
                    href="https://youtube.com/@fearlessjournalist?si=ydKAjgyliOplpRh_"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Our YouTube Channel
                  </a>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsWeekly;
