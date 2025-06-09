import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  PieChart,
  DollarSign,
  Shield,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function TransparencyPage() {
  const financialBreakdown = [
    {
      category: "Direct Mission Support",
      percentage: 72,
      description: "Directly funds missionary work and projects",
    },
    {
      category: "Program Services",
      percentage: 15,
      description: "Training, resources, and field operations",
    },
    {
      category: "Administration",
      percentage: 8,
      description: "Essential operations and management",
    },
    {
      category: "Fundraising",
      percentage: 5,
      description: "Partner development and donor relations",
    },
  ];

  const accountabilityMeasures = [
    {
      title: "Independent Audit",
      description:
        "Annual financial audit by certified public accountants to ensure accuracy and compliance",
      icon: Shield,
    },
    {
      title: "Board Oversight",
      description:
        "Active board of directors with financial expertise providing governance and accountability",
      icon: Shield,
    },
    {
      title: "Transparency Commitment",
      description:
        "Full disclosure of financial information and regular reporting to partners and donors",
      icon: CheckCircle,
    },
    {
      title: "Financial Controls",
      description:
        "Strict internal controls and multiple approval levels for all expenditures",
      icon: DollarSign,
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Header currentPage="transparency" />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
                Financial Transparency
              </h1>
              <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                We are committed to the highest standards of financial integrity
                and transparency. Your trust is important to us, and we want you
                to know exactly how your generous gifts are being used.
              </p>
            </div>
          </div>
        </section>

        {/* Financial Breakdown */}
        <section className="py-16 bg-stone-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
                How Your Donations Are Used
              </h2>
              <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                We strive to maximize the impact of every donation by directing
                the majority of funds to direct mission work while maintaining
                efficient operations.
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative h-80 w-80 mx-auto">
                  <PieChart className="w-full h-full text-primary-600" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary-600">
                        72%
                      </div>
                      <div className="text-sm text-stone-600">
                        Direct Mission Support
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="space-y-6">
                  {financialBreakdown.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-stone-800">
                          {item.category}
                        </span>
                        <span className="font-bold text-primary-600">
                          {item.percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-stone-200 rounded-full h-2.5">
                        <div
                          className="bg-primary-600 h-2.5 rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-stone-600">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accountability */}
        <section className="py-16 bg-stone-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
                Our Accountability
              </h2>
              <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                We maintain the highest standards of financial integrity through
                multiple layers of accountability and oversight.
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {accountabilityMeasures.map((measure, index) => {
                const IconComponent = measure.icon;
                return (
                  <Card key={index} className="bg-white border-stone-200">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-primary-600" />
                        </div>
                        <CardTitle className="text-lg text-stone-800">
                          {measure.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-stone-600">{measure.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Financial Principles */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
                  Our Financial Principles
                </h2>
                <p className="text-xl text-stone-600">
                  These core principles guide all our financial decisions and
                  practices.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="bg-stone-50 border-stone-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-stone-800 mb-3">
                      Stewardship
                    </h3>
                    <p className="text-stone-700">
                      We believe that all resources entrusted to us are
                      ultimately God's provision, and we are committed to
                      managing these resources with the highest level of
                      integrity and care. Every financial decision is made with
                      prayerful consideration of how to maximize impact for the
                      Kingdom.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-stone-50 border-stone-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-stone-800 mb-3">
                      Transparency
                    </h3>
                    <p className="text-stone-700">
                      We are committed to full financial disclosure and clear
                      communication about how funds are used. Our financial
                      statements, annual reports, and project budgets are
                      available to all partners and donors, and we welcome
                      questions about our financial practices.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-stone-50 border-stone-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-stone-800 mb-3">
                      Accountability
                    </h3>
                    <p className="text-stone-700">
                      We maintain multiple layers of financial oversight,
                      including an active board of directors, independent
                      audits, and strict internal controls. We hold ourselves
                      accountable to our donors, the communities we serve, and
                      ultimately to God for the resources entrusted to us.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-stone-50 border-stone-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-stone-800 mb-3">
                      Efficiency
                    </h3>
                    <p className="text-stone-700">
                      We strive to maximize the impact of every donation by
                      directing the majority of funds to direct mission work
                      while maintaining efficient operations. We regularly
                      review our expenses and processes to ensure we are good
                      stewards of the resources entrusted to us.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-stone-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
                  Financial FAQ
                </h2>
                <p className="text-xl text-stone-600">
                  Answers to common questions about our financial practices and
                  policies.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="bg-white border-stone-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-stone-800">
                      How much of my donation goes directly to the field?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-stone-700">
                      72% of all donations go directly to mission work in
                      Ethiopia, including missionary support and project
                      implementation. An additional 15% supports program
                      services that directly enable field work, such as
                      training, resources, and field operations.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-stone-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-stone-800">
                      Are you audited by an independent organization?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-stone-700">
                      Yes, we undergo an annual financial audit by an
                      independent certified public accounting firm. The results
                      of these audits are available in our annual reports, which
                      can be downloaded from this page.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-stone-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-stone-800">
                      How do you ensure funds are used appropriately in
                      Ethiopia?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-stone-700">
                      We have strict financial controls for all field
                      operations. Missionaries and project managers submit
                      detailed budgets and regular expense reports with
                      receipts. Our Ethiopian staff includes financial officers
                      who oversee local expenditures, and we conduct regular
                      field audits to ensure compliance with our financial
                      policies.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-stone-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-stone-800">
                      What happens if you receive more funds than needed for a
                      specific project?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-stone-700">
                      If we receive more funds than needed for a specific
                      project, we communicate with donors about the surplus.
                      With donor permission, excess funds are typically directed
                      to similar projects or to our general fund to support our
                      overall mission. We always honor donor intent and
                      restrictions.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Partner With Confidence
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Your gifts are managed with the highest standards of integrity and
              directed where they can make the greatest impact in Ethiopia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/partnership">
                <Button
                  size="lg"
                  className="bg-white text-primary-600 hover:bg-stone-50 px-8 py-3 text-lg"
                >
                  Become a Partner
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 text-lg bg-white/20 backdrop-blur-sm"
                >
                  Ask a Question
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
