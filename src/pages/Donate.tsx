
import React from 'react';
import Navbar from '@/components/Navbar';
import DonationForm from '@/components/DonationForm';

const Donate = () => {
  const impactStats = [
    { label: 'Seeds Collected / बीज संग्रह', value: '5,240', description: 'kg of seeds ready for plantation / रोपण के लिए तैयार बीज' },
    { label: 'E-Waste Recycled / ई-वेस्ट रीसायकल', value: '2,180', description: 'kg of electronic waste properly disposed / उचित तरीके से निपटाया गया इलेक्ट्रॉनिक कचरा' },
    { label: 'Meals Distributed / भोजन वितरण', value: '8,750', description: 'meals provided to families in need / जरूरतमंद परिवारों को प्रदान किया गया भोजन' },
    { label: 'Trees Grown / पेड़ उगाए गए', value: '1,850', description: 'from donated seeds / दान किए गए बीजों से' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              एक <span className="text-gradient">स्थायी प्रभाव</span> बनाएं
              <br />
              <span className="text-2xl">Make a Lasting Impact</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              आपके बीज, ई-वेस्ट और भोजन के दान से उदयपुर में एक टिकाऊ पारिस्थितिकी तंत्र बनाने में मदद मिलती है।
              <br />
              <span className="text-lg">Your donations of seeds, e-waste, and food help us build a sustainable ecosystem in Udaipur.</span>
            </p>
          </div>

          {/* Impact Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {impactStats.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* Donation Form */}
          <DonationForm />

          {/* How It Works Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">
              आपके दान कैसे मदद करते हैं
              <br />
              <span className="text-xl text-muted-foreground">How Your Donations Help</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  बीज दान / Seeds Donation
                </h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• देशी पेड़ और पौधों की प्रजातियां / Native tree and plant species</li>
                  <li>• सामुदायिक रोपण अभियानों में उपयोग / Used in community plantation drives</li>
                  <li>• स्थानीय पारिस्थितिकी तंत्र को बहाल करने में मदद / Help restore local ecosystems</li>
                  <li>• ऑक्सीजन युक्त वातावरण बनाना / Create oxygen-rich environments</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">♻️</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  ई-वेस्ट रीसाइक्लिंग / E-Waste Recycling
                </h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• इलेक्ट्रॉनिक कचरे का उचित निपटान / Proper disposal of electronic waste</li>
                  <li>• लैंडफिल से विषाक्त पदार्थों को रोकना / Prevent toxic materials from landfills</li>
                  <li>• मूल्यवान सामग्री की वसूली / Recovery of valuable materials</li>
                  <li>• चक्रीय अर्थव्यवस्था सिद्धांतों का समर्थन / Support circular economy principles</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🍽️</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  भोजन दान / Food Donation
                </h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• वंचित परिवारों को भोजन / Feed underprivileged families</li>
                  <li>• समुदाय में भोजन की बर्बादी कम करना / Reduce food waste in the community</li>
                  <li>• रविवार भोजन वितरण अभियान / Sunday food distribution drives</li>
                  <li>• खाद्य सुरक्षा पहलों का समर्थन / Support food security initiatives</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
