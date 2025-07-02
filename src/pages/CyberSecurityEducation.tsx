
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, ChevronRight, AlertTriangle, Lock, CreditCard, Smartphone, Mail, Eye, Wifi, Database, Server, Network } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CyberSecurityEducation = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const topics = [
    {
      id: 'atm-frauds',
      title: 'ATM FRAUDS',
      icon: <CreditCard className="h-6 w-6" />,
      description: 'Learn about skimming devices, card cloning, and how to protect yourself at ATMs',
      content: {
        overview: 'ATM fraud involves various techniques used by criminals to steal your card information and PIN.',
        commonTypes: [
          'Card Skimming - Devices attached to card slots to copy magnetic strip data',
          'PIN Shoulder Surfing - Watching you enter your PIN from behind',
          'Card Trapping - Devices that trap your card inside the ATM',
          'Cash Trapping - Preventing cash from being dispensed while recording your PIN'
        ],
        preventionTips: [
          'Cover your PIN when entering it',
          'Check for unusual devices on the ATM',
          'Use ATMs in well-lit, busy areas',
          'Monitor your bank statements regularly',
          'Report suspicious activity immediately'
        ]
      }
    },
    {
      id: 'bank-fraud',
      title: 'BANK FRAUD',
      icon: <Lock className="h-6 w-6" />,
      description: 'Understanding various banking frauds including phishing, vishing, and online banking scams',
      content: {
        overview: 'Bank fraud encompasses various schemes designed to unlawfully obtain money from financial institutions or bank customers.',
        commonTypes: [
          'Phishing - Fake emails or websites requesting banking credentials',
          'Vishing - Phone calls pretending to be from your bank',
          'SMS Phishing - Text messages with malicious links',
          'Account Takeover - Unauthorized access to your bank account'
        ],
        preventionTips: [
          'Never share banking credentials over phone or email',
          'Always verify bank communications independently',
          'Use official banking apps and websites only',
          'Enable two-factor authentication',
          'Keep your banking apps updated'
        ]
      }
    },
    {
      id: 'bitcoin-frauds',
      title: 'BIT COIN FRAUDS',
      icon: <Database className="h-6 w-6" />,
      description: 'Cryptocurrency scams, fake exchanges, and investment frauds in the digital currency space',
      content: {
        overview: 'Bitcoin and cryptocurrency frauds exploit the relatively new and complex nature of digital currencies.',
        commonTypes: [
          'Fake Exchanges - Fraudulent platforms that steal your cryptocurrency',
          'Ponzi Schemes - Promising unrealistic returns on crypto investments',
          'Fake ICOs - Initial Coin Offerings that are actually scams',
          'Wallet Scams - Fake wallet apps that steal your private keys'
        ],
        preventionTips: [
          'Use only reputable cryptocurrency exchanges',
          'Never share your private keys or seed phrases',
          'Be skeptical of guaranteed high returns',
          'Research before investing in any cryptocurrency',
          'Use hardware wallets for large amounts'
        ]
      }
    },
    {
      id: 'botnet-attack',
      title: 'BOTNET ATTACK',
      icon: <Network className="h-6 w-6" />,
      description: 'How botnets work, their impact, and protection against these network attacks',
      content: {
        overview: 'Botnets are networks of infected computers controlled remotely by cybercriminals.',
        commonTypes: [
          'DDoS Attacks - Using infected computers to overwhelm websites',
          'Cryptocurrency Mining - Using your computer to mine cryptocurrency',
          'Spam Distribution - Sending spam emails from infected machines',
          'Data Theft - Stealing personal information from infected computers'
        ],
        preventionTips: [
          'Keep your operating system updated',
          'Use reputable antivirus software',
          'Avoid suspicious downloads and email attachments',
          'Use a firewall',
          'Monitor your network traffic for unusual activity'
        ]
      }
    },
    {
      id: 'business-email-compromise',
      title: 'BUSINESS EMAIL COMPROMISE',
      icon: <Mail className="h-6 w-6" />,
      description: 'Corporate email scams targeting businesses and their financial transactions',
      content: {
        overview: 'Business Email Compromise (BEC) involves compromising business email accounts to conduct unauthorized transfers.',
        commonTypes: [
          'CEO Fraud - Impersonating executives to authorize transfers',
          'Invoice Fraud - Sending fake invoices with changed payment details',
          'Lawyer Impersonation - Pretending to be legal counsel for urgent matters',
          'Data Protection Pretexts - Claiming to need information for compliance'
        ],
        preventionTips: [
          'Verify all financial requests through multiple channels',
          'Implement email authentication protocols',
          'Train employees to recognize suspicious emails',
          'Use multi-factor authentication',
          'Establish clear verification procedures for financial transactions'
        ]
      }
    },
    {
      id: 'cheating-scams',
      title: 'CHEATING SCAMS',
      icon: <AlertTriangle className="h-6 w-6" />,
      description: 'Romance scams, lottery frauds, and other common cheating schemes online',
      content: {
        overview: 'Cheating scams exploit human emotions and trust to defraud victims of money or personal information.',
        commonTypes: [
          'Romance Scams - Building fake relationships to extract money',
          'Lottery Scams - Claiming you\'ve won a lottery you never entered',
          'Advance Fee Fraud - Requesting upfront payment for promised benefits',
          'Tech Support Scams - Pretending to fix computer problems'
        ],
        preventionTips: [
          'Be cautious of online relationships that quickly become intimate',
          'Never send money to someone you haven\'t met in person',
          'Verify lottery winnings through official channels',
          'Be skeptical of unsolicited phone calls offering help',
          'Don\'t provide remote access to your computer to strangers'
        ]
      }
    },
    {
      id: 'copyright-infringement',
      title: 'COPYRIGHT INFRINGEMENT',
      icon: <Eye className="h-6 w-6" />,
      description: 'Digital piracy, unauthorized use of content, and intellectual property violations',
      content: {
        overview: 'Copyright infringement in the digital age involves unauthorized use, distribution, or reproduction of copyrighted material.',
        commonTypes: [
          'Software Piracy - Using unlicensed software',
          'Media Piracy - Illegal downloading of movies, music, or games',
          'Content Theft - Using copyrighted images, text, or videos without permission',
          'Streaming Piracy - Unauthorized distribution of copyrighted content'
        ],
        preventionTips: [
          'Use only licensed software and media',
          'Respect copyright notices and terms of use',
          'Purchase content from legitimate sources',
          'Understand fair use limitations',
          'Seek permission before using copyrighted material'
        ]
      }
    },
    {
      id: 'cyber-stalking',
      title: 'CYBER STALKING',
      icon: <Eye className="h-6 w-6" />,
      description: 'Online harassment, digital stalking, and protection of personal privacy',
      content: {
        overview: 'Cyber stalking involves using digital technologies to harass, threaten, or intimidate individuals.',
        commonTypes: [
          'Social Media Harassment - Persistent unwanted contact on social platforms',
          'Email Harassment - Sending threatening or disturbing emails',
          'Identity Theft - Using someone\'s identity to harass others',
          'GPS Tracking - Unauthorized tracking of someone\'s location'
        ],
        preventionTips: [
          'Review and adjust privacy settings on all social media accounts',
          'Don\'t share personal information publicly',
          'Block and report harassment immediately',
          'Keep evidence of stalking behavior',
          'Contact law enforcement if threatened'
        ]
      }
    }
  ];

  const securityTips = [
    {
      title: 'Use Strong Passwords',
      description: 'Create unique, complex passwords for all accounts and use a password manager.'
    },
    {
      title: 'Enable Two-Factor Authentication',
      description: 'Add an extra layer of security to your important accounts.'
    },
    {
      title: 'Keep Software Updated',
      description: 'Regularly update your operating system, apps, and security software.'
    },
    {
      title: 'Be Cautious of Public WiFi',
      description: 'Avoid accessing sensitive information on public networks.'
    },
    {
      title: 'Verify Before You Trust',
      description: 'Always verify the identity of people requesting personal information.'
    },
    {
      title: 'Regular Security Checkups',
      description: 'Periodically review your accounts and security settings.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Shield className="h-16 w-16 text-blue-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Cyber Security Education</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Learn about common cyber threats and how to protect yourself in the digital world
          </p>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cyber Threat Categories</h2>
            <p className="text-lg text-gray-600">Click on any topic to learn more about specific threats and prevention methods</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {topics.map((topic) => (
              <Card 
                key={topic.id} 
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedTopic === topic.id ? 'ring-2 ring-blue-500 shadow-lg' : ''
                }`}
                onClick={() => setSelectedTopic(selectedTopic === topic.id ? null : topic.id)}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                      {topic.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{topic.title}</CardTitle>
                    </div>
                    <ChevronRight className={`h-5 w-5 text-gray-400 transition-transform ${
                      selectedTopic === topic.id ? 'rotate-90' : ''
                    }`} />
                  </div>
                  <CardDescription>{topic.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Topic Details */}
          {selectedTopic && (
            <Card className="mb-12">
              <CardContent className="p-8">
                {(() => {
                  const topic = topics.find(t => t.id === selectedTopic);
                  if (!topic) return null;
                  
                  return (
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                          {topic.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{topic.title}</h3>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Overview</h4>
                        <p className="text-gray-600 mb-4">{topic.content.overview}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Common Types</h4>
                        <ul className="space-y-2">
                          {topic.content.commonTypes.map((type, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <AlertTriangle className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-600">{type}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Prevention Tips</h4>
                        <ul className="space-y-2">
                          {topic.content.preventionTips.map((tip, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <Shield className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-600">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })()}
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* General Security Tips */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">General Security Tips</h2>
            <p className="text-lg text-gray-600">Essential practices to keep yourself safe online</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityTips.map((tip, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{tip.title}</h3>
                  <p className="text-gray-600">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help or Have Questions?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our cybersecurity experts are here to help you stay safe online
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/contact">Contact Our Experts</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CyberSecurityEducation;
