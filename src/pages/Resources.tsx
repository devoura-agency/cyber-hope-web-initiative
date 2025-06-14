
import { Shield, FileText, Users, AlertTriangle, BookOpen, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Resources = () => {
  const cyberSecurityTips = [
    {
      title: "Strong Password Management",
      description: "Use unique, complex passwords for each account and enable two-factor authentication.",
      icon: Shield
    },
    {
      title: "Recognize Phishing Attempts",
      description: "Learn to identify suspicious emails, links, and messages that could be phishing attempts.",
      icon: AlertTriangle
    },
    {
      title: "Keep Software Updated",
      description: "Regularly update your operating system, antivirus software, and applications.",
      icon: FileText
    },
    {
      title: "Safe Online Shopping",
      description: "Only shop on secure websites and verify merchant legitimacy before making purchases.",
      icon: BookOpen
    }
  ];

  const legalResources = [
    {
      title: "Cybercrime Reporting",
      description: "Step-by-step guide on how to report cybercrime incidents to authorities.",
      link: "#"
    },
    {
      title: "Victim Rights & Compensation",
      description: "Understanding your rights as a cybercrime victim and available compensation schemes.",
      link: "#"
    },
    {
      title: "Legal Aid Process",
      description: "How to access free legal aid for cybercrime cases through our foundation.",
      link: "#"
    },
    {
      title: "Evidence Collection",
      description: "Guidelines for preserving digital evidence in cybercrime cases.",
      link: "#"
    }
  ];

  const emergencyContacts = [
    {
      service: "National Cyber Crime Helpline",
      number: "1930",
      description: "24/7 helpline for reporting cybercrime"
    },
    {
      service: "Women Helpline",
      number: "181",
      description: "For cyber harassment and abuse cases"
    },
    {
      service: "Child Helpline",
      number: "1098",
      description: "For cases involving children and cyber bullying"
    },
    {
      service: "CHHIF Emergency Support",
      number: "9849606691",
      description: "Direct support from our foundation"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cybersecurity Resources</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Essential tools, guides, and information to help you stay safe in the digital world
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="tips" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto">
              <TabsTrigger value="tips">Safety Tips</TabsTrigger>
              <TabsTrigger value="legal">Legal Aid</TabsTrigger>
              <TabsTrigger value="emergency">Emergency</TabsTrigger>
            </TabsList>

            {/* Safety Tips Tab */}
            <TabsContent value="tips" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Cybersecurity Best Practices</h2>
                <p className="text-lg text-gray-600">
                  Follow these essential tips to protect yourself from cyber threats
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {cyberSecurityTips.map((tip, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <tip.icon className="h-8 w-8 text-green-600" />
                        <CardTitle className="text-xl">{tip.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{tip.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Security Checklist</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Enable two-factor authentication</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Update all software regularly</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Use strong, unique passwords</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Backup important data</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Be cautious with public Wi-Fi</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Verify before clicking links</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Legal Aid Tab */}
            <TabsContent value="legal" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Legal Support & Resources</h2>
                <p className="text-lg text-gray-600">
                  Get help with legal aspects of cybercrime cases
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {legalResources.map((resource, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <Scale className="h-8 w-8 text-blue-600" />
                        <CardTitle className="text-xl">{resource.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4">{resource.description}</CardDescription>
                      <Button variant="outline" size="sm">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-yellow-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Free Legal Aid Available</h3>
                <p className="text-gray-700 mb-4">
                  Our foundation provides free legal assistance to cybercrime victims. We offer:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Initial legal consultation</li>
                  <li>Help with filing FIR and complaints</li>
                  <li>Court representation in serious cases</li>
                  <li>Documentation and evidence guidance</li>
                  <li>Liaison with law enforcement agencies</li>
                </ul>
                <Button className="mt-4" asChild>
                  <a href="/contact">Contact for Legal Aid</a>
                </Button>
              </div>
            </TabsContent>

            {/* Emergency Tab */}
            <TabsContent value="emergency" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Contacts</h2>
                <p className="text-lg text-gray-600">
                  Important numbers to call when you need immediate help
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {emergencyContacts.map((contact, index) => (
                  <Card key={index} className="border-l-4 border-l-red-500">
                    <CardHeader>
                      <CardTitle className="text-lg">{contact.service}</CardTitle>
                      <div className="text-3xl font-bold text-red-600">{contact.number}</div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{contact.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-red-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What to do in Case of Cybercrime?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-semibold">Don't Panic</h4>
                      <p className="text-gray-700">Stay calm and avoid taking hasty actions that might worsen the situation.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-semibold">Preserve Evidence</h4>
                      <p className="text-gray-700">Take screenshots, save emails, and document all related information.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-semibold">Report Immediately</h4>
                      <p className="text-gray-700">Call the cyber crime helpline (1930) or contact local police.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <h4 className="font-semibold">Contact CHHIF</h4>
                      <p className="text-gray-700">Reach out to us for legal aid and support throughout the process.</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
