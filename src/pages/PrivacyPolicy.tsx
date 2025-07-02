
import { Shield, Lock, Eye, FileText, Users, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  const sections = [
    {
      id: 'overview',
      title: 'Overview',
      icon: <FileText className="h-5 w-5" />,
      content: 'This Privacy Policy outlines how Cyberhope Help Initiative Foundation (CyberHelps) collects, uses, protects, and handles personal and sensitive information of clients, employees, and stakeholders.'
    },
    {
      id: 'collection',
      title: 'Information Collection',
      icon: <Users className="h-5 w-5" />,
      content: 'Data collection is limited to what is necessary for legitimate NGO operations, including cybercrime prevention, victim assistance, and educational programs.',
      subsections: [
        {
          title: 'Data Collection Principles',
          content: 'Data collection is limited to what is necessary for legitimate NGO operations, including cybercrime prevention, victim assistance, and educational programs.'
        },
        {
          title: 'Types of Information Collected',
          content: [
            'Personal identification information (name, contact details)',
            'Case-related information for cybercrime assistance',
            'Educational program participation data',
            'Membership and volunteer information'
          ]
        }
      ]
    },
    {
      id: 'confidentiality',
      title: 'Confidentiality & Data Handling',
      icon: <Lock className="h-5 w-5" />,
      subsections: [
        {
          title: 'Strict Confidentiality',
          content: 'All personal and sensitive information of clients, employees, and stakeholders is handled with strict confidentiality and professional discretion.'
        },
        {
          title: 'Authorized Access Only',
          content: 'Only authorized personnel have access to case data and personal information. Access is granted on a need-to-know basis for legitimate organizational purposes.'
        },
        {
          title: 'Secure Storage Systems',
          content: 'All digital storage systems comply with applicable data protection regulations. NGO work is conducted on secure, password-protected devices.'
        }
      ]
    },
    {
      id: 'disclosure',
      title: 'Information Disclosure',
      icon: <Eye className="h-5 w-5" />,
      subsections: [
        {
          title: 'Consent Required',
          content: 'Employees and volunteers must not disclose any private information without prior consent from the concerned individual, except when legally obligated.'
        },
        {
          title: 'Legal Obligations',
          content: 'Information may be disclosed when required by law enforcement agencies or judicial authorities in connection with ongoing investigations.'
        }
      ]
    },
    {
      id: 'security',
      title: 'Data Security Measures',
      icon: <Shield className="h-5 w-5" />,
      content: [
        'Encrypted storage and transmission of sensitive data',
        'Regular security audits and system updates',
        'Multi-factor authentication for system access',
        'Secure backup and recovery procedures',
        '24-hour breach reporting protocol'
      ]
    },
    {
      id: 'breach',
      title: 'Data Breach Protocol',
      icon: <AlertCircle className="h-5 w-5" />,
      subsections: [
        {
          title: 'Immediate Reporting',
          content: 'All data breaches must be reported to the designated authority within 24 hours of discovery.'
        },
        {
          title: 'Affected Party Notification',
          content: 'Individuals whose data has been compromised will be notified promptly along with steps being taken to mitigate the breach.'
        }
      ]
    }
  ];

  const individualRights = [
    'Right to access personal data held by the organization',
    'Right to request correction of inaccurate information',
    'Right to request deletion of personal data (subject to legal requirements)',
    'Right to withdraw consent for data processing',
    'Right to file complaints regarding data handling'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Shield className="h-16 w-16 text-blue-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-blue-200">
            Cyberhope Help Initiative Foundation - Data Protection & Privacy Guidelines
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <Card key={section.id} className="shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                      {section.icon}
                    </div>
                    <span>{index + 1}. {section.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {section.content && (
                    typeof section.content === 'string' ? (
                      <p className="text-gray-700 leading-relaxed">{section.content}</p>
                    ) : (
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        {section.content.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    )
                  )}
                  
                  {section.subsections && (
                    <div className="space-y-4">
                      {section.subsections.map((subsection, idx) => (
                        <div key={idx}>
                          <h4 className="text-lg font-semibold text-gray-800 mb-2">
                            {section.id}.{idx + 1} {subsection.title}
                          </h4>
                          {typeof subsection.content === 'string' ? (
                            <p className="text-gray-700 leading-relaxed">{subsection.content}</p>
                          ) : (
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                              {subsection.content.map((item, itemIdx) => (
                                <li key={itemIdx}>{item}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}

            {/* Individual Rights */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg text-green-600">
                    <Users className="h-5 w-5" />
                  </div>
                  <span>7. Individual Rights</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {individualRights.map((right, index) => (
                    <li key={index}>{right}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Disciplinary Actions */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="p-2 bg-red-100 rounded-lg text-red-600">
                    <AlertCircle className="h-5 w-5" />
                  </div>
                  <span>8. Disciplinary Actions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Breach of privacy policies may result in disciplinary actions including warning, 
                  suspension, or termination of employment/association with the organization.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="shadow-sm bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    <FileText className="h-5 w-5" />
                  </div>
                  <span>9. Contact Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  For privacy-related queries or to exercise your rights, contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> privacy@chhif.org</p>
                  <p><strong>Phone:</strong> 9849606691</p>
                  <p><strong>Address:</strong> Cyberhope Help Initiative Foundation</p>
                </div>
              </CardContent>
            </Card>

            {/* Policy Updates */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>10. Policy Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  This Privacy Policy may be updated periodically to reflect changes in our practices 
                  or applicable laws. The latest version will always be available on our website.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
